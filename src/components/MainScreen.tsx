import { AppShell } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Header } from "./Header"
import { PokemonListContextProvider } from "./PokemonListProvider"

import { useLocalStorage } from "@mantine/hooks"

import { LoginScreen } from "./LoginScreen"

type MainScreenProps = {
  children: React.ReactNode
}

export const MainScreen = ({ children }: MainScreenProps) => {
  const [user] = useLocalStorage<{ email: string, password: string } | null>({
    key: "user",
    defaultValue: null
  })

  const [opened, { toggle }] = useDisclosure(false)

  if (!user) {
    return <LoginScreen />
  }

  return (
    <PokemonListContextProvider>
      <AppShell
        header={{ height: 60 }}
      >
        <Header opened={opened} toggle={toggle} />
        <AppShell.Main>
          {children}
        </AppShell.Main>
      </AppShell>
    </PokemonListContextProvider>
  )
}


