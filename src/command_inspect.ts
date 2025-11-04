import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("you must provide a pokemon name");
  }

  const name = args[0];
  const pokemon = state.caughtPokemon[name];

  if (!pokemon) {
    throw new Error("you have not caught that pokemon");
  }
  console.log(
    `Name: ${name}\nHeight: ${pokemon.height}\nWeight: ${pokemon.weight}\nStats:`
  );
  pokemon.stats.forEach((stat) =>
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`)
  );
  console.log("Types:");
  pokemon.types.forEach((type) => console.log(`  - ${type.type.name}`));
}
