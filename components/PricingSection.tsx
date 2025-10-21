"use client";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import { Switch } from "./ui/switch";
import { PRICING } from "@/constants";

const PricingSection = () => {
  const [showAnnualPrice, setShowAnnualPrice] = useState(true);

  return (
    <section
      className={`
        flex flex-col items-center gap-10 px-4 py-6
        lg:py-10 lg:pb-35
      `}
      id="pricing"
    >
      <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
        <h2
          className={`
            text-3xl font-bold text-gray-800
            md:text-5xl
          `}
        >
          Choose Your Learning Journey
        </h2>
        <p className="text-xl text-gray-800">Start free and upgrade anytime. Unlock smarter conversations, deeper insights, and limitless learning potential with a plan that fits your goals.</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="max-w-50 rounded-3xl border-2 border-r-4 border-b-4 border-black bg-pastel-purple px-3 py-2 text-center text-sm font-semibold text-black">Get 20% off with yearly</div>
        <div className="flex gap-5">
          <p className="font-medium text-gray-800">Monthly</p>
          <Switch
            defaultChecked
            thumbClassName="h-4 w-4 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1"
            checked={showAnnualPrice}
            aria-label="Toggle Annual Pricing"
            onCheckedChange={(checked) => setShowAnnualPrice(checked)}
            className={`
              h-6 w-12 cursor-pointer border-2 border-black
              data-[state=checked]:bg-pastel-purple
            `}
          />
          <span className="sr-only">{showAnnualPrice ? "Annual pricing active" : "Monthly pricing active"}</span>
          <p className="font-medium text-gray-800">Annually</p>
        </div>
      </div>
      <div
        className={`
          mt-20 flex w-full flex-col items-center justify-center gap-12
          lg:flex-row
        `}
      >
        {PRICING.map((plan) => (
          <PricingCard key={plan.name} {...plan} showAnnualPrice={showAnnualPrice} className={plan.name === "Core" ? "lg:scale-110" : ""} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
