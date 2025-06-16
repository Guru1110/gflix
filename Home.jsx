import Navbar from "../components/Navbar";
import VideoGrid from "../components/VideoGrid";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <VideoGrid />
    </div>
  );
}