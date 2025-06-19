import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity()
export class Product {
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @DeleteDateColumn()
  deletedt: Date;
}
