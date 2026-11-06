export default function Home() {
  return (
    <main style={{ position: "fixed", inset: 0, width: "100vw", height: "100dvh", overflow: "hidden", background: "#050811" }}>
      <iframe
        src="/portfolio.html"
        title="Thuvishka Portfolio"
        style={{ display: "block", width: "100%", height: "100%", border: 0 }}
      />
    </main>
  );
}
