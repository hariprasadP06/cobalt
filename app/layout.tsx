import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "cobalt",
  openGraph: {
    title: "cobalt is an example app",
    description: "cobalt is a metal",
    images: {
      url: "C:UsersAdminOneDriveDocumentsDevelopercobaltpublicimg.png",
      width: 800,
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
