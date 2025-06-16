const videos = [
  { title: "Sample 1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Sample 2", src: "https://www.w3schools.com/html/movie.mp4" },
];

export default function VideoGrid() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {videos.map((video, index) => (
        <div key={index} className="bg-gray-800 p-2 rounded">
          <video controls className="w-full rounded">
            <source src={video.src} type="video/mp4" />
          </video>
          <div className="mt-2 text-center">{video.title}</div>
        </div>
      ))}
    </div>
  );
}