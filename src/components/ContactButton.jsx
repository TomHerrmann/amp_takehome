import React from 'react';
import { useDispatch } from 'react-redux';
import { contactSelect } from '../actions/actions';

const ContactButton = ({ contact, index }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="contact-button"
      onClick={() => {
        dispatch(contactSelect(contact, index));
      }}
    >
      {`${contact.firstName} ${contact.lastName}`}
    </button>
  );
};

export default ContactButton;
