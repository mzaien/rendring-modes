import Head from "next/head";
import Image from "next/image";
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import { supabase } from "../../util/supabase";
import { pokemonType } from "../../types/pokemon";

const inter = Inter({ subsets: ['latin'] })

export default function DynamicISR(props: { timeStamp: string, pokemon: pokemonType }) {
    return (
        <>
            <Head>
                <title>Dynamic ISR</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 style={inter.style}>Dynamically Incremental generated page</h1>
                <div className={styles.center} style={inter.style}>
                    <h3>This page was generated on</h3>
                    <h5>{props?.timeStamp}</h5>
                    <br />
                    <h2>Pokemon</h2>
                    <div key={props.pokemon?.id} className={styles.pokemon_box}>
                        <div className={styles.pokemon_data}>
                            <p>Name: {props.pokemon?.name}</p>
                            <p>Type: {props.pokemon?.type}</p>
                            <p>HP: {props.pokemon?.hp}</p>
                        </div>
                        <Image width={500} height={500} src={props.pokemon?.image} alt={props.pokemon?.name} />
                    </div>
                </div>
            </main>
        </>
    )
}


export const getStaticPaths = async () => {
    const { data: pokemons } = await supabase.from("Pokemon").select("id");

    const paths = pokemons?.map(({ id }) => ({
        params: {
            id: id.toString(),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export async function getStaticProps({ params: { id } }: { params: { id: string } }) {
    const { data: pokemon } = await supabase
        .from("Pokemon")
        .select("*")
        .eq("id", id)
        .single();;
    const timeStamp = await new Date().toString()
    return {
        props: {
            timeStamp,
            pokemon
        }
    }
}