export default function FasterGrowth() {
  const benefits = [
    {
      id: 1,
      title: "Handpicked Investments",
    },
    {
      id: 2,
      title: "Capitalizing on Opportunities",
    },
    {
      id: 3,
      title: "Optimized for Tax Efficiency",
    },
  ];

  return (
    <section className="bg-[#DDEEFE] px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-5xl text-center md:mb-14">
          <h2 className="mb-4 text-4xl font-bold tracking-[-0.01em] text-[#2A4F7D] md:text-[36px] lg:text-[36px]">
            Why Your Wealth Grows Faster With WealthUp
          </h2>
          <p className="mx-auto max-w-4xl text-[20px] leading-tight text-[#355A87] md:text-[20px] lg:text-[20px]">
            A smarter investment approach combining expert-curated opportunities, dynamic portfolio
            adjustments, and tax-efficient strategies.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-9">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="relative min-h-70 overflow-hidden rounded-[26px] border border-white bg-[#B8CEE1] px-4 pt-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] md:min-h-77.5"
            >
              <div className="mx-auto rounded-[18px] border border-[#6F8EB2] bg-[#506F97] px-5 py-4 text-center text-white shadow-[0_7px_16px_rgba(47,80,120,0.34),inset_0_1px_0_rgba(255,255,255,0.2)]">
                <h3 className="text-[25px] font-semibold leading-tight md:text-[22px]">{benefit.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}