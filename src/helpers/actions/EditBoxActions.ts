// src/helper/actions/EditBoxActions.ts

import { Locator } from '@playwright/test';
import { LocatorFactory } from './LocatorFactory';

export class EditBoxActions {
  private locator!: Locator;
  private description!: string;

  public setInput(input: string | Locator, description: string): EditBoxActions {
    this.locator = LocatorFactory.getLocator(input);
    this.description = description;
    return this;
  }

  public async fill(value: string): Promise<void> {
    console.log(`Filling '${value}' into ${this.description}`);
    await this.locator.fill(value);
  }

  public async type(text: string): Promise<void> {
    console.log(`Typing '${text}' into ${this.description}`);
    await this.locator.fill(text);
  }

  public async clear(): Promise<void> {
    console.log(`Clearing ${this.description}`);
    await this.locator.fill('');
  }

  public async getValue(): Promise<string> {
    console.log(`Getting value from ${this.description}`);
    return await this.locator.inputValue();
  }
}