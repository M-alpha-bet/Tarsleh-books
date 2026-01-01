import type { ElementType } from "react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  TbArrowRight,
  TbClock,
  TbHeart,
  TbMail,
  TbMessage2,
  TbMicrophone,
  TbPhone,
} from "react-icons/tb";
import { HiOutlineInformationCircle } from "react-icons/hi2";

type ContactChannel = {
  title: string;
  description: string;
  detail: string;
  hint: string;
  icon: ElementType;
  actionLabel: string;
  href: string;
};

const contactChannels: ContactChannel[] = [
  {
    title: "General correspondence",
    description:
      "Questions about books, deep knowledge, or the discipleship community.",
    detail: "admin@tarslehbooks.com",
    hint: "Primary inbox",
    icon: TbMail,
    actionLabel: "Email Paul directly",
    href: "mailto:admin@tarslehbooks.com",
  },
  {
    title: "Speaking & events",
    description:
      "Invite Paul to lecture, facilitate workshops, or serve at conferences.",
    detail: "speaking@tarslehbooks.com",
    hint: "Event requests",
    icon: TbMicrophone,
    actionLabel: "Share your event details",
    href: "mailto:speaking@tarslehbooks.com",
  },
  {
    title: "Phone & WhatsApp",
    description:
      "For time-sensitive questions and ministry partnerships that need a quick voice connection.",
    detail: "+1 916-804-6620",
    hint: "Call or message",
    icon: TbPhone,
    actionLabel: "Call the office",
    href: "tel: +1 916-804-6620",
  },
];

type Commitment = {
  title: string;
  description: string;
  icon: ElementType;
};

const commitments: Commitment[] = [
  {
    title: "Thoughtful replies",
    description:
      "Every message is prayerfully considered so you receive a response tailored to your context and needs.",
    icon: TbMessage2,
  },
  {
    title: "Clear timelines",
    description:
      "You’ll hear back within two business days, with realistic next steps and clarity around availability.",
    icon: TbClock,
  },
  {
    title: "Pastoral care",
    description:
      "Whether you’re requesting prayer or collaboration, expect compassion, honesty, and hospitality.",
    icon: TbHeart,
  },
];

const topics = [
  "Speaking engagement",
  "Publishing collaboration",
  "Prayer request or pastoral support",
  "Bulk book order",
  "Other",
] as const;

