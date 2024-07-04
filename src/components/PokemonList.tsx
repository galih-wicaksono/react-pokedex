import { Center, Grid, Flex, TextInput } from "@mantine/core"
import { useDebouncedState } from "@mantine/hooks"
import { useContext, useMemo, useState } from "react"
import { PokemonListContext, PokemonCard } from "../components"

export function PokemonList() {
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
              <Grid.Col span={4} key={pokemon.name}>
                <PokemonCard name={pokemon.name} key={pokemon.name}></PokemonCard>
              </Grid.Col>
            )
          })
        }
      </Grid>
    </Flex>
  )
}
