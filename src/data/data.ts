import Job from "../models/job";
import { Job as _Job } from "../types/job";
import { IconType } from "../types/icon";
import { BackgroundType } from "../types/background";
import Outline from "../models/outline";
import { BoardType } from "../types/board";

export const JOB = {
  c1: new Job(
    "c1",
    IconType.yamagawa,
    "山川製作所",
    false,
    1,
    0,
    0,
    15,
    BackgroundType.yamagawa,
    BoardType.yamagawa,
    {
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
    {
      name: "山川 哲郎(62)",
      message: "「残業なき労働に価値なし」",
    },
    new Outline(
      "山川製作所",
      "精密機械工場",
      "システム基盤構築",
      15,
      "完全週休一日制",
      "90%",
      "C",
      "鳥取県",
      require("../assets/outline/outlineBgYamagawa.png"),
      require("../assets/outline/outlineButtonYamagawa.png")
    )
  ),
  c2: new Job(
    "c2",
    IconType.souzuki,
    "蒼月",
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
        { before: require("../assets/product/product2-normal-second.png") },
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
      "週休2日制",
      "72%",
      "C",
      "北海道",
      require("../assets/outline/outlineBgNiimori.png"),
      require("../assets/outline/outlineButtonNiimori.png")
    )
  ),

  c3: new Job(
    "c3",
    IconType.ashBerry,
    "アッシュベリー Inc.",
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
        { before: require("../assets/product/product3-normal-second.png") },
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
      "完全週休一日制",
      "51%",
      "C",
      "東京都",
      require("../assets/outline/outlineBgMiyako.png"),
      require("../assets/outline/outlineButtonMiyako.png")
    )
  ),
  c4: new Job(
    "c4",
    IconType.bentaro,
    "オリジン弁太郎",
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
        { before: require("../assets/product/product4-normal-second.png") },
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
      "週休一日制",
      "80%",
      "C",
      "埼玉県",
      require("../assets/outline/outlineBgTsuji.png"),
      require("../assets/outline/outlineButtonTsuji.png")
    )
  ),
  c5: new Job(
    "c5",
    IconType.aguron,
    "アグロン精密",
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
        { before: require("../assets/product/product5-normal-second.png") },
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
      "祝日のみ",
      "87%",
      "C",
      "埼玉県",
      require("../assets/outline/outlineBgLie.png"),
      require("../assets/outline/outlineButtonLie.png")
    )
  ),
  c6: new Job(
    "c6",
    IconType.starFoods,
    "スター・フーズ",
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
        { before: require("../assets/product/product6-normal-second.png") },
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
      "山川製作所",
      "洋菓子工場",
      "ケーキのデコレーション",
      20,
      "完全週休一日制",
      "65%",
      "C",
      "福井県",
      require("../assets/outline/outlineBgTakeuchi.png"),
      require("../assets/outline/outlineButtonTakeuchi.png")
    )
  ),
  c7: new Job(
    "c7",
    IconType.sikaga,
    "鹿賀水産",
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
        { before: require("../assets/product/product7-normal-second.png") },
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
      "祝日のみ",
      "71%",
      "C",
      "山形県",
      require("../assets/outline/outlineBgKuroguchi.png"),
      require("../assets/outline/outlineButtonKuroguchi.png")
    )
  ),
  c8: new Job(
    "c8",
    IconType.tamazu,
    "玉津アーセナル",
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
        { before: require("../assets/product/product8-normal-second.png") },
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
      "完全週休一日制",
      "61%",
      "C",
      "青森県",
      require("../assets/outline/outlineBgYamashita.png"),
      require("../assets/outline/outlineButtonYamashita.png")
    )
  ),
  c9: new Job(
    "c9",
    IconType.ozasa,
    "小篠建設",
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
        { before: require("../assets/product/product9-normal-second.png") },
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
      "無し",
      "98%",
      "C",
      "北海道",
      require("../assets/outline/outlineBgOzasa.png"),
      require("../assets/outline/outlineButtonOzasa.png")
    )
  ),
  c10: new Job(
    "c10",
    IconType.tanabe,
    "タナベ工務店",
    false,
    1,
    0,
    0,
    10,
    BackgroundType.tanabe,
    BoardType.tanabe,
    {
      default: [
        { before: require("../assets/product/product10-normal-first.png") },
        { before: require("../assets/product/product10-normal-second.png") },
        { before: require("../assets/product/product10-normal-third.png") },
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
      "無し",
      "99%",
      "C",
      "東京都",
      require("../assets/outline/outlineBgKamobayashi.png"),
      require("../assets/outline/outlineButtonKamobayashi.png")
    )
  ),
};
