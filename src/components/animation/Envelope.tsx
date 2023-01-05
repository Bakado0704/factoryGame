import { useRef } from "react";
import { Image, StyleSheet, Animated, View, Pressable } from "react-native";
import User from "../../models/user";
import { GachaStatus } from "../../types/gacha";

type Props = {
  user: User;
  resultHandler: () => void;
  envelopeOpenHandler: () => void;
};

const Envelope = ({ user, resultHandler, envelopeOpenHandler }: Props) => {
  const envelopeAnim = useRef(new Animated.Value(0)).current;
  const sheetAnim = useRef(new Animated.Value(0)).current;

  const envelopeText = envelopeAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  const envelopeWidth = envelopeAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [268, 282, 268],
  });

  const envelopeHeight = envelopeAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [347, 364, 347],
  });

  const sheetY = sheetAnim.interpolate({
    inputRange: [0, 1000, 1001, 2000, 2001, 3000],
    outputRange: [-123, -123, -133, -133, -143, -143],
  });

  const sheetHeight = sheetAnim.interpolate({
    inputRange: [0, 1000, 1001, 2000, 2001, 3000],
    outputRange: [32, 32, 52, 52, 72, 72],
  });

  const sheetAnimation = () => {
    Animated.sequence([
      Animated.loop(
        Animated.timing(sheetAnim, {
          toValue: 3000,
          duration: 3000,
          useNativeDriver: false,
        })
      ),
    ]).start();
  };

  Animated.loop(
    Animated.timing(envelopeAnim, {
      toValue: 2,
      duration: 1800,
      useNativeDriver: false,
    })
  ).start();

  const animation = () => {
    sheetAnimation(),
      setTimeout(() => {
        resultHandler();
      }, 3000);
  };

  const envelopeHandler = () => {
    envelopeOpenHandler();
    animation();
  };

  return (
    <>
      {user.gachaStatus === GachaStatus.closed && (
        <View style={styles.envelopeContainer}>
          <Animated.Text style={[styles.text, { opacity: envelopeText }]}>
            タップして開封しよう !
          </Animated.Text>
          <Animated.View
            style={[{ width: envelopeWidth }, { height: envelopeHeight }]}
          >
            <Pressable onPress={envelopeHandler}>
              <Image
                source={require("../../assets/ui/envelope.png")}
                style={styles.envelopeOpen}
              />
            </Pressable>
          </Animated.View>
        </View>
      )}
      {user.gachaStatus === GachaStatus.opened && (
        <View style={styles.envelopeContainer}>
          <Image
            source={require("../../assets/ui/envelopeOpen.png")}
            style={styles.envelopeClosed}
          />
          {user.gachaStatus === GachaStatus.opened && (
            <Animated.View
              style={[
                styles.sheet,
                { transform: [{ translateY: sheetY }, { translateX: 0.5 }] },
                { height: sheetHeight },
              ]}
            />
          )}
        </View>
      )}
    </>
  );
};

export default Envelope;

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: "50%",
    fontSize: 20,
    fontFamily: "MochiyPop",
    margin: 10,
    color: "white",
    transform: [{ translateY: -240 }],
  },
  envelopeContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  envelopeOpen: {
    width: "100%",
    height: "100%",
  },
  envelopeClosed: {
    width: 373,
    height: 482,
  },
  sheet: {
    width: 207,
    height: 32,
    backgroundColor: "white",
    position: "absolute",
  },
});
