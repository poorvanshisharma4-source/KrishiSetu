"use client";

export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}