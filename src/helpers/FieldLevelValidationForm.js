import React from 'react';
import { Field, reduxForm } from 'redux-form';

// TODO: https://redux-form.com/7.3.0/examples/fieldlevelvalidation/

export const required = value => (value ? undefined : '* Required field');
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength20 = maxLength(20);
export const maxLength15 = maxLength(15);

const minLength = min => value =>
  value && value.length < min ? `The name is too short` : undefined;

// value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2);
export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const minValue13 = minValue(13);
export const email_check = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
export const phoneNumber = value =>
  value &&
  !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(value)
    ? 'Invalid phone number'
    : undefined;
