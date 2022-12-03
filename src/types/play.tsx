export interface Play {
  status: PlayStatus; // ゲームの状態を管理
  processCount: number; // 現在のカウント数
  completeCount: number; // 成功した数
  money: number; // 稼いだ金額
  stamina: number;
  combo: number; // 今のコンボ数
  pattern: PlayPattern[]; // 今やっているゲームのパターン
  targets: PlayTarget[]; // 押すボタンの種類
}

export const PlayStatus = {
  stop: "stop",
  playing: "playing",
  gameover: "gameover",
} as const;
export type PlayStatus = typeof PlayStatus[keyof typeof PlayStatus];

export interface PlayPattern {
  distance: number;
  direction: boolean;
  target: PlayTarget;
}

export interface PlayTarget {
  number: number;
  velocity: number;
  color: PlayColor;
}

export const PlayColor = {
  Black: "#000000",
} as const;
export type PlayColor = typeof PlayColor[keyof typeof PlayColor];