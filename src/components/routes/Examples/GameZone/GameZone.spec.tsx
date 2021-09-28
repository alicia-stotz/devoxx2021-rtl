import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { POKEDEX, FREE_POKEMON, PokedexContext } from '../../../../contexts/pokedex.context';
import { GameZone } from "./GameZone";

const alreadyExistFct = jest.fn();
alreadyExistFct.mockReturnValueOnce(true).mockReturnValue(false);

let defaultPokedexContext = {
  pokemon: POKEDEX,
  freePokemon: null,

  removePokemon: jest.fn(),
  addPokemon: jest.fn(),
  addFreePokemon: jest.fn(),
  removeFreePokemon: jest.fn(),
  alreadyExist: alreadyExistFct
};

describe("GameZone component", () => {
  describe("ToolBar component", () => {
    describe("Default bar", () => {
      beforeEach(() => {
        render(<GameZone />);
      });
      it("Should display number of Pokemon", () => {
        expect(screen.getByTitle("Number of pokemon in pokedex").textContent).toEqual("Pokedex: 2");
      });
      it("Should display number of Pokeball", () => {
        expect(screen.getByTitle("Number of pokeball").textContent).toEqual("Pokeball: 0");
      });
    });

    describe("Event and actions", () => {
      beforeEach(() => {
        render(<GameZone />);
      });
      it("Should increment pokeball number with add button (only one)", () => {
        userEvent.click(
          screen.getByRole(
            "button",
            { name: "Add one Pokeball" }
          )
        );

        const newPokeballNumber = screen.getByTitle("Number of pokeball");

        expect(newPokeballNumber.textContent)
          .toEqual("Pokeball: 1");
      });

      it("Should remove disabled on add button if user type somthing", async () => {
        expect(screen.getByRole("button", { name: "Add number of Pokeball write in input" })).toBeDisabled();
        userEvent.type(
          screen.getByPlaceholderText("ex : 5"), "3"
        );
        expect(screen.getByRole("button", { name: "Add number of Pokeball write in input" })).not.toBeDisabled();
      });

      it("Should not authorize 'e' in input (prevent number type)", async () => {
        userEvent.type(
          screen.getByPlaceholderText("ex : 5"), "e"
        );
        expect(screen.getByRole("button", { name: "Add number of Pokeball write in input" })).toBeDisabled();
        expect(screen.queryByDisplayValue("e")).not.toBeInTheDocument();
      });
    });

    describe("Event and actions (async)", () => {
      it("Should increment pokeball number if user type something in free input", async () => {
        render(<GameZone />);

        userEvent.type(
          screen.getByPlaceholderText("ex : 5"), "6"
        );
        userEvent.click(
          screen.getByRole(
            "button",
            { name: "Add number of Pokeball write in input" }
          )
        );

        const newPokeballNumber = await screen.findByTitle("Number of pokeball");
        expect(screen.getByDisplayValue("6")).toBeInTheDocument();
        expect(newPokeballNumber.textContent).toEqual("Pokeball: 6");
      });
    });
  });

  describe("Finder component", () => {
    describe("Default page", () => {
      it("Should not display finder component", () => {
        render(<GameZone />);
        expect(screen.queryByText("Rechercher un nouveau Pokemon")).toBeNull();
      });
    });
    describe("Default Finder", () => {
      beforeEach(() => {
        render(<PokedexContext.Provider value={defaultPokedexContext}>
          <GameZone />
        </PokedexContext.Provider>);
      });

      it("Should display finder component when there are no free pokemon", () => {
        expect(screen.getByText("Rechercher un nouveau Pokemon")).toBeInTheDocument();
      });

      it("Should disabled/enable button when user type on input", () => {
        expect(screen.getByRole("button", { name: "Search Pokemon" })).toBeDisabled();

        userEvent.type(
          screen.getByPlaceholderText("ex : 15"), "3"
        );

        expect(screen.getByRole("button", { name: "Search Pokemon" })).not.toBeDisabled();
      });

      it("Should display error message if pokemon is already present in pokedex", () => {
        userEvent.type(
          screen.getByPlaceholderText("ex : 15"), "1"
        );
        userEvent.click(screen.getByRole("button", { name: "Search Pokemon" }));

        expect(alreadyExistFct).toHaveBeenCalled();
        expect(screen.getByText("Le Pokemon est déjà présent dans le Pokedex.")).toBeInTheDocument();
      });

      it("Should call pokeAPI when click on button and remove finder component", async () => {
        const spyFct = jest.spyOn(global, "fetch").mockImplementation(
          (): Promise<any> =>
            Promise.resolve({
              ok: true,
              status: 200,
              json: () => Promise.resolve(FREE_POKEMON)
            })
        );

        userEvent.type(
          screen.getByPlaceholderText("ex : 15"), "2"
        );
        userEvent.click(screen.getByRole("button", { name: "Search Pokemon" }));

        await waitFor(async () => {
          expect(global.fetch).toHaveBeenCalled();

        })
        spyFct.mockClear();
      });
    });
  });
});