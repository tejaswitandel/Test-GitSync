import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CategoryIds" source="categoryIds" />
        <TextInput label="Image" source="image" />
        <TextInput label="Name" source="name" />
        <TextInput label="Size" source="size" />
        <TextInput label="SKU" source="sku" />
      </SimpleForm>
    </Create>
  );
};
