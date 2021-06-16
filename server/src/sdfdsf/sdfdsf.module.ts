import { Module } from "@nestjs/common";
import { SdfdsfModuleBase } from "./base/sdfdsf.module.base";
import { SdfdsfService } from "./sdfdsf.service";
import { SdfdsfController } from "./sdfdsf.controller";
import { SdfdsfResolver } from "./sdfdsf.resolver";

@Module({
  imports: [SdfdsfModuleBase],
  controllers: [SdfdsfController],
  providers: [SdfdsfService, SdfdsfResolver],
  exports: [SdfdsfService],
})
export class SdfdsfModule {}
