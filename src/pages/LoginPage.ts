import { AssertUtils } from '../assertions/AssertUtils';
import { PageActions } from '../helpers/actions/PageActions';
import { UIActions } from '../helpers/actions/UIActions';
import { pageFixture } from '../support/PageFixeture';
import { LoginPageLocators } from './locators/LoginPageLocators';

export class LoginPage {
  private readonly uiActions: UIActions;
  private readonly pageActions: PageActions;

  constructor(pageActions?: PageActions) {
    this.pageActions = pageActions ?? new PageActions(pageFixture.page, pageFixture.context);
    this.uiActions = new UIActions(this.pageActions);
  }

  public async navigateToLogin(): Promise<void> {
    await this.pageActions.gotoURL('/login', 'Login Page');
  }

  public async login(username: string, password: string): Promise<void> {
    await this.uiActions.editBox(LoginPageLocators.USERNAME_INPUT, 'Username input').fill(username);
    await this.uiActions.editBox(LoginPageLocators.PASSWORD_INPUT, 'Password input').fill(password);
    await this.uiActions.element(LoginPageLocators.LOGIN_BUTTON, 'Login button').click();
  }

  public async assertLoginMessage(expectedMessage: string): Promise<void> {
    const actualMessage = await this.uiActions
      .element(LoginPageLocators.MESSAGE, 'Login message')
      .textContent();

    await AssertUtils.assertEquals(actualMessage?.trim() ?? '', expectedMessage, 'Login message mismatch');
  }

  public async verifyHeader(expectedHeader: string): Promise<void> {
    const actualHeader = await this.uiActions.element(LoginPageLocators.HEADER, 'Page header').textContent();

    await AssertUtils.assertEquals(actualHeader?.trim() ?? '', expectedHeader, 'Header text mismatch');
  }
}
