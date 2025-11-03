import { State } from "./state.js";

export async function commandMap(state: State) {
  const { next, previous, results } = await state.pokeapi.fetchLocations(
    state.nextLocationsURL
  );

  state.nextLocationsURL = next;
  state.prevLocationsURL = previous;

  results.forEach((result) => console.log(result.name));
}

export async function commandMapb(state: State) {
  if (!state.prevLocationsURL) {
    throw new Error("You're on the first page");
  }
  const { next, previous, results } = await state.pokeapi.fetchLocations(
    state.prevLocationsURL
  );

  state.nextLocationsURL = next;
  state.prevLocationsURL = previous;

  results.forEach((result) => console.log(result.name));
}
