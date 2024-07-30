// components/VideoContainer.tsx
import React from "react";

interface VideoContainerProps {
  localVideoRef: React.RefObject<HTMLVideoElement>;
  remoteVideoRef: React.RefObject<HTMLVideoElement>;
}

export const VideoContainer: React.FC<VideoContainerProps> = ({
  localVideoRef,
  remoteVideoRef,
}) => (
  <div className="video-container">
    <video
      ref={localVideoRef}
      autoPlay
      muted
      playsInline
      className="local-video mirror"
    />
    <video ref={remoteVideoRef} autoPlay playsInline className="remote-video" />
  </div>
);
