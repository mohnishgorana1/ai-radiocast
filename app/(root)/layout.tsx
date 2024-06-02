import LeftSidebar from "@/components/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />
        <section>
          <div>

            <div>
              <Image />
              Mobile nav
            </div>

            <div>
              Toaster
              {children}
            </div>
            
          </div>
        </section>
        <p className="text-white-1">Right Sidebar</p>
      </main>
    </div>
  );
}
