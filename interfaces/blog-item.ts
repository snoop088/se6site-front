import { BlogItemSlim } from "./blog-item-slim";

export interface BlogItem extends BlogItemSlim {
  copyMd?: string;
}
