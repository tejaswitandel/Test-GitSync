import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ListProps,
  TextField,
  DateField,
} from "react-admin";

export const ProductShow = (props: ListProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="CategoryIds" source="categoryIds" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Name" source="name" />
        <TextField label="Size" source="size" />
        <TextField label="SKU" source="sku" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
