import { speeches } from "@/lib/speeches-data";
import { notFound } from "next/navigation";
import PageHeader from "@/components/global/PageHeader";
import SpeechDetail from "@/components/speeches/SpeechDetail";

interface SpeechPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return speeches.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: SpeechPageProps) {
  const { slug } = await params;
  const speech = speeches.find((s) => s.slug === slug);
  if (!speech) return {};
  return {
    title: `${speech.title} | Krantishikha Dhital`,
    description: speech.excerpt,
  };
}

export default async function SpeechPage({ params }: SpeechPageProps) {
  const { slug } = await params;
  const speech = speeches.find((s) => s.slug === slug);

  if (!speech) {
    notFound();
  }

  return (
    <main>
      <PageHeader title="Speeches" />
      <SpeechDetail speech={speech} allSpeeches={speeches} />
    </main>
  );
}
