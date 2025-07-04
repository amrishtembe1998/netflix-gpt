const VideoTitle = ({ title, overview }) => {
  return (
    <div className="z-10 aspect-video pt-[20%] px-24 absolute text-white">
      <h1 className="text-6xl font-bold w-1/4">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-50/80 text-black rounded-lg text-xl px-12 p-4 hover:opacity-50">
          ▶ Play
        </button>
        <button className="mx-2 px-12 p-4 bg-white rounded-lg text-black text-xl hover:opacity-50">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
