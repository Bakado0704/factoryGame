import Job from "../models/job";
import { Job as _Job } from "../types/job";
import { IconType } from "../types/icon";
import { BackgroundType } from "../types/background";
import Outline from "../models/outline";

export const JOB = [
  new Job(
    "c1",
    IconType.yamagawa,
    "山川製作所",
    false,
    1,
    0,
    0,
    15,
    BackgroundType.yamagawa,
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
    },
    {
      name: "山川哲郎",
      message: "残業なき労働に価値なし",
    },
    new Outline(
      "山川製作所",
      "精密機械工場",
      "システム基盤構築",
      15,
      "90%",
      "完全週休一日制",
      "C",
      "鳥取県"
    )
  ),
  new Job(
    "c2",
    IconType.souzuki,
    "山川製作所",
    false,
    1,
    0,
    0,
    15,
    BackgroundType.souzuki,
    {
      default: [],
      bonus: [],
    },
    {
      name: "山川哲郎",
      message: "残業なき労働に価値なし",
    },
    new Outline(
      "山川製作所",
      "精密機械工場",
      "システム基盤構築",
      15,
      "90%",
      "完全週休一日制",
      "C",
      "鳥取県"
    )
  ),

  new Job(
    "c3",
    IconType.ashBerry,
    "山川製作所",
    false,
    1,
    0,
    0,
    15,
    BackgroundType.ashBerry,
    {
      default: [],
      bonus: [],
    },
    {
      name: "山川哲郎",
      message: "残業なき労働に価値なし",
    },
    new Outline(
      "山川製作所",
      "精密機械工場",
      "システム基盤構築",
      15,
      "90%",
      "完全週休一日制",
      "C",
      "鳥取県"
    )
  ),
  new Job(
    "c4",
    IconType.bentaro,
    "山川製作所",
    false,
    1,
    0,
    0,
    15,
    BackgroundType.bentaro,
    {
      default: [],
      bonus: [],
    },
    {
      name: "山川哲郎",
      message: "残業なき労働に価値なし",
    },
    new Outline(
      "山川製作所",
      "精密機械工場",
      "システム基盤構築",
      15,
      "90%",
      "完全週休一日制",
      "C",
      "鳥取県"
    )
  ),
  new Job(
    "c5",
    IconType.aguron,
    "山川製作所",
    false,
    1,
    0,
    0,
    15,
    BackgroundType.aguron,
    {
      default: [],
      bonus: [],
    },
    {
      name: "山川哲郎",
      message: "残業なき労働に価値なし",
    },
    new Outline(
      "山川製作所",
      "精密機械工場",
      "システム基盤構築",
      15,
      "90%",
      "完全週休一日制",
      "C",
      "鳥取県"
    )
  ),
  new Job(
    "c6",
    IconType.starFoods,
    "山川製作所",
    false,
    1,
    0,
    0,
    15,
    BackgroundType.starFoods,
    {
      default: [],
      bonus: [],
    },
    {
      name: "山川哲郎",
      message: "残業なき労働に価値なし",
    },
    new Outline(
      "山川製作所",
      "精密機械工場",
      "システム基盤構築",
      15,
      "90%",
      "完全週休一日制",
      "C",
      "鳥取県"
    )
  ),
  new Job(
    "c7",
    IconType.sikaga,
    "山川製作所",
    false,
    1,
    0,
    0,
    15,
    BackgroundType.sikaga,
    {
      default: [],
      bonus: [],
    },
    {
      name: "山川哲郎",
      message: "残業なき労働に価値なし",
    },
    new Outline(
      "山川製作所",
      "精密機械工場",
      "システム基盤構築",
      15,
      "90%",
      "完全週休一日制",
      "C",
      "鳥取県"
    )
  ),
  new Job(
    "c8",
    IconType.tamazu,
    "山川製作所",
    false,
    1,
    0,
    0,
    15,
    BackgroundType.tamazu,
    {
      default: [],
      bonus: [],
    },
    {
      name: "山川哲郎",
      message: "残業なき労働に価値なし",
    },
    new Outline(
      "山川製作所",
      "精密機械工場",
      "システム基盤構築",
      15,
      "90%",
      "完全週休一日制",
      "C",
      "鳥取県"
    )
  ),
  new Job(
    "c9",
    IconType.ozasa,
    "山川製作所",
    false,
    1,
    0,
    0,
    15,
    BackgroundType.ozasa,
    {
      default: [],
      bonus: [],
    },
    {
      name: "山川哲郎",
      message: "残業なき労働に価値なし",
    },
    new Outline(
      "山川製作所",
      "精密機械工場",
      "システム基盤構築",
      15,
      "90%",
      "完全週休一日制",
      "C",
      "鳥取県"
    )
  ),
  new Job(
    "c10",
    IconType.tanabe,
    "山川製作所",
    false,
    1,
    0,
    0,
    15,
    BackgroundType.tanabe,
    {
      default: [],
      bonus: [],
    },
    {
      name: "山川哲郎",
      message: "残業なき労働に価値なし",
    },
    new Outline(
      "山川製作所",
      "精密機械工場",
      "システム基盤構築",
      15,
      "90%",
      "完全週休一日制",
      "C",
      "鳥取県"
    )
  ),
];
