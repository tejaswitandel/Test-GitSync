import { Support as TSupport } from "../api/support/Support";

export const SUPPORT_TITLE_FIELD = "id";

export const SupportTitle = (record: TSupport) => {
  return record.id;
};
