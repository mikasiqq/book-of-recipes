import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import MenuImage from "@/components/menu-image/MenuImage";
import { getCategoryName } from "@/data/mock-data-api";
import { recipes } from "@/data/data";

export default function HomeScreen(props: any) {
  const { navigation } = props;

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <MenuImage
  //         onPress={() => {
  //           navigation.openDrawer();
  //         }}
  //       />
  //     ),
  //     headerRight: () => <View />,
  //   });
  // }, []);

  const onPressRecipe = (item: any) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }: { item: any }) => (
    <TouchableHighlight
      underlayColor="rgba(128, 128, 128, 0.1)"
      onPress={() => onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        style={styles.bg}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
}
