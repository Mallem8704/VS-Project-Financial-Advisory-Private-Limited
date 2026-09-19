import DynamicServicePage, {
  generateMetadata as generateDynamicMetadata,
} from "../services/[slug]/page";

export async function generateMetadata() {
  return generateDynamicMetadata({ params: Promise.resolve({ slug: "dpr" }) });
}

export default async function DprTopPage() {
  return <DynamicServicePage params={Promise.resolve({ slug: "dpr" })} />;
}
