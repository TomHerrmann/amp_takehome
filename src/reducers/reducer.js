import {
  API_ERROR,
  CONTACTS_POPULATE,
  CONTACT_SELECT,
  CONTACT_UPDATE_CANCEL,
  CONTACT_UPDATE_SAVE,
} from '../constants/actionTypes';

const initialState = {
  contacts: [],
  contactIndex: null,
  currentContact: null,
  detailsView: false,
  errorStatus: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_ERROR: {
      const errorStatus = action.payload;

      return {
        ...state,
        errorStatus,
      };
    }
    case CONTACTS_POPULATE: {
      const contacts = action.payload;

      return {
        ...state,
        contacts,
      };
    }
    case CONTACT_SELECT: {
      const { currentContact, contactIndex } = action.payload;

      return {
        ...state,
        contactIndex,
        currentContact,
        detailsView: true,
      };
    }
    case CONTACT_UPDATE_CANCEL: {
      return {
        ...state,
        contactIndex: null,
        currentContact: null,
        detailsView: false,
      };
    }
    case CONTACT_UPDATE_SAVE: {
      const updatedContact = action.payload;
      const contacts = state.contacts.slice();
      contacts[state.contactIndex] = updatedContact;

      return {
        ...state,
        contactIndex: null,
        currentContact: null,
        contacts,
        detailsView: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
