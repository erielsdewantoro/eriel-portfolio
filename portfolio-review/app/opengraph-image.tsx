import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundImage: "linear-gradient(135deg, #0f0f1a 0%, #14142b 30%, #0f3460 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#00f5ff",
            marginBottom: 24,
            display: "flex",
          }}
        >
          {site.eyebrow}
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, display: "flex" }}>{site.name}</div>
        <div style={{ fontSize: 28, color: "#dde2ee", marginTop: 20, display: "flex" }}>
          {site.positioning}
        </div>
      </div>
    ),
    { ...size }
  );
}
