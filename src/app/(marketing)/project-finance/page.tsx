import DynamicServicePage, {
  generateMetadata as generateDynamicMetadata,
} from "../services/[slug]/page";

export async function generateMetadata() {
  return generateDynamicMetadata({
    params: Promise.resolve({ slug: "term-loan-advisory" }),
  });
}

export default async function ProjectFinanceTopPage() {
  return (
    <DynamicServicePage
      params={Promise.resolve({ slug: "term-loan-advisory" })}
    />
  );
}
