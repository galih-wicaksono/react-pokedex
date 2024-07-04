import { Modal, Card, Text } from '@mantine/core';
import { Pokemon } from 'pokenode-ts';

type PokemonModalProps = {
  pokemon: Pokemon
  opened: boolean
  close: () => void
}

export function PokemonModal({ pokemon, opened, close }: PokemonModalProps) {
  return (
    <>
      <Modal opened={opened} onClose={close} title={pokemon.name} centered>
        <Card>
          <Text>{pokemon.name}</Text>
        </Card>
      </Modal>
    </>
  );
}
