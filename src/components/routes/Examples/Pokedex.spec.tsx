import React from "react";
import { render, screen } from "@testing-library/react";

import { Pokedex } from "./Pokedex";

describe("Pokedex page", () => {
  describe("Default page", () => {
    beforeEach(() => {
      render(<Pokedex />);
    });

    it("Should display 3 cards", () => {
      const cards = screen.getAllByText("Pokedex");
      expect(cards).toHaveLength(3);
    });
  });
});