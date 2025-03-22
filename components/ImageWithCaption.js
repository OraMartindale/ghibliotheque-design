export default function ImageWithCaption({ desktopSrc, mobileSrc, caption }) {
  return (
    <div className="group relative">
      <img
        src={desktopSrc}
        className="hidden md:block rounded-lg"
        alt={caption} />

      <img
        src={mobileSrc}
        className="block md:hidden rounded-lg"
        alt={caption} />
      
      <div className="invisible group-hover:visible absolute transition-all bottom-0 right-0 text-gray-200 text-xs bg-black rounded-sm opacity-50 p-1">
        {caption}
      </div>
    </div>
  );
}
