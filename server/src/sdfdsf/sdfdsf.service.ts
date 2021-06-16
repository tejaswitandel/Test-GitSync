import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SdfdsfServiceBase } from "./base/sdfdsf.service.base";

@Injectable()
export class SdfdsfService extends SdfdsfServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
