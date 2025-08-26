import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cart } from "./entities/cart.entity";
import { Product } from "../products/entities/product.entity";
import { CartService } from "./cart.service";
import { AdminCartController } from "./controllers/admin-cart.controller";
import { UserCartController } from "./controllers/user-cart.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Cart, Product])],
  controllers: [AdminCartController, UserCartController],
  providers: [CartService],
})

export class CartModule{}