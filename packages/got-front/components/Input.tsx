import { useState } from 'react';
import { Button } from './Button';

interface InputProps {
  hide: boolean;
  onInputChange(e: number): void;
  onStartClick(): void;
}

export function Input({ onInputChange, onStartClick, hide }: InputProps) {
  const [inputValue, setInputValue] = useState<number>(0);
  return (
    <div className="input-box">
      <span className="label">Choose the size of he board: </span>
      <input
        className="size-input"
        type="number"
        step={1}
        onChange={(e) => {
          const value = +e.target.value;
          setInputValue(value);
          onInputChange(value);
        }}
        value={inputValue}
      />
      <Button onClick={() => onStartClick()} text="START" hide={hide} />
    </div>
  );
}
