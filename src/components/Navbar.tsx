import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full rounded-r-3xl border border-white  px-6 py- md:px-14 md:py-4 shadow-[0_4px_10px_rgba(53,98,146,0.25)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Image
          src="/images/logo.png"
          alt="Wealthup logo"
          width={122}
          height={46}
          priority
          className="h-auto w-30.5 object-contain"
        />

        <button className="inline-flex h-9 min-w-30 items-center justify-center rounded-full border border-[#9FC2E7] bg-[linear-gradient(180deg,#D8E7F4_0%,#C7DBEE_100%)] px-9  text-[18px] font-medium text-[#2E5788] shadow-[0_4px_10px_rgba(53,98,146,0.25)] transition hover:brightness-105">
          Login
        </button>
      </div>
    </nav>
  );
}