const faqs = [
  {
    question: "How quickly will I hear back?",
    answer:
      "We aim to reply within two business days. During travel or intensive ministry weeks, it may take a little longer but you will always receive a response.",
  },
  {
    question: "Do you travel internationally for events?",
    answer:
      "Yes. Paul serves churches and conferences across the US and internationally. Share your event details and we’ll coordinate logistics together.",
  },
  {
    question: "Can I request bulk book orders for my church or bookstore?",
    answer:
      "Absolutely. Include your preferred quantity, delivery timeline, and location. We’ll arrange a ministry-friendly discount structure for you.",
  },
  {
    question: "What if I’m unsure which contact option fits my request?",
    answer:
      "Use the general form below. We’ll route your message to the right section and follow up with any next steps.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-primaryColor pb-24 pt-32 lg:pt-40">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-70">
            <div className="absolute -top-24 left-16 h-72 w-72 rounded-full bg-accentColor/25 blur-3xl" />
            <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-white/50 blur-3xl" />
          </div>

          <div className="mx-auto px-5 sm:px-8 md:max-w-7xl">
            <div className="">
              <hr className="w-[100px] mx-auto text-accentColor mb-4" />
              <h1 className="mt-4 text-center leading-tight">
                Reach out to me
              </h1>
              <p className="text-secondaryColor/80 text-center lg:px-[130px]">
                Whether you’re planning a teaching series, exploring
                partnerships, or seeking deep knowledge, I’d love to hear from
                you. Share your vision, and we’ll discern the next faithful
                steps side by side.
              </p>

              <div className="mt-8 flex gap-4 justify-center">
                <a
                  href="mailto:hello@paultarsleh.com"
                  className="green-button gap-2 sm:w-auto"
                >
                  Email Paul
                  <TbArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="tel:+231775550194"
                  className="outline-button border-secondaryColor/40 text-secondaryColor/90"
                >
                  Call the office
                </a>
              </div>

              <div className="mt-6 flex flex-col justify-center text-center gap-1 text-sm text-secondaryColor/70 sm:flex-row sm:items-center sm:gap-4">
                <span>Leave me a message and I’ll get back to you later.</span>
                <span
                  aria-hidden
                  className="hidden h-1 w-1 rounded-full bg-secondaryColor/40 sm:inline-block"
                />
                <span>
                  Weekend messages receive a response the next business day.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto md:mt-16 px-5 sm:px-8 lg:px-16">
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.title}
                  className="group relative overflow-hidden rounded-3xl border border-accentColor/30 lg:p-8 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-accentColor/15 text-accentColor">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4">{channel.title}</h3>
                  <p className="mt-2 text-sm text-secondaryColor/75">
                    {channel.description}
                  </p>
                  <div className="mt-4 space-y-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accentColor">
                      {channel.hint}
                    </p>
                    <p className="text-lg font-semibold text-secondaryColor">
                      {channel.detail}
                    </p>
                  </div>
                  <a
                    href={channel.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondaryColor transition-colors duration-200 hover:text-accentColor"
                  >
                    {channel.actionLabel}
                    <TbArrowRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mt-12 lg:mt-20 px-5 sm:px-8 lg:px-16">
          <div className="lg:px-[260px]">
            <div className="rounded-3xl border border-accentColor/25 md:p-8 p-4 shadow-lg backdrop-blur">
              <h2 className="mb-4 text-center">Send a message</h2>
              <p className="mb-8 text-center text-secondaryColor/75">
                Provide a few details so we can prepare a meaningful response.
                We respect your inbox, and your information stays private.
              </p>

              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-semibold"
                      htmlFor="first-name"
                    >
                      First name
                    </label>
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="Paul"
                      className="input-contact-style"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-semibold"
                      htmlFor="last-name"
                    >
                      Last name
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      placeholder="Johnson"
                      className="input-contact-style"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold" htmlFor="email">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="input-contact-style"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-semibold"
                      htmlFor="organization"
                    >
                      Organization / church (optional)
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      placeholder="Grace Chapel International"
                      className="input-contact-style"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" htmlFor="topic">
                    I’m reaching out about
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    defaultValue=""
                    className="input-contact-style"
                  >
                    <option value="" disabled>
                      Select the reason for connecting
                    </option>
                    {topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Share the heart behind your request, key dates, and how we can support you."
                    className="input-contact-style"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border border-secondaryColor/30 text-accentColor focus:ring-accentColor/40"
                  />
                  <label
                    className="text-sm text-secondaryColor/75"
                    htmlFor="newsletter"
                  >
                    Keep me updated with occasional resources and ministry news.
                    <span className="ml-1 text-secondaryColor/50">
                      (Optional)
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="green-button gap-2 w-full md:w-auto"
                >
                  Send message
                  <TbArrowRight className="h-5 w-5" />
                </button>
              </form>

              <p className="mt-6 text-xs text-secondaryColor/60">
                <HiOutlineInformationCircle className="inline-flex text-black size-4" />{" "}
                By submitting this form you agree to be contacted about your
                inquiry. Your details will never be shared outside of our
                ministry team.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-20 md:mt-40 px-5 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="mb-2">How we partner with you</h1>
            <p className=" text-secondaryColor/75 ">
              My team and I care deeply about stewarding each relationship well.
              Here’s what you can count on when you reach out.
            </p>
          </div>

          <div className="lg:mt-12 mt-6 grid gap-6 md:grid-cols-3 md:px-[130px]">
            {commitments.map((commitment) => {
              const Icon = commitment.icon;
              return (
                <div
                  key={commitment.title}
                  className="rounded-3xl border border-secondaryColor/15 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accentColor/12 text-accentColor">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">
                    {commitment.title}
                  </h3>
                  <p className="mt-3 text-sm text-secondaryColor/75 md:text-base">
                    {commitment.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="container mx-auto mt-20 md:mt-40 px-5 sm:px-8 lg:px-16">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <hr className="w-[100px] text-accentColor mb-4 mx-auto lg:mx-0" />
              <h1 className="mt-4 md:mb-4 mb-2 text-center lg:text-left ">
                Frequently asked questions
              </h1>
              <p className="text-center lg:text-left text-secondaryColor/75 md:text-lg">
                These are the conversations we have most often with churches,
                ministries, and readers. If yours isn’t here, reach out, we’re
                listening.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-secondaryColor/15 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-sm text-secondaryColor/75 md:text-base">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
