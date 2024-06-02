import React from "react";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

interface Props {
  onPress: () => void;
}

export default function MenuImage(props: Props) {
  return (
    <TouchableOpacity
      style={styles.headerButtonContainer}
      onPress={props.onPress}
    >
      <Image
        style={styles.headerButtonImage}
        source={require("../../assets/icons/menu.png")}
      />
    </TouchableOpacity>
  );
}

MenuImage.propTypes = {
  onPress: PropTypes.func,
};
