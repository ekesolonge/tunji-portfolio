import Experience from "@/components/experience";
import Profile from "@/components/profile";
import Tinkering from "@/components/tinkering";

export default function About() {
  return (
    <div className="container space-y-12 py-16 md:space-y-[5.25rem] md:py-[6.5rem]">
      <Profile />
      <Experience />
      <Tinkering />
    </div>
  );
}
