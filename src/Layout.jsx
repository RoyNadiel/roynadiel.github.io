export default function Layout({ children }) {
  return (
    <div className="relative z-10 max-w-[1600px] mx-auto flex flex-col items-center">
      {children}
    </div>
  );
}
