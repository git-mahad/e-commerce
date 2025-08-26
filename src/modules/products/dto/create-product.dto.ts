import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'Name of the product' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Product description' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Price of the product', example: 199.99 })
  @IsNumber()
  price: number;

  @ApiPropertyOptional({ description: 'Product images URLs', type: [String] })
  @IsOptional()
  @IsArray()
  images?: string[];

  @ApiProperty({ description: 'Brand of the product' })
  @IsString()
  brand: string;

  @ApiPropertyOptional({ description: 'Product variants', type: [Object] })
  @IsOptional()
  @IsArray()
  varients?: { color?: string; size?: string }[];
}
