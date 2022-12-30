import { StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";

type Props = {
  style: object;
  targetNum: number;
  diffNum: number;
};

const Count = ({ style, targetNum, diffNum }: Props) => {
  const [number, setNumber] = useState<number>(0);
  useEffect(() => {
    let startNumber = targetNum - diffNum;
    let countNum = 0;
    let counterData: number;
    let speed: number = 10 / diffNum;
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

  return <Text style={style}>{new Intl.NumberFormat().format(number)}</Text>;
};

export default Count;

const styles = StyleSheet.create({});
