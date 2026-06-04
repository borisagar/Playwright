// src/helper/actions/UIElementActions.ts

import { Locator } from '@playwright/test';
import { LocatorFactory } from './LocatorFactory';

export class UIElementActions {
  protected locator!: Locator;
  protected description!: string;

  public getLocator(): Locator {
    return this.locator;
  }

  public getLocators(): Promise<Locator[]> {
    return LocatorFactory.getAllLocators(this.locator);
  }

  public setElement(selector: string | Locator, description: string): UIElementActions {
    this.locator = LocatorFactory.getLocator(selector);
    this.description = description;
    return this;
  }

  public setLocator(locator: Locator, description: string): UIElementActions {
    this.locator = locator;
    this.description = description;
    return this;
  }

  public async click(): Promise<void> {
    console.log(`Click on ${this.description}`);
    await this.locator.click();
  }

  public async hover(): Promise<void> {
    console.log(`Hover on ${this.description}`);
    await this.locator.hover();
  }

  public async getText(): Promise<string> {
    console.log(`Get text from ${this.description}`);
    return (await this.locator.textContent())?.trim() || '';
  }
}