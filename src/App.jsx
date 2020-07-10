import React, { useState, useEffect } from 'react';
import { connect, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';

import ContactButton from './components/ContactButton.jsx';
import ContactDetails from './components/ContactDetails.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';

import { contactAPI, contactAPIKey } from './utils/enums';
import { defaultFieldResolver } from 'graphql';

const App = ({
  apiError,
  contacts,
  currentContact,
  detailsView,
  isLoading,
  loadingUpdate,
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

      window.localStorage.setItem('contacts', JSON.stringify(sortedContacts));
      setTimeout(() => {
        console.log('loadingUpdate');
        loadingUpdate(false);
      }, 250);
    } else {
      apiError(contactsPromise.status);
    }
  };

  useEffect(() => {
    // if (!contacts) {
    try {
      fetchAllContacts();
    } catch (err) {
      console.log(`Fetch failed with ${err}`);
    }
    // }
  }, []);

  return (
    <main className="app">
      <header className="title-container">
        <h1>Contacts</h1>
        {detailsView ? (
          <h2>{`${currentContact.firstName} ${currentContact.lastName}`}</h2>
        ) : null}
      </header>
      {/* <section className="contact-info">
        {isLoading ? (
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
        )}
      </section> */}
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
