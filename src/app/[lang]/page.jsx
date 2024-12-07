import Hero from "@/components/hero";
import StreamOfTheDay from "@/components/streams-of-the-daay";
import { getDictionary } from "./dictionaries/dictionaries";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="">
      <Hero dictionary={dictionary} />
      <StreamOfTheDay />
    </div>
  );
}
