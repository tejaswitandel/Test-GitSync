import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="CategoryIds" source="categoryIds" />
        <TextInput label="Image" source="image" />
        <TextInput label="Name" source="name" />
        <TextInput label="Size" source="size" />
        <TextInput label="SKU" source="sku" />
      </SimpleForm>
    </Edit>
  );
};
