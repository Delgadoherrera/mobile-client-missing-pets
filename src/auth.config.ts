import { isPlatform } from "@ionic/react";

export const domain = "dev-282tdo26yvhz288g.us.auth0.com";
export const clientId = "F5SG1c0PGGKzM2wMFPT6JwGZaYWH2s82";
const appId = "com.auth0.samples";

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform('hybrid');

export const callbackUri = iosOrAndroid
  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
  : 'http://localhost:8100';