import { PrismaService } from "nestjs-prisma";
import { Prisma, Sdfdsf } from "@prisma/client";

export class SdfdsfServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SdfdsfFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfdsfFindManyArgs>
  ): Promise<number> {
    return this.prisma.sdfdsf.count(args);
  }

  async findMany<T extends Prisma.SdfdsfFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfdsfFindManyArgs>
  ): Promise<Sdfdsf[]> {
    return this.prisma.sdfdsf.findMany(args);
  }
  async findOne<T extends Prisma.SdfdsfFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfdsfFindUniqueArgs>
  ): Promise<Sdfdsf | null> {
    return this.prisma.sdfdsf.findUnique(args);
  }
  async create<T extends Prisma.SdfdsfCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfdsfCreateArgs>
  ): Promise<Sdfdsf> {
    return this.prisma.sdfdsf.create<T>(args);
  }
  async update<T extends Prisma.SdfdsfUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfdsfUpdateArgs>
  ): Promise<Sdfdsf> {
    return this.prisma.sdfdsf.update<T>(args);
  }
  async delete<T extends Prisma.SdfdsfDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SdfdsfDeleteArgs>
  ): Promise<Sdfdsf> {
    return this.prisma.sdfdsf.delete(args);
  }
}
