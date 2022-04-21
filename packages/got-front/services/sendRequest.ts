import axios from 'axios';

export class SendRequest {
  async tick(boardId: string): Promise<(0 | 1)[][]> {
    const url = `http://localhost:3333/api/tick/`;
    try {
      console.log('tried to get next board');
      const response = await axios.get(url + boardId);
      const board: (0 | 1)[][] = response.data;
      return board;
    } catch (err: any) {
      throw new Error(err.message + `Cannot connect to ${url}`);
    }
  }
  async newBoard(boardId: string, board: (0 | 1)[][]): Promise<string> {
    const url = 'http://localhost:3333/api';
    try {
      console.log('tried to send new board');
      const response = await axios.post(url, {
        id: boardId,
        array: board,
      });
      const id: string = response.data;
      return id;
    } catch (err: any) {
      throw new Error(err.message + `Cannot connect to ${url}`);
    }
  }
}
