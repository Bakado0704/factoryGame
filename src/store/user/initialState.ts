import User from "../../models/user";
import { JobType } from "../../types/job";
import { UserIconType } from "../../types/userIcons";
import { productType } from "../../types/product";
import UserIcons from "../../models/userIcons";
import { Mute } from "../../types/user";

export type state = {
  previewIcon: UserIcons;
  user: User;
  UserIcons: UserIcons[];
};

const initialState: state = {
  UserIcons: [
    new UserIcons("man1", UserIconType.man1),
    new UserIcons("man2", UserIconType.man2),
    new UserIcons("man3", UserIconType.man3),
    new UserIcons("man4", UserIconType.man4),
    new UserIcons("man5", UserIconType.man5),
    new UserIcons("man6", UserIconType.man6),
    new UserIcons("man7", UserIconType.man7),
    new UserIcons("man8", UserIconType.man8),
    new UserIcons("man9", UserIconType.man9),
    new UserIcons("man10", UserIconType.man10),
    new UserIcons("woman1", UserIconType.woman1),
    new UserIcons("woman2", UserIconType.woman2),
    new UserIcons("woman3", UserIconType.woman3),
    new UserIcons("woman4", UserIconType.woman4),
    new UserIcons("woman5", UserIconType.woman5),
    new UserIcons("woman6", UserIconType.woman6),
    new UserIcons("woman7", UserIconType.woman7),
    new UserIcons("woman8", UserIconType.woman8),
    new UserIcons("woman9", UserIconType.woman9),
    new UserIcons("woman10", UserIconType.woman10),
  ],

  user: {
    name: "user001",
    id: "user001",
    money: 1000,
    icon: UserIconType.man1,
    nowJob: JobType.yamagawa,
    gachaStandBy: false,
    productType: productType.default,
    page: "start",
    gachaStatus: "stop",
    gachaCost: 1000,
    drink: 0,
    drinkCost: 0,
    mute: Mute.on,
  },

  previewIcon: {
    id: "man1",
    icon: UserIconType.man1,
  },
};

export default initialState;
