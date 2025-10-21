import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface PricingCardProps {
  name: string;
  priceMonthly: string;
  priceAnnual: string;
  buttonName: string;
  className?: string;
  buttonRedirect: string;
  perks: readonly { name: string; available: boolean }[];

  showAnnualPrice?: boolean;
}
const PricingCard = ({ name, priceMonthly, priceAnnual, className, buttonName, buttonRedirect, perks, showAnnualPrice = false }: PricingCardProps) => {
  return (
    <article className={cn("relative w-sm", className)}>
      <div className="absolute -top-[8%] left-1/2 w-30 -translate-x-1/2 rounded-sm border-2 border-r-4 border-b-4 border-black bg-pastel-purple p-2">
        <h2 className="text-center text-3xl">{name}</h2>
      </div>
      <div className="flex min-h-[360px] w-full flex-col justify-between gap-8 rounded-lg border-2 border-r-4 border-b-4 border-black bg-pastel-orange p-4 pt-14">
        <div className="flex flex-col gap-6">
          <h3 className="text-center text-5xl font-black">
            {showAnnualPrice ? priceAnnual : priceMonthly} <span className="text-sm">/ month</span>
          </h3>
          <ul>
            {perks.map((perk) => {
              return (
                <li
                  className={`
                    flex items-center gap-2 text-lg font-medium
                    lg:text-base
                    xl:text-lg
                  `}
                  key={crypto.randomUUID()}
                >
                  <span>+</span>
                  <span>{perk.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          className={`
            rounded-lg border-2 border-r-4 border-b-4 border-black bg-pastel-pink py-2 text-center font-medium
            hover:scale-102
          `}
          href={buttonRedirect}
        >
          {buttonName}
        </Link>
      </div>
    </article>
  );
};

export default PricingCard;
