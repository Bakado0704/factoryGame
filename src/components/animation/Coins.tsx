import React from "react";
import { Play } from "../../types/play";
import Coin from "../../components/animation/Coin";

type Props = {
  playState: Play;
  combo: number;
};

const Coins = ({ playState, combo }: Props) => {
  return (
    <>
      <Coin playState={playState} delay={0} combo={combo} allowCombo={1} />
      <Coin playState={playState} delay={80} combo={combo} allowCombo={3} />
      <Coin playState={playState} delay={160} combo={combo} allowCombo={5} />
      <Coin playState={playState} delay={240} combo={combo} allowCombo={7} />
      <Coin playState={playState} delay={320} combo={combo} allowCombo={9} />
    </>
  );
};

export default Coins;
