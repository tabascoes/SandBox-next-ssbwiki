import React from "react";
import { VideoBox } from "VideoBox";
import Navbar from "Navbar";

const video01 = "test";

export const getStaticProps = async (ctx) => {
  const mediaId = ctx.params?.mediaId;
  return { props: { mediaId } };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { mediaId: video01 } }],
    fallback: false
  };
};

export default function Video({ mediaId }) {
  return (
    <>
      <Navbar video1={video01} video2={video2} />
      <VideoBox videoId={mediaId} />
    </>
  );
}
