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
        type: {
          name: "test type",
          url: "https://test/"
        }
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
      // Render the pokemonCard component with default props
      render(<PokemonCard {...defaultProps} />);
    });

    it("Should display card", () => {
      // Get the name of test pokemon by text
      expect(screen.getByText('test')).toBeInTheDocument();
    });

    it("Should display table information", () => {
      // Get the height of test pokemon by text
      expect(screen.getByText("15")).toBeInTheDocument();
      // Get the weight of test pokemon by text
      expect(screen.getByText("9")).toBeInTheDocument();
      // Get the base experience of test pokemon by text
      expect(screen.getByText("55")).toBeInTheDocument();
    });

    it("Should display button information", () => {
      // Get the button link to show more information of API, use aria-label = role
      expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it("Should display more information button", () => {
      // Get the arrow button to show more information of table, use aria-label = role + name option
      expect(screen.getByRole('button', { name: "Show more information" })).toBeInTheDocument();
    });
  });

  describe("Pokemon card without types", () => {
    beforeEach(() => {
      // Render the pokemonCard component with pokemon without types
      render(<PokemonCard {...defaultPropsWithoutTypes} />);
    });

    it("Should not display more information button", () => {
      // Verify that the show more button is not here when types is not present, use aria-label = role + name option
      expect(screen.queryByRole('button', { name: 'Show more information' })).toBeNull();
    });
  });

  describe("Pokemon card button", () => {
    it("Should display remove btn", () => {
      // Render the pokemonCard component with pokemon that is inside my pokedex
      render(<PokemonCard pokemon={defaultProps.pokemon} type="Mine" />);
      // Get the remove pokemon button, use aria-label = role + name option
      expect(screen.getByRole('button', { name: "Remove Pokemon" })).toBeInTheDocument();
    });

    it("Should display add btn but disabled (no Pokeball)", () => {
      // Render the pokemonCard component with free pokemon
      render(<PokemonCard pokemon={defaultProps.pokemon} type="Grass" />);
      // Get the add pokemon button, use aria-label = role + name option
      const addButton = screen.getByRole('button', { name: "Add Pokemon" });
      expect(addButton).toBeInTheDocument();
      // Verify that the button is disbled because there are no pokeball
      expect(addButton).toBeDisabled();
    });
  });
});