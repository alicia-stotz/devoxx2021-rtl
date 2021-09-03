import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import { ToolBar, IToolBarProps } from './ToolBar';
import userEvent from "@testing-library/user-event";

const defaultProps: IToolBarProps = {
  numberOfPokemon: 3,
  //withFakePromise: true
};

afterEach(cleanup);

describe("ToolBar component", () => {
  describe("Default bar", () => {
    beforeEach(() => {
      render(<ToolBar {...defaultProps} />);
    });

    it("Should display number of Pokemon", () => {
      //console.log(screen.getByTitle("Number of pokemon in pokedex").textContent)
      //expect(screen.getByText('Pokedex: <strong>3</strong>')).toBeInTheDocument();
      expect(screen.getByTitle("Number of pokemon in pokedex").textContent).toEqual("Pokedex: 3");
    });
    it("Should display number of Pokeball", () => {
      expect(screen.getByTitle("Number of pokeball").textContent).toEqual("Pokeball: 0");
    });
  });

  describe("Event and actions", () => {
    beforeEach(() => {
      render(<ToolBar {...defaultProps} />);
    });

    it("Should increment pokeball number with add button (only one)", async () => {
      //expect(screen.getByTitle("Number of pokeball").textContent).toEqual("Pokeball: 0");
      fireEvent.click(
        screen.getByRole("button", { name: "Add one Pokeball" })
      );
      //const newPokeballNumber = await screen.findByTitle("Number of pokeball");
      const newPokeballNumber = screen.getByTitle("Number of pokeball");
      expect(newPokeballNumber.textContent).toEqual("Pokeball: 1");
    });

    it("Should remove disabled on add button if user type somthing", async () => {
      expect(screen.getByRole("button", { name: "Add number of Pokeball write in input" })).toBeDisabled();
      userEvent.type(
        screen.getByPlaceholderText("ex : 5"), "3"
      );
      expect(screen.getByRole("button", { name: "Add number of Pokeball write in input" })).not.toBeDisabled();
      //expect(await screen.findByRole("button", { name: "Add number of Pokeball write in input" })).not.toBeDisabled();
    });

    it("Should increment pokeball number if user type something in free input", async () => {
      userEvent.type(
        screen.getByPlaceholderText("ex : 5"), "6"
      );
      fireEvent.click(
        screen.getByRole("button", { name: "Add number of Pokeball write in input" })
      );
      //const newPokeballNumber = await screen.findByTitle("Number of pokeball");
      const newPokeballNumber = screen.getByTitle("Number of pokeball");
      expect(screen.getByDisplayValue("6")).toBeInTheDocument();
      expect(newPokeballNumber.textContent).toEqual("Pokeball: 6");
    });

    xit("Should increment pokeball number if user type something in free input", async () => {
      userEvent.type(
        screen.getByPlaceholderText("ex : 5"), "6"
      );
      fireEvent.click(
        screen.getByRole("button", { name: "Add number of Pokeball write in input" })
      );
      const newPokeballNumber = await screen.findByTitle("Number of pokeball");
      expect(screen.getByDisplayValue("6")).toBeInTheDocument();
      expect(newPokeballNumber.textContent).toEqual("Pokeball: 6");
    });

    it("Should not authorize 'e' in input (prevent number type)", async () => {
      userEvent.type(
        screen.getByPlaceholderText("ex : 5"), "e"
      );
      expect(screen.getByRole("button", { name: "Add number of Pokeball write in input" })).toBeDisabled();
      expect(screen.queryByDisplayValue("e")).not.toBeInTheDocument();
    });
  })
});