import { test as base } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';

type Fixtures = { formPage: SignupPage; };

export const test = base.extend<Fixtures>({
  formPage: async ({ page }, use) => { await use(new SignupPage(page)); }
});

export { expect } from '@playwright/test';
