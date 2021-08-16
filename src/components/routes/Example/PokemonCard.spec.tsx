import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import { IPokemonCardProps, PokemonCard } from "./PokemonCard";

afterEach(cleanup);

const defaultProps: IPokemonCardProps = {
  pokemon: {
    id: 1,
    name: "test",
    height: 10,
    order: 1,
    weight: 10,
    base_experience: 10
  },
  type: "Mine"
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