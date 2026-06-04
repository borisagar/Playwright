import { CheckBoxActions } from './CheckBoxActions';
import { DropDownActions } from './DropDownActions';
import { EditBoxActions } from './EditBoxActions';
import { UIElementActions } from './UIElementsActions';
import { PageActions } from './PageActions';
import { Locator } from '@playwright/test';

export class UIActions {
  private readonly elementAction: UIElementActions;
  private readonly editBoxAction: EditBoxActions;
  private readonly checkboxAction: CheckBoxActions;
  private readonly dropdownAction: DropDownActions;
  private readonly pageActions: PageActions;

  constructor(actions: PageActions) {
    this.pageActions = actions;

    this.elementAction = new UIElementActions();
    this.editBoxAction = new EditBoxActions();
    this.checkboxAction = new CheckBoxActions();
    this.dropdownAction = new DropDownActions();
  }

  public checkbox(selector: string | Locator, description: string) {
    return this.checkboxAction.setCheckbox(
      this.elementAction.setElement(selector, description).getLocator(),
      description
    );
  }

  public dropdown(selector: string | Locator, description: string) {
    return this.dropdownAction.setDropdown(
      this.elementAction.setElement(selector, description).getLocator(),
      description
    );
  }

  public editBox(selector: string | Locator, description: string) {
    return this.editBoxAction.setInput(selector, description);
  }

  public element(selector: string | Locator, description: string) {
    return this.elementAction.setElement(selector, description).getLocator();
  }

  public getPageActions(): PageActions {
    return this.pageActions;
  }
}