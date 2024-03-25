"use client";
import { Media } from "app/api/media/Media";
import { Player, BigPlayButton } from "../components/video-react/video-react";

function CVideo({ src }: { src: string }) {
  return (
    <div className="max-h-[70vh] h-[70vh] not-prose">
      <Player fluid={false} height={"100%"}>
        <source src={Media.index + src.replace(/^\//, "")} />
        <BigPlayButton position="center" />
      </Player>
    </div>
  );
}

export default CVideo;
