import TextAnalyzer from "@/components/TextAnalyzer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4 md:p-6 bg-gradient-to-b from-secondary/5 to-white">
        <TextAnalyzer />
      </div>
    </div>
  );
}
