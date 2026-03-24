export default function PlanBanner() {
  return (
    <section className="bg-[#DDEEFE] px-6 py-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative overflow-hidden rounded-[42px] border border-[#d2e3f3] px-8 py-10 md:px-14 md:py-12"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(226,239,250,0.95), rgba(213,230,245,0.95)), url('/images/Perlin.png')",
            backgroundSize: "cover, cover",
            backgroundPosition: "center, center",
            backgroundBlendMode: "normal, screen",
          }}
        >
          <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="flex-1">
              <h2 className="mb-3 text-5xl font-bold text-[#2D527F] ">
              Your Goals Deserve a Plan
              </h2>
              <p className="text-[20px] text-[#2F5787] ">
                Start your personalized investment roadmap in minutes.
              </p>
            </div>
            <button className="inline-flex h-16 min-w-[320px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#569DEB_0%,#2A5385_100%)] px-10 text-[22px] font-semibold text-white transition hover:brightness-105 md:h-20 md:min-w-125 md:text-[26px]">
              Create your investment plan
              <span aria-hidden="true" className="ml-5 text-[33px] leading-none">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
