import { Dimensions } from "react-native";
import Job from "../../models/job";
import Outline from "../../models/outline";
import { JobType } from "../../types/job";
const { width, height } = Dimensions.get("window");

export type state = {
  jobs: Job[];
  job: Job;
  nextJob: Job;
  prevJob: Job;
  previewJob?: Job;
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
      [12, 14, 16, 18, 20, 21, 22, 23, 24, 25],
      JobType.yamagawa,
      JobType.yamagawa,
      {
        default: [
          { before: require("../../assets/product/product1-normal-first.png") },
          {
            before: require("../../assets/product/product1-normal-second.png"),
          },
          { before: require("../../assets/product/product1-normal-third.png") },
        ],
        defaultFailure: [
          { before: require("../../assets/product/product1-normal-failure.png") },
        ],
        bonus: [
          { before: require("../../assets/product/product1-gold-first.png") },
          { before: require("../../assets/product/product1-gold-second.png") },
          { before: require("../../assets/product/product1-gold-third.png") },
        ],
        bonusFailure: [
          { before: require("../../assets/product/product1-gold-failure.png") },
        ],
        style: { width: height * 0.3, height: height * 0.12 },
      },
      {
        name: "山川 哲郎(62)",
        message: "「残業なき労働に価値なし」",
      },
      {
        poor: [{comment: "アドバイスのしようがない。", duration: 300}, {comment: "明日から来なくていいよ。", duration: 300}],
        average: [{comment: "まだまだ半人前。", duration: 300}, {comment: "もっとキビキビ動く！", duration: 150}],
        good: [{comment: "グッジョビ。", duration: 200}, {comment: "ワンダフル。", duration: 200}],
      },
      new Outline(
        "山川製作所",
        "精密機械工場",
        "システム基盤構築",
        12,
        1,
        "完全週休一日制",
        "90%",
        "鳥取県",
        require("../../assets/outline/outlineBgYamagawa.png"),
        require("../../assets/outline/outlineButtonYamagawa.png")
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
      [15, 20, 24, 27, 29, 30, 31, 32, 33, 34],
      JobType.souzuki,
      JobType.souzuki,
      {
        default: [
          { before: require("../../assets/product/product2-normal-first.png") },
          {
            before: require("../../assets/product/product2-normal-second.png"),
          },
          { before: require("../../assets/product/product2-normal-third.png") },
        ],
        defaultFailure: [
          { before: require("../../assets/product/product2-normal-failure.png") },
        ],
        bonus: [
          { before: require("../../assets/product/product2-gold-first.png") },
          { before: require("../../assets/product/product2-gold-second.png") },
          { before: require("../../assets/product/product2-gold-third.png") },
        ],
        bonusFailure: [
          { before: require("../../assets/product/product2-gold-failure.png") },
        ],
        style: { width: height * 0.408, height: height * 0.31 },
      },
      {
        name: "新盛 晋(50)",
        message: "「仕事は定時を過ぎてから本番」",
      },
      {
        poor: [{comment: "面倒みきれん。", duration: 300}, {comment: "1から出直し!", duration: 300}],
        average: [{comment: "服装だけは一人前。", duration: 300}, {comment: "少しは成長しているのね。", duration: 300}],
        good: [{comment: "ワシの若いころを思い出した。", duration: 200}, {comment: "愛してるよ。", duration: 200}],
      },
      new Outline(
        "蒼月",
        "化粧品工場",
        "製品の梱包",
        15,
        1,
        "週休2日制",
        "72%",
        "北海道",
        require("../../assets/outline/outlineBgNiimori.png"),
        require("../../assets/outline/outlineButtonNiimori.png")
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
      [17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      JobType.ashBerry,
      JobType.ashBerry,
      {
        default: [
          { before: require("../../assets/product/product3-normal-first.png") },
          {
            before: require("../../assets/product/product3-normal-second.png"),
          },
          { before: require("../../assets/product/product3-normal-third.png") },
        ],
        defaultFailure: [
          { before: require("../../assets/product/product3-normal-failure.png") },
        ],
        bonus: [
          { before: require("../../assets/product/product3-gold-first.png") },
          { before: require("../../assets/product/product3-gold-second.png") },
          { before: require("../../assets/product/product3-gold-third.png") },
        ],
        bonusFailure: [
          { before: require("../../assets/product/product3-gold-failure.png") },
        ],
        style: { width: height * 0.303, height: height * 0.133 },
      },
      {
        name: "宮古 洋平(56)",
        message: "「有給なんて都市伝説」",
      },
      {
        poor: [{comment: "キミ向いてないよ。", duration: 300}, {comment: "何やってるの!", duration: 150}],
        average: [{comment: "居眠りしてたでしょ。", duration: 300}, {comment: "なんで休んでるの？", duration: 300}],
        good: [{comment: "やるやん。", duration: 200}, {comment: "ナイス～。", duration: 200}],
      },
      new Outline(
        "アッシュベリー Inc.",
        "食品工場",
        "パンの製造",
        17,
        1,
        "完全週休一日制",
        "51%",
        "東京都",
        require("../../assets/outline/outlineBgMiyako.png"),
        require("../../assets/outline/outlineButtonMiyako.png")
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
      [20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
      JobType.bentaro,
      JobType.bentaro,
      {
        default: [
          { before: require("../../assets/product/product4-normal-first.png") },
          {
            before: require("../../assets/product/product4-normal-second.png"),
          },
          { before: require("../../assets/product/product4-normal-third.png") },
          { before: require("../../assets/product/product4-normal-fourth.png") },
        ],
        defaultFailure: [
          { before: require("../../assets/product/product4-normal-failure.png") },
        ],
        bonus: [
          { before: require("../../assets/product/product4-gold-first.png") },
          { before: require("../../assets/product/product4-gold-second.png") },
          { before: require("../../assets/product/product4-gold-third.png") },
          { before: require("../../assets/product/product4-gold-fourth.png") },
        ],
        bonusFailure: [
          { before: require("../../assets/product/product4-gold-failure.png") },
        ],
        style: { width: height * 0.3, height: height * 0.195 },
      },
      {
        name: "辻 踏弥(48)",
        message: "「経費を建て替えるのはやる気がある証拠」",
      },
      {
        poor: [{comment: "諦めんなよ、お前!", duration: 100}, {comment: "反省はしろ!後悔はするな!", duration: 100}],
        average: [{comment: "ピンチはチャンスだ!", duration: 100}, {comment: "苦しいか? 笑え!", duration: 100}],
        good: [{comment: "今日からお前は!!一番だ!!!", duration: 50}, {comment: "崖っぷちありがとう!!最高だああ。", duration: 50}],
      },
      new Outline(
        "オリジン弁太郎",
        "弁当工場",
        "食品の盛り付け",
        20,
        1,
        "週休一日制",
        "80%",
        "埼玉県",
        require("../../assets/outline/outlineBgTsuji.png"),
        require("../../assets/outline/outlineButtonTsuji.png")
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
      [24, 28, 32, 35, 37, 39, 40, 41, 42, 43],
      JobType.aguron,
      JobType.aguron,
      {
        default: [
          { before: require("../../assets/product/product5-normal-first.png") },
          {
            before: require("../../assets/product/product5-normal-second.png"),
          },
          { before: require("../../assets/product/product5-normal-third.png") },
        ],
        defaultFailure: [
          { before: require("../../assets/product/product5-normal-failure.png") },
        ],
        bonus: [
          { before: require("../../assets/product/product5-gold-first.png") },
          { before: require("../../assets/product/product5-gold-second.png") },
          { before: require("../../assets/product/product5-gold-third.png") },
        ],
        bonusFailure: [
          { before: require("../../assets/product/product5-gold-failure.png") },
        ],
        style: { width: height * 0.3, height: height * 0.258 },
      },
      {
        name: "リー・ハオラン(54)",
        message: "「日本を侵略するアルヨ」",
      },
      {
        poor: [{comment: "やる気アルか?", duration: 300}, {comment: "なんたるたいまん。", duration: 300}],
        average: [{comment: "技術が足りない、技術が。", duration: 300}, {comment: "今月の給料没収。", duration: 300}],
        good: [{comment: "謝々。", duration: 150}, {comment: "Good Job!", duration: 200}],
      },
      new Outline(
        "アグロン精密",
        "精密機械工場",
        "PC部材の取付",
        24,
        1,
        "祝日のみ",
        "87%",
        "埼玉県",
        require("../../assets/outline/outlineBgLie.png"),
        require("../../assets/outline/outlineButtonLie.png")
      )
    ),
    new Job(
      "c6",
      JobType.starFoods,
      JobType.starFoods,
      true,
      1,
      0,
      0,
      [21, 25, 29, 33, 37, 40, 42, 44, 46, 48],
      JobType.starFoods,
      JobType.starFoods,
      {
        default: [
          { before: require("../../assets/product/product6-normal-first.png") },
          {
            before: require("../../assets/product/product6-normal-second.png"),
          },
          { before: require("../../assets/product/product6-normal-third.png") },
          { before: require("../../assets/product/product6-normal-fourth.png") },
        ],
        defaultFailure: [
          { before: require("../../assets/product/product6-normal-failure.png") },
        ],
        bonus: [
          { before: require("../../assets/product/product6-gold-first.png") },
          { before: require("../../assets/product/product6-gold-second.png") },
          { before: require("../../assets/product/product6-gold-third.png") },
          { before: require("../../assets/product/product6-gold-fourth.png") },
        ],
        bonusFailure: [
          { before: require("../../assets/product/product6-gold-failure.png") },
        ],
        style: { width: height * 0.3, height: height * 0.225 },
      },
      {
        name: "竹内 ゲンノシン(47)",
        message: "「サービス残業は社会人の常識」",
      },
      {
        poor: [{comment: "・・・。", duration: 300}, {comment: "本気でやってますか。", duration: 300}],
        average: [{comment: "ギリギリ許します。", duration: 300}, {comment: "まだまだですね。", duration: 300}],
        good: [{comment: "いい仕事でした。", duration: 300}, {comment: "次もよろしくお願いします。", duration: 300}],
      },
      new Outline(
        "スター・フーズ",
        "洋菓子工場",
        "ケーキのデコレーション",
        21,
        1,
        "完全週休一日制",
        "65%",
        "福井県",
        require("../../assets/outline/outlineBgTakeuchi.png"),
        require("../../assets/outline/outlineButtonTakeuchi.png")
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
      [18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
      JobType.sikaga,
      JobType.sikaga,
      {
        default: [
          { before: require("../../assets/product/product7-normal-first.png") },
          {
            before: require("../../assets/product/product7-normal-second.png"),
          },
          { before: require("../../assets/product/product7-normal-third.png") },
        ],
        defaultFailure: [
          { before: require("../../assets/product/product7-normal-failure.png") },
        ],
        bonus: [
          { before: require("../../assets/product/product7-gold-first.png") },
          { before: require("../../assets/product/product7-gold-second.png") },
          { before: require("../../assets/product/product7-normal-third.png") },
        ],
        bonusFailure: [
          { before: require("../../assets/product/product7-gold-failure.png") },
        ],
        style: { width: height * 0.378, height: height * 0.123 },
      },
      {
        name: "黒口 隆(51)",
        message: "「用事がないなら休むな当然だ」",
      },
      {
        poor: [{comment: "集中しろ!", duration: 200}, {comment: "しっかりしろ!", duration: 200}],
        average: [{comment: "おそいおそいおそい!", duration: 200}, {comment: "諦めんな!", duration: 200}],
        good: [{comment: "もっと、もっとだあああ!", duration: 100}, {comment: "もっと熱くなれ!", duration: 100}],
      },
      new Outline(
        "鹿賀水産",
        "食品工場",
        "ぶりの切り身加工",
        18,
        1,
        "祝日のみ",
        "71%",
        "山形県",
        require("../../assets/outline/outlineBgKuroguchi.png"),
        require("../../assets/outline/outlineButtonKuroguchi.png")
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
      [27, 30, 33, 36, 38, 40, 42, 44, 46, 48],
      JobType.tamazu,
      JobType.tamazu,
      {
        default: [
          { before: require("../../assets/product/product8-normal-first.png") },
          {
            before: require("../../assets/product/product8-normal-second.png"),
          },
          { before: require("../../assets/product/product8-normal-third.png") },
          { before: require("../../assets/product/product8-normal-fourth.png") },
        ],
        defaultFailure: [
          { before: require("../../assets/product/product8-normal-failure.png") },
        ],
        bonus: [
          { before: require("../../assets/product/product8-gold-first.png") },
          { before: require("../../assets/product/product8-gold-second.png") },
          { before: require("../../assets/product/product8-gold-third.png") },
          { before: require("../../assets/product/product8-gold-fourth.png") },
        ],
        bonusFailure: [
          { before: require("../../assets/product/product8-gold-failure.png") },
        ],
        style: { width: height * 0.207, height: height * 0.333 },
      },
      {
        name: "山下 五郎(55)",
        message: "「無理を1週間続けたら、無理じゃなくなる」",
      },
      {
        poor: [{comment: "おは養分。", duration: 300}, {comment: "努力が足りない。", duration: 300}],
        average: [{comment: "これで満足してないよな。", duration: 300}, {comment: "喜べ、今日は残業できるぞ。", duration: 200}],
        good: [{comment: "契約延長!", duration: 150}, {comment: "エクセレント。", duration: 150}],
      },
      new Outline(
        "玉津アーセナル",
        "精密機械工場",
        "製品の組立",
        27,
        1,
        "完全週休一日制",
        "61%",
        "青森県",
        require("../../assets/outline/outlineBgYamashita.png"),
        require("../../assets/outline/outlineButtonYamashita.png")
      )
    ),
    new Job(
      "c9",
      JobType.ozasa,
      JobType.ozasa,
      true,
      1,
      0,
      0,
      [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      JobType.ozasa,
      JobType.ozasa,
      {
        default: [
          { before: require("../../assets/product/product9-normal-first.png") },
          {
            before: require("../../assets/product/product9-normal-second.png"),
          },
          { before: require("../../assets/product/product9-normal-third.png") },
        ],
        defaultFailure: [
          { before: require("../../assets/product/product9-normal-failure.png") },
        ],
        bonus: [
          { before: require("../../assets/product/product9-gold-first.png") },
          { before: require("../../assets/product/product9-gold-second.png") },
          { before: require("../../assets/product/product9-gold-third.png") },
        ],
        bonusFailure: [
          { before: require("../../assets/product/product9-gold-failure.png") },
        ],
        style: { width: height * 0.45, height: height * 0.217 },
      },
      {
        name: "小篠 隆生(65)",
        message: "「ストレスで胃に穴をあけるのも給料のうち」",
      },
      {
        poor: [{comment: "よゆうでクビ!", duration: 150}, {comment: "あーあって感じ。", duration: 300}],
        average: [{comment: "テキパキこなせないもんかねえ。", duration: 200}, {comment: "時給5円上げてやろうか。", duration: 100}],
        good: [{comment: "まあ及第点。", duration: 300}, {comment: "できて当たり前だから、こんなの。", duration: 300}],
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
        require("../../assets/outline/outlineBgOzasa.png"),
        require("../../assets/outline/outlineButtonOzasa.png")
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
      [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      JobType.tanabe,
      JobType.tanabe,
      {
        default: [
          {
            before: require("../../assets/product/product10-normal-first.png"),
          },
          {
            before: require("../../assets/product/product10-normal-second.png"),
          },
          {
            before: require("../../assets/product/product10-normal-third.png"),
          },
        ],
        defaultFailure: [
          { before: require("../../assets/product/product10-normal-failure.png") },
        ],
        bonus: [
          { before: require("../../assets/product/product10-gold-first.png") },
          { before: require("../../assets/product/product10-gold-second.png") },
          { before: require("../../assets/product/product10-gold-third.png") },
        ],
        bonusFailure: [
          { before: require("../../assets/product/product10-gold-failure.png") },
        ],
        style: { width: height * 0.42, height: height * 0.157 },
      },
      {
        name: "鴨林 勇太(43)",
        message: "「定時退社は早退と同じ」",
      },
      {
        poor: [{comment: "そういうときもある。", duration: 300}, {comment: "今日はもう帰りなさい。", duration: 300}],
        average: [{comment: "良くなってきてるよ!", duration: 300}, {comment: "まだまだいける!", duration: 300}],
        good: [{comment: "よくできました。", duration: 300}, {comment: "すばらしい。", duration: 300}],
      },
      new Outline(
        "タナベ工務店",
        "建材工場",
        "建設用木材の加工",
        6,
        1,
        "無し",
        "99%",
        "東京都",
        require("../../assets/outline/outlineBgKamobayashi.png"),
        require("../../assets/outline/outlineButtonKamobayashi.png")
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
    perMoney: [12, 14, 16, 18, 20, 21, 22, 23, 24, 25],
    backgroundImg: JobType.yamagawa,
    boardImg: JobType.yamagawa,
    product: {
      default: [
        { before: require("../../assets/product/product1-normal-first.png") },
        { before: require("../../assets/product/product1-normal-second.png") },
        { before: require("../../assets/product/product1-normal-third.png") },
      ],
      defaultFailure: [
        { before: require("../../assets/product/product1-normal-failure.png") },
      ],
      bonus: [
        { before: require("../../assets/product/product1-gold-first.png") },
        { before: require("../../assets/product/product1-gold-second.png") },
        { before: require("../../assets/product/product1-gold-third.png") },
      ],
      bonusFailure: [
        { before: require("../../assets/product/product1-gold-failure.png") },
      ],
      style: { width: height * 0.3, height: height * 0.12 },
    },
    owner: {
      name: "山川 哲郎(62)",
      message: "「残業なき労働に価値なし」",
    },
    comments: {
      poor: [{comment: "アドバイスのしようがない。", duration: 300}, {comment: "明日から来なくていいよ。", duration: 300}],
      average: [{comment: "まだまだ半人前。", duration: 300}, {comment: "もっとキビキビ動く！", duration: 200}],
      good: [{comment: "グッジョビ。", duration: 200}, {comment: "ワンダフル。", duration: 200}],
    },
    outline: {
      company: "山川製作所",
      category: "精密機械工場",
      work: "システム基盤構築",
      basicMoney: 12,
      level: 1,
      holiday: "完全週休一日制",
      retirement: "90%",
      workplace: "鳥取県",
      background: require("../../assets/outline/outlineBgYamagawa.png"),
      button: require("../../assets/outline/outlineButtonYamagawa.png"),
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
    perMoney: [12, 14, 16, 18, 20, 21, 22, 23, 24, 25],
    backgroundImg: JobType.yamagawa,
    boardImg: JobType.yamagawa,
    product: {
      default: [
        { before: require("../../assets/product/product1-normal-first.png") },
        { before: require("../../assets/product/product1-normal-second.png") },
        { before: require("../../assets/product/product1-normal-third.png") },
      ],
      defaultFailure: [
        { before: require("../../assets/product/product1-normal-failure.png") },
      ],
      bonus: [
        { before: require("../../assets/product/product1-gold-first.png") },
        { before: require("../../assets/product/product1-gold-second.png") },
        { before: require("../../assets/product/product1-gold-third.png") },
      ],
      bonusFailure: [
        { before: require("../../assets/product/product1-gold-failure.png") },
      ],
      style: { width: height * 0.3, height: height * 0.12 },
    },
    owner: {
      name: "山川 哲郎(62)",
      message: "「残業なき労働に価値なし」",
    },
    comments: {
      poor: [{comment: "アドバイスのしようがない。", duration: 300}, {comment: "明日から来なくていいよ。", duration: 300}],
      average: [{comment: "まだまだ半人前。", duration: 300}, {comment: "もっとキビキビ動く！", duration: 200}],
      good: [{comment: "グッジョビ。", duration: 200}, {comment: "ワンダフル。", duration: 200}],
    },
    outline: {
      company: "山川製作所",
      category: "精密機械工場",
      work: "システム基盤構築",
      basicMoney: 12,
      level: 1,
      holiday: "完全週休一日制",
      retirement: "90%",
      workplace: "鳥取県",
      background: require("../../assets/outline/outlineBgYamagawa.png"),
      button: require("../../assets/outline/outlineButtonYamagawa.png"),
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
    perMoney: [12, 14, 16, 18, 20, 21, 22, 23, 24, 25],
    backgroundImg: JobType.yamagawa,
    boardImg: JobType.yamagawa,
    product: {
      default: [
        { before: require("../../assets/product/product1-normal-first.png") },
        { before: require("../../assets/product/product1-normal-second.png") },
        { before: require("../../assets/product/product1-normal-third.png") },
      ],
      defaultFailure: [
        { before: require("../../assets/product/product1-normal-failure.png") },
      ],
      bonus: [
        { before: require("../../assets/product/product1-gold-first.png") },
        { before: require("../../assets/product/product1-gold-second.png") },
        { before: require("../../assets/product/product1-gold-third.png") },
      ],
      bonusFailure: [
        { before: require("../../assets/product/product1-normal-failure.png") },
      ],
      style: { width: height * 0.3, height: height * 0.12 },
    },
    owner: {
      name: "山川 哲郎(62)",
      message: "「残業なき労働に価値なし」",
    },
    comments: {
      poor: [{comment: "アドバイスのしようがない。", duration: 300}, {comment: "明日から来なくていいよ。", duration: 300}],
      average: [{comment: "まだまだ半人前。", duration: 300}, {comment: "もっとキビキビ動く！", duration: 200}],
      good: [{comment: "グッジョビ。", duration: 200}, {comment: "ワンダフル。", duration: 200}],
    },
    outline: {
      company: "山川製作所",
      category: "精密機械工場",
      work: "システム基盤構築",
      basicMoney: 12,
      level: 1,
      holiday: "完全週休一日制",
      retirement: "90%",
      workplace: "鳥取県",
      background: require("../../assets/outline/outlineBgYamagawa.png"),
      button: require("../../assets/outline/outlineButtonYamagawa.png"),
    },
  },

  previewJob: undefined,
};

export default initialState;
