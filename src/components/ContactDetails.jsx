import React, { useCallback, useState } from 'react';
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

  const onFormChange = (event) => {
    const str = event.target.value;
    const field = event.target.name;

    switch (field) {
      case 'First Name':
        setFormFirstName(str);
        return;
      case 'Last Name':
        setFormLastName(str);
        return;
      case 'Address':
        setFormAddress(str);
        return;
      case 'City':
        setFormCity(str);
        return;
      case 'Country':
        setFormCountry(str);
        return;
      case 'Phone':
        setFormPhone(str);
        return;
      case 'Email':
        setFormEmail(str);
        return;
      default:
        return;
    }
  };

  const onFormSubmit = useCallback(
    (event) => {
      event.preventDefault();

      // dispatch to save contact info
      // pass in formState array
    },
    [...formState]
  );

  return (
    <section className="contact-details">
      <form>
        {formFields.map((field, index) => {
          <label key={`${index}${field}`}>
            <input
              onChange={(event) => {
                onFormChange(event);
              }}
              placeholder={`${field}`}
              required
              type="text"
              value={formState[index]}
            />
            ;
          </label>;
        })}
      </form>
      <button className="cancel-button">Cancel</button>
      <button className="save-button">Save</button>
    </section>
  );
};

export default ContactDetails;
