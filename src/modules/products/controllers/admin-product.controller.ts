import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { AdminProductService } from "../services/admin-product.service";
import { CreateProductDto } from "../dto/create-product.dto";
import { JwtAuthGuard } from "src/common/guards/jwt-auth.guard";
import { UserRole } from "src/modules/auth/entities/user.entity";
import { Roles } from "src/common/decorators/roles.decorator";
import { RolesGuard } from "src/common/guards/roles.guard";
import { UpdateProductDto } from "../dto/update-product.dto";

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
@Controller('admin/products')

export class AdminProductController {
  constructor(
    private readonly productService: AdminProductService,
  ) {}

  @Post('create')
  createProduct(@Body() dto:CreateProductDto) {
    return this.productService.createProduct(dto);
  }

  @Get('all')
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Patch('update/:id')
  updateProduct(@Param('id') id: number, @Body() updateDto: UpdateProductDto) {
    return this.productService.updateProduct(id, updateDto);
  }

  @Get(':id')
  getProductById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }

  @Post('delete/:id')
  deleteProduct(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }

}