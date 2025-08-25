import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole } from '../entities/user.entity';

export class RegisterDto {
  @ApiProperty({
    description: "User's name",
    example: "Ali",
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: "User's email",
    example: "ali@gmail.com",
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "Password(min 3 characters)",
    example: "StrongPass123!",
    minLength: 3,
  })
  @IsString()
  @MinLength(3, { message: 'length must be > 3' })
  password: string;

  @ApiPropertyOptional({
    description: "Role of the user. Defaults to 'user' if not provided",
    enum: UserRole,
    example: UserRole.USER,
  })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
