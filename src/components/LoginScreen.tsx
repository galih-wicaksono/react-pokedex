import { TextInput, PasswordInput, Button, Card, Flex, Container, Center, Title } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import { useState } from "react"

export function LoginScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [defaultEmail] = useLocalStorage<string>({
    key: "email",
    defaultValue: "user@email.com"
  })

  const [defaultPassword] = useLocalStorage({
    key: "password",
    defaultValue: "user@email.com"
  })

  const [isLoggedIn, setIsLoggedIn] = useLocalStorage({
    key: "isLoggedIn",
    defaultValue: "user@email.com"
  })

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    console.log({ email, password })
    if (email === defaultEmail && password === defaultPassword) {
      setIsLoggedIn(true)
    }
  }

  return (
    <Center>
      <Card>
        <Title order={1}>Login</Title>
        <Flex component="form" onSubmit={handleSubmit} direction="column" gap="sm">
          <TextInput
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            label="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </Flex>
      </Card>
    </Center>
  )
}
