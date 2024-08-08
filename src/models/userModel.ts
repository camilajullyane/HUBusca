import { apiResponseData } from "./apiResponseModel";

export type User = Pick<
  apiResponseData,
  "name" | "login" | "avatar_url" | "location"
> &
  Partial<Pick<apiResponseData, "id" | "followers" | "public_repos">>;
