//src/config/PageSetup.ts

import { test as base } from '@playwright/test';
import { PageActions } from '../helpers/actions/PageActions';
import { setPageFixture } from '../support/PageFixeture';

type FrameworkFixtures = {
  actions: PageActions;
};

export const test = base.extend<FrameworkFixtures>({
  actions: async ({ page, context, browser }, use) => {
    setPageFixture({ browser, context, page });

    const actions = new PageActions(page, context);
    await use(actions);
  }
});

export { expect } from '@playwright/test';