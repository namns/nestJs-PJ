import {
  IsEmail,
  IsString,
  IsNotEmpty,
  Min,
} from 'class-validator';

export class UserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}