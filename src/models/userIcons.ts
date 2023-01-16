import { UserIcons as _UserIcons } from "../types/userIcons";
import { UserIconType } from "../types/userIcons";

export default class UserIcons implements UserIcons {
  constructor(
    public id: string,
    public icon: UserIconType,
  ) {
    this.id = id;
    this.icon = icon;
  }
}
