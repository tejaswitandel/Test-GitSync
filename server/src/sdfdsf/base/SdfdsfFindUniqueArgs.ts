import { ArgsType, Field } from "@nestjs/graphql";
import { SdfdsfWhereUniqueInput } from "./SdfdsfWhereUniqueInput";

@ArgsType()
class SdfdsfFindUniqueArgs {
  @Field(() => SdfdsfWhereUniqueInput, { nullable: false })
  where!: SdfdsfWhereUniqueInput;
}

export { SdfdsfFindUniqueArgs };
