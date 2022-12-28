import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import { supabase } from '../../util/supabase'
import { useEffect, useState } from 'react'
import { pokemonType } from '../../types/pokemon'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { query } = useRouter()
  const [pokemon, setPokemon] = useState<pokemonType>()
  async function getPokemons() {
    let { data: pokemon, error } = await supabase
      .from('Pokemon')
      .select('*')
      .eq("id", query?.id)
      .single()
    setPokemon(pokemon)
  }
  useEffect(() => {
    if (query.id)
      getPokemons()
  }, [query.id])

  if (!pokemon) {
    return (
      <main className={styles.main}>
        <h1>Loading ....</h1>
      </main>)
  }
  return (
    <>
      <Head>
        <title>CSR</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 style={inter.style}>Client side generated page</h1>
        <div className={styles.center} style={inter.style}>
          <h3>This page was generated on</h3>
          <h5>{new Date().toString()}</h5>
          <br />
          <h2>Pokemon</h2>
          <ul>
            <div key={pokemon.id} className={styles.pokemon_box}>
              <div className={styles.pokemon_data}>
                <p>name: {pokemon?.name}</p>
                <p>Type: {pokemon?.type}</p>
                <p>HP: {pokemon?.hp}</p>
              </div>
              <Image width={500} height={500} src={pokemon?.image} alt={pokemon?.name} />
            </div>
          </ul>
        </div>
      </main>
    </>
  )
}
