import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MultiNationInput } from 'multi-nation-input';

export default function App() {
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.card}>
        <Text style={styles.title}>Multi Nation Input</Text>
        <Text style={styles.subtitle}>
          Web test app — try typing a number and changing the country.
        </Text>

        <MultiNationInput
          value={phone}
          defaultCountry="IN"
          preferredCountries={['IN', 'US', 'GB', 'AE', 'CA']}
          onChangeText={setPhone}
          onChangeFullNumber={setResult}
          placeholder="Enter phone number"
        />

        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>Raw digits</Text>
          <Text style={styles.resultValue}>{phone || '—'}</Text>

          <Text style={styles.resultLabel}>Formatted</Text>
          <Text style={styles.resultValue}>
            {result?.formattedNumber || '—'}
          </Text>

          <Text style={styles.resultLabel}>International</Text>
          <Text style={styles.resultValue}>{result?.fullNumber || '—'}</Text>

          <Text style={styles.resultLabel}>Country</Text>
          <Text style={styles.resultValue}>
            {result?.country
              ? `${result.country.flag} ${result.country.name} (+${result.country.dialCode})`
              : '—'}
          </Text>

          <Text style={styles.resultLabel}>Valid</Text>
          <Text
            style={[
              styles.resultValue,
              result?.isValid ? styles.valid : styles.invalid,
            ]}
          >
            {result ? String(result.isValid) : '—'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#6b7280',
    marginBottom: 20,
  },
  resultBox: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f9fafb',
    gap: 4,
  },
  resultLabel: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
  },
  resultValue: {
    fontSize: 15,
    color: '#111827',
  },
  valid: {
    color: '#059669',
    fontWeight: '600',
  },
  invalid: {
    color: '#dc2626',
    fontWeight: '600',
  },
});
