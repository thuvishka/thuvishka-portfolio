import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thuvishka | Portfolio",
  description: "Thuvishka Dasanayaka — Personal Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: "hidden" }}>{children}</body>
    </html>
  );
}
