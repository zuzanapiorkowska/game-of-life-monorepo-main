interface buttonProps {
  hide?: boolean;
  text: string;
  onClick(): void;
}

export function Button({ onClick, hide, text }: buttonProps) {
  return (
    <button
      onClick={() => onClick()}
      className={hide ? 'hidden' : 'margin-right'}
    >
      {text}
    </button>
  );
}
