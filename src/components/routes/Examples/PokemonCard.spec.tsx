import React from "react";
import { render, screen } from "@testing-library/react";

import { IPokemonCardProps, PokemonCard } from "./PokemonCard";

const defaultProps: IPokemonCardProps = {
  pokemon: {
    id: 1,
    name: "test",
    height: 15,
    order: 1,
    weight: 9,
    base_experience: 55,
    types: [
      {
        name: "test type",
        url: "https://test/"
      }
    ]
  }
};

const defaultPropsWithoutTypes: IPokemonCardProps = {
  pokemon: {
    id: 1,
    name: "test 2",
    height: 18,
    order: 3,
    weight: 12,
    base_experience: 64
  }
};

describe("Pokemon card component", () => {
  describe("Default card", () => {
    beforeEach(() => {
      render(<PokemonCard {...defaultProps} />);
    });

    it("Should display card", () => {
      expect(screen.getByText('test')).toBeInTheDocument();
    });

    it("Should display table information", () => {
      expect(screen.getByText("15")).toBeInTheDocument();
      expect(screen.getByText("9")).toBeInTheDocument();
      expect(screen.getByText("55")).toBeInTheDocument();
    });

    it("Should display button information", () => {
      expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it("Should display more information button", () => {
      expect(screen.getByRole('button', { name: "Show more information" })).toBeInTheDocument();
    })
  });

  describe("Pokemon card without types", () => {
    beforeEach(() => {
      render(<PokemonCard {...defaultPropsWithoutTypes} />);
    });

    it("Should not display more information button", () => {
      expect(screen.queryByRole('button', { name: 'Show more information' })).toBeNull();
    })
  });

  describe("Pokemon card button", () => {
    it("Should display remove btn", () => {
      render(<PokemonCard pokemon={defaultProps.pokemon} type="Mine" />);
      expect(screen.getByRole('button', { name: "Remove Pokemon" })).toBeInTheDocument();
    });

    it("Should display add btn but disabled (no Pokeball)", () => {
      render(<PokemonCard pokemon={defaultProps.pokemon} type="Grass" />);
      const addButton = screen.getByRole('button', { name: "Add Pokemon" });
      expect(addButton).toBeInTheDocument();
      expect(addButton).toBeDisabled();
    });
  })
})