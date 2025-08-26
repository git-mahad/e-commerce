import { User } from "../../../modules/auth/entities/user.entity";
import { Product } from "../../../modules/products/entities/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('cart')
export class Cart{
  @PrimaryGeneratedColumn()
  id: number

 @ManyToOne(() => User, user => user.cartItems)
  user: User;

  @ManyToOne(()=> Product, product => product.cartItems)
  product: Product;

  @Column()
  quantity: number
}