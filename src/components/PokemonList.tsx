import { Center, Grid, Flex, TextInput } from "@mantine/core"
import { useDebouncedState } from "@mantine/hooks"
import { useContext, useMemo, useState } from "react"
import { PokemonListContext, PokemonCard } from "../components"
import { Pokemon } from "pokenode-ts"
import { PokemonModal } from "./PokemonModal";

export function PokemonList() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)
  const { data, loading } = useContext(PokemonListContext)
  const [debouncedFilter, setFilter] = useDebouncedState("", 300)

  const filteredList = useMemo(() => {
    return data.filter((pokemon) => {
      return pokemon.name.includes(debouncedFilter)
    })
  }, [data, debouncedFilter])

  if (loading) {
    return <Center>loading</Center>
  }

  return (
    <Flex direction="column" gap="md" p="xl">
      <TextInput
        onChange={(e) => setFilter(e.target.value)}
        label="Search pokemon"
      />
      <Grid>
        {
          filteredList.map(pokemon => {
            return (
              <Grid.Col span={3} key={pokemon.name}>
                <PokemonCard
                  name={pokemon.name}
                  key={pokemon.name}
                  onClick={(data) => setSelectedPokemon(data)}
                />
              </Grid.Col>
            )
          })
        }
      </Grid>
      {selectedPokemon && <PokemonModal pokemon={selectedPokemon} opened={selectedPokemon ? true : false} close={() => setSelectedPokemon(null)} />}
    </Flex>
  )
}
