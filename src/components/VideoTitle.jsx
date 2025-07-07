const VideoTitle = ({ title, overview }) => {
  return (
    <div className="aspect-video pt-[15%] px-6 md:px-24 absolute text-white">
      <h1 className="text-2xl md:text-6xl font-bold w-1/4">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:my-00">
        <button className="bg-gray-50/80 text-black rounded-lg text-xl px-12 py-2 md:py-4 hover:opacity-50">
          ▶ Play
        </button>
        <button className="hidden md:inline-block md:mx-2 px-10 p-4 bg-gray-500/80 rounded-lg text-white text-xl hover:opacity-50">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
