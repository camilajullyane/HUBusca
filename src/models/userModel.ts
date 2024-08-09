import { apiResponseData, apiResponseRepositories } from "./apiResponseModel";

export type User = Pick<
  apiResponseData,
  "name" | "login" | "avatar_url" | "location"
> &
  Partial<Pick<apiResponseData, "id" | "followers" | "public_repos">>;

export type UserRepositories = Pick<
  apiResponseRepositories,
  "name" | "language" | "created_at" | "pushed_at" | "html_url" | "description"
>;
