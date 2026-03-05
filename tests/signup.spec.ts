import { test } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';
import { generateUserData } from '../utils/Data';

test.describe.configure({ retries: 1 });

test.describe('Signup Form', () => {

  test('Fill signup form dynamically', async ({ page }) => {
    test.setTimeout(60000); // 60s timeout

    const signupPage = new SignupPage(page);
    const userData = generateUserData();

    await signupPage.navigate();
    await signupPage.fillForm(userData);
    await signupPage.submitForm();
  });
});
