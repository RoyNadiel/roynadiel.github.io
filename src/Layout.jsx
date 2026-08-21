export default function Layout({ children }) {
  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col items-center overflow-x-hidden">
      {children}
    </div>
  );
}

