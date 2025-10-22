import ROUTES from "./routes";

export const subjects = [
  "maths",
  "language",
  "science",
  "history",
  "coding",
  "economics",
];

export const subjectsColors = {
  science: "#E5D0FF",
  maths: "#FFDA6E",
  language: "#BDE7FF",
  coding: "#FFC8E4",
  history: "#FFECC8",
  economics: "#C8FFDF",
};

export const voices = {
  male: { casual: "2BJW5coyhAzSr8STdHbE", formal: "c6SfcYrb2t09NHXiT80T" },
  female: { casual: "ZIlrSGI4jZqobxRKprJz", formal: "sarah" },
};

export const recentSessions = [
  {
    id: "1",
    subject: "science",
    name: "Neura the Brainy Explorer",
    topic: "Neural Network of the Brain",
    duration: 45,
    color: "#E5D0FF",
  },
  {
    id: "2",
    subject: "maths",
    name: "Countsy the Number Wizard",
    topic: "Derivatives & Integrals",
    duration: 30,
    color: "#FFDA6E",
  },
  {
    id: "3",
    subject: "language",
    name: "Verba the Vocabulary Builder",
    topic: "English Literature",
    duration: 30,
    color: "#BDE7FF",
  },
  {
    id: "4",
    subject: "coding",
    name: "Codey the Logic Hacker",
    topic: "Intro to If-Else Statements",
    duration: 45,
    color: "#FFC8E4",
  },
  {
    id: "5",
    subject: "history",
    name: "Memo, the Memory Keeper",
    topic: "World Wars: Causes & Consequences",
    duration: 15,
    color: "#FFECC8",
  },
  {
    id: "6",
    subject: "economics",
    name: "The Market Maestro",
    topic: "The Basics of Supply & Demand",
    duration: 10,
    color: "#C8FFDF",
  },
];


export const FAQ_QUESTIONS = [
  {
    question: "What is Sonexa?",
    answer: "Sonexa is an AI-powered learning platform that offers personalized study companions designed to help students, educators, and professionals learn more effectively.",
  },
  {
    question: "Which subjects do AI companions cover?",
    answer: "Sonexa companions can assist with nearly any subject — including Math, Science, English, Physics, and more — across all education levels.",
  },
  {
    question: "What subscription plans does Sonexa offer?",
    answer: "We offer both monthly and annual subscription plans. Visit our Pricing section for details.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes! You can cancel your subscription anytime through your account settings with no cancellation fees.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Currently, we don't offer a free trial. However, you can start using Sonexa with our Free plan.",
  },
] as const;

export const PRICING = [
    {
      name: "Basic",
      priceMonthly: "Free",
      priceAnnual: "Free",
      description: "Perfect for exploring Sonexa’s AI learning experience.",
      buttonName: "Get Started Free",
      buttonRedirect: ROUTES.SIGN_UP,
      perks: [
        { name: "10 Conversations / month", available: true },
        { name: "3 Active Companions", available: true },
      ],
    },
    {
      name: "Core",
      priceMonthly: "$12",
      priceAnnual: "$10",
      buttonName: "Upgrade to Core",
      buttonRedirect: ROUTES.SIGN_UP,
      perks: [
        { name: "Everything in Free", available: true },
        { name: "100 Conversations / month", available: true },
        { name: "Up to 10 Active Companions", available: true },
      ],
    },
    {
      name: "Pro",
      priceMonthly: "$30",
      priceAnnual: "$24",
      buttonName: "Upgrade to Pro",
      buttonRedirect: ROUTES.SIGN_UP,
      perks: [
        { name: "Everything in Core", available: true },
        { name: "Unlimited Companions", available: true },
        { name: "Unlimited Conversations", available: true },
        { name: "Early Access to New Features", available: true },
        { name: "Priority Support", available: true },
      ],
    },
] as const;
