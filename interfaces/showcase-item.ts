type AdSize = {
  w: number; // in pixes
  h: number;
  seId?: string;
};
export interface IShowcaseItem {
  id: string;
  thumbUrl: string;
  sizes?: AdSize[];
  tags: string[];
  client: string;
  title: string;
  streameyeId?: string;
}
