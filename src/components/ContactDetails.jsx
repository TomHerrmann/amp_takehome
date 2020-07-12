import React, { useEffect, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { contactUpdateCancel, contactUpdateSave } from '../actions/actions';

const ContactDetails = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const { currentContact } = store.getState();
  const {
    firstName,
    lastName,
    address,
    city,
    country,
    phone,
    email,
  } = currentContact;

  const [formFirstName, setFormFirstName] = useState('');
  const [formLastName, setFormLastName] = useState('');
  const [formAddress, setFormAddress] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formCountry, setFormCountry] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');

  useEffect(() => {
    setFormFirstName(firstName);
    setFormLastName(lastName);
    setFormAddress(address);
    setFormCity(city);
    setFormCountry(country);
    setFormPhone(phone);
    setFormEmail(email);
  }, [currentContact]);

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

  const onFormCancel = () => {
    dispatch(contactUpdateCancel());
  };

  const onFormSave = () => {
    const updatedContact = {
      firstName: formFirstName,
      lastName: formLastName,
      address: formAddress,
      city: formCity,
      country: formCountry,
      phone: formPhone,
      email: formEmail,
    };
    console.log('formFields at dispatched ->', updatedContact);
    dispatch(contactUpdateSave(updatedContact));
  };

  return (
    <section className="contact-details">
      <form>
        {formFields.map((field, index) => {
          return (
            <label key={`${index}${field}`}>
              <input
                name={field}
                onChange={(event) => {
                  onFormChange(event);
                }}
                placeholder={formState[index]}
                required
                type="text"
                value={formState[index]}
              />
            </label>
          );
        })}
      </form>
      <button className="cancel-button" onClick={onFormCancel}>
        Cancel
      </button>
      <button className="save-button" onClick={onFormSave}>
        Save
      </button>
    </section>
  );
};

export default ContactDetails;
