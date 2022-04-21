interface CellProps {
  state: number;
  onCellClick(): void;
}

export function Cell({ state, onCellClick }: CellProps) {
  return (
    <div
      className="cell"
      style={{ backgroundColor: state ? 'lightgreen' : 'beige' }}
      onClick={()=>onCellClick()}
    >
    </div>
  );
}
