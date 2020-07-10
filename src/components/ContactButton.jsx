import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactSelect } from '../actions/actions';

const ContactButton = ({ contact, index }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="contact-button"
      onClick={() => {
        dispatch(contactSelect(contact));
      }}
    >
      {contact.firstName}
    </button>
  );
};

export default ContactButton;
