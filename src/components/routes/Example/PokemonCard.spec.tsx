import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import { IPokemonCardProps, PokemonCard } from "./PokemonCard";

afterEach(cleanup);

const defaultProps: IPokemonCardProps = {
  pokemon: {
    id: 1,
    name: "test",
    height: 15,
    order: 1,
    weight: 9,
    base_experience: 55
  }
};

describe("Pokemon card component", () => {
  describe("Default card", () => {
    beforeEach(() => {
      render(<PokemonCard {...defaultProps} />);
    });

    it("Should display card", () => {
      screen.debug();
      expect(screen.getByText('test')).toBeInTheDocument();
    })
  })
})