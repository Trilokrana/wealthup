"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const goals = [
  { label: "Car", image: "/images/small-car.png" },
  { label: "Travel", image: "/images/flight.png" },
  { label: "Home", image: "/images/home.png" },
  { label: "Custom", image: "/images/target.png" },
];

export default function Hero() {
  const [carPriceValue, setCarPriceValue] = useState(32);
  const [timeToBuyValue, setTimeToBuyValue] = useState(32);

  const carPriceTrackStyle = useMemo(
    () => ({
      background: `linear-gradient(90deg, #4A90E2 0%, #2B4F80 ${carPriceValue}%, #E9EFF5 ${carPriceValue}%, #E9EFF5 100%)`,
    }),
    [carPriceValue]
  );

  const timeToBuyTrackStyle = useMemo(
    () => ({
      background: `linear-gradient(90deg, #4A90E2 0%, #2B4F80 ${timeToBuyValue}%, #E9EFF5 ${timeToBuyValue}%, #E9EFF5 100%)`,
    }),
    [timeToBuyValue]
  );

  return (
    <section className="overflow-hidden bg-[#DDEEFE] px-5 py-12 md:px-8 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.03fr] lg:gap-10">
          <div className="pt-2">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/35 px-3 py-2 shadow-[0_8px_20px_rgba(74,144,226,0.08)] backdrop-blur">
              <Image
                src="/images/group.png"
                alt="Trusted users"
                width={60}
                height={24}
                className="h-6 w-15 object-contain"
              />
              <p className="text-[15px] font-medium italic text-[#3A5A84]">Trusted by over 2,000 users</p>
            </div>

            <h1 className="max-w-xl text-[42px] font-semibold leading-[1.08] tracking-[-0.02em] md:text-[58px] lg:text-[62px]">
              <span className="text-[#274D78]">Plan your life goals.</span>{" "}
              <span className="text-[#4A90E2]">We'll plan the investments.</span>
            </h1>

            <p className="mt-7 max-w-lg  leading-[1.35] text-[#365E8C] text-[25px]">
              WealthUp helps you achieve goals through personalised goal based investing.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-150 rounded-[42px] border border-[#4A90E240] bg-[#CBE1F2] px-6 py-7 shadow-[0_12px_24px_rgba(46,94,147,0.08)] sm:px-8 sm:py-8">
              <h3 className="text-center text-[32px] font-semibold leading-none text-[#2E5788]">Buy a car</h3>

              <div className="mt-7 grid gap-5 sm:grid-cols-[1.1fr_0.92fr] sm:items-start">
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-end justify-between text-[#2F5B8E]">
                      <span className="text-[22px] font-medium leading-none">Car price</span>
                      <span className="text-[18px] font-semibold leading-none">₹ 20L</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={carPriceValue}
                      onChange={(event) => setCarPriceValue(Number(event.target.value))}
                      aria-label="Car price"
                      className="calc-slider w-full"
                      style={carPriceTrackStyle}
                    />
                    <div className="mt-2 flex justify-between text-[18px] leading-none text-[#738FAE]">
                      <span>₹ 5L</span>
                      <span>₹ 1cr</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-end justify-between text-[#2F5B8E]">
                      <span className="text-[22px] font-medium leading-none">Time to buy</span>
                      <span className="text-[18px] font-semibold leading-none">5 years</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={timeToBuyValue}
                      onChange={(event) => setTimeToBuyValue(Number(event.target.value))}
                      aria-label="Time to buy"
                      className="calc-slider w-full"
                      style={timeToBuyTrackStyle}
                    />
                  </div>

                  <button className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-[#4A90E2] bg-[#D7EAF8] px-5 text-[20px] font-semibold leading-none text-[#2D578A] transition hover:bg-[#cde4f6]">
                    Let&apos;s get your car
                    <span aria-hidden="true" className="text-[22px] leading-none">🚗</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[26px] border border-[#4A90E240] bg-[#F6F8FB] px-4 py-4 text-center shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]">
                    <p className="text-[23px] font-medium leading-none text-[#2E5788]">Lump Sum</p>
                    <p className="mt-3 text-[24px] font-semibold leading-none text-[#2E5788]">₹ 11.3L</p>
                  </div>
                  <p className="text-center text-[18px] font-medium leading-none text-[#3A6597]">OR</p>
                  <div className="rounded-[26px] border border-[#4A90E240] bg-[#F6F8FB] px-4 py-4 text-center shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]">
                    <p className="text-[23px] font-medium leading-none text-[#2E5788]">Monthly SIP</p>
                    <p className="mt-3 text-[24px] font-semibold leading-none text-[#2E5788]">₹ 24k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid items-end gap-6 lg:grid-cols-[1fr_1.03fr] lg:gap-10">
          <div className="grid max-w-132.5 grid-cols-1 gap-4 sm:grid-cols-2">
            {goals.map((goal, index) => (
              <button
                key={goal.label}
                className={`group flex min-h-28 items-center gap-4 rounded-3xl border px-4 py-3 text-left transition-all ${
                  index === 0
                    ? "border-[#2D5C91] bg-[#E8F4FF] shadow-[0_10px_22px_rgba(38,92,145,0.18)]"
                    : "border-[#4A90E240] bg-[#EDF7FF] shadow-[0_6px_14px_rgba(44,93,144,0.06)]"
                }`}
              >
                <div className="flex h-14.5 w-22 items-center justify-center overflow-hidden rounded-2xl bg-[#E8F3FF]">
                  <Image
                    src={goal.image}
                    alt={`${goal.label} goal image`}
                    width={78}
                    height={52}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-[25px] font-medium text-[#274D78] ">{goal.label}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full self-center lg:justify-self-center lg:max-w-120">
            <Image
              src="/images/car.png"
              alt="Car placeholder image"
              width={600}
              height={360}
              priority
              className="relative z-10 h-auto w-full object-contain"
            />
            <Image
              src="/images/car-shadow.svg"
              alt="Car ground shadow"
              width={1200}
              height={220}
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[72%] z-0 w-[112%] -translate-x-1/2 opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
