import "./globals.css";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import NavigationBar from "./components/navigation-bar/NavigationBar";

export const metadata: Metadata = {
  title: "cobalt",
  openGraph: {
    title: " cobalt is an example project",
    description: "cobalt is an element",
    images: {
      url: "img.png",
      width: 1200,
      height: 628,
    },
  },
};

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html>
      <body>
        <div className="flex flex-col items-stretch">
          <NavigationBar />
          {props.children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
