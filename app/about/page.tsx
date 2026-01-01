import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AuthorPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-16 lg:pt-24">
        <section className="mx-auto px-4 sm:px-6 lg:px-[130px] py-16 md:py-24">
          <div className="lg:px-[130px]">
            <hr className="w-[100px] mx-auto text-accentColor mb-4" />
            <header className="mb-6 md:mb-16">
              <h1 className="mb-4 text-center">About Paul Tarsleh</h1>
              <p className="text-secondaryColor/80 lg:px-[130px] text-center mx-auto">
                Liberian-born US citizen, spiritual reporter, and author
                illuminating the origins of the spiritual world and their
                manifestations in our physical reality.
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-8 text-secondaryColor">
              <section>
                <h3 className="text-accentColor mb-4">Early Life & Calling</h3>
                <p>
                  Paul Tarsleh is a Liberian-born US citizen living in
                  Sacramento, California. He is married with nine children. In
                  2006, he was prevented from attending Bible school and was
                  instead enrolled in a school of spirits, where he obtained
                  spiritual knowledge that encompassed available information in
                  the Bible.
                </p>
                <p>
                  This unique education shaped him into a spiritual reporter,
                  writing books to reveal origins of things in the spiritual
                  world and explain their manifestations in the physical world
                  of humans.
                </p>
              </section>

              <section>
                <h3 className="text-accentColor mb-4">The Divine Mission</h3>
                <p>
                  While graduating from the school of spirits, he was told to
                  write books that would grant him a US visa to come to the
                  United States, where he would obtain physical evidence of what
                  he was taught.
                </p>
                <p>
                  This divine instruction led him to publish his first two books
                  in 2013: <em>Where is the Garden of Eden</em>
                  and <em>The Evolution of Man</em>, while still in Liberia.
                  Upon publication, he received an invitation to attend a book
                  signing event in Miami, Florida, which granted him a one-year
                  US business visa.
                </p>
              </section>

              <section>
                <h3 className="text-accentColor mb-4">Journey to America</h3>
                <p>
                  After the 2013 event, he returned to the US in 2014 for a
                  family visit but didn't return to Liberia due to the Ebola
                  epidemic.
                </p>
                <p>
                  In the US, while walking on a beach in Florida, he had a
                  firsthand experience of what the Spirit of God had described
                  to him earlier as <strong>nakedness</strong>. For the Spirit,
                  human nakedness (nudity) is the act of exposing sensitive
                  parts of the human body that God decided to hide when He made
                  garments for the first humans, Adam and Eve (Genesis 3:21).
                </p>
              </section>

              <section>
                <h3 className="text-accentColor mb-4">
                  Understanding Human Sexuality
                </h3>
                <p>
                  When we wear certain clothes—such as ladies' underwear or
                  men's underwear, or anything revealing while walking in
                  public—the Spirit sees it as being naked or nude because it
                  awakens human sexuality. The exposure of some parts of the
                  human body awakens sexual feelings.
                </p>
                <p>
                  This can be seen when every woman wears certain clothes to
                  awaken their husband's or boyfriend's feelings in a secluded
                  place. That's why his new book,{" "}
                  <em>The Flipside of Multipolarity</em>, brings us more details
                  on human sexuality, such as why and how every human gets
                  aroused and moves into action for satisfaction.
                </p>
              </section>

              <section>
                <h3 className="text-accentColor mb-4">
                  Literary Journey & Challenges
                </h3>
                <p>
                  He has been republishing these stories since 2013, with each
                  book containing new or improved information, making each
                  edition slightly different from previous ones.
                </p>
                <p>
                  On one hand, he was coerced by some agencies to rebrand his
                  books to reduce their high price tags or as a precondition to
                  help with pitching his books to traditional companies.
                </p>
                <p>
                  Despite these difficulties, he hasn't stopped talking and
                  writing about God because it's a mission to fulfill—to make
                  every information available for public viewing, even after his
                  time on earth.
                </p>
              </section>

              <section>
                <h3 className="text-accentColor mb-4">
                  African Publications & Accessibility
                </h3>
                <p>
                  That's why he made every effort in 2025 to publish his
                  information in two books in Africa to reduce their prices and
                  make them affordable to African communities.
                </p>
                <p>
                  One good thing about African publication is that he produced
                  them in three versions:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 lg:mt-2">
                  <li>
                    <strong>Paperback version</strong> – hard paper book to buy
                    and keep in house or office
                  </li>
                  <li>
                    <strong>e-Book version</strong> – electronic book to
                    download on phone, tablet, or computer
                  </li>
                  <li>
                    <strong>Audiobook version</strong> – audio-play book to
                    download and play to listen to AI reading in human voice
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
