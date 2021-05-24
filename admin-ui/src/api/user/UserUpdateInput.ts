export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  mobile?: string;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
