import { CSGVideo } from "@/components/CSGVideo";
import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "grid" }}>
        <div
          style={{
            gridColumn: "1",
            gridRow: "1",
            overflow: "hidden",
            margin: "auto",
          }}
        >
          <CSGVideo fileName="intro.mp4" fallbackFileName="intro.jpg" />
        </div>
        <div style={{ gridColumn: "1", gridRow: "1" }}>
          <div>
            <Image
              alt="Cerberus Stomping Grounds"
              src="logo-large.png"
              width="720"
              height="487"
              className=""
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl orange drop-shadow-2xl">
              Cerberus Stomping Grounds
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
