import React, { useState, useEffect } from 'react';
import { format } from 'path';

const ContactDetails = ({ contact }) => {
  const { firstName, lastName, address, city, country, phone, email } = contact;

  const [formFirstName, setFormFirstName] = useState(firstName);
  const [formLastName, setFormLastName] = useState(lastName);
  const [formAddress, setFormAddress] = useState(address);
  const [formCity, setFormCity] = useState(city);
  const [formCountry, setFormCountry] = useState(country);
  const [formPhone, setFormPhone] = useState(phone);
  const [formEmail, setFormEmail] = useState(email);

  const formFields = [
    'First Name',
    'Last Name',
    'Address',
    'City',
    'Country',
    'Phone',
    'Email',
  ];
  const formState = [
    formFirstName,
    formLastName,
    formAddress,
    formCity,
    formCountry,
    formPhone,
    formEmail,
  ];

  return (
    <section className="contact-details">
      <form>
        {formFields.map((field, index) => {
          <label key={`${index}${field}`}>
            <input
              placeholder={`${field}`}
              required
              type="text"
              value={formState[index]}
            />
            ;
          </label>;
        })}
      </form>
    </section>
  );
};

export default ContactDetails;
