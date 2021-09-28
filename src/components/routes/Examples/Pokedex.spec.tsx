import { render, screen } from "@testing-library/react";

import { Pokedex } from "./Pokedex";

describe("Pokedex page", () => {
  describe("Default page", () => {
    beforeEach(() => {
      // Render the Pokedex component 
      render(<Pokedex />);
    });

    it("Should display 2 cards", () => {
      // Multi select, selected card by text "Pokedex"
      const cards = screen.getAllByText("Pokedex");
      // Count that selection is equal to 2
      expect(cards).toHaveLength(2);
    });
  });
});