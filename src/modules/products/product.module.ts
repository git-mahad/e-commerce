import { Module } from "@nestjs/common";
import { AdminProductController } from "./controllers/admin-product.controller";
import { AdminProductService } from "./services/admin-product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { UserProductService } from "./services/user-product.service";
import { UserProductController } from "./controllers/user-product.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [AdminProductService, UserProductService],
  controllers: [AdminProductController, UserProductController]
})

export class ProductModule {}