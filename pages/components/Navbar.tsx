import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className={styles.navabar}>
      <ul>
        <li className={pathname === "/" ? styles.active : styles.navButton}><Link href="/">Home</Link></li>
        <li className={pathname === "/scoreboard" ? styles.active : styles.navButton}><Link href="/scoreboard">Scoreboard</Link></li>
      </ul>
    </nav>
  )
}

