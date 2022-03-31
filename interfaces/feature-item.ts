export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  descriptionMd: string;
  usingFor: {
    title: string;
    uses: string[];
  };
  gettingStarted: {
    title: string;
    steps: string[];
  };
  mediaUrl: string;
}
