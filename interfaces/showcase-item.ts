type AdSize = {
  w: number; // in pixes
  h: number;
  seId?: string; // if it is an HTML5 banner
  adUrl?: string; // if it is a builder or a video
  adType?: "static" | "video";
};
export interface IShowcaseItem {
  id: string;
  thumbUrl: string;
  sizes?: AdSize[];
  tags: string[];
  client: string;
  title: string;
  streameyeId?: string;
  copyMd?: string;
}
