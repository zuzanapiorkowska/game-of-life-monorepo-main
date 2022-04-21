import { IsString, MinLength, IsArray, ArrayNotEmpty } from 'class-validator';

export class BoardDto {
  @IsString()
  @MinLength(1)
  id: string;

  @IsArray({
    each: true,
  })
  @ArrayNotEmpty()
  array: number[][];
}
