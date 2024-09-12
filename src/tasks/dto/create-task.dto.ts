import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsOptional()
  value?: number;

  @IsOptional()
  @IsString()
  status?: string;
}
