import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#2563FF",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontFamily: "monospace",
          fontWeight: 900,
          borderRadius: 8,
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        KD
      </div>
    ),
    {
      ...size,
    }
  );
}
