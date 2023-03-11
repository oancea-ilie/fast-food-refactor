import { Column, CreateDateColumn, Entity, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @ObjectIdColumn()
  _id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column({ default: 0 })
  stock: number;

  @CreateDateColumn({ type: 'timestamp', precision: 6 })
  createdAt: Date;
}
