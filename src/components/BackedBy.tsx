import Image from "next/image";

export default function BackedBy() {
  return (
    <section className="px-6 py-12 bg-[#DDEEFE]">
      <div className="max-w-8xl mx-auto">
        <div className="mx-auto w-full max-w-7xl">
          <Image
            src="/images/brand.png"
            alt="Backed by partner logos"
            width={1600}
            height={220}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
