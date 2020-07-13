import reducer from './reducer';
import {
  API_ERROR,
  CONTACTS_POPULATE,
  CONTACT_SELECT,
  CONTACT_UPDATE_CANCEL,
  CONTACT_UPDATE_SAVE,
} from '../constants/actionTypes';
import { contactSelect } from '../actions/actions';
import store from '../__testHelpers__/storeFixture';

describe('reducer', () => {
  let defaultStore;
  beforeEach(() => {
    defaultStore = JSON.parse(JSON.stringify(store));
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      contacts: null,
      contactIndex: null,
      currentContact: null,
      detailsView: false,
      errorStatus: null,
      isLoading: true,
    });
  });
  it('should handle API_ERROR ', () => {
    const apiError = {
      type: API_ERROR,
      payload: '505',
    };
    expect(reducer({}, apiError)).toEqual({ errorStatus: '505' });
  });
  it('should handle CONTACTS_POPULATE ', () => {
    const contactsPopulate = {
      type: CONTACTS_POPULATE,
      payload: store.contacts,
    };
    expect(reducer({}, contactsPopulate)).toEqual({
      contacts: store.contacts,
      isLoading: false,
    });
  });
  it('should handle CONTACT_SELECT ', () => {
    const currentContact = store.contacts[0];
    const contactIndex = 0;
    const contactSelect = {
      type: CONTACT_SELECT,
      payload: { currentContact, contactIndex },
    };
    expect(reducer({}, contactSelect)).toEqual({
      contactIndex,
      currentContact,
      detailsView: true,
    });
  });
  it('should handle CONTACT_UPDATE_CANCEL ', () => {
    const contactUpdateCancel = {
      type: CONTACT_UPDATE_CANCEL,
      payload: null,
    };
    expect(reducer({}, contactUpdateCancel)).toEqual({
      contactIndex: null,
      detailsView: false,
    });
  });
  it('should handle CONTACT_UPDATE_SAVE ', () => {
    const formState = {
      firstName: 'Frank',
      lastName: 'Steuber',
      address: '356 Marlene Fork',
      city: 'East Preston',
      country: 'Lebanon',
      phone: '563-954-3264',
      email: 'Mariana.Rohan@hotmail.com',
    };
    const contactUpdateSave = {
      type: CONTACT_UPDATE_SAVE,
      payload: formState,
    };
    const newContacts = defaultStore.contacts.slice();
    defaultStore.contactIndex = 1;
    newContacts[1] = formState;
    contactSelect(defaultStore.contacts[1], 1);
    expect(reducer(defaultStore, contactUpdateSave)).toEqual({
      ...store,
      contacts: newContacts,
    });
  });
});
