import { merge } from '@ember/polyfills';
import { getContext } from '@ember/test-helpers';

import { authenticateSession } from 'ember-simple-auth/test-support';
export { invalidateSession } from 'ember-simple-auth/test-support';

export function authenticateUser(attrs = {}) {
  let expiresAt = new Date().getTime() + 600000;
  return authenticateSession(merge({
    name: 'hradmin',
    roles: ['System Administrator', 'admin', 'user'],
    expires_at: expiresAt,
    role: 'System Administrator',
    prefix: 'p1'
  }, attrs));
}