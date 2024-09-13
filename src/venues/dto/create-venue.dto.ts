import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateVenueDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  capacity: number;
}
