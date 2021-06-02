import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SdfdsfResolverBase } from "./base/sdfdsf.resolver.base";
import { Sdfdsf } from "./base/Sdfdsf";
import { SdfdsfService } from "./sdfdsf.service";

@graphql.Resolver(() => Sdfdsf)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class SdfdsfResolver extends SdfdsfResolverBase {
  constructor(
    protected readonly service: SdfdsfService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
