import { FeatureEnterprise } from "interfaces/feature-enterprise";
import { FeatureItem } from "interfaces/feature-item";
import { FeatureItemSlim } from "interfaces/feature-item-slim";

export const FEATURES_SLIM: FeatureItemSlim[] = [
  {
    id: "Templates",
    icon: "templates",
    title: "Templates",
    benefits: [
      "Produce engaging HTML5 animated ads with your latest offering",
      "Go to market in a matter of minutes with new promotions",
      "Engage audiences on desktop and mobile with ads that integrate your data",
    ],
    mediaUrl: "/templates.jpg",
  },
  {
    id: "Builders",
    icon: "builders",
    title: "Builders",
    benefits: [
      "Produce and edit social, email or onsite images with an intuitive, custom UI.",
      "Export images for your campaigns or use permalinks that update graphics in your emails.",
      "Engage audiences across channels, rapidly iterating new offer messages.",
    ],
    mediaUrl: "/builders.jpg",
  },
  {
    id: "Videos",
    icon: "videos",
    title: "Videos",
    benefits: [
      "Produce templated videos with branded assets through an intuitive, custom UI",
      "Export videos for your campaigns for social networks, YouTube or offline points of sale",
      "Engage audiences across channels, rapidly iterating new offer messages",
    ],
    mediaUrl: "/768x576_637840758748332134.jpeg",
  },
  {
    id: "Galleries",
    icon: "asset_galleries",
    title: "Galleries",
    benefits: [
      "Manage branded assets in reusable galleries",
      "Enable asset sharing across different roduction pipelines",
      "Ensure that graphics in ads are relevant, on brand and readily available to marketing",
    ],
    mediaUrl: "/768x576_637840758748332134.jpeg",
  },
];
export const FIND_OUT_MORE =
  "FIND OUT MORE ABOUT OUR FREE ENTERPRISE FEATURES THAT ACCELERATE YOUR AD PODUCTION";
export const HELPING = {
  title: "LET US HELP YOU GET STARTED",
  copy: "Contact our digital experts for a quick demo to see Streameye in action",
};
export const ENTERPRISE_FEATURES: FeatureEnterprise[] = [
  {
    title: "SSO",
    copyMd:
      "Single sign on boosts security and enables you to control access to the platform via your own infrastructure.",
    contract: "Free with 1 year contract",
  },
  {
    title: "APPROVALS",
    copyMd:
      "Approvals feature enforces your teams to publish only approved content by another designated party in your organisation. It is especially helpful for regulated markets.",
    contract: "Free with any contract",
  },
  {
    title: "CAMPAIGNS",
    copyMd:
      "Grouping ads in campaigns allows you to swap in new ads with different designs in almost real time. This is useful to publish completely new banners in your currently trafficked placements.",
    contract: "Free with any contract",
  },
  {
    title: "LOCALISATION",
    copyMd:
      "Single entry point localisation allows you to localise many languages simultaneously through a centralised spreadsheet. An operator can opt to enter the localisations or send them to be localised by other parties.",
    contract: "Free with any contract",
  },
  {
    title: "API INTEGRATION",
    copyMd:
      "Bring your own data in your ads via Streameye API integration. It is the ultimate automation as new content gets published without operator interaction on regular basis.",
    contract: "Free with 1 year contract",
  },
];
export const FEATURES_FULL: FeatureItem[] = [
  {
    id: "Templates",
    title: "Templates",
    icon: "templates",
    descriptionMd:
      "Streameye templates are a core feature, which optimises the production of animated ads, keeping their production cost negligent. It is used by our partners and clients to generate ads en masse and deploy relevant promotions across wide array of ad servers with a click of a button.",
    usingFor: {
      title: "USE TEMPLATES TO:",
      uses: [
        "Produce engaging HTML5 animated ads with your latest promotions",
        "Go to market in a matter of minutes and update your display ads without the need to republish them",
        "Automate your ad production by integrating your data in the ads",
        "Save time and free up resources by streamlining your production processes",
        "Decrease production costs and increase ROI",
      ],
    },
    gettingStarted: {
      title: "GET STARTED IN FEW SIMPLE STEPS:",
      steps: [
        "Decide where you experience production bottlenecks",
        "Discuss your priorities with our experienced digital team",
        "Take advantage of a 1 month free trial with your own branded ads",
      ],
    },
    mediaUrl: "templates.mp4",
  },
];
