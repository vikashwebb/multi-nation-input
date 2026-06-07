import React from 'react';
import { Linking, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { LINKS, PACKAGE_META } from './packageMeta';
import { useLayout } from './useLayout';

function openUrl(url) {
  if (Platform.OS === 'web') {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }

  Linking.openURL(url);
}

function LinkCard({ label, value, url, accent }) {
  return (
    <Pressable
      style={[styles.linkCard, { borderColor: accent }]}
      onPress={() => openUrl(url)}
    >
      <Text style={[styles.linkCardLabel, { color: accent }]}>{label}</Text>
      <Text style={styles.linkCardValue} numberOfLines={2}>
        {value}
      </Text>
    </Pressable>
  );
}

export default function PackagePreview() {
  const { isMobile, contentPadding } = useLayout();

  return (
    <View style={[styles.wrapper, { paddingHorizontal: contentPadding }]}>
      <View style={styles.hero}>
        <View style={styles.heroTop}>
          <View style={styles.brandBlock}>
            <Text style={styles.badge}>multi-nation-input</Text>
            <Text style={[styles.title, isMobile && styles.titleMobile]}>
              International phone input
            </Text>
            <Text style={styles.subtitle}>{PACKAGE_META.description}</Text>
          </View>

          <View style={styles.versionPill}>
            <Text style={styles.versionText}>v{PACKAGE_META.version}</Text>
          </View>
        </View>

        <View style={styles.installBox}>
          <Text style={styles.installLabel}>Install</Text>
          <Text style={styles.installCommand}>{PACKAGE_META.installCommand}</Text>
        </View>

        <View style={[styles.linksGrid, isMobile && styles.linksGridMobile]}>
          <LinkCard
            label="Live demo"
            value={LINKS.demo}
            url={LINKS.demo}
            accent="#6366f1"
          />
          <LinkCard
            label="GitHub"
            value={LINKS.github}
            url={LINKS.github}
            accent="#0f172a"
          />
          <LinkCard
            label="npm package"
            value={LINKS.npm}
            url={LINKS.npm}
            accent="#cb3837"
          />
        </View>

        <View style={styles.featureRow}>
          {PACKAGE_META.features.map((feature) => (
            <View key={feature} style={styles.featurePill}>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
    marginBottom: 24,
  },
  hero: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.12)',
    shadowColor: '#312e81',
    shadowOpacity: 0.08,
    shadowRadius: 32,
    shadowOffset: { width: 0, height: 16 },
    ...(Platform.OS === 'web'
      ? { boxShadow: '0 20px 50px rgba(49, 46, 129, 0.08)' }
      : {}),
  },
  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  brandBlock: {
    flex: 1,
    minWidth: 240,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#eef2ff',
    color: '#4338ca',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 12,
    overflow: 'hidden',
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  titleMobile: {
    fontSize: 26,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 24,
    color: '#64748b',
    maxWidth: 640,
  },
  versionPill: {
    backgroundColor: '#f8fafc',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  versionText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
  },
  installBox: {
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  installLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  installCommand: {
    fontSize: 15,
    color: '#f8fafc',
    fontFamily: Platform.OS === 'web' ? 'ui-monospace, monospace' : undefined,
  },
  linksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  linksGridMobile: {
    flexDirection: 'column',
  },
  linkCard: {
    flex: 1,
    minWidth: 200,
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
  },
  linkCardLabel: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 6,
  },
  linkCardValue: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 18,
    fontWeight: '500',
  },
  featureRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  featurePill: {
    backgroundColor: '#f1f5f9',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  featureText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
  },
});
