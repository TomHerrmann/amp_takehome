import {
  API_ERROR,
  CONTACTS_POPULATE,
  CONTACT_SELECT,
  CONTACT_UPDATE_CANCEL,
  CONTACT_UPDATE_SAVE,
} from '../constants/actionTypes';

export const apiError = (err) => ({
  type: API_ERROR,
  payload: err,
});

export const contactsPopulate = (contacts) => ({
  type: CONTACTS_POPULATE,
  payload: contacts,
});

export const contactSelect = (currentContact, contactIndex) => ({
  type: CONTACT_SELECT,
  payload: { currentContact, contactIndex },
});

export const contactUpdateCancel = () => ({
  type: CONTACT_UPDATE_CANCEL,
  payload: null,
});

export const contactUpdateSave = (formState) => ({
  type: CONTACT_UPDATE_SAVE,
  payload: formState,
});
