import { Pokemon, PokemonClient } from "pokenode-ts"
import { useCallback, useEffect, useState } from "react"
import pokemonClient from "../utils/pokemonClient"

type UseFetchPokemonOptions = {
  skip?: boolean
}

const useFetchPokemonByName = (pokemonName: string, opts?: UseFetchPokemonOptions) => {
  const [data, setData] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (name: string) => {
    setLoading(true);
    setError(null);
    try {
      const pokemon = await pokemonClient.getPokemonByName(name);
      setData(pokemon);
    } catch (error) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    if (opts?.skip) {
      return
    }

    const init = async () => {
      await fetchData(pokemonName);
    }
    init()
  }, [fetchData, pokemonName, opts?.skip]);

  const refetch = async () => {
    await fetchData(pokemonName);
  }

  return { data, loading, error, refetch };
};

export default useFetchPokemonByName;
