import { Page } from '@playwright/test';
import { UIActions } from '../actions/UIActions';
import { AssertUtils } from '../assertions/AssertUtils';
import { LoginPageLocators } from './locators/LoginPageLocators';

export class LoginPage {
  private readonly uiActions: UIActions;

  constructor(page: Page) {
    this.uiActions = new UIActions(page);
  }

  // ACTIONS
  public async navigateToLogin(): Promise<void> {
    await this.uiActions.navigateTo(
      '/login'
    );
  }

  public async login(username: string, password: string): Promise<void> {
    await this.uiActions.fill(LoginPageLocators.USERNAME_INPUT, username);
    await this.uiActions.fill(LoginPageLocators.PASSWORD_INPUT, password);
    await this.uiActions.click(LoginPageLocators.LOGIN_BUTTON);
  }

  // VERIFICATIONS
  public async verifyMessage(expectedMessage: string): Promise<void> {
    const actualMessage = await this.uiActions.getText(
      LoginPageLocators.MESSAGE
    );

    await AssertUtils.assertEquals(
      actualMessage,
      expectedMessage,
      'Login error message mismatch'
    );  
  }

  public async verifyHeader(expectedHeader: string): Promise<void> {
    const actualHeader = await this.uiActions.getText(
      LoginPageLocators.HEADER
    );

    await AssertUtils.assertEquals(
      actualHeader,
      expectedHeader,
      'Header text mismatch'
    );
  }
}