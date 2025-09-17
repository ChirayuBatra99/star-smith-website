export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="lead mt-2">{subtitle}</p>}
    </div>
  );
}
