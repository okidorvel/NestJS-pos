import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { IsExist } from 'src/etc/validator/exist-validator';
import { IsUnique } from 'src/etc/validator/unique-validator';
import { UserDto } from 'src/user/dto/create-user.dto';
import { Produk } from '../entities/produk.entity';

export class ProdukDto {
  @ApiProperty()
  @IsExist([Produk, 'id'])
  id: number;

  @ApiProperty()
  @IsUnique([Produk, 'barcode'])
  barcode: string;

  @ApiProperty()
  @IsString()
  nama_produk: string;

  @ApiProperty()
  @IsString()
  deskripsi_produk: string;

  @ApiProperty()
  @IsNumber()
  harga_beli: number;

  @ApiProperty()
  @IsNumber()
  harga_jual: number;

  @ApiProperty({ format: 'binary' })
  @IsOptional()
  foto: string;

  @IsObject()
  user: UserDto;
}

export class CreateProdukDto extends OmitType(ProdukDto, ['id']) {}
export class ProdukIdDto extends PickType(ProdukDto, ['id']) {}
