import { CSGVideo } from "@/components/CSGVideo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <CSGVideo fileName="intro.mp4" fallbackFileName="intro.jpg" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            minHeight: '90vh',
            minWidth: '100vw'
          }}
        >
          <Image
            alt="Cerberus Stomping Grounds"
            src="logo-large.png"
            width="720"
            height="487"
            className="w-5/12 h-auto block"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl orange drop-shadow-2xl">
            Cerberus Stomping Grounds
          </h1>
        </div>
      </main>
    </div>
  );
}
