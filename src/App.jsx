
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Player from "./components/Player";

function App() {

  return (
  <>
    <main>
      <Header></Header>
      <div id="game-container">
        <ol id="players">
          <Player symbol="X">Jogador 1</Player>
          <Player symbol="0">Jogador 2</Player>
        </ol>
      <GameBoard />
      </div>
    </main>
  </>  
  )
}

export default App
