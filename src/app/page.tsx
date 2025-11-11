import { GameList } from "./components/GameList/GameList";
import Header from "./components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <video autoPlay loop muted controls={false} className="main-background-video">
        <source src="/assets/video/main-background.mp4" type="video/mp4"/>
      </video>
      <GameList/>
    </main>
  );
}
