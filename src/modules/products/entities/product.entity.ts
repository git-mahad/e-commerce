import { Cart } from "../../../modules/cart/entities/cart.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('simple-array', { nullable: true })
  images: string[];

  @Column()
  brand: string;

  @Column('simple-json', { nullable: true })
  varients: { color?: string; size?: string }[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(()=> Cart, (cart) => cart.product)
  cartItems: []
}