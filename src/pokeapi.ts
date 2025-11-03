export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fullURL = `${pageURL ? pageURL : `${PokeAPI.baseURL}/location-area`}`;

    try {
      const response = await fetch(fullURL);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const locations: ShallowLocations = await response.json();
      return locations;
    } catch (err) {
      throw new Error(`Error fetching locations: ${(err as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const fullURL = `${PokeAPI.baseURL}/location-area/${locationName}`;

    try {
      const response = await fetch(fullURL);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const location: Location = await response.json();
      return location;
    } catch (err) {
      throw new Error(`Error fetching locations: ${(err as Error).message}`);
    }
  }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  encounter_method_rates: Array<{
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: Array<{
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }>;
  }>;
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: Array<{
    language: {
      name: string;
      url: string;
    };
    name: string;
  }>;
  pokemon_encounters: Array<{
    pokemon: {
      name: string;
      url: string;
    };
    version_details: Array<{
      encounter_details: Array<{
        chance: number;
        condition_values: Array<any>;
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }>;
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }>;
  }>;
};
