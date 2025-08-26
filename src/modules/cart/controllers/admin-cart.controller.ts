import { Controller, UseGuards } from "@nestjs/common";
import { Roles } from "src/common/decorators/roles.decorator";
import { JwtAuthGuard } from "src/common/guards/jwt-auth.guard";
import { RolesGuard } from "src/common/guards/roles.guard";
import { UserRole } from "src/modules/auth/entities/user.entity";
import { CartService } from "../cart.service";

@Controller('admin/cart')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)

export class AdminCartController{
  constructor(
    private readonly cartService: CartService,
  ){}
}