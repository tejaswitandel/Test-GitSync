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
import { DeleteSupportArgs } from "./DeleteSupportArgs";
import { SupportFindManyArgs } from "./SupportFindManyArgs";
import { SupportFindUniqueArgs } from "./SupportFindUniqueArgs";
import { Support } from "./Support";
import { SupportService } from "../support.service";

@graphql.Resolver(() => Support)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class SupportResolverBase {
  constructor(
    protected readonly service: SupportService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "read",
    possession: "any",
  })
  async _supportsMeta(
    @graphql.Args() args: SupportFindManyArgs
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

  @graphql.Query(() => [Support])
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "read",
    possession: "any",
  })
  async supports(
    @graphql.Args() args: SupportFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Support[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Support",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Support, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "read",
    possession: "own",
  })
  async support(
    @graphql.Args() args: SupportFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Support | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Support",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Support)
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "delete",
    possession: "any",
  })
  async deleteSupport(
    @graphql.Args() args: DeleteSupportArgs
  ): Promise<Support | null> {
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
