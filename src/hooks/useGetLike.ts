import { useLocalStorage } from "@mantine/hooks"

export const useGetLike = (name: string) => {
  const [isLiked, setLiked] = useLocalStorage<boolean>({
    key: name,
    defaultValue: false
  })
  return { isLiked, setLiked }
}
