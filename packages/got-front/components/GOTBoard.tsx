import { useState } from 'react';
import { Button } from './Button';
import { Cell } from './Cell';
import { produce } from 'immer';
import { Input } from './Input';
import { SendRequest } from '../services/sendRequest';

export interface GOTBoardProps {}

export function GOTBoard() {
  const [board, setBoard] = useState<(0 | 1)[][]>([]);
  const [boardId, setBoardId] = useState<string>("");
  const [playing, setPlaying] = useState<boolean>(false);

  function handleTick() {
    new SendRequest().tick(boardId).then((res: (0 | 1)[][]) => {
      setBoard(res);
    });
  }

  function handleStartClick() {
    new SendRequest()
      .newBoard(boardId, board)
      .then((res: string) => console.log('id: ', res));
    setPlaying(true);
  }

  function handleCellClick(rowIdx: number, cellIdx: number) {
    setBoard(
      produce((draft) => {
        if (draft[rowIdx][cellIdx] === 0) {
          draft[rowIdx][cellIdx] = 1;
        } else {
          draft[rowIdx][cellIdx] = 0;
        }
      })
    );
    setPlaying(false);
  }

  function handleInputChange(inputValue: number) {
    setBoard(new Array(inputValue).fill(new Array(inputValue).fill(0)));
    const newBoardId = Math.random().toString();
    setBoardId(newBoardId);
  }
  function handleReset() {
    const emptyBoard = new Array(board.length).fill(
      new Array(board.length).fill(0)
    );
    setBoard(emptyBoard);
    const newBoardId = Math.random().toString();
    new SendRequest()
      .newBoard(newBoardId, emptyBoard)
      .then((res: string) => console.log('id: ', res));
  }

  return (
    <div className="game-area">
      <Input
        onInputChange={(inputValue) => {
          handleInputChange(inputValue);
        }}
        onStartClick={() => {
          handleStartClick();
        }}
        hide={playing ? true : false}
      />
      <div className="board">
        {board.map((row, rowIdx) => {
          return (
            <div className="row" key={rowIdx}>
              {row.map((cell, cellIdx) => {
                return (
                  <Cell
                    state={cell}
                    onCellClick={() => handleCellClick(rowIdx, cellIdx)}
                    key={cellIdx}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <Button
        onClick={() => {
          handleTick();
        }}
        hide={!playing ? true : false}
        text="TICK"
      />
    </div>
  );
}
