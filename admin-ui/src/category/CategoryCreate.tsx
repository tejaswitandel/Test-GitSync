import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CategoryTitle } from "./CategoryTitle";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Categories"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Image" source="image" />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="ParentId"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="tile" />
      </SimpleForm>
    </Create>
  );
};
