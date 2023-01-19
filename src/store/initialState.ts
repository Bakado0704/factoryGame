import Job from "../models/job";
import Outline from "../models/outline";
import User from "../models/user";
import { JobType } from "../types/job";
import { UserIconType } from "../types/userIcons";
import { Play, PlayColor } from "../types/play";
import PlayPattern from "../models/playpattern";
import PlayTarget from "../models/playtarget";
import playpattern from "../models/playpattern";
import { productType } from "../types/product";
import { ImageSourcePropType } from "react-native";
import UserIcons from "../models/userIcons";
import { Mute } from "../types/user";

export type state = {
  jobs: Job[];
  job: Job;
  nextJob: Job;
  prevJob: Job;
  nextProduct: { before: ImageSourcePropType }[];
  centerProduct: { before: ImageSourcePropType }[];
  failureProduct: { before: ImageSourcePropType }[];
  previewJob?: Job;
  previewIcon: UserIcons;
  user: User;
  UserIcons: UserIcons[];
  play: Play;
  activePlayPattern: playpattern[];
};

const initialState: state = {
  jobs: [
    new Job(
      "c1",
      JobType.yamagawa,
      JobType.yamagawa,
      true,
      1,
      0,
      0,
      [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      JobType.yamagawa,
      JobType.yamagawa,
      {
        default: [
          { before: require("../assets/product/product1-normal-first.png") },
          {
            before: require("../assets/product/product1-normal-second.png"),
          },
          { before: require("../assets/product/product1-normal-third.png") },
        ],
        defaultFailure: [
          { before: require("../assets/product/product1-normal-failure.png") },
        ],
        bonus: [
          { before: require("../assets/product/product1-gold-first.png") },
          { before: require("../assets/product/product1-gold-second.png") },
          { before: require("../assets/product/product1-gold-third.png") },
        ],
        bonusFailure: [
          { before: require("../assets/product/product1-gold-failure.png") },
        ],
        style: { width: 200, height: 80 },
      },
      {
        name: "山川 哲郎(62)",
        message: "「残業なき労働に価値なし」",
      },
      new Outline(
        "山川製作所",
        "精密機械工場",
        "システム基盤構築",
        15,
        1,
        "完全週休一日制",
        "90%",
        "鳥取県",
        require("../assets/outline/outlineBgYamagawa.png"),
        require("../assets/outline/outlineButtonYamagawa.png")
      )
    ),
    new Job(
      "c2",
      JobType.souzuki,
      JobType.souzuki,
      false,
      1,
      0,
      0,
      [12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      JobType.souzuki,
      JobType.souzuki,
      {
        default: [
          { before: require("../assets/product/product2-normal-first.png") },
          {
            before: require("../assets/product/product2-normal-second.png"),
          },
          { before: require("../assets/product/product2-normal-third.png") },
        ],
        defaultFailure: [
          { before: require("../assets/product/product2-normal-failure.png") },
        ],
        bonus: [
          { before: require("../assets/product/product2-gold-first.png") },
          { before: require("../assets/product/product2-gold-second.png") },
          { before: require("../assets/product/product2-gold-third.png") },
        ],
        bonusFailure: [
          { before: require("../assets/product/product2-gold-failure.png") },
        ],
        style: { width: 270, height: 207 },
      },
      {
        name: "新盛 晋(50)",
        message: "「仕事は定時を過ぎてから本番」",
      },
      new Outline(
        "蒼月",
        "化粧品工場",
        "製品の梱包",
        12,
        1,
        "週休2日制",
        "72%",
        "北海道",
        require("../assets/outline/outlineBgNiimori.png"),
        require("../assets/outline/outlineButtonNiimori.png")
      )
    ),

    new Job(
      "c3",
      JobType.ashBerry,
      JobType.ashBerry,
      false,
      1,
      0,
      0,
      [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      JobType.ashBerry,
      JobType.ashBerry,
      {
        default: [
          { before: require("../assets/product/product3-normal-first.png") },
          {
            before: require("../assets/product/product3-normal-second.png"),
          },
          { before: require("../assets/product/product3-normal-third.png") },
        ],
        defaultFailure: [
          { before: require("../assets/product/product3-normal-failure.png") },
        ],
        bonus: [
          { before: require("../assets/product/product3-gold-first.png") },
          { before: require("../assets/product/product3-gold-second.png") },
          { before: require("../assets/product/product3-gold-third.png") },
        ],
        bonusFailure: [
          { before: require("../assets/product/product3-gold-failure.png") },
        ],
        style: { width: 202, height: 89 },
      },
      {
        name: "宮古 洋平(56)",
        message: "「有給なんて都市伝説」",
      },
      new Outline(
        "アッシュベリー Inc.",
        "食品工場",
        "パンの製造",
        20,
        1,
        "完全週休一日制",
        "51%",
        "東京都",
        require("../assets/outline/outlineBgMiyako.png"),
        require("../assets/outline/outlineButtonMiyako.png")
      )
    ),
    new Job(
      "c4",
      JobType.bentaro,
      JobType.bentaro,
      false,
      1,
      0,
      0,
      [18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
      JobType.bentaro,
      JobType.bentaro,
      {
        default: [
          { before: require("../assets/product/product4-normal-first.png") },
          {
            before: require("../assets/product/product4-normal-second.png"),
          },
          { before: require("../assets/product/product4-normal-third.png") },
          { before: require("../assets/product/product4-normal-fourth.png") },
        ],
        defaultFailure: [
          { before: require("../assets/product/product4-normal-failure.png") },
        ],
        bonus: [
          { before: require("../assets/product/product4-gold-first.png") },
          { before: require("../assets/product/product4-gold-second.png") },
          { before: require("../assets/product/product4-gold-third.png") },
          { before: require("../assets/product/product4-gold-fourth.png") },
        ],
        bonusFailure: [
          { before: require("../assets/product/product4-gold-failure.png") },
        ],
        style: { width: 200, height: 130 },
      },
      {
        name: "辻 踏弥(48)",
        message: "「経費を建て替えるのはやる気がある証拠」",
      },
      new Outline(
        "オリジン弁太郎",
        "弁当工場",
        "食品の盛り付け",
        18,
        1,
        "週休一日制",
        "80%",
        "埼玉県",
        require("../assets/outline/outlineBgTsuji.png"),
        require("../assets/outline/outlineButtonTsuji.png")
      )
    ),
    new Job(
      "c5",
      JobType.aguron,
      JobType.aguron,
      false,
      1,
      0,
      0,
      [27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
      JobType.aguron,
      JobType.aguron,
      {
        default: [
          { before: require("../assets/product/product5-normal-first.png") },
          {
            before: require("../assets/product/product5-normal-second.png"),
          },
          { before: require("../assets/product/product5-normal-third.png") },
        ],
        defaultFailure: [
          { before: require("../assets/product/product5-normal-failure.png") },
        ],
        bonus: [
          { before: require("../assets/product/product5-gold-first.png") },
          { before: require("../assets/product/product5-gold-second.png") },
          { before: require("../assets/product/product5-gold-third.png") },
        ],
        bonusFailure: [
          { before: require("../assets/product/product5-gold-failure.png") },
        ],
        style: { width: 200, height: 172 },
      },
      {
        name: "リー・ハオラン(54)",
        message: "「日本を侵略するアルヨ」",
      },
      new Outline(
        "アグロン精密",
        "精密機械工場",
        "PC部材の取付",
        25,
        1,
        "祝日のみ",
        "87%",
        "埼玉県",
        require("../assets/outline/outlineBgLie.png"),
        require("../assets/outline/outlineButtonLie.png")
      )
    ),
    new Job(
      "c6",
      JobType.starFoods,
      JobType.starFoods,
      false,
      1,
      0,
      0,
      [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      JobType.starFoods,
      JobType.starFoods,
      {
        default: [
          { before: require("../assets/product/product6-normal-first.png") },
          {
            before: require("../assets/product/product6-normal-second.png"),
          },
          { before: require("../assets/product/product6-normal-third.png") },
          { before: require("../assets/product/product6-normal-fourth.png") },
        ],
        defaultFailure: [
          { before: require("../assets/product/product6-normal-failure.png") },
        ],
        bonus: [
          { before: require("../assets/product/product6-gold-first.png") },
          { before: require("../assets/product/product6-gold-second.png") },
          { before: require("../assets/product/product6-gold-third.png") },
          { before: require("../assets/product/product6-gold-fourth.png") },
        ],
        bonusFailure: [
          { before: require("../assets/product/product6-gold-failure.png") },
        ],
        style: { width: 200, height: 150 },
      },
      {
        name: "竹内 ゲンノシン(47)",
        message: "「サービス残業は社会人の常識」",
      },
      new Outline(
        "スター・フーズ",
        "洋菓子工場",
        "ケーキのデコレーション",
        20,
        1,
        "完全週休一日制",
        "65%",
        "福井県",
        require("../assets/outline/outlineBgTakeuchi.png"),
        require("../assets/outline/outlineButtonTakeuchi.png")
      )
    ),
    new Job(
      "c7",
      JobType.sikaga,
      JobType.sikaga,
      false,
      1,
      0,
      0,
      [27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
      JobType.sikaga,
      JobType.sikaga,
      {
        default: [
          { before: require("../assets/product/product7-normal-first.png") },
          {
            before: require("../assets/product/product7-normal-second.png"),
          },
          { before: require("../assets/product/product7-normal-third.png") },
        ],
        defaultFailure: [
          { before: require("../assets/product/product7-normal-failure.png") },
        ],
        bonus: [
          { before: require("../assets/product/product7-normal-first.png") },
          { before: require("../assets/product/product7-gold-second.png") },
          { before: require("../assets/product/product7-gold-third.png") },
        ],
        bonusFailure: [
          { before: require("../assets/product/product7-gold-failure.png") },
        ],
        style: { width: 252, height: 82 },
      },
      {
        name: "黒口 隆(51)",
        message: "「用事がないなら休むな当然だ」",
      },
      new Outline(
        "鹿賀水産",
        "食品工場",
        "ぶりの切り身加工",
        27,
        1,
        "祝日のみ",
        "71%",
        "山形県",
        require("../assets/outline/outlineBgKuroguchi.png"),
        require("../assets/outline/outlineButtonKuroguchi.png")
      )
    ),
    new Job(
      "c8",
      JobType.tamazu,
      JobType.tamazu,
      false,
      1,
      0,
      0,
      [18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
      JobType.tamazu,
      JobType.tamazu,
      {
        default: [
          { before: require("../assets/product/product8-normal-first.png") },
          {
            before: require("../assets/product/product8-normal-second.png"),
          },
          { before: require("../assets/product/product8-normal-third.png") },
          { before: require("../assets/product/product8-normal-fourth.png") },
        ],
        defaultFailure: [
          { before: require("../assets/product/product8-normal-failure.png") },
        ],
        bonus: [
          { before: require("../assets/product/product8-gold-first.png") },
          { before: require("../assets/product/product8-gold-second.png") },
          { before: require("../assets/product/product8-gold-third.png") },
          { before: require("../assets/product/product8-gold-fourth.png") },
        ],
        bonusFailure: [
          { before: require("../assets/product/product8-gold-failure.png") },
        ],
        style: { width: 138, height: 222 },
      },
      {
        name: "山下 五郎(55)",
        message: "「無理を1週間続けたら、無理じゃなくなる」",
      },
      new Outline(
        "玉津アーセナル",
        "精密機械工場",
        "製品の組立",
        18,
        1,
        "完全週休一日制",
        "61%",
        "青森県",
        require("../assets/outline/outlineBgYamashita.png"),
        require("../assets/outline/outlineButtonYamashita.png")
      )
    ),
    new Job(
      "c9",
      JobType.ozasa,
      JobType.ozasa,
      false,
      1,
      0,
      0,
      [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      JobType.ozasa,
      JobType.ozasa,
      {
        default: [
          { before: require("../assets/product/product9-normal-first.png") },
          {
            before: require("../assets/product/product9-normal-second.png"),
          },
          { before: require("../assets/product/product9-normal-third.png") },
        ],
        defaultFailure: [
          { before: require("../assets/product/product9-normal-failure.png") },
        ],
        bonus: [
          { before: require("../assets/product/product9-gold-first.png") },
          { before: require("../assets/product/product9-gold-second.png") },
          { before: require("../assets/product/product9-gold-third.png") },
        ],
        bonusFailure: [
          { before: require("../assets/product/product9-gold-failure.png") },
        ],
        style: { width: 300, height: 145 },
      },
      {
        name: "小篠 隆生(65)",
        message: "「ストレスで胃に穴をあけるのも給料のうち」",
      },
      new Outline(
        "小篠建設",
        "建材工場",
        "建設用鋼板の加工",
        10,
        1,
        "無し",
        "98%",
        "北海道",
        require("../assets/outline/outlineBgOzasa.png"),
        require("../assets/outline/outlineButtonOzasa.png")
      )
    ),
    new Job(
      "c10",
      JobType.tanabe,
      JobType.tanabe,
      false,
      1,
      0,
      0,
      [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      JobType.tanabe,
      JobType.tanabe,
      {
        default: [
          {
            before: require("../assets/product/product10-normal-first.png"),
          },
          {
            before: require("../assets/product/product10-normal-second.png"),
          },
          {
            before: require("../assets/product/product10-normal-third.png"),
          },
        ],
        defaultFailure: [
          { before: require("../assets/product/product10-normal-failure.png") },
        ],
        bonus: [
          { before: require("../assets/product/product10-gold-first.png") },
          { before: require("../assets/product/product10-gold-second.png") },
          { before: require("../assets/product/product10-gold-third.png") },
        ],
        bonusFailure: [
          { before: require("../assets/product/product10-gold-failure.png") },
        ],
        style: { width: 280, height: 105 },
      },
      {
        name: "鴨林 勇太(43)",
        message: "「定時退社は早退と同じ」",
      },
      new Outline(
        "タナベ工務店",
        "建材工場",
        "建設用木材の加工",
        10,
        1,
        "無し",
        "99%",
        "東京都",
        require("../assets/outline/outlineBgKamobayashi.png"),
        require("../assets/outline/outlineButtonKamobayashi.png")
      )
    ),
  ],

  job: {
    id: "c1",
    icon: JobType.yamagawa,
    name: JobType.yamagawa,
    isActive: true,
    level: 1,
    maxNumber: 0,
    maxMoney: 0,
    perMoney: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    backgroundImg: JobType.yamagawa,
    boardImg: JobType.yamagawa,
    product: {
      default: [
        { before: require("../assets/product/product1-normal-first.png") },
        { before: require("../assets/product/product1-normal-second.png") },
        { before: require("../assets/product/product1-normal-third.png") },
      ],
      defaultFailure: [
        { before: require("../assets/product/product1-normal-failure.png") },
      ],
      bonus: [
        { before: require("../assets/product/product1-gold-first.png") },
        { before: require("../assets/product/product1-gold-second.png") },
        { before: require("../assets/product/product1-gold-third.png") },
      ],
      bonusFailure: [
        { before: require("../assets/product/product1-gold-failure.png") },
      ],
      style: { width: 200, height: 80 },
    },
    owner: {
      name: "山川 哲郎(62)",
      message: "「残業なき労働に価値なし」",
    },
    outline: {
      company: "山川製作所",
      category: "精密機械工場",
      work: "システム基盤構築",
      basicMoney: 15,
      level: 1,
      holiday: "完全週休一日制",
      retirement: "90%",
      workplace: "鳥取県",
      background: require("../assets/outline/outlineBgYamagawa.png"),
      button: require("../assets/outline/outlineButtonYamagawa.png"),
    },
  },

  nextJob: {
    id: "c1",
    icon: JobType.yamagawa,
    name: JobType.yamagawa,
    isActive: true,
    level: 1,
    maxNumber: 0,
    maxMoney: 0,
    perMoney: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    backgroundImg: JobType.yamagawa,
    boardImg: JobType.yamagawa,
    product: {
      default: [
        { before: require("../assets/product/product1-normal-first.png") },
        { before: require("../assets/product/product1-normal-second.png") },
        { before: require("../assets/product/product1-normal-third.png") },
      ],
      defaultFailure: [
        { before: require("../assets/product/product1-normal-failure.png") },
      ],
      bonus: [
        { before: require("../assets/product/product1-gold-first.png") },
        { before: require("../assets/product/product1-gold-second.png") },
        { before: require("../assets/product/product1-gold-third.png") },
      ],
      bonusFailure: [
        { before: require("../assets/product/product1-gold-failure.png") },
      ],
      style: { width: 200, height: 80 },
    },
    owner: {
      name: "山川 哲郎(62)",
      message: "「残業なき労働に価値なし」",
    },
    outline: {
      company: "山川製作所",
      category: "精密機械工場",
      work: "システム基盤構築",
      basicMoney: 15,
      level: 1,
      holiday: "完全週休一日制",
      retirement: "90%",
      workplace: "鳥取県",
      background: require("../assets/outline/outlineBgYamagawa.png"),
      button: require("../assets/outline/outlineButtonYamagawa.png"),
    },
  },

  prevJob: {
    id: "c1",
    icon: JobType.yamagawa,
    name: JobType.yamagawa,
    isActive: true,
    level: 1,
    maxNumber: 0,
    maxMoney: 0,
    perMoney: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    backgroundImg: JobType.yamagawa,
    boardImg: JobType.yamagawa,
    product: {
      default: [
        { before: require("../assets/product/product1-normal-first.png") },
        { before: require("../assets/product/product1-normal-second.png") },
        { before: require("../assets/product/product1-normal-third.png") },
      ],
      defaultFailure: [
        { before: require("../assets/product/product1-normal-failure.png") },
      ],
      bonus: [
        { before: require("../assets/product/product1-gold-first.png") },
        { before: require("../assets/product/product1-gold-second.png") },
        { before: require("../assets/product/product1-gold-third.png") },
      ],
      bonusFailure: [
        { before: require("../assets/product/product1-normal-failure.png") },
      ],
      style: { width: 200, height: 80 },
    },
    owner: {
      name: "山川 哲郎(62)",
      message: "「残業なき労働に価値なし」",
    },
    outline: {
      company: "山川製作所",
      category: "精密機械工場",
      work: "システム基盤構築",
      basicMoney: 15,
      level: 1,
      holiday: "完全週休一日制",
      retirement: "90%",
      workplace: "鳥取県",
      background: require("../assets/outline/outlineBgYamagawa.png"),
      button: require("../assets/outline/outlineButtonYamagawa.png"),
    },
  },

  nextProduct: [
    { before: require("../assets/product/product1-normal-first.png") },
    { before: require("../assets/product/product1-normal-second.png") },
    { before: require("../assets/product/product1-normal-third.png") },
  ],

  centerProduct: [
    { before: require("../assets/product/product1-normal-first.png") },
    { before: require("../assets/product/product1-normal-second.png") },
    { before: require("../assets/product/product1-normal-third.png") },
  ],

  failureProduct: [
    { before: require("../assets/product/product1-normal-failure.png") },
  ],

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
    prevProductType: productType.default,
    nextProductType: productType.default,
    page: "start",
    gachaStatus: "stop",
    gachaCost: 500,
    drink: 0,
    drinkCost: 0,
    mute: Mute.on,
  },

  previewJob: undefined,
  previewIcon: {
    id: "man1",
    icon: UserIconType.man1,
  },

  play: {
    status: "stop", // ゲームの状態を管理
    judge: "waiting", // ゲームの状態を管理
    processCount: 0, // 現在のカウント数
    completeCount: 0, // 成功した数
    money: 0, // 稼いだ金額
    stamina: 300, // スタミナ
    combo: 0, // 今のコンボ数
    pattern: [
      [
        new PlayPattern(
          [100],
          [1],
          new PlayTarget(
            100,
            PlayColor.Black,
            require("../assets/ui/blackButton.png")
          )
        ),
        new PlayPattern(
          [80, 150, 200],
          [-1, 1, -1],
          new PlayTarget(
            80,
            PlayColor.Green,
            require("../assets/ui/greenButton.png")
          )
        ),
        new PlayPattern(
          [90, 150],
          [1, -1],
          new PlayTarget(
            120,
            PlayColor.Yellow,
            require("../assets/ui/yellowButton.png")
          )
        ),
      ],
      [
        new PlayPattern(
          [200],
          [1],
          new PlayTarget(
            100,
            PlayColor.Black,
            require("../assets/ui/blackButton.png")
          )
        ),
        new PlayPattern(
          [100, 150, 200],
          [-1, 1, -1],
          new PlayTarget(
            80,
            PlayColor.Green,
            require("../assets/ui/greenButton.png")
          )
        ),
        new PlayPattern(
          [120, 250],
          [1, -1],
          new PlayTarget(
            120,
            PlayColor.Yellow,
            require("../assets/ui/yellowButton.png")
          )
        ),
      ],
      [
        new PlayPattern(
          [300],
          [1],
          new PlayTarget(
            100,
            PlayColor.Black,
            require("../assets/ui/blackButton.png")
          )
        ),
        new PlayPattern(
          [200, 250, 300],
          [-1, 1, -1],
          new PlayTarget(
            80,
            PlayColor.Green,
            require("../assets/ui/greenButton.png")
          )
        ),
        new PlayPattern(
          [120, 250],
          [1, -1],
          new PlayTarget(
            120,
            PlayColor.Yellow,
            require("../assets/ui/yellowButton.png")
          )
        ),
      ],
    ],
    targets: [
      new PlayTarget(
        100,
        PlayColor.Black,
        require("../assets/ui/blackButton.png")
      ),
      new PlayTarget(
        80,
        PlayColor.Green,
        require("../assets/ui/greenButton.png")
      ),
      new PlayTarget(
        120,
        PlayColor.Yellow,
        require("../assets/ui/yellowButton.png")
      ),
    ], // 押すボタンの種類
  },

  activePlayPattern: [
    new PlayPattern(
      [100],
      [1],
      new PlayTarget(
        100,
        PlayColor.Black,
        require("../assets/ui/blackButton.png")
      )
    ),
    new PlayPattern(
      [80, 150, 200],
      [-1, 1, -1],
      new PlayTarget(
        80,
        PlayColor.Green,
        require("../assets/ui/greenButton.png")
      )
    ),
    new PlayPattern(
      [90, 150],
      [1, -1],
      new PlayTarget(
        120,
        PlayColor.Yellow,
        require("../assets/ui/yellowButton.png")
      )
    ),
  ],
};

export default initialState;
