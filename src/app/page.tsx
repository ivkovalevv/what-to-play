import { GameList } from "./components/GameList/GameList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Welcome to What To Play!</h1>
      <GameList/>
    </main>
  );
}
