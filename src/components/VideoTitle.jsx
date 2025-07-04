const VideoTitle = ({ title, overview }) => {
  return (
    <div className="aspect-video pt-[15%] px-24 absolute text-white">
      <h1 className="text-6xl font-bold w-1/4">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-50/80 text-black rounded-lg text-xl px-12 p-4 hover:opacity-50">
          ▶ Play
        </button>
        <button className="mx-2 px-10 p-4 bg-gray-500/80 rounded-lg text-white text-xl hover:opacity-50">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
