import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SdfdsfService } from "./sdfdsf.service";
import { SdfdsfControllerBase } from "./base/sdfdsf.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("sdfdsfs")
@common.Controller("sdfdsfs")
export class SdfdsfController extends SdfdsfControllerBase {
  constructor(
    protected readonly service: SdfdsfService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
