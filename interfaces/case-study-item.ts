export interface CaseStudyItem {
  id: string;
  sections: { title: string; icon: string; copyMd: string }[];
  bullets: string[];
  titleMd: string;
  client: string;
  mediaUrl: string;
}
