import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';
import { UpdatePenjualanDto } from './dto/update-penjualan.dto';
import { Penjualan } from './entities/penjualan.entity';

@Injectable()
export class PenjualanService {
  constructor(
    @InjectRepository(Penjualan) private penjualanRepo: Repository<Penjualan>,
  ) {}
  create(createPenjualanDto: CreatePenjualanDto) {
    return this.penjualanRepo.save(createPenjualanDto);
  }

  findAll() {
    return this.penjualanRepo.find({ relations: ['user', 'konsumen'] });
  }

  findOne(id: number) {
    return this.penjualanRepo.findOne(id, {
      relations: [
        'user',
        'konsumen',
        'item',
        'item.produk',
        'bayar',
        'bayar.rekening',
      ],
    });
  }

  update(id: number, updatePenjualanDto: UpdatePenjualanDto) {
    updatePenjualanDto.id = id;
    return this.penjualanRepo.save(updatePenjualanDto);
  }

  async remove(id: number) {
    const jual = await this.penjualanRepo.findOne(id);
    return this.penjualanRepo.remove(jual);
  }
}
