import { ImageSourcePropType } from "react-native";

export interface Play {
  status: PlayStatus; // ゲームの状態を管理
  judge: judgeStatus; // ゲームの状態を管理
  processCount: number; // 現在のカウント数
  completeCount: number; // 成功した数
  money: number; // 稼いだ金額
  stamina: number;
  combo: number; // 今のコンボ数
  pattern: PlayPattern[][]; // 今やっているゲームのパターン
  targets: PlayTarget[]; // 押すボタンの種類
}

export const PlayStatus = {
  stop: "stop",
  playing: "playing",
  gameover: "gameover",
  result: "result",
} as const;
export type PlayStatus = typeof PlayStatus[keyof typeof PlayStatus];

export const judgeStatus = {
  waiting: "waiting",
  success: "success",
  failure: "failure",
} as const;
export type judgeStatus = typeof judgeStatus[keyof typeof judgeStatus];

export interface PlayPattern {
  distance: number[];
  direction: number[];
  target: PlayTarget;
}

export interface PlayTarget {
  velocity: number;
  color: string;
  ImageSourceOn: ImageSourcePropType;
  ImageSourceOff: ImageSourcePropType;
  ImageSourcePressed: ImageSourcePropType;
}

export interface PlayGap {
  frontGap: number;
  passedGap: number;
}