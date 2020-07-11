import React, { useState, useEffect } from 'react';
import { connect, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';

import ContactButton from './components/ContactButton.jsx';
import ContactDetails from './components/ContactDetails.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';

import { contactAPI, contactAPIKey } from './utils/enums';

const App = ({
  apiError,
  contacts,
  contactsPopulate,
  contactUpdateCancel,
  currentContact,
  detailsView,
  isLoading,
}) => {
  const fetchAllContacts = async () => {
    const contactsPromise = await fetch(contactAPI, {
      'x-api-key': contactAPIKey,
    });

    if (contactsPromise.status === 200) {
      const contacts = await contactsPromise.json();
      const sortedContacts = contacts.sort((a, b) => {
        if (a.lastName > b.lastName) {
          return 1;
        }
        if (a.lastName < b.lastName) {
          return -1;
        }
        return 0;
      });

      setTimeout(() => {
        contactsPopulate(sortedContacts);
      }, 250);
    } else {
      apiError(contactsPromise.status);
    }
  };

  const renderHeader = () => {
    return detailsView ? (
      <>
        <section className="header-title">
          <button onClick={contactUpdateCancel}>{'< Back'}</button>
          <h1>Contacts</h1>
        </section>
        <section className="header-name">
          <h2>{`${currentContact.firstName} ${currentContact.lastName}`}</h2>
        </section>
      </>
    ) : (
      <section className="header-title">
        <h1>Contacts</h1>
      </section>
    );
  };

  const renderContactInfo = () => {
    return isLoading ? (
      <LoadingSpinner />
    ) : detailsView ? (
      <ContactDetails />
    ) : (
      contacts.map((contact, index) => (
        <ContactButton
          contact={contact}
          index={index}
          key={`contact${index}`}
        />
      ))
    );
  };

  useEffect(() => {
    if (!contacts) {
      try {
        fetchAllContacts();
      } catch (err) {
        console.log(`Fetch failed with ${err}`);
      }
    } else {
      setTimeout(() => {
        contactsPopulate(contacts);
      }, 250);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <main className="app">
      <header className="title-container">{renderHeader()}</header>
      <section className="contact-info">{renderContactInfo()}</section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...actions }, dispatch);

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
