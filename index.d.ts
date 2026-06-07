import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  minLength: number;
  maxLength: number;
}

export interface FullNumberPayload {
  phoneNumber: string;
  formattedNumber: string;
  fullNumber: string;
  country: Country;
  isValid: boolean;
}

export interface MultiNationInputProps {
  value?: string;
  defaultValue?: string;
  defaultCountry?: string;
  onChangeText?: (phoneNumber: string) => void;
  onChangeFormattedText?: (formattedNumber: string) => void;
  onChangeCountry?: (country: Country) => void;
  onValidationChange?: (isValid: boolean) => void;
  onChangeFullNumber?: (payload: FullNumberPayload) => void;
  placeholder?: string;
  disabled?: boolean;
  editable?: boolean;
  autoFocus?: boolean;
  containerStyle?: object;
  inputContainerStyle?: object;
  inputStyle?: object;
  countryButtonStyle?: object;
  countryTextStyle?: object;
  dialCodeStyle?: object;
  errorTextStyle?: object;
  error?: string;
  showError?: boolean;
  onlyCountries?: string[];
  excludeCountries?: string[];
  preferredCountries?: string[];
  countries?: Country[];
  searchPlaceholder?: string;
  modalTitle?: string;
  testID?: string;
  accessibilityLabel?: string;
}

export interface CountryPickerProps {
  visible: boolean;
  countries: Country[];
  selectedCountry?: Country;
  onSelect?: (country: Country) => void;
  onClose?: () => void;
  searchPlaceholder?: string;
  modalTitle?: string;
}

export declare const COUNTRIES: Country[];

export declare function getCountryByCode(code: string): Country | undefined;
export declare function getDefaultCountry(defaultCode?: string): Country;
export declare function filterCountries(options?: {
  onlyCountries?: string[];
  excludeCountries?: string[];
  preferredCountries?: string[];
}): Country[];

export declare function sanitizePhoneNumber(value?: string): string;
export declare function validatePhoneNumber(
  phoneNumber: string,
  countryCode: string,
): boolean;
export declare function formatInternationalNumber(
  phoneNumber: string,
  countryCode: string,
): string;
export declare function formatDisplayNumber(
  phoneNumber: string,
  countryCode: string,
): string;
export declare function searchCountries(
  countries: Country[],
  query?: string,
): Country[];

export declare const MultiNationInput: React.FC<MultiNationInputProps>;
export declare const CountryPicker: React.FC<CountryPickerProps>;

export default MultiNationInput;
