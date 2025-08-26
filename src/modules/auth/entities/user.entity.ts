import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Cart } from '../../../modules/cart/entities/cart.entity';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER
  })
  role: UserRole
  
  @Column({ default: true })
  isActive: boolean;

  @OneToMany(()=> Cart, (cart) => cart.user)
  cartItems: []
}