import Link from "next/link";
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
export default function Navbar() {
    return (
        <nav style={{ display: "flex", justifyContent: "space-around", border: "2px dashed green", borderRadius: "1rem", marginBlock: "1rem", marginInline: "0.5rem", padding: "1rem" }} className={inter.className}>
            <Link href={"/"}>Home</Link>
            <Link href={"/CSR"}>CSR</Link>
            <Link href={"/SSR"}>SSR</Link>
            <Link href={"/SSG"}>SSG</Link>
            <Link href={"/ISR"}>ISR</Link>
        </nav>
    )
}
