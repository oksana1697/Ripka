// https://redux-form.com/7.3.0/examples/fieldlevelvalidation/

import { memoize } from "ramda"

export const required = value => (value ? undefined : "Required field")

export const maxLength = memoize(max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
)

export const minLength = memoize(min => value => (value && value.length < min ? `The name is too short` : undefined))

// value && value.length < min ? `Must be ${min} characters or more` : undefined
export const number = memoize(value => (value && isNaN(Number(value)) ? "Must be a number" : undefined))

export const minValue = memoize(min => value => (value && value < min ? `Must be at least ${min}` : undefined))

export const minValue13 = minValue(13)

export const email_check = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(value) ? "Invalid email address" : undefined

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? "Only alphanumeric characters" : undefined

export const phoneNumber = value =>
  value && !/^(\+\d)?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4,6}$/i.test(value) ? "Invalid phone number" : undefined
