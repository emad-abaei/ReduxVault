interface HeaderProps {
  fullName?: string;
}

function Header({ fullName }: HeaderProps) {
  return (
    <header
      className={`mb-10 relative text-center p-4 sm:p-6 border backdrop-blur-md bg-white/30 rounded-md z-10 ${
        !fullName && "max-w-96 mx-auto"
      }`}>
      <h1 className='font-smooch text-6xl font-medium tracking-widest text-stone-100'>
        Redux Vault
      </h1>
    </header>
  );
}

export default Header;
