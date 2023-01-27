import { useRef } from "react";
import {
  Image,
  StyleSheet,
  Animated,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import User from "../../models/user";
import { GachaStatus } from "../../types/gacha";
const { width } = Dimensions.get("window");

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
    outputRange: [width * 0.715, width * 0.752, width * 0.715],
  });

  const envelopeHeight = envelopeAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [width * 0.925, width * 0.971, width * 0.925],
  });

  const sheetY = sheetAnim.interpolate({
    inputRange: [0, 1000, 1001, 2000, 2001, 3000],
    outputRange: [
      -width * 0.328,
      -width * 0.328,
      -width * 0.355,
      -width * 0.355,
      -width * 0.381,
      -width * 0.381,
    ],
  });

  const sheetHeight = sheetAnim.interpolate({
    inputRange: [0, 1000, 1001, 2000, 2001, 3000],
    outputRange: [
      width * 0.085,
      width * 0.085,
      width * 0.139,
      width * 0.139,
      width * 0.192,
      width * 0.192,
    ],
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

  let closedOpacity = 0;
  let openedOpacity = 0;

  if (user.gachaStatus === GachaStatus.closed) {
    closedOpacity = 1;
    openedOpacity = 0;
  }

  if (user.gachaStatus === GachaStatus.opened) {
    closedOpacity = 0;
    openedOpacity = 1;
  }

  return (
    <>
      <View style={[styles.envelopeContainer, { opacity: openedOpacity }]}>
        <Image
          source={require("../../assets/ui/envelopeOpen.png")}
          style={styles.envelopeClosed}
        />

        <Animated.View
          style={[
            styles.sheet,
            { transform: [{ translateY: sheetY }, { translateX: 0.5 }] },
            { height: sheetHeight },
          ]}
        />
      </View>

      <View style={[styles.envelopeContainer, { opacity: closedOpacity }]}>
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
    </>
  );
};

export default Envelope;

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: "50%",
    fontSize: width * 0.053,
    fontFamily: "MochiyPop",
    margin: width * 0.027,
    color: "white",
    transform: [{ translateY: -width * 0.64 }],
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
    width: width * 0.995,
    height: width * 1.285,
  },
  sheet: {
    width: width * 0.552,
    height: width * 0.085,
    backgroundColor: "white",
    position: "absolute",
  },
});
