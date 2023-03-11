import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
const ObjectId = require('mongodb').ObjectId;

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: MongoRepository<Product>
  ) {}

  async findAll() {
    return this.productsRepository.find();
  }

  async findOne(id: string) {
    const objectId = ObjectId(id);
    const foundedProduct = await this.productsRepository.findOne({
      where: { _id: objectId },
    });
    return foundedProduct;
  }

  async create(createProductDto: CreateProductDto) {
    const { name } = createProductDto;
    const existingProduct = await this.productsRepository.findOne({
      where: { name },
    });
    if (existingProduct) {
      throw new ConflictException('Product with this name already exists');
    }
    const newProduct = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(newProduct);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const objectId = ObjectId(id);
    await this.findOne(id);
    if (!Object.keys(updateProductDto).length) {
      throw new NotFoundException(
        'At least one product property must be specified'
      );
    }
    if (updateProductDto?.name) {
      const existingProduct = await this.productsRepository.findOne({
        where: { name: updateProductDto.name },
      });
      if (existingProduct) {
        throw new ConflictException('Product with this name already exists');
      }
      return this.productsRepository.update(
        { _id: objectId },
        { ...updateProductDto }
      );
    }
    return this.productsRepository.update(
      { _id: objectId },
      { ...updateProductDto }
    );
  }

  async remove(id: string) {
    if (id === 'all') {
      return this.productsRepository.delete({});
    } else {
      const productToRemove = await this.findOne(id);
      if (productToRemove) {
        return this.productsRepository.remove(productToRemove);
      }
      throw new NotFoundException('No product found with this id');
    }
  }
}
