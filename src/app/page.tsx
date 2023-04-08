import { Inter } from 'next/font/google'
import styles from './styles/page.module.css'
import Navbar from './components/Navbar';
import LandingPage from './pages/landingPage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage/>
    </main>
  )
}
