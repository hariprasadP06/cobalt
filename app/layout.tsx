import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "cobalt",
  openGraph: {
    title: "cobalt is an example app",
    description: "cobalt is a metal",
    images: {
      url: "https://cobalt-dun.vercel.app/img.png",
      width: 800,
      height: 600,
    },
  },
};
const RootLayout = (props: PropsWithChildren) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
};

export default RootLayout;
