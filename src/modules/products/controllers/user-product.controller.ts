import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/common/guards/jwt-auth.guard";
import { UserProductService } from "../services/user-product.service";

@Controller('user/products')
@UseGuards(JwtAuthGuard)
export class UserProductController {
  constructor(
    private readonly productService: UserProductService,
  ) {}

  @Get('all')
  getallProducts() {
    return this.productService.getAllProducts();  
  }

  @Get(':id')
  getProductById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }
} 