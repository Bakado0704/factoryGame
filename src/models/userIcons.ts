import { JobName } from "../types/job";
import { UserIcons as _UserIcons } from "../types/userIcons";
import { UserIconType } from "../types/userIcon";

export default class UserIcons implements UserIcons {
  constructor(
    public id: string,
    public icon: UserIconType,
  ) {
    this.id = id;
    this.icon = icon;
  }
}
