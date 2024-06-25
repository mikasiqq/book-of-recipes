import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
const RECIPE_ITEM_HEIGHT = 200;
const RECIPE_ITEM_MARGIN = 20;

export const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: "#e6e6e6",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#f8f9fa",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  photo: {
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: 10, // Добавляем отступ слева для фото
  },
  title: {
    flex: 1,
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    color: "#495057",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  category: {
    marginTop: 5,
    marginBottom: 5,
    color: "#6c757d",
  },
});
