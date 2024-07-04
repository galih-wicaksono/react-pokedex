import { Burger, AppShell } from "@mantine/core"

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
      <div>Logo</div>
    </AppShell.Header>
  )
}
