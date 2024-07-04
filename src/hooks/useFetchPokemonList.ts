import { NamedAPIResourceList, PokemonClient } from "pokenode-ts"
import { useCallback, useEffect, useState } from "react"
import pokemonClient from "../utils/pokemonClient";

type UseFetchPokemonList = {
  offset?: number
  limit?: number
}

export const useFetchPokemonList = ({ limit, offset }: UseFetchPokemonList) => {
  const [data, setData] = useState<NamedAPIResourceList | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const pokemonList = await pokemonClient.listPokemons(offset, limit);
      setData(pokemonList);
    } catch (error) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [limit, offset])

  useEffect(() => {
    const init = async () => {
      await fetchData();
    }
    init()
  }, [fetchData]);

  const refetch = async () => {
    await fetchData();
  }

  return { data, loading, error, refetch };
};

