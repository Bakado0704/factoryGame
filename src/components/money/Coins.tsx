import React from "react";
import { Play } from "../../types/play";
import Coin from "./Coin";

type Props = {
  playState: Play;
  combo: number;
};

const Coins = ({ playState, combo }: Props) => {
  return (
    <>
      <Coin playState={playState} delay={0} combo={combo} allowCombo={0} />
      <Coin playState={playState} delay={80} combo={combo} allowCombo={2} />
      <Coin playState={playState} delay={160} combo={combo} allowCombo={4} />
      <Coin playState={playState} delay={240} combo={combo} allowCombo={6} />
      <Coin playState={playState} delay={320} combo={combo} allowCombo={8} />
    </>
  );
};

export default Coins;
