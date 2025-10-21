import PricingSection from "@/components/PricingSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_QUESTIONS } from "@/constants";
import ROUTES from "@/constants/routes";
import { cn } from "@/lib/utils";
import { Brain, ChartColumn, History, Rocket, Share2, Target, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

const FeatureCard = ({ heading, description, Icon, iconClassName, className }: { heading: string; description: string; Icon: React.ElementType; iconClassName: string; className: string }) => {
  return (
    <article className={cn("flex min-h-40 max-w-90 flex-col gap-2 rounded-lg border-2 border-r-4 border-b-4 border-black p-6", className)}>
      <div className="flex w-fit items-center justify-center rounded-lg bg-white p-3">
        <Icon size={20} className={iconClassName} />
      </div>
      <h1 className="text-lg font-semibold">{heading}</h1>
      <p className="text-sm font-medium text-neutral-800">{description}</p>
    </article>
  );
};

const LandingPage = () => {
  return (
    <div className="flex flex-col scroll-smooth">
      <section className="flex flex-col items-center gap-20 px-4 pb-35" id="home">
        <div className="max-w-7xl">
          <div className="flex flex-col items-center gap-5 text-center">
            <h1
              className={`
                text-3xl font-bold text-gray-800
                md:text-5xl
              `}
            >
              Learn <span className="font-bold text-pink">Smarter</span> with Sonexa AI
            </h1>
            <div className="max-w-[550px] text-center">
              <h2 className="text-xl text-gray-800">
                Experience AI-powered lessons, custom voices, and interactive learning — all in one intelligent platform. Ideal for students, teachers, and professionals.
              </h2>
            </div>
            <Link href={ROUTES.SIGN_UP} className={"flex min-w-50 items-center justify-center gap-4 rounded-lg border-2 border-r-4 border-b-4 border-black bg-pink px-4 py-1.5 font-medium text-white"}>
              <Rocket strokeWidth={2.5} size={20} /> <span>Get Started Free</span>
            </Link>
          </div>
        </div>

        <div
          className={`
            grid max-w-7xl grid-cols-1 gap-6
            md:grid-cols-2
            lg:grid-cols-3
          `}
        >
          <FeatureCard
            heading="Custom AI Voice"
            description="Choose how your AI companion sounds and behaves for a truly personalized learning experience."
            className="bg-pastel-blue/50"
            Icon={Brain}
            iconClassName="text-[#1d48ab]"
          />
          <FeatureCard
            heading="Topic-Focused Lessons"
            description="Select subjects you want to master. Sonexa automatically adapts lessons to your goals."
            className="bg-pastel-yellow/50"
            Icon={Target}
            iconClassName="text-[#BBA800]"
          />
          <FeatureCard
            heading="Dashboard Analytics"
            description="Track your learning progress and performance insights with our detailed analytics dashboard."
            className="bg-pastel-green/50"
            Icon={ChartColumn}
            iconClassName="text-[#197254]"
          />
          <FeatureCard
            heading="AI Quiz Generator"
            description="Upload PDFs or notes and instantly generate smart quizzes powered by AI."
            className="bg-pastel-pink/50"
            Icon={Zap}
            iconClassName="text-[#D12C8B]"
          />
          <FeatureCard
            heading="Quiz History"
            description="Review all your past quizzes with detailed results and time analytics."
            className="bg-pastel-cyan/50"
            Icon={History}
            iconClassName="text-[#00B3A4]"
          />
          <FeatureCard
            heading="Share & Export"
            description="Easily share quizzes and export them as beautifully formatted PDFs."
            className="bg-pastel-orange/50"
            Icon={Share2}
            iconClassName="text-[#c7772b]"
          />
        </div>
      </section>
      <PricingSection />
      <section
        className={`
          flex w-full flex-col items-center gap-14 bg-[#191410] px-4 pt-15 pb-8 text-white
          lg:px-40
        `}
        id="faq"
      >
        <h2
          className={`
            text-center text-3xl font-bold
            md:text-5xl
          `}
        >
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className={"w-full max-w-7xl"} suppressHydrationWarning={true}>
          {FAQ_QUESTIONS.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="cursor-pointer text-2xl">{item.question}</AccordionTrigger>
              <AccordionContent className="text-lg">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="text-center text-lg text-[#ffffff7a]">© Sonexa 2025 | All Rights Reserved</p>
      </section>
    </div>
  );
};

export default LandingPage;
