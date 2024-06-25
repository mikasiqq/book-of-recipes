import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const AboutScreen = () => (
  <View
    style={[
      styles.container,
      Platform.select({
        ios: { backgroundColor: "blue" },
        android: { backgroundColor: "green" },
        web: { backgroundColor: "purple" },
      }),
    ]}
  >
    <Text style={styles.header}>О нас</Text>
    <Text style={styles.description}>
      🍲 Рецепты для всех 🌶️ Приветствуем вас на нашем сайте, где каждый найдет
      свой идеальный рецепт. Мы собрали множество рецептов из разных уголков
      мира, чтобы поделиться их радостью с вами. От классических блюд до
      экзотических кулинарных шедевров – здесь все для ваших гостей и самих
      себя.
    </Text>
    <Text style={styles.subheader}>🎉 Что мы предлагаем?</Text>
    <Text style={styles.description}>
      Более 5000 рецептов от известных шеф-поваров и начинающих кулинаров.
      Фильтрация по категориям, включая блюда для завтрака, обеда, ужина, а
      также диетические и безглютеновые рецепты. Инструкции с пошаговыми
      фотографиями, которые помогут даже новичкам приготовить вкусное блюдо.
      Рекомендации по ингредиентам и советы по приготовлению, чтобы сделать
      каждое блюдо незабываемым.
    </Text>
    <Text style={styles.subheader}>📚 Как начать?</Text>
    <Text style={styles.description}>
      Выберите категорию блюда, которое вы хотите приготовить, или используйте
      поиск для определённой ингредиенты. Затем следуйте инструкциям, и вы
      получите удовольствие от процесса приготовления и насладитесь великолепным
      результатом!
    </Text>
    <Text style={styles.subheader}>🌍 Свяжитесь с нами</Text>
    <Text style={styles.description}>
      Мы всегда открыты для обратной связи и новых предложений. Свяжитесь с нами
      через форму обратной связи на сайте или через социальные сети, чтобы
      поделиться своими впечатлениями и идеями.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default AboutScreen;
