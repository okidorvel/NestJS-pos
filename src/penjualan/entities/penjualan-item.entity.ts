import { Produk } from 'src/produk/entities/produk.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Penjualan } from './penjualan.entity';

@Entity()
export class PenjualanItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jumlah_jual: number;

  @Column()
  harga_jual: number;

  @Column()
  potongan: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @ManyToOne(() => Penjualan, (pj) => pj.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  penjualan: Penjualan;

  @ManyToOne(() => Produk, (prod) => prod.id)
  produk: Produk;

  @ManyToOne(() => User, (usr) => usr.id)
  user: User;
}
