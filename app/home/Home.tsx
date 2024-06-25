import React, { useState, useEffect, useMemo } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  ActivityIndicator,
} from "react-native";
import styles from "./styles"; // Убедитесь, что импорт стилей корректен
import { getCategoryName } from "@/data/mock-data-api";
import { recipes } from "@/data/data";
import YoutubePlayer from "react-native-youtube-iframe";
import { Platform } from "react-native";

export interface Recipe {
  recipeId: number;
  categoryId: number;
  title: string;
  photo_url: string;
  photosArray: string[];
  time: number;
  ingredients: (string | number)[][];
  description: string;
}

export default function HomeScreen() {
  const [loadedRecipes, setLoadedRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const existingData: Recipe[] = await new Promise((resolve) =>
          setTimeout(() => resolve(recipes), 1000)
        );
        setLoadedRecipes(existingData);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderRecipes = useMemo(
    () =>
      ({ item }: { item: Recipe }) =>
        (
          <TouchableHighlight underlayColor="rgba(128, 128, 128, 0.1)">
            <View testID="recipe-item" style={styles.container}>
              <Image style={styles.photo} source={{ uri: item.photo_url }} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.category}>
                {getCategoryName(item.categoryId)}
              </Text>
            </View>
          </TouchableHighlight>
        ),
    []
  );

  return (
    <View style={styles.bg}>
      {Platform.OS === "ios" && (
        <View style={{ margin: 20 }}>
          <YoutubePlayer
            height={400}
            width={600}
            videoId="ISNSaHXCl9A"
            play={true}
            volume={50}
            playbackRate={1}
          />
        </View>
      )}

      {!isLoading && loadedRecipes.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={loadedRecipes}
          renderItem={renderRecipes}
          keyExtractor={(item) => `${item.recipeId}`}
        />
      ) : (
        <ActivityIndicator
          testID="loading-indicator"
          size="large"
          color="#0000ff"
        />
      )}
    </View>
  );
}
