// src/helper/actions/CheckBoxActions.ts

import { Locator } from '@playwright/test';
import { LocatorFactory } from './LocatorFactory';

export class CheckBoxActions {
  private locator!: Locator;
  private description!: string;

  public setCheckbox(selector: string | Locator, description: string): CheckBoxActions {
    this.locator = LocatorFactory.getLocator(selector);
    this.description = description;
    return this;
  }

  public async check(): Promise<void> {
    console.log(`Checking ${this.description}`);
    await this.locator.check();
  }

  public async uncheck(): Promise<void> {
    console.log(`Unchecking ${this.description}`);
    await this.locator.uncheck();
  }

  public async isChecked(): Promise<boolean> {
    console.log(`Checking if ${this.description} is checked`);
    return await this.locator.isChecked();
  }
}