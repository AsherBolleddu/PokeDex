import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a location name");
  }

  // args[0] referring to locationName
  const { pokemon_encounters } = await state.pokeapi.fetchLocation(args[0]);
  console.log("Exploring " + args[0] + "...");
  console.log("Found Pokemon:");
  pokemon_encounters.forEach((enc) => console.log(` - ${enc.pokemon.name}`));
}
