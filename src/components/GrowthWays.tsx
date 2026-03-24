import Image from "next/image";

export default function GrowthWays() {
  const investmentOptions = [
    {
      id: 1,
      title: "Mutual Funds",
      cardImage: "/images/mutual-fund.png",
      iconImage: "/images/icon1.png",
      descriptionLines: [
        "Professionally managed portfolios",
        "designed to grow your wealth over the",
        "long term. Diversified across sectors and",
        "asset classes to balance risk and",
        "returns.",
      ],
      highlighted: true,
    },
    {
      id: 2,
      title: "Bonds",
      cardImage: "/images/bond-card.png",
      iconImage: "/images/icon2.png",
      descriptionLines: [
        "Stable income-generating investments",
        "for predictable and steady returns.",
        "Ideal for investors seeking lower",
        "volatility and consistent cash flow.",
      ],
      highlighted: false,
    },
    {
      id: 3,
      title: "Invoice Discounting",
      cardImage: "/images/invoice-card.png",
      iconImage: "/images/icon3.png",
      descriptionLines: [
        "Access short-term investment",
        "opportunities backed by verified",
        "business invoices. Earn attractive returns",
        "while supporting real business",
        "transactions.",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="px-6 py-16 md:py-24 bg-[#DDEEFE]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#294F7C] mb-3">
            Multiple ways to grow your wealth
          </h2>
          <p className="text-[#294F7C] opacity-70 text-base">
            Diversified investment options selected and optimized by WealthUp
          </p>
        </div>

        {/* Investment Cards */}
        <div className="mb-14 flex flex-col items-center md:flex-row md:items-end md:justify-center">
          {investmentOptions.map((option) => (
            <div key={option.id}>
              <Image
                src={option.cardImage}
                alt={`${option.title} card`}
                width={150}
                height={120}
                className="h-auto w-[250px] max-w-none object-contain"
              />
            </div>
          ))}
        </div>

        {/* Detailed Cards */}
        <div className="overflow-hidden rounded-[18px] border border-[#6EA9F5] bg-[#BFDDF0]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {investmentOptions.map((option, index) => (
              <div
                key={option.id}
                className={`px-7 py-7 md:px-7 md:py-8 ${
                  option.highlighted
                    ? "bg-[#44658E] text-[#F0F7FF]"
                    : "bg-[#BFDDF0] text-[#2D5788]"
                } ${index === 0 ? "border-b border-[#6EA9F5] md:border-b-0 md:border-r" : ""}`}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#44658E] bg-white"
                  >
                    <Image
                      src={option.iconImage}
                      alt={`${option.title} icon`}
                      width={22}
                      height={22}
                      className="h-5.5 w-5.5 object-contain"
                    />
                  </div>
                  <h3 className="text-[25px] font-semibold leading-none">{option.title}</h3>
                </div>
                <p className={`text-[17px] leading-[1.35] ${option.highlighted ? "text-[#E5F0FA]" : "text-[#2D5788]"}`}>
                  {option.descriptionLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
