import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UserAdminService } from '../services/user-admin.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRole } from 'src/modules/auth/entities/user.entity';
import { UpdateUserInfoDto } from 'src/modules/auth/dto/update.dto';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
export class UserAdminController {
  constructor(private readonly adminService: UserAdminService) {}

  @Get('users')
  async getAllUsers() {
    return this.adminService.getAllUsers();
  }

  @Get('users/:id')
  async getUserById(@Param('id') id: string) {
    return this.adminService.getUserById(+id);
  }

  @Patch('users/:id/status')
  async updateUserStatus(
    @Param('id') id: string,
    @Body('isActive') isActive: boolean,
  ) {
    return this.adminService.updateUserStatus(+id, isActive);
  }

  @Patch('users/:id/info')
async updateUserInfo(
  @Param('id') id: string,
  @Body() body: UpdateUserInfoDto,
) {
  return this.adminService.updateUserInfo(+id, body);
}

}