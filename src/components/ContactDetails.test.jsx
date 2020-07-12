import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ContactDetails from './ContactDetails.jsx';
import { contactUpdateCancel, contactUpdateSave } from '../actions/actions';
import store from '../__testHelpers__/mockStore';

jest.mock('react-redux');

describe('<ContactDetails />', () => {
  let dispatch;
  beforeEach(() => {
    store.getState().currentContact = store.getState().contacts[0];
    useStore.mockImplementation(jest.fn(() => store));

    dispatch = jest.fn();
    useDispatch.mockReset();
    useDispatch.mockReturnValue(dispatch);
  });

  it('should render correctly', () => {
    const component = mount(<ContactDetails />);
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should correctly update the form on an onFormChange event', () => {
    const component = mount(<ContactDetails />);
    act(() => {
      component
        .find('input')
        .at(0)
        .props()
        .onChange({ target: { name: 'First Name', value: 'Tom' } });
    });
    component.update();
    expect(
      component
        .find('input')
        .at(0)
        .props().value
    ).toEqual('Tom');
  });
  it('should dispatch the correct action on onFormCancel event', () => {
    const component = mount(<ContactDetails />);
    component
      .find('[className="cancel-button"]')
      .props()
      .onClick();
    expect(dispatch).toHaveBeenCalledWith(contactUpdateCancel());
  });
  it('should dispatch the correct action on onFormSave event', () => {
    const component = mount(<ContactDetails />);
    component
      .find('[className="save-button"]')
      .props()
      .onClick();
    expect(dispatch).toHaveBeenCalledWith(
      contactUpdateSave({
        address: '42991 Beahan Parkway',
        city: 'Veumberg',
        country: 'Venezuela',
        email: 'Marianne56@hotmail.com',
        firstName: 'Brandy',
        lastName: 'Bartell',
        phone: '586-723-4824',
      })
    );
  });
});
