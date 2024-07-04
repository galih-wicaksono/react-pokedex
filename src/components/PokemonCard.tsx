import { Card, Flex, Text } from "@mantine/core"
import useFetchPokemon from "../hooks/useFetchPokemon"
import { LikeButton } from "./LikeButton"
import { useGetLike } from "../hooks/useGetLike"
import { useDisclosure } from '@mantine/hooks';
import { PokemonModal } from "./PokemonModal";

type PokemonCardProps = {
  name: string
  skip?: boolean
}

export function PokemonCard({ name, skip }: PokemonCardProps) {
  const { isLiked, setLiked } = useGetLike(name)
  const [opened, { open, close }] = useDisclosure(false);

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
      <Card style={{ cursor: "pointer" }} onClick={open} >
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
      {data ?
        <PokemonModal pokemon={data} opened={opened} close={close} /> : null
      }
    </>
  )
}


