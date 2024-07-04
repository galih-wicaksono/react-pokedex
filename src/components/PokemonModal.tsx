import { Modal, Grid, Text, Flex } from '@mantine/core';
import { Pokemon } from 'pokenode-ts';

type PokemonModalProps = {
  pokemon: Pokemon
  opened: boolean
  close: () => void
}


export function PokemonModal({ pokemon, opened, close }: PokemonModalProps) {
  return (
    <>
      <Modal opened={opened} onClose={close} title={pokemon.name.toUpperCase()} size="xl">
        <Flex direction="column">

          <Flex>
            {pokemon.sprites.front_default ? <img src={pokemon.sprites.front_default} alt={pokemon.name} /> : null}
            {pokemon.sprites.back_default ? <img src={pokemon.sprites.back_default} alt={pokemon.name} /> : null}
          </Flex>
          <Grid>
            <Grid.Col span={6} >
              <Text>
                Name:
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text>
                {pokemon.name}
              </Text>
            </Grid.Col>

            <Grid.Col span={6} >
              <Text>
                Abilities:
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text>
                {pokemon.abilities.map(move => move.ability.name).join(", ")}
              </Text>
            </Grid.Col>


            <Grid.Col span={6} >
              <Text>
                Name:
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text>
                {pokemon.name}
              </Text>
            </Grid.Col>




          </Grid>
        </Flex>
      </Modal>
    </>
  );
}
