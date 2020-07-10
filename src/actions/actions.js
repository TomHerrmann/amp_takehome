import {
  API_ERROR,
  CONTACTS_POPULATE,
  CONTACT_SELECT,
} from '../constants/actionTypes';

export const apiError = (err) => ({
  type: API_ERROR,
  payload: err,
});

export const contactsPopulate = (contacts) => ({
  type: CONTACTS_POPULATE,
  payload: contacts,
});

export const contactSelect = (contact) => ({
  type: CONTACT_SELECT,
  payload: contact,
});
