import Navbar from "@/components/navbar";
import {
  TbArrowRight,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandYoutube,
} from "react-icons/tb";
import { RiDoubleQuotesL } from "react-icons/ri";
import FeaturedBooks from "@/components/featured-books";
import LatestBlogPosts from "@/components/blogs";
import { TbMail } from "react-icons/tb";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/paul.tarsleh.2025?mibextid=wwXIfr&mibextid=wwXIfr",
      icon: TbBrandFacebook,
      color: "text-blue-600",
    },
    {
      href: "#ig",
      icon: TbBrandInstagram,
      color: "text-orange-600",
    },
    {
      href: "https://youtube.com/@paultarsleh724?si=edwtDT9-6PLjvAfh",
      icon: TbBrandYoutube,
      color: "text-red-600",
    },
  ];

  const testimonials = [
    {
      quote:
        "A masterpiece of modern fiction. Paul Tarlesh has a gift for storytelling that is unmatched in our time.",
      name: "Jane Doe",
      title: "Literary Critic, The New York Times",
      avatar: "/images/testi1.jpg",
    },
    {
      quote:
        "An unforgettable journey from start to finish. This book will stay with me for a long time. Highly recommended.",
      name: "Emily James",

      title: "Reader, Goodreads",
      avatar: "/images/testi2.jpg",
    },
    {
      quote:
        "I couldn't put this book down. The characters are so real, and the plot is absolutely captivating. A must-read!",
      name: "John Smith",
      title: "Book Blogger, The Literary Corner",
      avatar: "/images/testi3.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <main>
        <section
          id="her0-section"
          className="relative pt-28 md:pt-40 pb-10 md:pb-24 flex items-center justify-center"
        >
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 md:max-w-7xl">
              Faith rooted books and reflections equipping believers to grow,
              discern truth, and walk boldly in Christ.
            </h1>

            <div className="flex pt-4 items-center justify-center gap-4">
              <a href="/books">
                <button className="green-button">Explore books</button>
              </a>
              <a href="/blogs" className="outline-button">
                Read blogs
                <TbArrowRight className="ml-1" />
              </a>
            </div>
          </div>
        </section>

        <section id="about-author" className="">
          <div className="container mx-auto px-4 sm:px-10 lg:px-[130px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center md:items-start">
              <div className="w-full mx-auto">
                {/* Video Embed */}
                <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/ofMDBJ_xTcs?si=GgbkomrsbDEHts-U"
                    title="Paul Tarsleh YouTube Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <a
                  href="https://youtube.com/@paultarsleh724"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <p className="mt-2 text-center text-sm font-medium text-gray-700 transition-colors group-hover:text-black">
                    Visit Paul Tarsleh on YouTube →
                  </p>
                </a>
              </div>
              <div className="text-center md:text-left pt-3 md:pt-0">
                <h2 className="mb-3">Meet Paul Tarsleh</h2>
                <p className="mb-4 leading-relaxed">
                  Paul Tarsleh was born unto the union of Jonah Seah Tarsleh and
                  Elizabeth Jah in Liberia - West Africa. He is married and is a
                  father of six (6) children. He graduated fro High School as
                  valedictorian for his class. While in school he became a
                  student journalist so after graduation he started working with
                  two newspapers, Business Digest and Sports Chronicle. In 1999
                  he moved to Tabou, Ivory Coast where he took advantage of a
                  United Nations funded vocational school where he earned an
                  18-month certificate in Bookkeeping. In a period of two and
                  half years, 2006 – mid 2008, his interest in writing was
                  enhanced by the mysterious voice that gave him stories to
                  write so as to provide answers to various issues dangling on
                  the minds of people, including religious communities.
                </p>
                <p className="mb-10 md:mb-2 leading-relaxed">
                  He is the author of two wonderful books and in 2018, he has
                  completed his third manuscript for a new book entitled "The
                  Truth About Blacks and Human Race" which comes as a result of
                  what he learned from that mysterious voice.
                </p>
                <div className="flex justify-center md:justify-start space-x-16">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`text-3xl ${link.color}`}
                    >
                      <link.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <FeaturedBooks />
        <LatestBlogPosts />

        <section id="testimonials" className="pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-[130px]">
            <div className="text-center mb-6">
              <h1 className="mb-2">What Readers Are Saying</h1>
              <p className="mx-auto">
                Discover why readers and critics alike are raving about my
                latest works. Here are some of their thoughts.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="p-4 rounded-3xl shadow-sm border-accentColor/20 border flex flex-col justify-between items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <RiDoubleQuotesL className="text-3xl text-left mb-1" />
                  <p className="mb-2 grow">"{testimonial.quote}"</p>
                  <div className="md:flex md:justify-start md:w-full items-center pt-4">
                    <div className="relative lg:h-[75px] lg:w-[75px] h-[50px] w-[50px] mx-auto md:mx-0 rounded-full overflow-hidden bg-accentColor">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="md:text-left md:ml-2">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="other-books" className="pb-32 text-center">
          <h2>Other Books from Paul Tarsleh</h2>
          <div className="flex gap-4 md:gap-6 justify-center my-4 lg:px-[130px]">
            <img
              src="/images/otherBook1.png"
              alt="where-is-the-garden-of-eden"
              className="w-[350px] md:w-[600px] h-[220px] lg:h-[350px]"
            />
          </div>
          <div className="flex gap-4 justify-center mt-2">
            <img
              src="/images/otherBook2.png"
              alt="the-evolution-of-man"
              className="w-[350px] md:w-[600px] h-[220px] lg:h-[350px]"
            />
          </div>
        </section>

        <section id="contact" className="pb-12 md:pb-40 md:px-[260px]">
          <div className="mx-auto">
            <div className="mx-auto text-center">
              <h1 className="mb-2">Join My Newsletter</h1>
              <p className="mb-4">
                Subscribe to my newsletter to receive the latest news, updates,
                and exclusive content. Be the first to know about new releases,
                events, and special offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 mx-auto">
                <div className="relative grow mx-5">
                  <TbMail className="absolute left-4 size-5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-2 rounded-md border text-[14px]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="green-button mx-5 font-semibold tracking-wider"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
