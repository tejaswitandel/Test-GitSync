import { ArgsType, Field } from "@nestjs/graphql";
import { SdfdsfWhereUniqueInput } from "./SdfdsfWhereUniqueInput";

@ArgsType()
class DeleteSdfdsfArgs {
  @Field(() => SdfdsfWhereUniqueInput, { nullable: false })
  where!: SdfdsfWhereUniqueInput;
}

export { DeleteSdfdsfArgs };
