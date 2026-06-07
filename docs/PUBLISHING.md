# Publishing to npm

## Current account status

- npm user: `vikashwebb`
- 2FA: **must be enabled** before publish works

## Step 1 — Enable 2FA (one time)

1. Open https://www.npmjs.com/settings/vikashwebb/security
2. Under **Two-Factor Authentication**, click **Enable 2FA**
3. Choose **Authorization and publishing** (required for `npm publish`)
4. Scan the QR code with Google Authenticator, Authy, or 1Password
5. Save your recovery codes

## Step 2 — Publish with OTP

Get the 6-digit code from your authenticator app, then run:

```bash
npm publish --otp=123456
```

Replace `123456` with your current code.

## Alternative — Granular access token

1. https://www.npmjs.com/settings/vikashwebb/tokens
2. **Generate New Token** → **Granular Access Token**
3. Permissions: **Read and write**
4. Packages: all or `multi-nation-input`
5. Use the token:

```bash
npm config set //registry.npmjs.org/:_authToken YOUR_TOKEN
npm publish --otp=123456
```

## Verify after publish

```bash
npm view multi-nation-input
```

Package page: https://www.npmjs.com/package/multi-nation-input
