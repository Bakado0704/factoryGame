import { View, StyleSheet, Animated, Pressable } from "react-native";
import UserMoney from "../../ui/UserMoney";
import ImageButton from "../../ui/ImageButton";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { UserIconType } from "../../../types/userIcon";
import UserIcon from "../../typeui/UserIcon";
import { useRef } from "react";
import { page } from "../../../types/page";
import { User } from "../../../types/user";

type Props = {
  icon: UserIconType;
  userMoney: number;
  user: User;
  onUserModal: () => void;
  gachaMove: (page: page) => void;
};

const NavHead = ({ icon, userMoney, onUserModal, gachaMove, user }: Props) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

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

  const gachaHandler = () => {
    gachaMove(page.gacha);
  };

  return (
    <>
      <View style={styles.rootContainer}>
        <UserMoney userMoney={userMoney} />
        <View style={styles.settingContainer}>
          {user.page !== page.gacha && (
            <ImageButton
              source={require("../../../assets/ui/gachaButton.png")}
              onPress={gachaHandler}
              style={styles.gachaButton}
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
              style={({ pressed }) => pressed && styles.pressed}
              android_ripple={{ color: "#ccc" }}
            >
              <UserIcon icon={icon} width={50} height={50} />
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </>
  );
};

export default NavHead;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  settingContainer: {
    flexDirection: "row",
  },
  gachaButton: {
    width: 47,
    height: 47,
  },
  pressed: {
    opacity: 0.75,
  },
});
