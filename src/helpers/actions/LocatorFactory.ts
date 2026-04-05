// src/helper/actions/LocatorFactory.ts

import { Locator, selectors } from '@playwright/test';
import { pageFixture } from '../../support/PageFixeture';

export class LocatorFactory {
  /**
   * Ensures that pageFixture is initialized before use.
   */
  private static get page() {
    if (!pageFixture?.page) {
      throw new Error(
        'pageFixture is not initialized. Ensure tests are executed using PageSetup.'
      );
    }
    return pageFixture.page;
  }

  /**
   * Returns a Locator object based on the input provided.
   * @param input - The input to create the Locator from.
   */
  public static getLocator(input: string | Locator): Locator {
    return typeof input === 'string' ? this.page.locator(input) : input;
  }

  /**
   * Returns a Locator object with a specific testId.
   * @param testId - The testId to create the Locator from.
   * @param attributeName - Optional attribute name for the testId.
   */
  public static getLocatorByTestId(testId: string | RegExp, attributeName?: string): Locator {
    if (attributeName) {
      selectors.setTestIdAttribute(attributeName);
    }
    return this.page.getByTestId(testId);
  }

  /**
   * Returns a Locator object with a specific text.
   */
  public static getLocatorByText(text: string | RegExp): Locator {
    return this.page.getByText(text);
  }

  /**
   * Returns a Locator object with a specific label.
   */
  public static getLocatorByLabel(text: string | RegExp): Locator {
    return this.page.getByLabel(text);
  }

  /**
   * Returns a Locator object with a specific placeholder.
   */
  public static getLocatorByPlaceholder(text: string | RegExp): Locator {
    return this.page.getByPlaceholder(text);
  }

  /**
   * Returns a Locator object with a specific title.
   */
  public static getLocatorByTitle(text: string | RegExp): Locator {
    return this.page.getByTitle(text);
  }

  /**
   * Returns a Locator object with a specific alt text.
   */
  public static getLocatorByAltText(text: string | RegExp): Locator {
    return this.page.getByAltText(text);
  }

  /**
   * Returns all Locator objects based on the input provided.
   */
  public static async getAllLocators(input: string | Locator): Promise<Locator[]> {
    return typeof input === 'string'
      ? await this.page.locator(input).all()
      : await input.all();
  }
}