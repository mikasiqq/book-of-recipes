import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import HomeScreen from "./HomeScreen";

describe("HomeScreen", () => {
  it("renders correctly", async () => {
    const { getByText } = render(<HomeScreen />);

    expect(getByText("Shiitake Fried Rice")).toBeTruthy();
  });

  it("shows loading indicator initially", () => {
    const { getByTestId } = render(<HomeScreen />);
    const activityIndicator = getByTestId("loading-indicator");
    expect(activityIndicator).toBeTruthy();
  });

  it("displays recipes after data load", async () => {
    const { getAllByTestId } = render(<HomeScreen />);
    await waitFor(() => {
      const recipeItems = getAllByTestId("recipe-item");
      expect(recipeItems).toHaveLength(10);
    });
  });
});
