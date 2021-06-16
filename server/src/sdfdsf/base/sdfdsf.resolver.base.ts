import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteSdfdsfArgs } from "./DeleteSdfdsfArgs";
import { SdfdsfFindManyArgs } from "./SdfdsfFindManyArgs";
import { SdfdsfFindUniqueArgs } from "./SdfdsfFindUniqueArgs";
import { Sdfdsf } from "./Sdfdsf";
import { SdfdsfService } from "../sdfdsf.service";

@graphql.Resolver(() => Sdfdsf)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class SdfdsfResolverBase {
  constructor(
    protected readonly service: SdfdsfService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Sdfdsf",
    action: "read",
    possession: "any",
  })
  async _sdfdsfsMeta(
    @graphql.Args() args: SdfdsfFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Sdfdsf])
  @nestAccessControl.UseRoles({
    resource: "Sdfdsf",
    action: "read",
    possession: "any",
  })
  async sdfdsfs(
    @graphql.Args() args: SdfdsfFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Sdfdsf[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Sdfdsf",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Sdfdsf, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Sdfdsf",
    action: "read",
    possession: "own",
  })
  async sdfdsf(
    @graphql.Args() args: SdfdsfFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Sdfdsf | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Sdfdsf",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Sdfdsf)
  @nestAccessControl.UseRoles({
    resource: "Sdfdsf",
    action: "delete",
    possession: "any",
  })
  async deleteSdfdsf(
    @graphql.Args() args: DeleteSdfdsfArgs
  ): Promise<Sdfdsf | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
