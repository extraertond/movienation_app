import "./EmbedVideo.scss";

type EmbedVideoProps = {
  videoId: string;
};

export const EmbedVideo = ({ videoId }: EmbedVideoProps) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
