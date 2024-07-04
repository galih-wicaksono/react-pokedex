import { Burger, AppShell, Title, Center } from "@mantine/core"

type HeaderProps = {
  opened: boolean
  toggle: () => void
}

export function Header({ opened, toggle }: HeaderProps) {
  return (
    <AppShell.Header>
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
      />
      <Center><Title order={1}>React-Pokedex</Title></Center>
    </AppShell.Header>
  )
}
