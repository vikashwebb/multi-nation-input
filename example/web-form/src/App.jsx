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
import { useLayout } from './useLayout';

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
  const { isMobile, isTablet, contentPadding } = useLayout();
  const [form, setForm] = useState(INITIAL_FORM);
  const [phoneMeta, setPhoneMeta] = useState(INITIAL_PHONE_META);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const stackLayout = isMobile || isTablet;

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
    <ScrollView
      contentContainerStyle={[
        styles.page,
        { paddingHorizontal: contentPadding },
      ]}
    >
      <PackagePreview />

      <View
        style={[
          styles.layout,
          stackLayout ? styles.layoutStacked : styles.layoutRow,
        ]}
      >
        <View style={[styles.formCard, stackLayout && styles.fullWidth]}>
          <Text style={styles.eyebrow}>Interactive demo</Text>
          <Text style={[styles.title, isMobile && styles.titleMobile]}>
            Registration form
          </Text>
          <Text style={styles.subtitle}>
            Four phone inputs in a real-world form layout. Works on mobile and
            desktop.
          </Text>

          <FormSection title="Personal details">
            <Field label="Full name" required error={errors.fullName}>
              <TextInput
                value={form.fullName}
                onChangeText={(value) => updateField('fullName', value)}
                placeholder="Enter your name"
                style={styles.textInput}
                placeholderTextColor="#94a3b8"
              />
            </Field>

            <Field label="Email address" required error={errors.email}>
              <TextInput
                value={form.email}
                onChangeText={(value) => updateField('email', value)}
                placeholder="Enter email address"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.textInput}
                placeholderTextColor="#94a3b8"
              />
            </Field>
          </FormSection>

          <FormSection title="Work information">
            <View style={[styles.row, stackLayout && styles.rowStacked]}>
              <View style={styles.halfField}>
                <Field label="Company">
                  <TextInput
                    value={form.company}
                    onChangeText={(value) => updateField('company', value)}
                    placeholder="Company name"
                    style={styles.textInput}
                    placeholderTextColor="#94a3b8"
                  />
                </Field>
              </View>

              <View style={styles.halfField}>
                <Field label="Job title">
                  <TextInput
                    value={form.jobTitle}
                    onChangeText={(value) => updateField('jobTitle', value)}
                    placeholder="Job title"
                    style={styles.textInput}
                    placeholderTextColor="#94a3b8"
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

          <View style={[styles.actions, isMobile && styles.actionsStacked]}>
            <Pressable
              style={[styles.primaryButton, isMobile && styles.fullWidthButton]}
              onPress={handleSubmit}
            >
              <Text style={styles.primaryButtonText}>Submit form</Text>
            </Pressable>
            <Pressable
              style={[styles.secondaryButton, isMobile && styles.fullWidthButton]}
              onPress={handleReset}
            >
              <Text style={styles.secondaryButtonText}>Reset</Text>
            </Pressable>
          </View>
        </View>

        <View style={[styles.previewCard, stackLayout && styles.fullWidth]}>
          <Text style={styles.previewTitle}>Live output</Text>
          <Text style={styles.previewSubtitle}>
            Formatted numbers and validation update as you type.
          </Text>

          <PreviewRow label="Name" value={form.fullName || '—'} />
          <PreviewRow label="Email" value={form.email || '—'} />
          <PreviewRow label="Company" value={form.company || '—'} />
          <PreviewRow label="Job title" value={form.jobTitle || '—'} />

          <PhonePreview label="Primary" meta={phoneMeta.primaryPhone} required />
          <PhonePreview label="Alternate" meta={phoneMeta.alternatePhone} />
          <PhonePreview label="Work" meta={phoneMeta.workPhone} />
          <PhonePreview label="Emergency" meta={phoneMeta.emergencyPhone} />

          {submitted ? (
            <View style={styles.successBox}>
              <Text style={styles.successTitle}>All good</Text>
              <Text style={styles.successText}>
                Required fields are valid. Demo only — nothing is submitted.
              </Text>
            </View>
          ) : (
            <View style={styles.hintBox}>
              <Text style={styles.hintText}>
                Complete the form and submit to run full validation.
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
    paddingVertical: 24,
    width: '100%',
  },
  layout: {
    width: '100%',
    maxWidth: 1200,
    gap: 20,
    alignItems: 'stretch',
  },
  layoutRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  layoutStacked: {
    flexDirection: 'column',
  },
  fullWidth: {
    width: '100%',
    flex: undefined,
  },
  formCard: {
    flex: 1.4,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOpacity: 0.06,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    ...(Platform.OS === 'web'
      ? { boxShadow: '0 12px 40px rgba(15, 23, 42, 0.06)' }
      : {}),
  },
  previewCard: {
    flex: 1,
    backgroundColor: '#0f172a',
    borderRadius: 24,
    padding: 24,
    minWidth: 280,
  },
  eyebrow: {
    alignSelf: 'flex-start',
    backgroundColor: '#ecfeff',
    color: '#0e7490',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 12,
    overflow: 'hidden',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: -0.4,
    marginBottom: 8,
  },
  titleMobile: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 24,
    color: '#64748b',
    marginBottom: 24,
  },
  section: {
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 14,
  },
  sectionBody: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  rowStacked: {
    flexDirection: 'column',
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
    color: '#0f172a',
  },
  required: {
    color: '#ef4444',
    marginLeft: 4,
    fontWeight: '700',
  },
  hint: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'web' ? 12 : 13,
    fontSize: 16,
    color: '#0f172a',
    backgroundColor: '#f8fafc',
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
  actionsStacked: {
    flexDirection: 'column',
  },
  fullWidthButton: {
    width: '100%',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#4f46e5',
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 14,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 14,
  },
  secondaryButtonText: {
    color: '#334155',
    fontSize: 15,
    fontWeight: '700',
  },
  previewTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#f8fafc',
    marginBottom: 6,
  },
  previewSubtitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 20,
    lineHeight: 22,
  },
  previewRow: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  previewLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  previewValue: {
    fontSize: 14,
    color: '#e2e8f0',
    lineHeight: 22,
  },
  successBox: {
    marginTop: 16,
    backgroundColor: '#14532d',
    borderRadius: 14,
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
    lineHeight: 20,
  },
  hintBox: {
    marginTop: 16,
    backgroundColor: '#1e293b',
    borderRadius: 14,
    padding: 14,
  },
  hintText: {
    color: '#94a3b8',
    fontSize: 13,
    lineHeight: 20,
  },
});
