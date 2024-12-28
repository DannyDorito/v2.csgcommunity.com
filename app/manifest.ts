import { MetadataRoute } from "next";

export default function manifest (): MetadataRoute.Manifest
{
  return {
    name: "Cerberus Stomping Ground Exile",
    short_name: "CSG Exile",
    description: "Cerberus Stomping Ground Exile",
    start_url: "/",
    display: "standalone",
    background_color: "#232323",
    theme_color: "#DE5021",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

export const dynamic = "force-static";
