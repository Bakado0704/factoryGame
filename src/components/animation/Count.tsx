import { useEffect, useState } from "react";
import { ShadowText } from "../text/ShadowText";

type Props = {
  targetNum: number;
  diffNum: number;
};

const Count = ({ targetNum, diffNum }: Props) => {
  const [number, setNumber] = useState<number>(0);
  useEffect(() => {
    let startNumber = targetNum - diffNum;
    let countNum = 0;
    let counterData: number;
    let speed: number = Math.floor(10 / diffNum);
    let sum: number;

    if (targetNum !== 0) {
      const countUp = () => {
        countNum = countNum + 1;
        sum = countNum + startNumber;
        setNumber(sum);
        if (countNum >= diffNum) {
          clearInterval(counterData);
        }
      };

      counterData = setInterval(countUp, speed);
    }
  }, [targetNum]);

  return <ShadowText size={50} color="white">{new Intl.NumberFormat().format(number)}</ShadowText>;
};

export default Count;
