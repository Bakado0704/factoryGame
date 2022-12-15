import { useRef, useState } from "react";
import { Image, StyleSheet, Animated, View, Pressable } from "react-native";

type Props = {
  envelopeSetting: boolean;
  setEnvelopeSetting: (boolean: boolean) => void;
  gachaSettingHandler: () => void;
};

const Envelope = ({ envelopeSetting, gachaSettingHandler, setEnvelopeSetting }: Props) => {
  const [envelopeOpenedFirst, setEnvelopeOpened] = useState(false);

  const envelopeAnim = useRef(new Animated.Value(0)).current;
  const envelopeTextAnim = useRef(new Animated.Value(0)).current;
  const sheetAnim = useRef(new Animated.Value(0)).current;

  const envelopeText = envelopeTextAnim.interpolate({
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

  const animation = () => {
    sheetAnimation(),
      setTimeout(() => {
        setEnvelopeOpened(false);
        gachaSettingHandler();
      }, 3000);
  };

  const envelopeHandler = () => {
    setEnvelopeSetting(false);
    setEnvelopeOpened(true);
    animation();
  };

  return (
    <>
      {envelopeSetting && (
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
      {envelopeOpenedFirst && (
        <View style={styles.envelopeContainer}>
          <Image
            source={require("../../assets/ui/envelopeOpen.png")}
            style={styles.envelopeClosed}
          />
          {envelopeOpenedFirst && (
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
