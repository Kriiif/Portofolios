import Home from "../../page";

export function generateStaticParams() {
  return [
    { slug: "gaskeeun-project" },
    { slug: "sip-project" },
    { slug: "hafrin-coffee" },
    { slug: "sugar-baru" },
    { slug: "sipp-lppm-unj" },
  ];
}

export default function ProjectDetailPage() {
  return <Home initialSection="projects" />;
}
