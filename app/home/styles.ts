import { RecipeCard } from "@/styles/AppStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  bg: {
    backgroundColor: "black",
    color: "white",
  },
});

export default styles;
