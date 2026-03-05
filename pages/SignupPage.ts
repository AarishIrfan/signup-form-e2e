import { Page } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://qavbox.github.io/demo/signup/');
  }

  async fillForm(data: any) {
    // Fill basic info
    await this.page.fill('#username', data.fullName);
    await this.page.fill('#email', data.email);
    await this.page.fill('#tel', data.telephone);

    // File upload - make sure the path exists
    if (data.profilePic) {
      await this.page.setInputFiles('input[name="datafile"]', data.profilePic);
    }

    // Gender
    if (data.gender) {
      await this.page.selectOption('select[name="sgender"]', data.gender);
    }

    // Years of Experience
    if (data.experience) {
      const expMap: Record<string, string> = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        'Above 7': 'above seven'
      };
      const expValue = expMap[data.experience];
      if (expValue) {
        await this.page.check(`input[name="experience"][value="${expValue}"]`);
      }
    }

    // Skills (checkboxes)
    if (data.skills?.length) {
      for (const skill of data.skills) {
        const checkboxLocator = this.page.locator(`input[name="language"][value="${skill.toLowerCase()}"]`);
        await checkboxLocator.scrollIntoViewIfNeeded();
        await checkboxLocator.check();
      }
    }

    // Automation Tools (multi-select)
    if (data.tools?.length) {
      const toolsLocator = this.page.locator('#tools');
      await toolsLocator.waitFor({ state: 'visible' });
      await toolsLocator.evaluate(el => el.scrollIntoView()); // scroll into view if needed
      await toolsLocator.selectOption(data.tools); // use exact casing from HTML
    }
  }

  async submitForm() {
    // Handle alert automatically
    this.page.once('dialog', dialog => dialog.accept());
    await this.page.click('#submit');
  }
}
