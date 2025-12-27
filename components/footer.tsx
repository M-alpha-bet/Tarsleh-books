import Link from "next/link";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandYoutube,
} from "react-icons/tb";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/paul.tarsleh.2025?mibextid=wwXIfr&mibextid=wwXIfr",
      label: "Facebook",
      icon: TbBrandFacebook,
      color: "text-blue-600",
    },
    {
      href: "#ig",
      label: "Instagram",
      icon: TbBrandInstagram,
      color: "text-orange-600",
    },
    {
      href: "https://youtube.com/@paultarsleh724?si=edwtDT9-6PLjvAfh",
      label: "YouTube",
      icon: TbBrandYoutube,
      color: "text-red-600",
    },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/books", label: "Books" },
    { href: "/blogs", label: "Blog" },
  ];

  const supportLinks = [
    { href: "/contact", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primaryColor via-primaryColor/90 to-accentColor" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
      >
        <div className="absolute -top-28 right-12 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto px-5 sm:px-10 lg:px-16 pt-6 pb-4 text-neutral-900">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-2xl font-semibold"
            >
              <Image
                src="/images/tarsleh-logo.png"
                alt="logo"
                height={35}
                width={45}
              />
              <span>Tarsleh Books</span>
            </Link>

            <p className="mt-4 max-w-md text-sm sm:text-base">
              Faith-rooted stories, essays, and resources helping believers grow
              in discernment, boldness, and grace-filled wisdom.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  className={`text-3xl group inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[26px] transition-all duration-300 hover:-translate-y-1 hover:bg-accentColor ${color}`}
                >
                  <Icon className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:text-base">
            <div>
              <h3 className="text-lg font-semibold tracking-wide">Explore</h3>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-accentColor"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-wide">Support</h3>
              <ul className="mt-4 space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-accentColor"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="pt-3 font-semibold">support@tarslehbooks.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wide">
              Stay in the Word
            </h3>
            <p className="mt-2 text-sm sm:text-base">
              Receive fresh reflections, writing updates, and spiritual
              encouragement straight to your inbox.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full border bg-white/10 px-5 py-3 text-sm sm:text-base"
              />
              <button type="submit" className="green-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-8 text-center text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} Theocratic Ministry Of Jesus. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
