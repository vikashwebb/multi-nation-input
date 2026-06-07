import { getCountryByCode } from './countries.js';

export function sanitizePhoneNumber(value = '') {
  return String(value).replace(/\D/g, '');
}

export function validatePhoneNumber(phoneNumber, countryCode) {
  const country = getCountryByCode(countryCode);

  if (!country) {
    return false;
  }

  const digits = sanitizePhoneNumber(phoneNumber);

  if (!digits.length) {
    return false;
  }

  return digits.length >= country.minLength && digits.length <= country.maxLength;
}

export function formatInternationalNumber(phoneNumber, countryCode) {
  const country = getCountryByCode(countryCode);

  if (!country) {
    return '';
  }

  const digits = sanitizePhoneNumber(phoneNumber);

  if (!digits.length) {
    return '';
  }

  return `+${country.dialCode}${digits}`;
}

export function formatDisplayNumber(phoneNumber, countryCode) {
  const digits = sanitizePhoneNumber(phoneNumber);

  if (!digits.length) {
    return '';
  }

  if (countryCode === 'US' || countryCode === 'CA') {
    const area = digits.slice(0, 3);
    const prefix = digits.slice(3, 6);
    const line = digits.slice(6, 10);

    if (digits.length <= 3) {
      return area;
    }

    if (digits.length <= 6) {
      return `(${area}) ${prefix}`;
    }

    return `(${area}) ${prefix}-${line}`;
  }

  if (countryCode === 'IN' && digits.length === 10) {
    return `${digits.slice(0, 5)} ${digits.slice(5)}`;
  }

  return digits;
}

export function searchCountries(countries, query = '') {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return countries;
  }

  const dialQuery = normalizedQuery.replace(/^\+/, '');

  return countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(normalizedQuery) ||
      country.code.toLowerCase().includes(normalizedQuery) ||
      country.dialCode === dialQuery ||
      (dialQuery.length >= 2 && country.dialCode.startsWith(dialQuery))
    );
  });
}
