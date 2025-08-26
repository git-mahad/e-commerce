import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "../dto/create-product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "../entities/product.entity";
import { Repository } from "typeorm";
import { UpdateProductDto } from "../dto/update-product.dto";

@Injectable()
export class AdminProductService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async createProduct(dto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(dto);
    return this.productRepository.save(product);
  }

  async getAllProducts() {
    return this.productRepository.find();
  }

  async getProductById(id: number) {
    return this.productRepository.findOne({where:{id}});
  }

  async updateProduct(id: number, updatedto: UpdateProductDto): Promise<Product> {
    const product = await this.productRepository.preload({ id, ...updatedto });
    if (!product) {
      throw new Error('Product not found');
    }
    return this.productRepository.save(product);
  }

  async deleteProduct(id:number): Promise<void> {
    await this.productRepository.delete(id);
  }
}