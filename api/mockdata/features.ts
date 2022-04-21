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
    mediaUrl: "/videos.jpg",
  },
  {
    id: "Galleries",
    icon: "asset_galleries",
    title: "Galleries",
    benefits: [
      "Manage branded assets in reusable galleries",
      "Enable asset sharing across different production pipelines",
      "Ensure that graphics in ads are relevant, on brand and readily available to marketing",
    ],
    mediaUrl: "/galleries.jpg",
  },
];
export const FIND_OUT_MORE =
  "FIND OUT MORE ABOUT OUR FREE ENTERPRISE FEATURES THAT ACCELERATE YOUR AD PODUCTION.";
export const HELPING = {
  title: "LET US HELP YOU GET STARTED",
  copy: "Contact our digital experts for a quick demo to see Streameye in action.",
};
export const ENTERPRISE_FEATURES: FeatureEnterprise[] = [
  {
    title: "SSO",
    copyMd:
      "Single sign on boosts security and enables you to control access to the platform via your own infrastructure.",
    contract: "Free with 1 year contract.",
  },
  {
    title: "APPROVALS",
    copyMd:
      "Approvals feature enforces your teams to publish only approved content by another designated party in your organisation. It is especially helpful for regulated markets.",
    contract: "Free with any contract.",
  },
  {
    title: "CAMPAIGNS",
    copyMd:
      "Grouping ads in campaigns allows you to swap in new ads with different designs in almost real time. This is useful to publish completely new banners in your currently trafficked placements.",
    contract: "Free with any contract.",
  },
  {
    title: "LOCALISATION",
    copyMd:
      "Single entry point localisation allows you to localise many languages simultaneously through a centralised spreadsheet. An operator can opt to enter the localisations or send them to be localised by other parties.",
    contract: "Free with any contract.",
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
      "Streameye templates are a core feature, which optimises the production of animated ads, keeping their production cost minimal. It is used by our partners and clients to generate ads en masse and deploy relevant promotions across wide array of ad servers with a click of a button.",
    usingFor: {
      title: "USE TEMPLATES TO:",
      uses: [
        "Produce engaging HTML5 animated ads with your latest promotions.",
        "Go to market in a matter of minutes and update your display ads without the need to republish them.",
        "Automate your ad production by integrating your data in the ads.",
        "Save time and free up resources by streamlining your production processes.",
        "Decrease production costs and increase ROI.",
      ],
    },
    gettingStarted: {
      title: "GET STARTED IN FEW SIMPLE STEPS:",
      steps: [
        "Decide where you experience production bottlenecks.",
        "Discuss your priorities with our experienced digital team.",
        "Take advantage of a 1 month free trial with your own branded ads.",
      ],
    },
    mediaUrl: "templates.mp4",
  },
  {
    id: "Builders",
    title: "Builders",
    icon: "builders",
    descriptionMd:
      "Streameye builders are a core feature, which optimises the production of static ads. Export ads for social networks, onsite, CRM or served as permalinks providing dynamic content in emails. Our clients are using the builders to generate high volume of localised digital ads, which are then published across their media channels.",
    usingFor: {
      title: "USE BUILDERS TO:",
      uses: [
        "Interactively produce static images through a custom UI built for your specific brand.",
        "Export images for social networks, emails, landing pages, your site or affiliates.",
        "Automate your ad production by integrating your data in the ads by using permalinks.",
        "Save time and free up resources by streamlining your production processes.",
        "Make your marketing self provisioned when deploying new offers live.",
      ],
    },
    gettingStarted: {
      title: "GET STARTED IN FEW SIMPLE STEPS:",
      steps: [
        "Decide where you experience production bottlenecks.",
        "Discuss your priorities with our experienced digital team.",
        "Take advantage of a 1 month free trial with your own branded ads.",
      ],
    },
    mediaUrl: "builders.mp4",
  },
  {
    id: "Videos",
    title: "Videos",
    icon: "videos",
    descriptionMd:
      "Streameye videos are a core feature, which enables you to export videos to any social channel or offline media. Ability to rapidly generate videos that engage your audiences across channels would give you a definite edge over your competition. Alleviate your creative resource, allowing your creative team to design bespoke content, while using Streameye to generate your recurring offers.",
    usingFor: {
      title: "USE VIDEOS TO:",
      uses: [
        "Quickly produce videos for various online and offline channels.",
        "Engage your audience with captivating, fluid motion.",
        "Export videos in a matter of minutes without animation skills.",
        "Empower your marketing team with video ads without blocking motion team resource.",
        "Get an edge over your competitors with always relevant content.",
      ],
    },
    gettingStarted: {
      title: "GET STARTED IN FEW SIMPLE STEPS:",
      steps: [
        "Decide which videos need producing on regular basis.",
        "Discuss your priorities with our experienced digital team.",
        "Take advantage of a 1 month free trial with your own branded ads.",
      ],
    },
    mediaUrl: "videos.mp4",
  },
  {
    id: "Galleries",
    title: "Asset Galleries",
    icon: "asset_galleries",
    descriptionMd:
      "Streameye asset galleries are a supporting feature, which holds your branded assets and facilitates their easy sharing between your templates, videos and builders. Your creative team is able to maintain this resource bank, ensuring that only the latest and relevant assets are available to your marketing.",
    usingFor: {
      title: "USE GALLERIES TO:",
      uses: [
        "Create a resource bank that can be easily reused across digital ads.",
        "Feed and update your ads with relevant imagery.",
        "Enable your inhouse studio or external agency to support your ad production efficiently.",
        "Ensure your ads only use approved and on-brand imagery.",
        "Connect galleries to APIs to automate image selection in ads.",
      ],
    },
    gettingStarted: {
      title: "GET STARTED IN FEW SIMPLE STEPS:",
      steps: [
        "Decide which templates or builders need to use graphic assets.",
        "Get expert recommendation how to streamline your assets production from our experienced team.",
        "Take advantage of a 1 month free trial with your own branded ads.",
      ],
    },
    mediaUrl: "galleries.mp4",
  },
];
