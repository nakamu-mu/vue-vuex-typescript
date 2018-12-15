import {MENU} from '../../common/constant';

export function setUserName(state: any, userName: string): void {
  state.common.userName = userName;
}

export function setUserId(state: any, userId: string): void {
  state.common.userId = userId;
}

export function setSelectedMenu(state: any, selectedMenu: MENU): void {
  state.common.selectedMenu = selectedMenu;
}

export function getSelectedMenu(state: any): MENU {
  return state.common.selectedMenu;
}
