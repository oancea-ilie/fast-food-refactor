import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  description: string;
  @Column({ type: 'blob', nullable: true })
  image: string;
  @Column({ default: 0 })
  stock: number;
  @Column({ type: 'timestamp', precision: 6 })
  createdAt: Date;
}
