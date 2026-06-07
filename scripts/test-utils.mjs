/**
 * Quick utility checks for validation and formatting.
 * Run: npm test
 */

import assert from 'node:assert/strict';
import {
  sanitizePhoneNumber,
  validatePhoneNumber,
  formatInternationalNumber,
  formatDisplayNumber,
  searchCountries,
} from '../src/utils.js';
import { COUNTRIES, getCountryByCode, filterCountries } from '../src/countries.js';

function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (error) {
    console.error(`✗ ${name}`);
    throw error;
  }
}

test('sanitizePhoneNumber strips non-digits', () => {
  assert.equal(sanitizePhoneNumber('(987) 654-3210'), '9876543210');
});

test('validatePhoneNumber accepts valid IN number', () => {
  assert.equal(validatePhoneNumber('9876543210', 'IN'), true);
});

test('validatePhoneNumber rejects short IN number', () => {
  assert.equal(validatePhoneNumber('98765', 'IN'), false);
});

test('formatInternationalNumber builds E.164-style value', () => {
  assert.equal(formatInternationalNumber('9876543210', 'IN'), '+919876543210');
  assert.equal(formatInternationalNumber('5551234567', 'US'), '+15551234567');
});

test('formatDisplayNumber formats US numbers', () => {
  assert.equal(formatDisplayNumber('5551234567', 'US'), '(555) 123-4567');
});

test('getCountryByCode returns country metadata', () => {
  assert.equal(getCountryByCode('IN')?.name, 'India');
});

test('filterCountries respects preferredCountries order', () => {
  const list = filterCountries({ preferredCountries: ['IN', 'US'] });
  assert.equal(list[0].code, 'IN');
  assert.equal(list[1].code, 'US');
});

test('searchCountries finds by name and dial code', () => {
  const byName = searchCountries(COUNTRIES, 'india');
  const byDial = searchCountries(COUNTRIES, '+91');
  assert.equal(byName[0]?.code, 'IN');
  assert.equal(byDial[0]?.code, 'IN');
});

console.log('\nAll tests passed.');
