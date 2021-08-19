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
      //screen.debug();
      expect(screen.getByText('test')).toBeInTheDocument();
    });

    it("Should display table information", () => {
      expect(screen.getByText('15')).toBeInTheDocument();
      expect(screen.getByText('9')).toBeInTheDocument();
      expect(screen.getByText('55')).toBeInTheDocument();
    });

    // @TODO: Snippet "console.log(screen.getByRole("")
    // @TODO: Snippet "expect(screen.getByRole('link')).toBeInTheDocument();"
    it("Should display button information", () => {
      expect(screen.getByRole('link')).toBeInTheDocument();
    });

    // @TODO: Snippet "expect(screen.getByRole('button', {name: "Show more information"})).toBeInTheDocument();"
    it("Should display more information button", () => {
      expect(screen.getByRole('button', { name: "Show more information" })).toBeInTheDocument();
    })
  });

  describe("Pokemon card without types", () => {
    beforeEach(() => {
      render(<PokemonCard {...defaultPropsWithoutTypes} />);
    });

    // @TODO: Snippet "expect(screen.getByRole('button', {name: "Show more information"})).toBeNull();"
    it("Should not display more information button", () => {
      //expect(screen.getByRole('button', { name: "Show more information" })).toBeNull();
      expect(screen.queryByRole('button', { name: "Show more information" })).toBeNull();
    })
  })
})