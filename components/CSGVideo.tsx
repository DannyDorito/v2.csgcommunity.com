import { Suspense } from "react";
import { Loading } from "./loading";

interface CSGVideoProps {
  fileName: string;
  fallbackFileName: string;
}

export const CSGVideo = (props: CSGVideoProps) => {
  return (
    <Suspense
      fallback={
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 blur-sm">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <Loading />
          </main>
        </div>
      }
    >
      <VideoComponent
        fileName={props.fileName}
        fallbackFileName={props.fallbackFileName}
      />
    </Suspense>
  );
};

async function VideoComponent(props: CSGVideoProps) {
  return (
    <video
      loop
      autoPlay
      playsInline
      muted
      poster={props.fallbackFileName}
      rel="preconnect"
      style={{ left: '50%', position: 'fixed', top: '50%', transform: 'translate(-50%, -50%)', zIndex: '-1', maxWidth: 'unset !important'}}
    >
      <source src={props.fileName} type="video/mp4" rel="preload"></source>
      <p className="text-sm text-muted-foreground">Cannot view the video!</p>
    </video>
  );
}
