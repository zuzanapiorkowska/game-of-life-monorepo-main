import { GOTBoard } from '../components/GOTBoard';
import { Button } from '../components/Button';

const Game = () => {
  return (
    <>
      <h1>---GAME OF LIFE---</h1>
      <div className="container">
        <GOTBoard />
      </div>
    </>
  );
};

export default Game;
