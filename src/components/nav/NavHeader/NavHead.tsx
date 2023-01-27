import { View, StyleSheet, Animated, Pressable } from "react-native";
import UserMoney from "../../money/UserMoney";
import ImageButton from "../../button/ImageButton";
import { UserIconType } from "../../../types/userIcons";
import UserIcon from "../../face/UserIcon";
import { useRef } from "react";
import { page } from "../../../types/page";
import User from "../../../models/user";

type Props = {
  icon: UserIconType;
  userMoney: number;
  user: User;
  onUserModal: () => void;
  gachaMove: () => void;
};

const NavHead = ({ icon, userMoney, onUserModal, gachaMove, user }: Props) => {
  const iconAnim = useRef(new Animated.Value(0)).current;

  const iconY = iconAnim.interpolate({
    inputRange: [0, 100, 101, 200],
    outputRange: [-1, -1, 0, 0],
  });

  Animated.loop(
    Animated.timing(iconAnim, {
      toValue: 200,
      duration: 300,
      useNativeDriver: false,
    })
  ).start();

  const ButtonAnim = useRef(new Animated.Value(0)).current;
  const ButtonWidth = ButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [50, 45],
  });

  const ButtonHeight = ButtonAnim.interpolate({
    inputRange: [0, 100],
    outputRange: [50, 45],
  });

  const pressInHandler = () => {
    Animated.timing(ButtonAnim, {
      toValue: 100,
      duration: 50,
      useNativeDriver: false,
    }).start();
  };

  const pressOutHandler = () => {
    ButtonAnim.setValue(0);
  };

  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.innerContainer}>
          <UserMoney userMoney={userMoney} />
          <View style={styles.settingContainer}>
            {user.page !== page.gacha && (
              <ImageButton
                source={require("../../../assets/ui/gachaButton.png")}
                onPress={gachaMove}
                width={47}
                height={47}
                diffWidth={5}
                diffHeight={5}
                padding={0}
              />
            )}
            <Animated.View
              style={{
                marginLeft: 4,
                transform: [{ translateY: iconY }],
              }}
            >
              <Pressable
                onPress={onUserModal}
                onPressIn={pressInHandler}
                onPressOut={pressOutHandler}
                style={styles.iconContainer}
              >
                <UserIcon
                  icon={icon}
                  width={ButtonWidth}
                  height={ButtonHeight}
                />
              </Pressable>
            </Animated.View>
          </View>
        </View>
      </View>
    </>
  );
};

export default NavHead;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  settingContainer: {
    flexDirection: "row",
  },
});
