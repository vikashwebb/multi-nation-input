import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MultiNationInput } from 'multi-nation-input';

export default function App() {
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState(null);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.badge}>React Native Demo</Text>
        <Text style={styles.title}>Multi Nation Input</Text>
        <Text style={styles.subtitle}>
          Test the local package on iOS, Android, or Expo Go.
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
          <ResultRow label="Raw digits" value={phone || '—'} />
          <ResultRow label="Formatted" value={result?.formattedNumber || '—'} />
          <ResultRow label="International" value={result?.fullNumber || '—'} />
          <ResultRow
            label="Country"
            value={
              result?.country
                ? `${result.country.flag} ${result.country.name} (+${result.country.dialCode})`
                : '—'
            }
          />
          <ResultRow
            label="Valid"
            value={result ? String(result.isValid) : '—'}
            highlight={result ? (result.isValid ? 'valid' : 'invalid') : undefined}
          />
        </View>
      </ScrollView>
    </View>
  );
}

function ResultRow({ label, value, highlight }) {
  return (
    <View style={styles.resultRow}>
      <Text style={styles.resultLabel}>{label}</Text>
      <Text
        style={[
          styles.resultValue,
          highlight === 'valid' && styles.valid,
          highlight === 'invalid' && styles.invalid,
        ]}
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
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
    backgroundColor: '#fff',
  },
  resultRow: {
    marginBottom: 12,
  },
  resultLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  resultValue: {
    fontSize: 15,
    color: '#111827',
  },
  valid: {
    color: '#059669',
    fontWeight: '700',
  },
  invalid: {
    color: '#dc2626',
    fontWeight: '700',
  },
});
