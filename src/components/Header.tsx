import { Burger, AppShell, Title, Flex, Button } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"

type HeaderProps = {
  opened: boolean
  toggle: () => void
}

export function Header({ opened, toggle }: HeaderProps) {
  const [, setUser] = useLocalStorage<{ email: string, password: string } | null>({ key: "user" })

  const logout = () => {
    setUser(null)
  }

  return (
    <AppShell.Header>
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
      />
      <Flex justify="space-between">
        <Title order={1}>React-Pokedex</Title>

        <Button onClick={logout}>Logout</Button>
      </Flex>
    </AppShell.Header>
  )
}
