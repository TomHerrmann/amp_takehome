import {
  API_ERROR,
  CONTACTS_POPULATE,
  CONTACT_SELECT,
} from '../constants/actionTypes';

const initialState = {
  contacts: [],
  currentContact: null,
  errorStatus: null,
  view: 'contactList',
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
      const currentContact = action.payload;

      return {
        ...state,
        currentContact,
        view: 'contactDetails',
      };
    }
    default:
      return state;
  }
};

export default reducer;
