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
  const [isLoggedIn] = useLocalStorage({ key: "isLoggedIn", defaultValue: false })
  const [opened, { toggle }] = useDisclosure(false)

  if (!isLoggedIn) {
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


