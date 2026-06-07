import React, { useMemo, useState } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { MultiNationInput } from 'multi-nation-input';
import PackagePreview from './PackagePreview';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  company: '',
  jobTitle: '',
  primaryPhone: '',
  alternatePhone: '',
  workPhone: '',
  emergencyPhone: '',
};

const INITIAL_PHONE_META = {
  primaryPhone: null,
  alternatePhone: null,
  workPhone: null,
  emergencyPhone: null,
};

export default function App() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [phoneMeta, setPhoneMeta] = useState(INITIAL_PHONE_META);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const updateField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    setSubmitted(false);
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const updatePhone = (key, payload) => {
    setForm((current) => ({ ...current, [key]: payload.phoneNumber }));
    setPhoneMeta((current) => ({ ...current, [key]: payload }));
    setSubmitted(false);
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validation = useMemo(() => {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Full name is required';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address';
    }

    if (!phoneMeta.primaryPhone?.isValid) {
      nextErrors.primaryPhone = 'Primary phone is required and must be valid';
    }

    if (form.alternatePhone && !phoneMeta.alternatePhone?.isValid) {
      nextErrors.alternatePhone = 'Alternate phone is not valid for selected country';
    }

    if (form.workPhone && !phoneMeta.workPhone?.isValid) {
      nextErrors.workPhone = 'Work phone is not valid for selected country';
    }

    if (form.emergencyPhone && !phoneMeta.emergencyPhone?.isValid) {
      nextErrors.emergencyPhone = 'Emergency phone is not valid for selected country';
    }

    return nextErrors;
  }, [form, phoneMeta]);

  const handleSubmit = () => {
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setPhoneMeta(INITIAL_PHONE_META);
    setSubmitted(false);
    setErrors({});
  };

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <PackagePreview />

      <View style={styles.layout}>
        <View style={styles.formCard}>
          <Text style={styles.eyebrow}>Interactive form demo</Text>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>
            Try the component in a real multi-field form before you publish to npm.
          </Text>

          <FormSection title="Personal details">
            <Field label="Full name" required error={errors.fullName}>
              <TextInput
                value={form.fullName}
                onChangeText={(value) => updateField('fullName', value)}
                placeholder="Jane Doe"
                style={styles.textInput}
                placeholderTextColor="#9ca3af"
              />
            </Field>

            <Field label="Email address" required error={errors.email}>
              <TextInput
                value={form.email}
                onChangeText={(value) => updateField('email', value)}
                placeholder="jane@company.com"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.textInput}
                placeholderTextColor="#9ca3af"
              />
            </Field>
          </FormSection>

          <FormSection title="Work information">
            <View style={styles.row}>
              <View style={styles.halfField}>
                <Field label="Company">
                  <TextInput
                    value={form.company}
                    onChangeText={(value) => updateField('company', value)}
                    placeholder="Acme Inc."
                    style={styles.textInput}
                    placeholderTextColor="#9ca3af"
                  />
                </Field>
              </View>

              <View style={styles.halfField}>
                <Field label="Job title">
                  <TextInput
                    value={form.jobTitle}
                    onChangeText={(value) => updateField('jobTitle', value)}
                    placeholder="Product Manager"
                    style={styles.textInput}
                    placeholderTextColor="#9ca3af"
                  />
                </Field>
              </View>
            </View>
          </FormSection>

          <FormSection title="Phone numbers">
            <Field
              label="Primary mobile"
              required
              hint="Main contact number"
              error={errors.primaryPhone}
            >
              <MultiNationInput
                value={form.primaryPhone}
                defaultCountry="IN"
                preferredCountries={['IN', 'US', 'GB', 'AE', 'CA']}
                onChangeFullNumber={(payload) => updatePhone('primaryPhone', payload)}
                placeholder="Primary phone number"
              />
            </Field>

            <Field
              label="Alternate mobile"
              hint="Optional second number"
              error={errors.alternatePhone}
            >
              <MultiNationInput
                value={form.alternatePhone}
                defaultCountry="US"
                preferredCountries={['US', 'IN', 'GB']}
                onChangeFullNumber={(payload) => updatePhone('alternatePhone', payload)}
                placeholder="Alternate phone number"
              />
            </Field>

            <Field
              label="Work phone"
              hint="Office landline or desk phone"
              error={errors.workPhone}
            >
              <MultiNationInput
                value={form.workPhone}
                defaultCountry="GB"
                preferredCountries={['GB', 'US', 'IN', 'DE', 'FR']}
                onChangeFullNumber={(payload) => updatePhone('workPhone', payload)}
                placeholder="Work phone number"
              />
            </Field>

            <Field
              label="Emergency contact"
              hint="Family or emergency contact"
              error={errors.emergencyPhone}
            >
              <MultiNationInput
                value={form.emergencyPhone}
                defaultCountry="IN"
                preferredCountries={['IN', 'US', 'AE', 'SA']}
                onChangeFullNumber={(payload) => updatePhone('emergencyPhone', payload)}
                placeholder="Emergency phone number"
              />
            </Field>
          </FormSection>

          <View style={styles.actions}>
            <Pressable style={styles.primaryButton} onPress={handleSubmit}>
              <Text style={styles.primaryButtonText}>Submit form</Text>
            </Pressable>
            <Pressable style={styles.secondaryButton} onPress={handleReset}>
              <Text style={styles.secondaryButtonText}>Reset</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.previewCard}>
          <Text style={styles.previewTitle}>Live preview</Text>
          <Text style={styles.previewSubtitle}>
            See formatted values update as you fill the form.
          </Text>

          <PreviewRow label="Name" value={form.fullName || '—'} />
          <PreviewRow label="Email" value={form.email || '—'} />
          <PreviewRow label="Company" value={form.company || '—'} />
          <PreviewRow label="Job title" value={form.jobTitle || '—'} />

          <PhonePreview
            label="Primary"
            meta={phoneMeta.primaryPhone}
            required
          />
          <PhonePreview label="Alternate" meta={phoneMeta.alternatePhone} />
          <PhonePreview label="Work" meta={phoneMeta.workPhone} />
          <PhonePreview label="Emergency" meta={phoneMeta.emergencyPhone} />

          {submitted ? (
            <View style={styles.successBox}>
              <Text style={styles.successTitle}>Form looks good</Text>
              <Text style={styles.successText}>
                All required fields are valid. This is a demo — no data is sent anywhere.
              </Text>
            </View>
          ) : (
            <View style={styles.hintBox}>
              <Text style={styles.hintText}>
                Fill required fields and tap Submit to validate the full form.
              </Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

function FormSection({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionBody}>{children}</View>
    </View>
  );
}

function Field({ label, required, hint, error, children }) {
  return (
    <View style={styles.field}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
        {required ? <Text style={styles.required}>*</Text> : null}
      </View>
      {hint ? <Text style={styles.hint}>{hint}</Text> : null}
      {children}
      {error ? <Text style={styles.fieldError}>{error}</Text> : null}
    </View>
  );
}

function PreviewRow({ label, value }) {
  return (
    <View style={styles.previewRow}>
      <Text style={styles.previewLabel}>{label}</Text>
      <Text style={styles.previewValue}>{value}</Text>
    </View>
  );
}

function PhonePreview({ label, meta, required = false }) {
  const value = meta?.fullNumber
    ? `${meta.fullNumber} (${meta.isValid ? 'valid' : 'invalid'})`
    : required
      ? 'Required'
      : '—';

  return <PreviewRow label={label} value={value} />;
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  layout: {
    width: '100%',
    maxWidth: 1100,
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    gap: 24,
    alignItems: 'flex-start',
  },
  formCard: {
    flex: 1.3,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 28,
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
  },
  previewCard: {
    flex: 0.9,
    backgroundColor: '#0f172a',
    borderRadius: 20,
    padding: 24,
    minWidth: 280,
  },
  eyebrow: {
    alignSelf: 'flex-start',
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 12,
    overflow: 'hidden',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#6b7280',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 14,
  },
  sectionBody: {
    gap: 16,
  },
  row: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    gap: 16,
  },
  halfField: {
    flex: 1,
  },
  field: {
    marginBottom: 4,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  required: {
    color: '#ef4444',
    marginLeft: 4,
    fontWeight: '700',
  },
  hint: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'web' ? 11 : 12,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#fff',
    ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : {}),
  },
  fieldError: {
    marginTop: 6,
    fontSize: 13,
    color: '#ef4444',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 10,
  },
  secondaryButtonText: {
    color: '#374151',
    fontSize: 15,
    fontWeight: '700',
  },
  previewTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: 6,
  },
  previewSubtitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 20,
    lineHeight: 20,
  },
  previewRow: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  previewLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  previewValue: {
    fontSize: 14,
    color: '#e2e8f0',
    lineHeight: 20,
  },
  successBox: {
    marginTop: 16,
    backgroundColor: '#14532d',
    borderRadius: 12,
    padding: 14,
  },
  successTitle: {
    color: '#bbf7d0',
    fontWeight: '700',
    marginBottom: 4,
  },
  successText: {
    color: '#dcfce7',
    fontSize: 13,
    lineHeight: 18,
  },
  hintBox: {
    marginTop: 16,
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 14,
  },
  hintText: {
    color: '#94a3b8',
    fontSize: 13,
    lineHeight: 18,
  },
});
