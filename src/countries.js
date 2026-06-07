/**
 * Country metadata used for dial codes, flags, and phone validation.
 * Works on React Native and web (via react-native-web).
 */

export const COUNTRIES = [
  { code: 'AF', name: 'Afghanistan', dialCode: '93', flag: '🇦🇫', minLength: 9, maxLength: 9 },
  { code: 'AL', name: 'Albania', dialCode: '355', flag: '🇦🇱', minLength: 9, maxLength: 9 },
  { code: 'DZ', name: 'Algeria', dialCode: '213', flag: '🇩🇿', minLength: 9, maxLength: 9 },
  { code: 'AD', name: 'Andorra', dialCode: '376', flag: '🇦🇩', minLength: 6, maxLength: 9 },
  { code: 'AO', name: 'Angola', dialCode: '244', flag: '🇦🇴', minLength: 9, maxLength: 9 },
  { code: 'AR', name: 'Argentina', dialCode: '54', flag: '🇦🇷', minLength: 10, maxLength: 10 },
  { code: 'AM', name: 'Armenia', dialCode: '374', flag: '🇦🇲', minLength: 8, maxLength: 8 },
  { code: 'AU', name: 'Australia', dialCode: '61', flag: '🇦🇺', minLength: 9, maxLength: 9 },
  { code: 'AT', name: 'Austria', dialCode: '43', flag: '🇦🇹', minLength: 10, maxLength: 13 },
  { code: 'AZ', name: 'Azerbaijan', dialCode: '994', flag: '🇦🇿', minLength: 9, maxLength: 9 },
  { code: 'BH', name: 'Bahrain', dialCode: '973', flag: '🇧🇭', minLength: 8, maxLength: 8 },
  { code: 'AW', name: 'Aruba', dialCode: '297', flag: '🇦🇼', minLength: 7, maxLength: 7 },
  { code: 'BS', name: 'Bahamas', dialCode: '1', flag: '🇧🇸', minLength: 10, maxLength: 10 },
  { code: 'BD', name: 'Bangladesh', dialCode: '880', flag: '🇧🇩', minLength: 10, maxLength: 10 },
  { code: 'BY', name: 'Belarus', dialCode: '375', flag: '🇧🇾', minLength: 9, maxLength: 9 },
  { code: 'BE', name: 'Belgium', dialCode: '32', flag: '🇧🇪', minLength: 9, maxLength: 9 },
  { code: 'BZ', name: 'Belize', dialCode: '501', flag: '🇧🇿', minLength: 7, maxLength: 7 },
  { code: 'BJ', name: 'Benin', dialCode: '229', flag: '🇧🇯', minLength: 8, maxLength: 8 },
  { code: 'BT', name: 'Bhutan', dialCode: '975', flag: '🇧🇹', minLength: 8, maxLength: 8 },
  { code: 'BO', name: 'Bolivia', dialCode: '591', flag: '🇧🇴', minLength: 8, maxLength: 8 },
  { code: 'BA', name: 'Bosnia and Herzegovina', dialCode: '387', flag: '🇧🇦', minLength: 8, maxLength: 8 },
  { code: 'BW', name: 'Botswana', dialCode: '267', flag: '🇧🇼', minLength: 8, maxLength: 8 },
  { code: 'BR', name: 'Brazil', dialCode: '55', flag: '🇧🇷', minLength: 10, maxLength: 11 },
  { code: 'BN', name: 'Brunei', dialCode: '673', flag: '🇧🇳', minLength: 7, maxLength: 7 },
  { code: 'BG', name: 'Bulgaria', dialCode: '359', flag: '🇧🇬', minLength: 9, maxLength: 9 },
  { code: 'KH', name: 'Cambodia', dialCode: '855', flag: '🇰🇭', minLength: 8, maxLength: 9 },
  { code: 'CV', name: 'Cape Verde', dialCode: '238', flag: '🇨🇻', minLength: 7, maxLength: 7 },
  { code: 'KY', name: 'Cayman Islands', dialCode: '1', flag: '🇰🇾', minLength: 10, maxLength: 10 },
  { code: 'CM', name: 'Cameroon', dialCode: '237', flag: '🇨🇲', minLength: 9, maxLength: 9 },
  { code: 'CA', name: 'Canada', dialCode: '1', flag: '🇨🇦', minLength: 10, maxLength: 10 },
  { code: 'CL', name: 'Chile', dialCode: '56', flag: '🇨🇱', minLength: 9, maxLength: 9 },
  { code: 'CN', name: 'China', dialCode: '86', flag: '🇨🇳', minLength: 11, maxLength: 11 },
  { code: 'CO', name: 'Colombia', dialCode: '57', flag: '🇨🇴', minLength: 10, maxLength: 10 },
  { code: 'CR', name: 'Costa Rica', dialCode: '506', flag: '🇨🇷', minLength: 8, maxLength: 8 },
  { code: 'HR', name: 'Croatia', dialCode: '385', flag: '🇭🇷', minLength: 9, maxLength: 9 },
  { code: 'CU', name: 'Cuba', dialCode: '53', flag: '🇨🇺', minLength: 8, maxLength: 8 },
  { code: 'CY', name: 'Cyprus', dialCode: '357', flag: '🇨🇾', minLength: 8, maxLength: 8 },
  { code: 'CZ', name: 'Czech Republic', dialCode: '420', flag: '🇨🇿', minLength: 9, maxLength: 9 },
  { code: 'DK', name: 'Denmark', dialCode: '45', flag: '🇩🇰', minLength: 8, maxLength: 8 },
  { code: 'DO', name: 'Dominican Republic', dialCode: '1', flag: '🇩🇴', minLength: 10, maxLength: 10 },
  { code: 'EC', name: 'Ecuador', dialCode: '593', flag: '🇪🇨', minLength: 9, maxLength: 9 },
  { code: 'EG', name: 'Egypt', dialCode: '20', flag: '🇪🇬', minLength: 10, maxLength: 10 },
  { code: 'SV', name: 'El Salvador', dialCode: '503', flag: '🇸🇻', minLength: 8, maxLength: 8 },
  { code: 'EE', name: 'Estonia', dialCode: '372', flag: '🇪🇪', minLength: 7, maxLength: 8 },
  { code: 'ET', name: 'Ethiopia', dialCode: '251', flag: '🇪🇹', minLength: 9, maxLength: 9 },
  { code: 'FI', name: 'Finland', dialCode: '358', flag: '🇫🇮', minLength: 9, maxLength: 10 },
  { code: 'FR', name: 'France', dialCode: '33', flag: '🇫🇷', minLength: 9, maxLength: 9 },
  { code: 'GE', name: 'Georgia', dialCode: '995', flag: '🇬🇪', minLength: 9, maxLength: 9 },
  { code: 'DE', name: 'Germany', dialCode: '49', flag: '🇩🇪', minLength: 10, maxLength: 11 },
  { code: 'GH', name: 'Ghana', dialCode: '233', flag: '🇬🇭', minLength: 9, maxLength: 9 },
  { code: 'GR', name: 'Greece', dialCode: '30', flag: '🇬🇷', minLength: 10, maxLength: 10 },
  { code: 'GT', name: 'Guatemala', dialCode: '502', flag: '🇬🇹', minLength: 8, maxLength: 8 },
  { code: 'HN', name: 'Honduras', dialCode: '504', flag: '🇭🇳', minLength: 8, maxLength: 8 },
  { code: 'HK', name: 'Hong Kong', dialCode: '852', flag: '🇭🇰', minLength: 8, maxLength: 8 },
  { code: 'HU', name: 'Hungary', dialCode: '36', flag: '🇭🇺', minLength: 9, maxLength: 9 },
  { code: 'IS', name: 'Iceland', dialCode: '354', flag: '🇮🇸', minLength: 7, maxLength: 7 },
  { code: 'IN', name: 'India', dialCode: '91', flag: '🇮🇳', minLength: 10, maxLength: 10 },
  { code: 'ID', name: 'Indonesia', dialCode: '62', flag: '🇮🇩', minLength: 9, maxLength: 12 },
  { code: 'IR', name: 'Iran', dialCode: '98', flag: '🇮🇷', minLength: 10, maxLength: 10 },
  { code: 'IQ', name: 'Iraq', dialCode: '964', flag: '🇮🇶', minLength: 10, maxLength: 10 },
  { code: 'IE', name: 'Ireland', dialCode: '353', flag: '🇮🇪', minLength: 9, maxLength: 9 },
  { code: 'IL', name: 'Israel', dialCode: '972', flag: '🇮🇱', minLength: 9, maxLength: 9 },
  { code: 'IT', name: 'Italy', dialCode: '39', flag: '🇮🇹', minLength: 9, maxLength: 10 },
  { code: 'JM', name: 'Jamaica', dialCode: '1', flag: '🇯🇲', minLength: 10, maxLength: 10 },
  { code: 'JP', name: 'Japan', dialCode: '81', flag: '🇯🇵', minLength: 10, maxLength: 10 },
  { code: 'JO', name: 'Jordan', dialCode: '962', flag: '🇯🇴', minLength: 9, maxLength: 9 },
  { code: 'KZ', name: 'Kazakhstan', dialCode: '7', flag: '🇰🇿', minLength: 10, maxLength: 10 },
  { code: 'KE', name: 'Kenya', dialCode: '254', flag: '🇰🇪', minLength: 9, maxLength: 9 },
  { code: 'KW', name: 'Kuwait', dialCode: '965', flag: '🇰🇼', minLength: 8, maxLength: 8 },
  { code: 'LV', name: 'Latvia', dialCode: '371', flag: '🇱🇻', minLength: 8, maxLength: 8 },
  { code: 'LB', name: 'Lebanon', dialCode: '961', flag: '🇱🇧', minLength: 7, maxLength: 8 },
  { code: 'LY', name: 'Libya', dialCode: '218', flag: '🇱🇾', minLength: 9, maxLength: 9 },
  { code: 'LT', name: 'Lithuania', dialCode: '370', flag: '🇱🇹', minLength: 8, maxLength: 8 },
  { code: 'LU', name: 'Luxembourg', dialCode: '352', flag: '🇱🇺', minLength: 9, maxLength: 9 },
  { code: 'MY', name: 'Malaysia', dialCode: '60', flag: '🇲🇾', minLength: 9, maxLength: 10 },
  { code: 'MV', name: 'Maldives', dialCode: '960', flag: '🇲🇻', minLength: 7, maxLength: 7 },
  { code: 'MX', name: 'Mexico', dialCode: '52', flag: '🇲🇽', minLength: 10, maxLength: 10 },
  { code: 'MD', name: 'Moldova', dialCode: '373', flag: '🇲🇩', minLength: 8, maxLength: 8 },
  { code: 'MN', name: 'Mongolia', dialCode: '976', flag: '🇲🇳', minLength: 8, maxLength: 8 },
  { code: 'MA', name: 'Morocco', dialCode: '212', flag: '🇲🇦', minLength: 9, maxLength: 9 },
  { code: 'MM', name: 'Myanmar', dialCode: '95', flag: '🇲🇲', minLength: 8, maxLength: 10 },
  { code: 'NP', name: 'Nepal', dialCode: '977', flag: '🇳🇵', minLength: 10, maxLength: 10 },
  { code: 'NL', name: 'Netherlands', dialCode: '31', flag: '🇳🇱', minLength: 9, maxLength: 9 },
  { code: 'NZ', name: 'New Zealand', dialCode: '64', flag: '🇳🇿', minLength: 9, maxLength: 10 },
  { code: 'NG', name: 'Nigeria', dialCode: '234', flag: '🇳🇬', minLength: 10, maxLength: 10 },
  { code: 'NO', name: 'Norway', dialCode: '47', flag: '🇳🇴', minLength: 8, maxLength: 8 },
  { code: 'OM', name: 'Oman', dialCode: '968', flag: '🇴🇲', minLength: 8, maxLength: 8 },
  { code: 'PK', name: 'Pakistan', dialCode: '92', flag: '🇵🇰', minLength: 10, maxLength: 10 },
  { code: 'PS', name: 'Palestine', dialCode: '970', flag: '🇵🇸', minLength: 9, maxLength: 9 },
  { code: 'PA', name: 'Panama', dialCode: '507', flag: '🇵🇦', minLength: 8, maxLength: 8 },
  { code: 'PY', name: 'Paraguay', dialCode: '595', flag: '🇵🇾', minLength: 9, maxLength: 9 },
  { code: 'PE', name: 'Peru', dialCode: '51', flag: '🇵🇪', minLength: 9, maxLength: 9 },
  { code: 'PH', name: 'Philippines', dialCode: '63', flag: '🇵🇭', minLength: 10, maxLength: 10 },
  { code: 'PL', name: 'Poland', dialCode: '48', flag: '🇵🇱', minLength: 9, maxLength: 9 },
  { code: 'PT', name: 'Portugal', dialCode: '351', flag: '🇵🇹', minLength: 9, maxLength: 9 },
  { code: 'QA', name: 'Qatar', dialCode: '974', flag: '🇶🇦', minLength: 8, maxLength: 8 },
  { code: 'RO', name: 'Romania', dialCode: '40', flag: '🇷🇴', minLength: 9, maxLength: 9 },
  { code: 'RU', name: 'Russia', dialCode: '7', flag: '🇷🇺', minLength: 10, maxLength: 10 },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '966', flag: '🇸🇦', minLength: 9, maxLength: 9 },
  { code: 'RS', name: 'Serbia', dialCode: '381', flag: '🇷🇸', minLength: 9, maxLength: 9 },
  { code: 'SG', name: 'Singapore', dialCode: '65', flag: '🇸🇬', minLength: 8, maxLength: 8 },
  { code: 'SK', name: 'Slovakia', dialCode: '421', flag: '🇸🇰', minLength: 9, maxLength: 9 },
  { code: 'SI', name: 'Slovenia', dialCode: '386', flag: '🇸🇮', minLength: 8, maxLength: 8 },
  { code: 'ZA', name: 'South Africa', dialCode: '27', flag: '🇿🇦', minLength: 9, maxLength: 9 },
  { code: 'KR', name: 'South Korea', dialCode: '82', flag: '🇰🇷', minLength: 9, maxLength: 10 },
  { code: 'ES', name: 'Spain', dialCode: '34', flag: '🇪🇸', minLength: 9, maxLength: 9 },
  { code: 'LK', name: 'Sri Lanka', dialCode: '94', flag: '🇱🇰', minLength: 9, maxLength: 9 },
  { code: 'SE', name: 'Sweden', dialCode: '46', flag: '🇸🇪', minLength: 9, maxLength: 9 },
  { code: 'CH', name: 'Switzerland', dialCode: '41', flag: '🇨🇭', minLength: 9, maxLength: 9 },
  { code: 'TW', name: 'Taiwan', dialCode: '886', flag: '🇹🇼', minLength: 9, maxLength: 9 },
  { code: 'TZ', name: 'Tanzania', dialCode: '255', flag: '🇹🇿', minLength: 9, maxLength: 9 },
  { code: 'TH', name: 'Thailand', dialCode: '66', flag: '🇹🇭', minLength: 9, maxLength: 9 },
  { code: 'TN', name: 'Tunisia', dialCode: '216', flag: '🇹🇳', minLength: 8, maxLength: 8 },
  { code: 'TR', name: 'Turkey', dialCode: '90', flag: '🇹🇷', minLength: 10, maxLength: 10 },
  { code: 'UG', name: 'Uganda', dialCode: '256', flag: '🇺🇬', minLength: 9, maxLength: 9 },
  { code: 'UA', name: 'Ukraine', dialCode: '380', flag: '🇺🇦', minLength: 9, maxLength: 9 },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '971', flag: '🇦🇪', minLength: 9, maxLength: 9 },
  { code: 'GB', name: 'United Kingdom', dialCode: '44', flag: '🇬🇧', minLength: 10, maxLength: 10 },
  { code: 'US', name: 'United States', dialCode: '1', flag: '🇺🇸', minLength: 10, maxLength: 10 },
  { code: 'UY', name: 'Uruguay', dialCode: '598', flag: '🇺🇾', minLength: 8, maxLength: 8 },
  { code: 'UZ', name: 'Uzbekistan', dialCode: '998', flag: '🇺🇿', minLength: 9, maxLength: 9 },
  { code: 'VE', name: 'Venezuela', dialCode: '58', flag: '🇻🇪', minLength: 10, maxLength: 10 },
  { code: 'VN', name: 'Vietnam', dialCode: '84', flag: '🇻🇳', minLength: 9, maxLength: 10 },
  { code: 'YE', name: 'Yemen', dialCode: '967', flag: '🇾🇪', minLength: 9, maxLength: 9 },
  { code: 'ZM', name: 'Zambia', dialCode: '260', flag: '🇿🇲', minLength: 9, maxLength: 9 },
  { code: 'ZW', name: 'Zimbabwe', dialCode: '263', flag: '🇿🇼', minLength: 9, maxLength: 9 },
];

const countryByCode = new Map(COUNTRIES.map((country) => [country.code, country]));

export function getCountryByCode(code) {
  if (!code) {
    return undefined;
  }

  return countryByCode.get(String(code).toUpperCase());
}

export function getDefaultCountry(defaultCode = 'US') {
  return getCountryByCode(defaultCode) || getCountryByCode('US');
}

export function filterCountries({
  onlyCountries,
  excludeCountries,
  preferredCountries,
} = {}) {
  let list = [...COUNTRIES];

  if (onlyCountries?.length) {
    const allowed = new Set(onlyCountries.map((code) => String(code).toUpperCase()));
    list = list.filter((country) => allowed.has(country.code));
  }

  if (excludeCountries?.length) {
    const excluded = new Set(excludeCountries.map((code) => String(code).toUpperCase()));
    list = list.filter((country) => !excluded.has(country.code));
  }

  if (preferredCountries?.length) {
    const preferred = preferredCountries
      .map((code) => getCountryByCode(code))
      .filter(Boolean);
    const preferredCodes = new Set(preferred.map((country) => country.code));
    const remaining = list.filter((country) => !preferredCodes.has(country.code));
    return [...preferred, ...remaining];
  }

  return list;
}
