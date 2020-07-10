import React, { useState, useEffect } from 'react';
import { connect, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';

import ContactButton from './components/ContactButton.jsx';
import ContactDetails from './components/ContactDetails.jsx';

import { contactAPI, contactAPIKey } from './utils/enums';

const App = ({
  apiError,
  contacts,
  contactsPopulate,
  currentContact,
  view,
}) => {
  useEffect(() => {
    const fetchAllContacts = async () => {
      const contactsPromise = await fetch(contactAPI, {
        'x-api-key': contactAPIKey,
      });

      if (contactsPromise.status === 200) {
        const contacts = await contactsPromise.json();

        contactsPopulate(contacts);
      } else {
        apiError(contactsPromise.status);
      }
    };
    try {
      fetchAllContacts();
    } catch (err) {
      console.log(`Fetch failed with ${err}`);
    }
  }, []);

  console.log('state view: ', view, ' state currentcontact: ', currentContact);

  return (
    <main className="app">
      <header className="title-container">
        <h1>Contacts</h1>
      </header>
      <section className="contacts-list">
        {contacts.map((contact, index) => (
          <ContactButton
            contact={contact}
            index={index}
            key={`contact${index}`}
          />
        ))}
      </section>
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
