import React from 'react';
import { useDispatch } from 'react-redux';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ContactButtonm from './ContactButton.jsx';
import { contactSelect } from '../actions/actions';

jest.mock('react-redux');

describe('<ContactButton />', () => {
  let defaultProps;
  let dispatch;
  beforeEach(() => {
    defaultProps = {
      contact: {
        id: '9367',
        firstName: 'Brandy',
        lastName: 'Bartell',
        address: '42991 Beahan Parkway',
        city: 'Veumberg',
        country: 'Venezuela',
        phone: '586-723-4824',
        email: 'Marianne56@hotmail.com',
      },
      index: 0,
    };

    dispatch = jest.fn();
    useDispatch.mockReset();
    useDispatch.mockReturnValue(dispatch);
  });

  it('should render correctly', () => {
    const component = shallow(<ContactButtonm {...defaultProps} />);
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should dispatch the correct action on button click', () => {
    const component = shallow(<ContactButtonm {...defaultProps} />);
    component.props().onClick();
    expect(dispatch).toHaveBeenCalledWith(
      contactSelect(defaultProps.contact, defaultProps.index)
    );
  });
});
