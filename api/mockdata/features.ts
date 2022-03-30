import { FeatureEnterprise } from "interfaces/feature-enterprise";
import { FeatureItemSlim } from "interfaces/feature-item-slim";

export const FEATURES_SLIM: FeatureItemSlim[] = [
  {
    id: "templates",
    icon: "templates",
    title: "Templates",
    benefits: [
      "Produce engaging HTML5 animated ads with your latest offering",
      "Go to market in a matter of minutes with new promotions",
      "Engage audiences on desktop and mobile with ads that integrate your data",
    ],
    mediaUrl: "/768x576_637840758748332134.jpeg",
  },
  {
    id: "builders",
    icon: "builders",
    title: "Builders",
    benefits: [
      "Produce and edit social, email or onsiteimages with an intuitive, custom UI.",
      "Export images for your campaigns or use permalinks that update graphics in your emails.",
      "Engage audiences across channels, rapidly iterating new offer messages.",
    ],
    mediaUrl: "/768x576_637840758748332134.jpeg",
  },
  {
    id: "videos",
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
    id: "galleries",
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
