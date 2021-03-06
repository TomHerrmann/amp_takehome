import React, { useEffect } from 'react';
import { connect, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';

import ContactButton from './components/ContactButton.jsx';
import ContactDetails from './components/ContactDetails.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';

import { contactAPI, contactAPIKey } from './utils/enums';

const App = ({ apiError, contactsPopulate, contactUpdateCancel }) => {
  const store = useStore();
  const { contacts, currentContact, detailsView, isLoading } = store.getState();

  // logic for the initial data fetch
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

  // abstracts logic out of the return statement for cleaner code
  const renderHeader = () => {
    return detailsView ? (
      <>
        <button onClick={contactUpdateCancel}>{'< Back'}</button>
        <section className="header-container">
          <section className="header-title">
            <h1>Contacts</h1>
          </section>
          <section className="header-contact">
            <h2>{`${currentContact.firstName} ${currentContact.lastName}`}</h2>
          </section>
        </section>
      </>
    ) : (
      <section className="header-title">
        <h1>Contacts</h1>
      </section>
    );
  };

  // abstracts logic out of the return statement for cleaner code
  const renderContactInfo = () => {
    return isLoading ? (
      <LoadingSpinner />
    ) : (
      <>
        <section className="slider-list">
          {contacts.map((contact, index) => (
            <ContactButton
              contact={contact}
              index={index}
              key={`contact${index}`}
            />
          ))}
        </section>
        {detailsView && (
          <section className="slider-details">
            <ContactDetails />
          </section>
        )}
      </>
    );
  };

  // effectively a componentDidMount
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

  // a hook that listens for updates to the contacts property in state
  useEffect(() => {
    if (typeof contacts === 'string') {
      window.localStorage.setItem('contacts', contacts);
    } else {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <main className="app">
      <header className="title-container">{renderHeader()}</header>
      <section className="contacts-wrapper">{renderContactInfo()}</section>
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
