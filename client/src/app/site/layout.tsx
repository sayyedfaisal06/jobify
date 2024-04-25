import Header from "@/components/headers/Header";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full min-h-min flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default layout;
