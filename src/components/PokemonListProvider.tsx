import { createContext, useContext, useState } from "react"
import { NamedAPIResource } from "pokenode-ts"
import { useFetchPokemonList } from "../hooks/useFetchPokemonList"


export const PokemonListContext = createContext<{ data: NamedAPIResource[], loading: boolean }>({ data: [], loading: true })

type Props = {
  children: React.ReactNode
}

export const PokemonListContextProvider = ({ children }: Props) => {
  const context = useContext(PokemonListContext)
  const { data, loading } = useFetchPokemonList({ limit: 30 })

  if (!context) {
    throw new Error("usePokemonListContext must be used within a PokemonListProvider")
  }

  return (
    <PokemonListContext.Provider value={{ data: data?.results ?? [], loading }}>
      {children}
    </PokemonListContext.Provider>
  )
}
