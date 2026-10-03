export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main style={{ padding: 40 }}>
      <h1>QRX Experience</h1>
      <p>Experience: {slug}</p>
    </main>
  );
}
