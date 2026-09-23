import "./globals.css";

export const metadata = {
  title: "Yulia Hartati",
  description:
    "Yulia Hartati — ideas, analysis, writing, projects, and narrative intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}