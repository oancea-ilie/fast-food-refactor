import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>
  ) {}

  create(createProductDto: CreateProductDto) {
    const newProduct = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(newProduct);
  }

  findAll() {
    return this.productsRepository.find();
  }

  async findOne(id: number) {
    const foundedProduct = await this.productsRepository.findOne({
      where: { id },
    });
    if (!foundedProduct) {
      throw new NotFoundException('Product not found');
    }
    return foundedProduct;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.findOne(id);
    if (!Object.keys(updateProductDto).length) {
      throw new NotFoundException(
        'At least one product property must be specified'
      );
    }
    return this.productsRepository.update({ id }, { ...updateProductDto });
  }

  async remove(id: string) {
    if (id === 'all') {
      return this.productsRepository.delete({});
    } else {
      const productToRemove = await this.findOne(+id);
      return this.productsRepository.remove(productToRemove);
    }
  }
}
