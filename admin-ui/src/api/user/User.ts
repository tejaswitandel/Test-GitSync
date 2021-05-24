export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  mobile: string;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
