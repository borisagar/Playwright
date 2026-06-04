import { Locator } from '@playwright/test';
import { LocatorFactory } from './LocatorFactory';

export class DropDownActions {
  private locator!: Locator;
  private description!: string;

  public setDropdown(selector: string | Locator, description: string): DropDownActions {
    this.locator = LocatorFactory.getLocator(selector);
    this.description = description;
    return this;
  }

  public async selectByValue(value: string): Promise<void> {
    console.log(`Selecting value '${value}' in ${this.description}`);
    await this.locator.selectOption({ value });
  }

  public async selectByLabel(label: string): Promise<void> {
    console.log(`Selecting label '${label}' in ${this.description}`);
    await this.locator.selectOption({ label });
  }

  public async getSelectedValue(): Promise<string> {
    console.log(`Getting selected value of ${this.description}`);
    return await this.locator.inputValue();
  }
}