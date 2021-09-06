import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import { Pokedex } from './Pokedex';

afterEach(cleanup);

describe("Pokedex page", () => {
  describe("Default page", () => {
    beforeEach(() => {
      render(<Pokedex />);
    });

    it("Should display 3 cards", () => {
      const cards = screen.getAllByTitle("Pokemon card: Pokedex");
      expect(cards).toHaveLength(3);
    });
  });
});