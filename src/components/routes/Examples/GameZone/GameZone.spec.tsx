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
        // Render the GameZone component
        render(<GameZone />);
      });
      it("Should display number of Pokemon", () => {
        // Selected by the title, the number of Pokemon in pokedex (title return an HTML content so we subselect by text content)
        expect(screen.getByTitle("Number of pokemon in pokedex").textContent).toEqual("Pokedex: 2");
      });
      it("Should display number of Pokeball", () => {
        // selected by the title, the number of available Pokeball (title return an HTML content so we subselect by text content)
        expect(screen.getByTitle("Number of pokeball").textContent).toEqual("Pokeball: 0");
      });
      it("Should display dollar", () => {
        // selected by the title, the dollar (title return an HTML content so we subselect by text content)
        expect(screen.getByTitle("Number of dollar").textContent).toEqual("$: 2000");
      });
    });

    describe("Event and actions", () => {
      beforeEach(() => {
        // Render the GameZone component
        render(<GameZone />);
      });
      it("Should increment pokeball number with add button (only one)", () => {
        // Click on the button with (+) icon
        userEvent.click(
          screen.getByRole(
            "button",
            { name: "Add one Pokeball" }
          )
        );

        //Select the the number of pokeball by title of component
        const newPokeballNumber = screen.getByTitle("Number of pokeball");

        // Title return an HTML content so we subselect by text content to verify the number of pokeball
        expect(newPokeballNumber.textContent)
          .toEqual("Pokeball: 1");
      });

      it("Should remove disabled on add button if user type somthing", async () => {
        // Select the button to add multiple pokeball in order to verify that is disabled (because input is empty)
        expect(screen.getByRole("button", { name: "Add number of Pokeball write in input" })).toBeDisabled();

        // Type "3" in input (preselected by the placeholder)
        userEvent.type(
          screen.getByPlaceholderText("ex : 5"), "3"
        );

        // Select the button to add multiple pokeball in order to verify that is not disabled (because input is not empty)
        expect(screen.getByRole("button", { name: "Add number of Pokeball write in input" })).not.toBeDisabled();
      });

      it("Should not authorize 'e' in input (prevent number type)", async () => {
        // Type "e" in input (preselected by the placeholder)
        userEvent.type(
          screen.getByPlaceholderText("ex : 5"), "e"
        );

        // Select the button to add multiple pokeball in order to verify that is disabled (because input is empty)
        expect(screen.getByRole("button", { name: "Add number of Pokeball write in input" })).toBeDisabled();

        // Select the input value to verify that is empty because "e" is not autorize in this input
        expect(screen.queryByDisplayValue("e")).not.toBeInTheDocument();
      });
    });

    describe("Event and actions (async)", () => {
      it("Should increment pokeball number if user type something in free input", async () => {
        // Render the GameZone component
        render(<GameZone />);

        // Type "6" in input (preselected by the placeholder)
        userEvent.type(
          screen.getByPlaceholderText("ex : 5"), "6"
        );

        // Click on the button to add multiple pokeball
        userEvent.click(
          screen.getByRole(
            "button",
            { name: "Add number of Pokeball write in input" }
          )
        );

        // Get the number of available pokeball, selected by title (await because previous clicking action is asynchronus)
        const newPokeballNumber = await screen.findByTitle("Number of pokeball");

        // Verify that the inpt display value is equal to type action ("6")
        expect(screen.getByDisplayValue("6")).toBeInTheDocument();

        // Verify the label
        expect(newPokeballNumber.textContent).toEqual("Pokeball: 6");
      });
    });
  });

  describe("Finder component", () => {
    describe("Default page", () => {
      it("Should not display finder component", () => {
        // Render GameZone component
        render(<GameZone />);

        // Not selected the finder component
        expect(screen.queryByText("Rechercher un nouveau Pokemon")).toBeNull();
      });
    });
    describe("Default Finder", () => {
      beforeEach(() => {
        // Render GameZone component with different props in pokedex context (here no Free Pokemon)
        render(<PokedexContext.Provider value={defaultPokedexContext}>
          <GameZone />
        </PokedexContext.Provider>);
      });

      it("Should display finder component when there are no free pokemon", () => {
        // Verify that the finder component is in page (because no free pokemon)
        expect(screen.getByText("Rechercher un nouveau Pokemon")).toBeInTheDocument();
      });

      it("Should disabled/enable button when user type on input", () => {
        // Select the search pokemon button by Role in order to verify is disabled (because input is empty)
        expect(screen.getByRole("button", { name: "Search Pokemon" })).toBeDisabled();

        // Type "3" in input (selected by placeholder)
        userEvent.type(
          screen.getByPlaceholderText("ex : 15"), "3"
        );

        // Select the search pokemon button by Role in order to verify is not disabled (because input is not empty) 
        expect(screen.getByRole("button", { name: "Search Pokemon" })).not.toBeDisabled();
      });

      it("Should display error message if pokemon is already present in pokedex", () => {
        // Type "1" in input (selected by placeholder)
        userEvent.type(
          screen.getByPlaceholderText("ex : 15"), "1"
        );

        // Click on search pokemon button (select by role with specific name)
        userEvent.click(screen.getByRole("button", { name: "Search Pokemon" }));

        // Context fct is call
        expect(alreadyExistFct).toHaveBeenCalled();

        // Select error text because pokemon numero is already present in pokedex
        expect(screen.getByText("Le Pokemon est déjà présent dans le Pokedex.")).toBeInTheDocument();
      });

      it("Should call pokeAPI when click on button and remove finder component", async () => {
        // Mock fetch fct
        const spyFct = jest.spyOn(global, "fetch").mockImplementation(
          (): Promise<any> =>
            Promise.resolve({
              ok: true,
              status: 200,
              json: () => Promise.resolve(FREE_POKEMON)
            })
        );

        // Type "1" in input (selected by placeholder)
        userEvent.type(
          screen.getByPlaceholderText("ex : 15"), "2"
        );
        // Click on search pokemon button (select by role with specific name)
        userEvent.click(screen.getByRole("button", { name: "Search Pokemon" }));

        // Waiting that fetch fct is called
        await waitFor(async () => {
          expect(global.fetch).toHaveBeenCalled();
        });

        spyFct.mockClear();
      });
    });
  });
});