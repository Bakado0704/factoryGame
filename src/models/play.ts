import { Play as _Play, PlayPattern, PlayStatus, PlayTarget } from "../types/play";

export default class play implements _Play {
  constructor(
    public status: PlayStatus,
    public processCount: number,
    public completeCount: number,
    public money: number,
    public stamina: number,
    public combo: number,
    public pattern: PlayPattern[],
    public targets: PlayTarget[],
  ) {
    this.status = status;
    this.processCount = processCount;
    this.completeCount = completeCount;
    this.money = money;
    this.stamina = stamina;
    this.combo = combo;
    this.pattern = pattern;
    this.targets = targets;
  }
}
