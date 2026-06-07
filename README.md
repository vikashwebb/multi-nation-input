# multi-nation-input

International phone input with country picker, dial codes, and validation.

Works on **React Native** (iOS/Android) and **web** using the same package via `react-native-web`.

## Live Demo

**[Open interactive demo](https://multi-nation-input-demo.vercel.app)** — registration form with 4 phone inputs + npm package preview.

Local preview:

```bash
npm run example:web-form
```

Open http://localhost:5180

Deploy your own demo URL (Vercel):

```bash
cd example/web-form
npm install --legacy-peer-deps
npm run build
npx vercel
```

Set `VITE_DEMO_URL` in Vercel to your final URL (e.g. `https://your-demo.vercel.app`).

## Screenshot

![Multi Nation Input demo](./docs/images/demo.png)

> Save your screenshot as `docs/images/demo.png`. See [docs/images/README.md](./docs/images/README.md) for capture steps.

## Features

- Country picker with search
- 100+ countries with dial codes and flags
- Phone number validation per country
- Formatted display (US/CA and India helpers included)
- Controlled and uncontrolled usage
- Custom country lists (`onlyCountries`, `excludeCountries`, `preferredCountries`)
- Same API on mobile and web

## Installation

```bash
npm install multi-nation-input
```

### React Native

No extra setup required.

### Web (React + react-native-web)

```bash
npm install react-native-web react-dom
```

Configure your bundler to alias `react-native` to `react-native-web`.

## Usage

```jsx
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { MultiNationInput } from 'multi-nation-input';

export default function App() {
  const [phone, setPhone] = useState('');
  const [fullNumber, setFullNumber] = useState(null);

  return (
    <View style={{ padding: 20 }}>
      <MultiNationInput
        value={phone}
        defaultCountry="IN"
        preferredCountries={['IN', 'US', 'GB', 'AE']}
        onChangeText={setPhone}
        onChangeFullNumber={setFullNumber}
        placeholder="Enter mobile number"
      />

      {fullNumber?.isValid ? (
        <Text>Full number: {fullNumber.fullNumber}</Text>
      ) : null}
    </View>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled national number (digits only) |
| `defaultValue` | `string` | `''` | Initial number for uncontrolled mode |
| `defaultCountry` | `string` | `'US'` | ISO country code |
| `onChangeText` | `(phone: string) => void` | — | Returns sanitized digits |
| `onChangeFormattedText` | `(formatted: string) => void` | — | Returns formatted display value |
| `onChangeFullNumber` | `(payload) => void` | — | Returns phone, country, validity, and `+` prefixed number |
| `onChangeCountry` | `(country) => void` | — | Called when country changes |
| `onValidationChange` | `(isValid: boolean) => void` | — | Validation state updates |
| `placeholder` | `string` | `'Phone number'` | Input placeholder |
| `disabled` | `boolean` | `false` | Disable input and picker |
| `onlyCountries` | `string[]` | — | Restrict available countries |
| `excludeCountries` | `string[]` | — | Remove countries from list |
| `preferredCountries` | `string[]` | — | Show selected countries first |
| `error` | `string` | — | Custom error message |
| `showError` | `boolean` | `true` | Show validation/custom error |

## Utilities

```js
import {
  COUNTRIES,
  validatePhoneNumber,
  formatInternationalNumber,
  getCountryByCode,
} from 'multi-nation-input';

validatePhoneNumber('9876543210', 'IN'); // true
formatInternationalNumber('9876543210', 'IN'); // +919876543210
getCountryByCode('US'); // { code: 'US', name: 'United States', ... }
```

## Web note

This package uses React Native primitives (`View`, `TextInput`, `Modal`, etc.). On web, install and configure `react-native-web` in your app so those components render in the browser.

## Testing

### 1. Automated utility tests

```bash
npm test
```

Runs validation, formatting, and country search checks.

### 2. Web demo (fastest visual test)

```bash
npm run example:web
```

Then open **http://localhost:5173** in your browser. You can type a phone number, open the country picker, and see validation output live.

### 3. React Native app

In your React Native or Expo project:

```bash
npm install /path/to/multi-nation-input
# or: npm install ../multi-nation-input
```

```jsx
import { MultiNationInput } from 'multi-nation-input';
```

Then run your app with `npx expo start` or `npx react-native run-ios` / `run-android`.

## License

MIT
