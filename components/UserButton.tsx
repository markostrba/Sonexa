"use client";
import { UserButton as ClerkUserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import { useSubscription } from "@clerk/nextjs/experimental";
import { Skeleton } from "./ui/skeleton";

const getBadgeColor = (planName: string) => {
  switch (planName) {
    case "Basic Plan":
      return "bg-pastel-blue";
    case "Core Learner":
      return "bg-pastel-green";
    case "Pro Companion":
      return "bg-pastel-pink";
    default:
      return "bg-pastel-green";
  }
};

const UserButton = () => {
  const { user, isLoaded } = useUser();
  const { data, isLoading } = useSubscription();

  if (!isLoaded || isLoading) {
    return (
      <div className="flex items-center gap-4">
        <Skeleton
          className={`
            h-7 w-7 rounded-sm
            md:h-11 md:w-11
          `}
        />
        <div
          className={`
            hidden flex-col gap-1
            sm:flex
          `}
        >
          <Skeleton className="h-5 w-20 rounded-sm" />
          <Skeleton className="h-5 w-20 rounded-sm" />
        </div>
      </div>
    );
  }

  const badgeColor = getBadgeColor(data?.subscriptionItems[0].plan.name || "");

  return (
    <div className="flex items-center gap-4">
      <ClerkUserButton />
      <div
        className={`
          hidden flex-col gap-1
          sm:flex
        `}
      >
        <span className="text-sm font-semibold">{user?.fullName}</span>
        <div
          className={`
            flex items-center justify-center rounded-sm border-2 border-r-3 border-b-3 border-black px-2 text-xs font-bold
            ${badgeColor}
          `}
        >
          {data?.subscriptionItems[0].plan.name}
        </div>
      </div>
    </div>
  );
};

export default UserButton;
