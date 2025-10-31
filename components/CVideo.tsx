"use client";
import { Media } from "app/api/media/Media";
import { Player, BigPlayButton } from "../components/video-react/video-react";

function CVideo({ src }: { src: string }) {
  return (
    <div className="max-h-[90vh] h-90vh not-prose">
      <Player fluid={false}>
        <source src={Media.index + src.replace(/^\//, "")} />
        <BigPlayButton position="center" />
      </Player>
    </div>
  );
}

export default CVideo;
