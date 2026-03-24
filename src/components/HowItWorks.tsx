import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      iconImage: "/images/Group 109.png",
      title: "Define Your Goal",
      descriptionLines: [
        "Start by defining what you want to achieve whether it's",
        "buying a car, travelling, or building long-term wealth.",
        "Tell us the goal amount and timeline, and we'll create a",
        "personalized investment plan to help you get there.",
      ],
      showPhone: true,
    },
    {
      id: 2,
      iconImage: "/images/Group 110.png",
      title: "Setup Your Investment Account",
      descriptionLines: [
        "Complete a simple and secure account setup with quick",
        "KYC verification.",
        "This allows you to invest seamlessly through regulated",
        "platforms and start building your portfolio.",
      ],
      showPhone: false,
    },
  ];

  return (
    <section className="bg-[#DDEEFE] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-14">
          <h2 className="mb-3 text-3xl font-bold text-[#2E5686] md:text-4xl lg:text-5xl">
            How it Works?
          </h2>
          <p className="text-base text-[#385d8a] md:text-xl">
            India's most intelligent investment platform
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-7 md:space-y-9">
          {steps.map((step) => (
            <div
              key={step.id}
              className="overflow-hidden rounded-[30px] border border-[#5D95DD] bg-[linear-gradient(90deg,#EDEEEF_0%,#B8D2E6_57%,#B8D2E6_100%)] px-7 py-7 md:px-9 md:py-8"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#bfd9ef]">
                    <Image
                      src={step.iconImage}
                      alt={`${step.title} icon`}
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain"
                    />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-[#2D5688] md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="max-w-160 text-lg leading-tight text-[#2E5788] md:text-[25px]">
                    {step.descriptionLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>

                  {step.id === 1 ? (
                    <div className="mt-7 flex items-center gap-3 md:mt-8 md:gap-4">
                      <span className="h-2.5 w-56 rounded-full bg-[#315C8F]" />
                      <span className="h-2.5 w-11 rounded-full bg-[#A7CCE9]" />
                      <span className="h-2.5 w-11 rounded-full bg-[#A7CCE9]" />
                      <span className="h-2.5 w-11 rounded-full bg-[#A7CCE9]" />
                      <span className="h-2.5 w-11 rounded-full bg-[#A7CCE9]" />
                    </div>
                  ) : null}
                </div>

                {step.showPhone ? (
                  <div className="relative mx-auto mt-1 w-full max-w-55 shrink-0 lg:mx-0 lg:max-w-65">
                    <Image
                      src="/images/mobile.png"
                      alt="App preview mobile"
                      width={217}
                      height={413}
                      className=" h-auto w-36 rotate-[8deg] object-contain md:w-40"
                    />

                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
