import React from 'react';
import { Linking, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { PACKAGE_META, getDemoUrl } from './packageMeta';

function openUrl(url) {
  if (Platform.OS === 'web') {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }

  Linking.openURL(url);
}

function LinkButton({ label, url }) {
  return (
    <Pressable style={styles.linkButton} onPress={() => openUrl(url)}>
      <Text style={styles.linkButtonText}>{label}</Text>
    </Pressable>
  );
}

export default function PackagePreview() {
  const demoUrl = getDemoUrl();

  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <View style={styles.headerCopy}>
            <Text style={styles.badge}>Package preview</Text>
            <Text style={styles.packageName}>{PACKAGE_META.name}</Text>
            <Text style={styles.version}>v{PACKAGE_META.version}</Text>
            <Text style={styles.description}>{PACKAGE_META.description}</Text>
          </View>

          <View style={styles.metaBox}>
            <Text style={styles.metaLabel}>License</Text>
            <Text style={styles.metaValue}>{PACKAGE_META.license}</Text>
            <Text style={[styles.metaLabel, styles.metaSpacing]}>Author</Text>
            <Text style={styles.metaValue}>{PACKAGE_META.author}</Text>
          </View>
        </View>

        <View style={styles.installBox}>
          <Text style={styles.installLabel}>Install</Text>
          <Text style={styles.installCommand}>{PACKAGE_META.installCommand}</Text>
        </View>

        <View style={styles.demoUrlBox}>
          <Text style={styles.demoUrlLabel}>Live demo URL</Text>
          <Text style={styles.demoUrlValue} selectable>
            {demoUrl}
          </Text>
          <Text style={styles.demoUrlHint}>
            Share this link before go-live. Set a permanent URL with{' '}
            <Text style={styles.mono}>VITE_DEMO_URL</Text> when deploying.
          </Text>
        </View>

        <View style={styles.featureRow}>
          {PACKAGE_META.features.map((feature) => (
            <View key={feature} style={styles.featurePill}>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        <View style={styles.linkRow}>
          <LinkButton label="npm package" url={PACKAGE_META.npmUrl} />
          <LinkButton label="GitHub" url={PACKAGE_META.githubUrl} />
          <LinkButton label="Open demo" url={demoUrl} />
        </View>
      </View>

      <View style={styles.npmCard}>
        <Text style={styles.npmTitle}>npm README preview</Text>
        <Text style={styles.npmSubtitle}>
          How your package page will look after publish.
        </Text>

        <View style={styles.npmBlock}>
          <Text style={styles.npmHeading}># {PACKAGE_META.name}</Text>
          <Text style={styles.npmBody}>{PACKAGE_META.description}</Text>
        </View>

        <View style={styles.npmBlock}>
          <Text style={styles.npmHeading}>Live Demo</Text>
          <Text style={styles.npmLink}>{demoUrl}</Text>
        </View>

        <View style={styles.npmBlock}>
          <Text style={styles.npmHeading}>Installation</Text>
          <Text style={styles.npmCode}>{PACKAGE_META.installCommand}</Text>
        </View>

        <View style={styles.npmBlock}>
          <Text style={styles.npmHeading}>Features</Text>
          {PACKAGE_META.features.map((feature) => (
            <Text key={feature} style={styles.npmBullet}>
              • {feature}
            </Text>
          ))}
        </View>

        <View style={styles.screenshotPlaceholder}>
          <Text style={styles.screenshotTitle}>Screenshot placeholder</Text>
          <Text style={styles.screenshotHint}>
            Capture this form and save as docs/images/demo.png before publish.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    maxWidth: 1100,
    gap: 20,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#0f172a',
    shadowOpacity: 0.06,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
  },
  headerRow: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 18,
  },
  headerCopy: {
    flex: 1,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#fef3c7',
    color: '#b45309',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
    overflow: 'hidden',
  },
  packageName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  version: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4b5563',
  },
  metaBox: {
    minWidth: 140,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 14,
  },
  metaLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6b7280',
    textTransform: 'uppercase',
  },
  metaValue: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
  },
  metaSpacing: {
    marginTop: 10,
  },
  installBox: {
    backgroundColor: '#0f172a',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
  },
  installLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  installCommand: {
    fontSize: 15,
    color: '#f8fafc',
    fontFamily: Platform.OS === 'web' ? 'monospace' : undefined,
  },
  demoUrlBox: {
    backgroundColor: '#eff6ff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#bfdbfe',
  },
  demoUrlLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1d4ed8',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  demoUrlValue: {
    fontSize: 15,
    color: '#1e3a8a',
    fontWeight: '600',
    marginBottom: 6,
  },
  demoUrlHint: {
    fontSize: 12,
    color: '#3b82f6',
    lineHeight: 18,
  },
  mono: {
    fontFamily: Platform.OS === 'web' ? 'monospace' : undefined,
    fontWeight: '700',
  },
  featureRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  featurePill: {
    backgroundColor: '#f3f4f6',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  featureText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
  linkRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  linkButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  linkButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },
  npmCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  npmTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  npmSubtitle: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 16,
  },
  npmBlock: {
    marginBottom: 14,
  },
  npmHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  npmBody: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
  npmLink: {
    fontSize: 14,
    color: '#2563eb',
  },
  npmCode: {
    fontSize: 13,
    color: '#111827',
    backgroundColor: '#f3f4f6',
    padding: 10,
    borderRadius: 8,
    fontFamily: Platform.OS === 'web' ? 'monospace' : undefined,
    overflow: 'hidden',
  },
  npmBullet: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 22,
  },
  screenshotPlaceholder: {
    marginTop: 8,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#d1d5db',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  screenshotTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 4,
  },
  screenshotHint: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 18,
  },
});
