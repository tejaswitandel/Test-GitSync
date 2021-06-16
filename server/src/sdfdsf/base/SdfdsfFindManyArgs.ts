import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SdfdsfWhereInput } from "./SdfdsfWhereInput";
import { Type } from "class-transformer";
import { SdfdsfOrderByInput } from "./SdfdsfOrderByInput";

@ArgsType()
class SdfdsfFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SdfdsfWhereInput,
  })
  @Field(() => SdfdsfWhereInput, { nullable: true })
  @Type(() => SdfdsfWhereInput)
  where?: SdfdsfWhereInput;

  @ApiProperty({
    required: false,
    type: SdfdsfOrderByInput,
  })
  @Field(() => SdfdsfOrderByInput, { nullable: true })
  @Type(() => SdfdsfOrderByInput)
  orderBy?: SdfdsfOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SdfdsfFindManyArgs };
