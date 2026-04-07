// src/helper/actions/PageActions.ts

import { BrowserContext, Page } from '@playwright/test';
import { Logger } from '../logger/Logger';
import { pageFixture } from '../../support/PageFixeture';

export class PageActions {
  private page: Page;
  private context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;

    // Keep pageFixture in sync at initialization
    if (pageFixture) {
      pageFixture.page = page;
      pageFixture.context = context;
    }
  }

  public getPage(): Page {
    return this.page;
  }

  public async gotoURL(url: string, description = 'target URL'): Promise<void> {
    Logger.step(`Navigate to ${description}: ${url}`);
    await this.page.goto(url, { waitUntil: 'load' });
  }

  public async switchToDefaultPage(): Promise<void> {
    Logger.step('Switch to default (first) page');
    const pages = this.context.pages();
    if (pages.length > 0) {
      await pages[0].bringToFront();
      this.page = pages[0];
      pageFixture.page = this.page;
      Logger.info('Switched to default page');
    } else {
      throw new Error('No pages found in context');
    }
  }

  public async switchToLastOpenedPage(): Promise<void> {
    Logger.step('Switch to last opened page');
    const pages = this.context.pages();
    if (pages.length > 1) {
      const lastPage = pages[pages.length - 1];
      await lastPage.bringToFront();
      this.page = lastPage;
      pageFixture.page = this.page;
      Logger.info('Switched to last opened page');
    } else {
      throw new Error('No additional pages to switch to');
    }
  }

  public async switchToFrameByIndex(index: number): Promise<void> {
    Logger.step(`Switch to frame at index ${index}`);
    const frame = this.page.frames()[index];
    if (!frame) {
      throw new Error(`Frame at index ${index} not found`);
    }
    this.page = frame.page();
    pageFixture.page = this.page;
  }

  public async closeCurrentTab(): Promise<void> {
    Logger.info('Close current tab');
    await this.page.close();
    Logger.info('Closed current tab');
  }

  public async resizeWindow(width: number, height: number): Promise<void> {
    Logger.step(`Resize window to ${width}x${height}`);
    await this.page.setViewportSize({ width, height });
  }

  public async waitForLoadState(
    state: 'load' | 'domcontentloaded' | 'networkidle' = 'load'
  ): Promise<void> {
    Logger.step(`Wait for page load state: ${state}`);
    await this.page.waitForLoadState(state);
  }
}