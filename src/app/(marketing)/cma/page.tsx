import DynamicServicePage, {
  generateMetadata as generateDynamicMetadata,
} from "../services/[slug]/page";

export async function generateMetadata() {
  return generateDynamicMetadata({ params: Promise.resolve({ slug: "cma" }) });
}

export default async function CmaTopPage() {
  return <DynamicServicePage params={Promise.resolve({ slug: "cma" })} />;
}
