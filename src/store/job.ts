import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackgroundType } from "../types/background";
import { IconType } from "../types/icon";
import Job from "../models/job";
import Outline from "../models/outline";
import { BoardType } from "../types/board";
import User from "../models/user";
import { JobName } from "../types/job";
import { UserIconType } from "../types/userIcon";
import { UserIcons } from "../types/userIcons";
import { Play, PlayColor } from "../types/play";
import PlayPattern from "../models/playpattern";
import PlayTarget from "../models/playtarget";

export type state = {
  jobs: Job[];
  job: Job;
  previewJob?: Job;
  previewIcon: UserIcons;
  user: User;
  play: Play;
};

const initialState: state = {
  jobs: [
    new Job(
      "c1",
      IconType.yamagawa,
      JobName.yamagawa,
      true,
      1,
      0,
      0,
      15,
      BackgroundType.yamagawa,
      BoardType.yamagawa,
      {
        default: [
          { before: require("../assets/product/product1-normal-first.png") },
          {
            before: require("../assets/product/product1-normal-second.png"),
          },
          { before: require("../assets/product/product1-normal-third.png") },
        ],
        bonus: [
          { before: require("../assets/product/product1-gold-first.png") },
          { before: require("../assets/product/product1-gold-second.png") },
          { before: require("../assets/product/product1-gold-third.png") },
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
      IconType.souzuki,
      JobName.souzuki,
      false,
      1,
      0,
      0,
      12,
      BackgroundType.souzuki,
      BoardType.souzuki,
      {
        default: [
          { before: require("../assets/product/product2-normal-first.png") },
          {
            before: require("../assets/product/product2-normal-second.png"),
          },
          { before: require("../assets/product/product2-normal-third.png") },
        ],
        bonus: [
          { before: require("../assets/product/product2-gold-first.png") },
          { before: require("../assets/product/product2-gold-second.png") },
          { before: require("../assets/product/product2-gold-third.png") },
        ],
        style: { width: 260, height: 180 },
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
      IconType.ashBerry,
      JobName.ashBerry,
      false,
      1,
      0,
      0,
      20,
      BackgroundType.ashBerry,
      BoardType.ashBerry,
      {
        default: [
          { before: require("../assets/product/product3-normal-first.png") },
          {
            before: require("../assets/product/product3-normal-second.png"),
          },
          { before: require("../assets/product/product3-normal-third.png") },
        ],
        bonus: [
          { before: require("../assets/product/product3-gold-first.png") },
          { before: require("../assets/product/product3-gold-second.png") },
          { before: require("../assets/product/product3-gold-third.png") },
        ],
        style: { width: 202, height: 77 },
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
      IconType.bentaro,
      JobName.bentaro,
      false,
      1,
      0,
      0,
      18,
      BackgroundType.bentaro,
      BoardType.bentaro,
      {
        default: [
          { before: require("../assets/product/product4-normal-first.png") },
          {
            before: require("../assets/product/product4-normal-second.png"),
          },
          { before: require("../assets/product/product4-normal-third.png") },
        ],
        bonus: [
          { before: require("../assets/product/product4-gold-first.png") },
          { before: require("../assets/product/product4-gold-second.png") },
          { before: require("../assets/product/product4-gold-third.png") },
        ],
        style: { width: 200, height: 86 },
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
      IconType.aguron,
      JobName.aguron,
      false,
      1,
      0,
      0,
      25,
      BackgroundType.aguron,
      BoardType.aguron,
      {
        default: [
          { before: require("../assets/product/product5-normal-first.png") },
          {
            before: require("../assets/product/product5-normal-second.png"),
          },
          { before: require("../assets/product/product5-normal-third.png") },
        ],
        bonus: [
          { before: require("../assets/product/product5-gold-first.png") },
          { before: require("../assets/product/product5-gold-second.png") },
          { before: require("../assets/product/product5-gold-third.png") },
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
      IconType.starFoods,
      JobName.starFoods,
      false,
      1,
      0,
      0,
      20,
      BackgroundType.starFoods,
      BoardType.starFoods,
      {
        default: [
          { before: require("../assets/product/product6-normal-first.png") },
          {
            before: require("../assets/product/product6-normal-second.png"),
          },
          { before: require("../assets/product/product6-normal-third.png") },
        ],
        bonus: [
          { before: require("../assets/product/product6-gold-first.png") },
          { before: require("../assets/product/product6-gold-second.png") },
          { before: require("../assets/product/product6-gold-third.png") },
        ],
        style: { width: 200, height: 130 },
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
      IconType.sikaga,
      JobName.sikaga,
      false,
      1,
      0,
      0,
      27,
      BackgroundType.sikaga,
      BoardType.sikaga,
      {
        default: [
          { before: require("../assets/product/product7-normal-first.png") },
          {
            before: require("../assets/product/product7-normal-second.png"),
          },
          { before: require("../assets/product/product7-normal-third.png") },
        ],
        bonus: [
          { before: require("../assets/product/product7-normal-first.png") },
          { before: require("../assets/product/product7-gold-second.png") },
          { before: require("../assets/product/product7-gold-third.png") },
        ],
        style: { width: 232, height: 80 },
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
      IconType.tamazu,
      JobName.tamazu,
      false,
      1,
      0,
      0,
      18,
      BackgroundType.tamazu,
      BoardType.tamazu,
      {
        default: [
          { before: require("../assets/product/product8-normal-first.png") },
          {
            before: require("../assets/product/product8-normal-second.png"),
          },
          { before: require("../assets/product/product8-normal-third.png") },
        ],
        bonus: [
          { before: require("../assets/product/product8-gold-first.png") },
          { before: require("../assets/product/product8-gold-second.png") },
          { before: require("../assets/product/product8-gold-third.png") },
        ],
        style: { width: 120, height: 207 },
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
      IconType.ozasa,
      JobName.ozasa,
      false,
      1,
      0,
      0,
      10,
      BackgroundType.ozasa,
      BoardType.ozasa,
      {
        default: [
          { before: require("../assets/product/product9-normal-first.png") },
          {
            before: require("../assets/product/product9-normal-second.png"),
          },
          { before: require("../assets/product/product9-normal-third.png") },
        ],
        bonus: [
          { before: require("../assets/product/product9-gold-first.png") },
          { before: require("../assets/product/product9-gold-second.png") },
          { before: require("../assets/product/product9-gold-third.png") },
        ],
        style: { width: 300, height: 130 },
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
      IconType.tanabe,
      JobName.tanabe,
      false,
      1,
      0,
      0,
      10,
      BackgroundType.tanabe,
      BoardType.tanabe,
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
        bonus: [
          { before: require("../assets/product/product10-gold-first.png") },
          { before: require("../assets/product/product10-gold-second.png") },
          { before: require("../assets/product/product10-gold-third.png") },
        ],
        style: { width: 280, height: 90 },
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
    icon: IconType.yamagawa,
    name: JobName.yamagawa,
    isActive: true,
    level: 1,
    maxNumber: 0,
    maxMoney: 0,
    perMoney: 15,
    backgroundImg: BackgroundType.yamagawa,
    boardImg: BoardType.yamagawa,
    product: {
      default: [
        { before: require("../assets/product/product1-normal-first.png") },
        { before: require("../assets/product/product1-normal-second.png") },
        { before: require("../assets/product/product1-normal-third.png") },
      ],
      bonus: [
        { before: require("../assets/product/product1-gold-first.png") },
        { before: require("../assets/product/product1-gold-second.png") },
        { before: require("../assets/product/product1-gold-third.png") },
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

  user: {
    name: "user001",
    money: 1000,
    icon: UserIconType.man1,
    nowJob: JobName.yamagawa,
    gachaStandBy: false,
  },

  previewJob: undefined,
  previewIcon: {
    id: "man1",
    icon: UserIconType.man1,
  },

  play: {
    status: "stop", // ゲームの状態を管理
    processCount: 0, // 現在のカウント数
    completeCount: 0, // 成功した数
    money: 0, // 稼いだ金額
    stamina: 300, //スタミナ
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
};

const JobRedux = createSlice({
  name: "JobRedux",
  initialState,
  reducers: {
    changeJob: (state, action: PayloadAction<Job>) => {
      state.job = action.payload;
      state.user.nowJob = action.payload.name;
    },
    changeUpdateJob: (state, action: PayloadAction<Job>) => {
      if (state.jobs[state.jobs.indexOf(action.payload)].isActive === true) {
        state.jobs[state.jobs.indexOf(action.payload)].perMoney =
          action.payload.perMoney + 1;
        state.jobs[state.jobs.indexOf(action.payload)].outline.basicMoney =
          action.payload.outline.basicMoney;
        state.jobs[state.jobs.indexOf(action.payload)].level =
          action.payload.level + 1;
        state.jobs[state.jobs.indexOf(action.payload)].outline.level =
          action.payload.outline.level + 1;
      }

      state.jobs[state.jobs.indexOf(action.payload)].isActive = true;
    },
    changePreviewJob: (state, action: PayloadAction<Job | undefined>) => {
      state.previewJob = action.payload;
    },
    changePreviewIcon: (state, action: PayloadAction<UserIcons>) => {
      state.previewIcon = action.payload;
    },
    changeUser: (state, action: PayloadAction<User | UserIcons>) => {
      state.user.icon = action.payload.icon;
    },
    changePlayStamina: (state, action: PayloadAction<number>) => {
      state.play.stamina = state.play.stamina - action.payload;
    },
  },
});

export const changeJob = JobRedux.actions.changeJob;
export const changeUpdateJob = JobRedux.actions.changeUpdateJob;
export const changePreviewJob = JobRedux.actions.changePreviewJob;
export const changeUser = JobRedux.actions.changeUser;
export const changePreviewIcon = JobRedux.actions.changePreviewIcon;
export const changePlayStamina = JobRedux.actions.changePlayStamina;
export default JobRedux.reducer;
