import { Injectable } from '@nestjs/common';
import { Board } from '@monorepo2/games-of-life';
import { BoardDto } from './dto/BoardDto';

@Injectable()
export class AppService {
  boardInstance = new Board();

  createBoard(board: BoardDto) {
    this.boardInstance.createCustomBoard(board);
    return board.id;
  }

  tick(id: string) {
    return this.boardInstance.tick(id);
  }

  getBoard(id: string) {
    return this.boardInstance.getBoard(id);
  }
}
