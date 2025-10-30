import { createInterface } from "readline";
import { stdin, stdout } from "process";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((word) => word !== "");
}

export function startREPL() {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();

  rl.on("line", (line) => {
    const parsedWords = cleanInput(line);

    if (parsedWords.length) {
      console.log(`Your command was: ${parsedWords[0]}`);
    }
    rl.prompt();
  });
}
