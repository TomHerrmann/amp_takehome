import * as actions from './actions';
import * as types from '../constants/actionTypes';
import store from '../__testHelpers__/mockStore';

describe('action', () => {
  let state;
  let contacts;
  beforeEach(() => {
    state = store.getState();
    contacts = state.contacts;
  });
  it('should create contactsPopulate action to populate contacts in store', () => {
    const expectedAction = {
      type: types.CONTACTS_POPULATE,
      payload: contacts,
    };
    expect(actions.contactsPopulate(contacts)).toEqual(expectedAction);
  });
  it('should create contactSelect action to update currentContact in store', () => {
    const currentContact = contacts[0];
    const contactIndex = 0;
    const expectedAction = {
      type: types.CONTACT_SELECT,
      payload: { currentContact, contactIndex },
    };
    expect(actions.contactSelect(currentContact, contactIndex)).toEqual(
      expectedAction
    );
  });
  it('should create contactUpdateCancel action to set detailView to false in store', () => {
    const expectedAction = {
      type: types.CONTACT_UPDATE_CANCEL,
      payload: null,
    };
    expect(actions.contactUpdateCancel()).toEqual(expectedAction);
  });
  it('should create contactUpdateSave action to set detailView to false in store', () => {
    const formState = contacts[0];
    const expectedAction = {
      type: types.CONTACT_UPDATE_SAVE,
      payload: formState,
    };
    expect(actions.contactUpdateSave(formState)).toEqual(expectedAction);
  });
});
