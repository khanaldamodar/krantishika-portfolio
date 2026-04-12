import PageHeader from "@/components/global/PageHeader";
import SpeechesSection from "@/components/speeches/SpeechesSection";
import SpeechVideosSection from "@/components/speeches/SpeechVideosSection";
import { speeches, speechVideos } from "@/lib/speeches-data";

export const metadata = {
  title: "Speeches | Krantishikha Dhital",
  description:
    "Read the speeches and addresses of Krantishikha Dhital — Member of Federal Parliament, social advocate, and psychosocial counselor — delivered across Nepal and beyond.",
};

async function getYoutubeTitle(youtubeId: string) {
  try {
    // We use the oEmbed API to get video metadata without an API key
    const response = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${youtubeId}`);
    const data = await response.json();
    return data.title || "Speech Video";
  } catch (error) {
    console.error(`Error fetching YouTube title for ${youtubeId}:`, error);
    return "Speech Video";
  }
}

export default async function SpeechesPage() {
  // Fetch titles for all videos in parallel on the server
  const videosWithTitles = await Promise.all(
    speechVideos.map(async (v) => ({
      ...v,
      title: await getYoutubeTitle(v.youtubeId),
    }))
  );

  return (
    <main>
      <PageHeader title="Speeches" />
      <SpeechesSection speeches={speeches} />
      <SpeechVideosSection videos={videosWithTitles} />
    </main>
  );
}