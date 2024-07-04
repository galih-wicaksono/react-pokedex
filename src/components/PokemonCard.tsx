import { Card, Flex, Text } from "@mantine/core"
import useFetchPokemon from "../hooks/useFetchPokemon"
import { LikeButton } from "./LikeButton"
import { useGetLike } from "../hooks/useGetLike"
import { Pokemon } from "pokenode-ts"

type PokemonCardProps = {
  name: string
  skip?: boolean
  onClick?: (pokemon: Pokemon) => void
}

export function PokemonCard({ name, skip, onClick }: PokemonCardProps) {
  const { isLiked, setLiked } = useGetLike(name)

  const { data, loading } = useFetchPokemon(name, {
    skip: skip
  })

  if (!data) {
    return null
  }

  if (loading) {
    return (
      <pre>loading...</pre>
    )
  }

  return (
    <>
      <Card style={{ cursor: "pointer" }} onClick={() => onClick?.(data)} >
        <Flex direction="column">
          <Flex justify="space-between">
            <Text>
              {data?.name}
            </Text>
            <LikeButton isLiked={isLiked} onClick={() => setLiked(!isLiked)} />
          </Flex>
          <img src={data?.sprites.front_default ?? ""} alt={data?.name} />
        </Flex>
      </Card>
    </>
  )
}


