import { GameList } from "./components/GameList/GameList";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Hero/>
      <GameList/>
    </main>
  );
}
