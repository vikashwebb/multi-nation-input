import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { searchCountries } from './utils.js';

const CountryPicker = ({
  visible,
  countries,
  selectedCountry,
  onSelect,
  onClose,
  searchPlaceholder = 'Search country',
  modalTitle = 'Select country',
}) => {
  const [query, setQuery] = useState('');

  const filteredCountries = useMemo(
    () => searchCountries(countries, query),
    [countries, query],
  );

  const handleClose = () => {
    setQuery('');
    onClose?.();
  };

  const handleSelect = (country) => {
    setQuery('');
    onSelect?.(country);
  };

  const isWeb = Platform.OS === 'web';

  return (
    <Modal
      visible={visible}
      animationType={isWeb ? 'fade' : 'slide'}
      transparent
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={handleClose} />
        <View style={[styles.sheet, isWeb && styles.sheetWeb]}>
          <View style={styles.header}>
            <Text style={styles.title}>{modalTitle}</Text>
            <Pressable onPress={handleClose} hitSlop={8}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>

          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder={searchPlaceholder}
            placeholderTextColor="#999"
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
            clearButtonMode="while-editing"
          />

          <FlatList
            data={filteredCountries}
            keyExtractor={(item) => item.code}
            keyboardShouldPersistTaps="handled"
            style={[styles.list, isWeb && styles.listWeb]}
            renderItem={({ item }) => {
              const isSelected = item.code === selectedCountry?.code;

              return (
                <Pressable
                  style={[styles.row, isSelected && styles.rowSelected]}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.flag}>{item.flag}</Text>
                  <View style={styles.rowContent}>
                    <Text style={styles.countryName}>{item.name}</Text>
                    <Text style={styles.dialCode}>+{item.dialCode}</Text>
                  </View>
                  {isSelected ? <Text style={styles.checkmark}>✓</Text> : null}
                </Pressable>
              );
            }}
            ListEmptyComponent={
              <View style={styles.emptyState}>
                <Text style={styles.emptyText}>No countries found</Text>
              </View>
            }
          />
        </View>
      </View>
    </Modal>
  );
};

const isWebPlatform = Platform.OS === 'web';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: isWebPlatform ? 'center' : 'flex-end',
    alignItems: isWebPlatform ? 'center' : 'stretch',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    padding: isWebPlatform ? 20 : 0,
  },
  backdrop: isWebPlatform
    ? {
        ...StyleSheet.absoluteFillObject,
      }
    : {
        flex: 1,
      },
  sheet: {
    maxHeight: isWebPlatform ? 520 : '75%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: Platform.OS === 'ios' ? 24 : 16,
  },
  sheetWeb: {
    width: '100%',
    maxWidth: 420,
    borderRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
  },
  closeText: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '500',
  },
  searchInput: {
    marginHorizontal: 16,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'web' ? 10 : 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    fontSize: 16,
    color: '#111',
    backgroundColor: '#f9fafb',
    ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : {}),
  },
  list: {
    paddingHorizontal: 8,
  },
  listWeb: {
    maxHeight: 360,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
  },
  rowSelected: {
    backgroundColor: '#eff6ff',
  },
  flag: {
    fontSize: 24,
    marginRight: 12,
  },
  rowContent: {
    flex: 1,
  },
  countryName: {
    fontSize: 16,
    color: '#111',
    fontWeight: '500',
  },
  dialCode: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
  },
  checkmark: {
    fontSize: 18,
    color: '#2563eb',
    fontWeight: '700',
  },
  emptyState: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 15,
    color: '#6b7280',
  },
});

export default CountryPicker;
