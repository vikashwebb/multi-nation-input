import React, { useEffect, useMemo, useState } from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CountryPicker from './CountryPicker.jsx';
import { filterCountries, getDefaultCountry } from './countries.js';
import {
  formatDisplayNumber,
  formatInternationalNumber,
  sanitizePhoneNumber,
  validatePhoneNumber,
} from './utils.js';

const MultiNationInput = ({
  value,
  defaultValue = '',
  defaultCountry = 'US',
  onChangeText,
  onChangeFormattedText,
  onChangeCountry,
  onValidationChange,
  onChangeFullNumber,
  placeholder = 'Phone number',
  disabled = false,
  editable = true,
  autoFocus = false,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  countryButtonStyle,
  countryTextStyle,
  dialCodeStyle,
  errorTextStyle,
  error,
  showError = true,
  onlyCountries,
  excludeCountries,
  preferredCountries,
  countries: customCountries,
  searchPlaceholder,
  modalTitle,
  testID,
  accessibilityLabel = 'Phone number input',
  ...textInputProps
}) => {
  const availableCountries = useMemo(() => {
    if (customCountries?.length) {
      return customCountries;
    }

    return filterCountries({
      onlyCountries,
      excludeCountries,
      preferredCountries,
    });
  }, [customCountries, onlyCountries, excludeCountries, preferredCountries]);

  const initialCountry = useMemo(() => {
    const preferred = getDefaultCountry(defaultCountry);
    return (
      availableCountries.find((country) => country.code === preferred.code) ||
      availableCountries[0] ||
      getDefaultCountry('US')
    );
  }, [availableCountries, defaultCountry]);

  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [phoneNumber, setPhoneNumber] = useState(defaultValue);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [touched, setTouched] = useState(false);

  const isControlled = value !== undefined;
  const currentPhoneNumber = isControlled ? value : phoneNumber;

  useEffect(() => {
    setSelectedCountry(initialCountry);
  }, [initialCountry.code]);

  useEffect(() => {
    if (isControlled) {
      return;
    }

    setPhoneNumber(defaultValue);
  }, [defaultValue, isControlled]);

  const displayValue = formatDisplayNumber(currentPhoneNumber, selectedCountry.code);
  const isValid = validatePhoneNumber(currentPhoneNumber, selectedCountry.code);
  const validationMessage =
    error || (touched && !isValid && currentPhoneNumber.length > 0
      ? `Enter a valid ${selectedCountry.name} phone number`
      : '');

  useEffect(() => {
    onValidationChange?.(isValid);
  }, [isValid]);

  const emitChanges = (nextPhoneNumber, nextCountry = selectedCountry) => {
    const sanitized = sanitizePhoneNumber(nextPhoneNumber);
    const formatted = formatDisplayNumber(sanitized, nextCountry.code);
    const fullNumber = formatInternationalNumber(sanitized, nextCountry.code);

    onChangeText?.(sanitized);
    onChangeFormattedText?.(formatted);
    onChangeFullNumber?.({
      phoneNumber: sanitized,
      formattedNumber: formatted,
      fullNumber,
      country: nextCountry,
      isValid: validatePhoneNumber(sanitized, nextCountry.code),
    });
  };

  const handlePhoneChange = (text) => {
    const sanitized = sanitizePhoneNumber(text);
    const maxLength = selectedCountry.maxLength;
    const trimmed = sanitized.slice(0, maxLength);

    if (!isControlled) {
      setPhoneNumber(trimmed);
    }

    setTouched(true);
    emitChanges(trimmed);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setPickerVisible(false);
    onChangeCountry?.(country);
    emitChanges(currentPhoneNumber, country);
  };

  const isDisabled = disabled || !editable;

  return (
    <View style={[styles.wrapper, containerStyle]} testID={testID}>
      <View
        style={[
          styles.inputContainer,
          validationMessage ? styles.inputContainerError : null,
          isDisabled ? styles.inputContainerDisabled : null,
          inputContainerStyle,
        ]}
      >
        <Pressable
          style={[styles.countryButton, countryButtonStyle]}
          onPress={() => !isDisabled && setPickerVisible(true)}
          disabled={isDisabled}
          accessibilityRole="button"
          accessibilityLabel={`Selected country ${selectedCountry.name}`}
        >
          <Text style={[styles.flag, countryTextStyle]}>{selectedCountry.flag}</Text>
          <Text style={[styles.dialCode, dialCodeStyle]}>+{selectedCountry.dialCode}</Text>
          <Text style={styles.chevron}>▾</Text>
        </Pressable>

        <View style={styles.divider} />

        <TextInput
          {...textInputProps}
          value={displayValue}
          onChangeText={handlePhoneChange}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          keyboardType="phone-pad"
          inputMode="tel"
          editable={!isDisabled}
          autoFocus={autoFocus}
          style={[styles.input, inputStyle, Platform.OS === 'web' ? styles.webInput : null]}
          accessibilityLabel={accessibilityLabel}
          onBlur={(event) => {
            setTouched(true);
            textInputProps.onBlur?.(event);
          }}
        />
      </View>

      {showError && validationMessage ? (
        <Text style={[styles.errorText, errorTextStyle]}>{validationMessage}</Text>
      ) : null}

      <CountryPicker
        visible={pickerVisible}
        countries={availableCountries}
        selectedCountry={selectedCountry}
        onSelect={handleCountrySelect}
        onClose={() => setPickerVisible(false)}
        searchPlaceholder={searchPlaceholder}
        modalTitle={modalTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  inputContainerError: {
    borderColor: '#ef4444',
  },
  inputContainerDisabled: {
    backgroundColor: '#f3f4f6',
    opacity: 0.8,
  },
  countryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  flag: {
    fontSize: 20,
    marginRight: 6,
  },
  dialCode: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '600',
  },
  chevron: {
    marginLeft: 4,
    fontSize: 12,
    color: '#6b7280',
  },
  divider: {
    width: 1,
    alignSelf: 'stretch',
    backgroundColor: '#e5e7eb',
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'web' ? 10 : 12,
    fontSize: 16,
    color: '#111827',
  },
  webInput: {
    outlineStyle: 'none',
  },
  errorText: {
    marginTop: 6,
    fontSize: 13,
    color: '#ef4444',
  },
});

export default MultiNationInput;
