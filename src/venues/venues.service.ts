import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';

@Injectable()
export class VenuesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createVenueDto: CreateVenueDto) {
    return this.prisma.venue.create({
      data: createVenueDto,
    });
  }

  findAll() {
    return this.prisma.venue.findMany();
  }

  findOne(id: number) {
    return this.prisma.venue.findUnique({
      where: { id },
    });
  }

  update(id: number, updateVenueDto: UpdateVenueDto) {
    return this.prisma.venue.update({
      where: { id },
      data: updateVenueDto,
    });
  }

  remove(id: number) {
    return this.prisma.venue.delete({
      where: { id },
    });
  }
}
