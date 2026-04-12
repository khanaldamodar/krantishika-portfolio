export interface Speech {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime: string;
  image: string;
}

export interface SpeechVideo {
  id: string;
  youtubeId: string;
  title: string;
  description?: string;
}

export const speeches: Speech[] = [
  {
    slug: "women-empowerment-federal-parliament",
    title: "Women Empowerment in the Federal Parliament",
    date: "March 8, 2024",
    category: "Parliament",
    excerpt:
      "A landmark address delivered on International Women's Day calling for structural reforms to ensure equal representation and protection for women across all sectors of government and society.",
    content: `
<p>Honorable Speaker, distinguished members of this Parliament, and fellow citizens of Nepal—today, on International Women's Day, I rise not merely to celebrate, but to demand. To demand that the promise this nation made to its women be honored in full.</p>

<p>Article 38 of our Constitution guarantees women's rights. Yet the gap between the text on paper and the reality on the ground remains wide. We have made progress—women now hold seats in this very chamber—but progress is not completion. We must not mistake momentum for arrival.</p>

<p>The struggle for gender equality is not over. It is in every village where a girl is denied education. It is in every courtroom where a woman's testimony is doubted. It is in every household where unpaid labor goes uncounted and unappreciated. It is in every office where ambition is punished by the title "too aggressive."</p>

<p>I call upon this Parliament today to move beyond symbolic gestures. We must legislate with courage—closing wage gaps, prosecuting gender-based violence with full force, and funding psychosocial services for survivors. We must ensure that the women of Nepal are not just subjects of policy, but architects of it.</p>

<p>The strength of a nation is measured not by its GDP, but by how it treats its most vulnerable citizens. Nepal's greatest untapped resource is the full participation of its women. Let us unlock it.</p>

<p>Thank you.</p>
    `,
    tags: ["Women's Rights", "Parliament", "Gender Equality", "Policy"],
    readTime: "5 min read",
    image: "/gallery/image-1.png",
  },
  {
    slug: "mental-health-crisis-nepal-youth",
    title: "Addressing the Mental Health Crisis Among Nepal's Youth",
    date: "October 10, 2023",
    category: "Counseling",
    excerpt:
      "Delivered on World Mental Health Day, this speech urges national action to destigmatize mental illness and build accessible psychosocial support systems for young Nepali citizens.",
    content: `
<p>Today is World Mental Health Day. And today, I want to speak about a silence that costs lives.</p>

<p>In Nepal, mental health is still whispered about—if it is spoken of at all. Our young people are carrying weights that they were never taught to name. Depression, anxiety, trauma from conflict and earthquake, identity crisis, academic pressure—these are real, they are common, and they are treatable. But only if we break the silence.</p>

<p>As a psychosocial counselor, I have sat across from young men and women who believed they were alone in their suffering. I have watched the moment when someone first realizes that what they are feeling has a name—and that it is not a weakness. That moment of recognition is powerful. It is a beginning.</p>

<p>But we cannot rely on whispered conversations in counselors' offices. We need structural change. Every school in Nepal should have a trained counselor. Every community should have accessible mental health resources. Our health budget must reflect that the mind is as important as the body.</p>

<p>I am committed to championing these changes in Parliament. Because a nation that ignores the mental health of its youth is eroding its own future. And we can do better. We must do better.</p>

<p>Seek help. Offer help. Break the silence.</p>
    `,
    tags: ["Mental Health", "Youth", "Counseling", "Public Health"],
    readTime: "4 min read",
    image: "/gallery/image-2.png",
  },
  {
    slug: "climate-change-mountain-communities",
    title: "Climate Change and the Fate of Mountain Communities",
    date: "November 5, 2023",
    category: "Environment",
    excerpt:
      "An urgent call at the National Climate Conference for policies that protect Nepal's mountain communities, who are on the front lines of a climate crisis they did little to create.",
    content: `
<p>Nepal stands at a unique and painful intersection: we are among the countries least responsible for greenhouse gas emissions, yet we are among those most severely impacted by climate change.</p>

<p>Walk through the high villages of Humla or Dolpa. Speak to the farmers who have watched their seasonal patterns collapse. Talk to the families who have lost homes to glacial lake outburst floods. These are not statistics. These are our citizens paying a price they do not owe.</p>

<p>The glaciers of the Himalayas—the backbone of our rivers, the source of our water, the identity of our landscape—are retreating at alarming rates. If we do not act decisively, the communities who depend on these mountains will face choices no one should have to make: migrate, adapt, or perish.</p>

<p>In Parliament, I have consistently advocated for a Climate Resilience Fund specifically targeted to mountain communities. I have called for robust disaster preparedness programs, for investment in sustainable agriculture, and for Nepal's voice to be amplified in global climate negotiations.</p>

<p>This is not merely an environmental issue. It is a justice issue. And justice demands we act now—not in the next policy cycle, not after the next assessment, but now.</p>
    `,
    tags: ["Climate Change", "Environment", "Mountain Communities", "Justice"],
    readTime: "5 min read",
    image: "/gallery/image-3.png",
  },
  {
    slug: "education-rural-nepal-opportunity",
    title: "Education as the Greatest Equalizer in Rural Nepal",
    date: "January 22, 2024",
    category: "Education",
    excerpt:
      "A passionate address on how investing in quality education in rural Nepal is the most powerful long-term solution to poverty, inequality, and social injustice.",
    content: `
<p>If I were to point to one force—one single lever—that has the greatest power to transform lives and societies, I would point without hesitation to education.</p>

<p>Education is not merely the acquisition of facts. It is the awakening of agency. It teaches a child from a remote village that she belongs in the conversation about her nation's future. It teaches a young man that his worth is not defined by his family's poverty. It is, in the truest sense, the great equalizer.</p>

<p>But for this equalizer to work, it must be quality education—not just enrollment numbers for government reports. Our rural schools need trained teachers who stay. They need libraries with books in local languages. They need digital infrastructure so that a student in Bajhang has access to the same knowledge as a student in Kathmandu.</p>

<p>I have walked into schoolrooms with no roofs. I have spoken with teachers who have not been paid in months yet continue to show up. I have met children who walk two hours each way to reach their school. These acts of faith in education deserve a government that matches their commitment.</p>

<p>As your representative, I am committed to pushing for an education budget that reflects what education truly is: the most important investment a nation can make in its own future.</p>
    `,
    tags: ["Education", "Rural Nepal", "Equality", "Policy"],
    readTime: "4 min read",
    image: "/gallery/image-4.png",
  },
  {
    slug: "peace-reconciliation-post-conflict-nepal",
    title: "Reconciliation and Healing in Post-Conflict Nepal",
    date: "February 14, 2024",
    category: "Peace & Society",
    excerpt:
      "A reflective speech on the importance of truth, accountability, and psychosocial healing for communities still living in the shadow of Nepal's decade-long armed conflict.",
    content: `
<p>The conflict ended. The guns fell silent. But for thousands of Nepali families, the war has never truly ended. It lives in the silence at the dinner table where a father used to sit. It lives in the nightmares of former child soldiers. It lives in the unprocessed grief of communities that lost everything.</p>

<p>True peace is not merely the absence of armed conflict. True peace is the presence of justice, of healing, of restored dignity. And on that measure, our national work is far from finished.</p>

<p>The truth and reconciliation process is not a bureaucratic exercise. It is a sacred responsibility. The families of victims deserve truth. Perpetrators of gross violations must be held accountable—without amnesty for atrocities. And survivors must be given access to psychosocial support that helps them rebuild, not just survive.</p>

<p>I speak today not only as a parliamentarian, but as someone who has worked closely with conflict-affected communities. I have heard their stories. I have seen their resilience. And I can tell you: they do not want to be forgotten. They want acknowledgment. They want justice. They want their children to grow up in a Nepal that has reckoned honestly with its past.</p>

<p>Let us commit to that Nepal. Let the healing begin—in earnest, and with the full weight of the state behind it.</p>
    `,
    tags: ["Peace", "Reconciliation", "Conflict", "Justice", "Society"],
    readTime: "5 min read",
    image: "/gallery/image-5.png",
  },
  {
    slug: "local-governance-empowerment",
    title: "Strengthening Local Governance for Community Empowerment",
    date: "April 3, 2024",
    category: "Governance",
    excerpt:
      "Advocating for genuine devolution of power to local governments so that communities can design solutions that fit their own unique contexts and needs.",
    content: `
<p>Nepal's federal structure was built on a profound promise: that power would reach the people—not just in Kathmandu, not just in provincial capitals, but in every ward of every village municipality across this remarkable country.</p>

<p>That promise is still being fulfilled. And we must accelerate its fulfillment.</p>

<p>Local governments are not lesser governments. They are, in many ways, the most important tier of governance because they are closest to the people. When a municipality builds a health post, cleans a water supply, or maintains a local road, it is touching people's lives in the most direct way. When local government fails, people suffer immediately and visibly.</p>

<p>But local governments cannot succeed without the tools to succeed. They need adequate budget allocations. They need trained administrative staff. They need genuine decision-making authority—not the illusion of autonomy while the real power remains centralized.</p>

<p>And critically, our local governments need the active participation of their citizens. Democracy is not just elections. It is governance. It is showing up. It is holding leaders accountable. It is people shaping the institutions that shape their lives.</p>

<p>I call on the federal government to honor federalism not just in words, but in budget lines and legal frameworks. And I call on citizens: engage with your local government. Your voice matters more there than anywhere else.</p>
    `,
    tags: ["Governance", "Federalism", "Local Government", "Democracy"],
    readTime: "5 min read",
    image: "/gallery/image-6.png",
  },
];

export const speechVideos: SpeechVideo[] = [
  { id: "video3", youtubeId: "o9V3RaS4kig", title: "Interview 3" },
  { id: "video1", youtubeId: "VZbgmCpLZ9A", title: "Interview 1" },
  { id: "video2", youtubeId: "sN45lbCVIcs", title: "Interview 2" },
  { id: "video4", youtubeId: "XXBrXUS-fNU", title: "Interview 4" },
];
