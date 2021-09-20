import { render, screen } from "@testing-library/react";

import { Pokedex } from "./Pokedex";

describe("Pokedex page", () => {
  describe("Default page", () => {
    beforeEach(() => {
      render(<Pokedex />);
    });

    it("Should display 2 cards", () => {
      const cards = screen.getAllByText("Pokedex");
      expect(cards).toHaveLength(2);
    });
  });
});