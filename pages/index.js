import Head from "next/head";
import Accordion from "../components/accordion";
import AnchoredHeading from "../components/AnchoredHeading";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>What is this Brand Thing Anyway?</title>
        <meta
          property="og:description"
          content="A primer on brand for product teams who want to learn more about the whole Brand Thing: brand strategy, brand identity, and brand expression."
          key="description"
        />
        <meta property="og:title" content="What is this Brand Thing Anyway?" key="title" />
        <meta property="og:url" content="https://thebrandthing.quinnkeast.com/" key="url" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:image" content="https://quinnkeast.com/brand-thing-preview.png" key="image" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@quinnkeast" />
        <meta property="twitter:title" content="What is this Brand Thing Anyway?" key="twitter-title" />
        <meta
          property="twitter:description"
          content="A primer on brand for product teams who want to learn more about the whole Brand Thing: brand strategy, brand identity, and brand expression."
          key="twitter-description"
        />
        <meta
          property="twitter:image"
          content="https://quinnkeast.com/brand-thing-preview.png"
          key="twitter-image"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/wqn2zls.css"
        ></link>
        <script
          src="https://cdn.usefathom.com/script.js"
          site={process.env.FATHOM}
          defer
        ></script>
      </Head>

      <main className="mb-24">
        <div className="text-center pt-8 md:pt-32">
          <h1 className="">What is this Brand Thing Anyway?</h1>
          <h2 className="font-normal mt-0 text-gray-600">
            A primer on brand for product teams
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-body md:gap-24">
          <div className="lg:col-span-1"></div>
          <div className="col-span-1 pt-4 md:pt-16">
            <div className="pl-2 pr-2 md:pl-0 md:pr-0">
              <a
                name="introduction"
                href="#introduction"
                rel="nofollow"
                aria-hidden="true"
                title="introduction"
                tabIndex="-1"
              ></a>

              <p className="text-xl">
                “It just doesn’t feel like <em>us</em>.”
              </p>

              <p>Sound familiar?</p>

              <p>
                Every member of a startup or product team interacts with and shapes the product’s brand. And yet, while many of us have an instinctive understanding of the whole “Brand Thing”, we don’t have a full conceptual model or the language to anchor that understanding around.
              </p>

              <p>
                That leaves us with many different interpretations of what brand
                is. Then, we approach conversations from different vantage
                points involving a lot of subjective opinions, which often
                leaves us vaguely confused and dissatisfied when the
                conversation is over.
              </p>

              <p>
                And though many startups and product teams have some of the
                Brand Thing figured out, they’re often missing the bits that
                everything else is built around, leaving us grasping for
                something that’s not there.
              </p>

              <p>
                This is a primer for startups and product teams that want to get
                a better understanding of the whole Brand Thing.
              </p>

              <p>This primer will make it easier to:</p>

              <ul>
                <li>
                  <strong>Have conversations</strong> about brand with a shared
                  vocabulary and from a shared conceptual understanding of what
                  brand is.
                </li>
                <li>
                  <strong>Make better decisions faster</strong> about not just
                  the brand, but the product itself.
                </li>
                <li>
                  <strong>Reduce ambiguity and subjectivity</strong> in
                  conversations related to brand.
                </li>
                <li>
                  <strong>Make onboarding easier</strong> for new members of the
                  team.
                </li>
                <li>
                  <strong>Create consistency</strong> across a product and all
                  of its touchpoints.
                </li>
              </ul>

              <p>
                This primer is high-level but includes deeper dives in context
                for readers who want to get into the nitty-gritty.
              </p>

              <div className="bg-gray-100 rounded-md mt-8 mb-4 p-6 text-gray-800">
                <p className="mt-0 text-sm">
                  <strong>Product vs. company vs. organization</strong>
                </p>
                <p className="text-sm">
                  Most startups have a single product, and their brand is
                  intertwined between the product and the company itself. This
                  primer uses the terms “product,” “company,” and “organization”
                  interchangeably. When your company introduces more products,
                  the concepts in this primer still apply, but each product is
                  likely to have its own brand platform distinct from the
                  company’s brand platform.
                </p>
              </div>

              <AnchoredHeading
                level="2"
                content="The things you need to know"
              />

              <AnchoredHeading level="3" content="Brand" />

              <p>Brand isn’t a tangible thing. You can’t “do the brand.”</p>

              <p>
                Brand is how others perceive your product or company. It’s
                inherently abstract, emotional, and jumbles together a bunch of
                things: the whole of their experience with your product or
                company, their interactions with you, what they hear about you
                in the media, how others describe you, and how they feel when
                you magically solve that thing they’ve been wasting ten hours on
                every week.
              </p>
              <p>
                Then it’s mingled with their own experiences and beliefs and
                worldview and that outcome is your brand, as far as that person
                is concerned.
              </p>
              <p>
                While we can’t “do the brand,” we <strong>can</strong>{" "}
                articulate what we want the brand to be. This is the{" "}
                <strong>brand platform</strong>.
              </p>

              <AnchoredHeading level="3" content="Branding" />

              <p>
                If brand is a concept, branding is a process. “Branding” is the
                process of, among other things, creating the brand platform.
              </p>

              <p>
                The better we articulate our brand platform, the more likely it
                is that others will perceive the brand the way we want it to be
                perceived.
              </p>

              <AnchoredHeading level="3" content="Brand platform" />

              <p>
                The brand platform is made up of three broad hierarchical areas
                and one adjacent area:
              </p>

              <pre className="bg-gray-100 rounded-md mt-4 mb-4 p-6 text-gray-800 text-sm">
                Brand strategy
                <br />
                ├─ Brand identity
                <br />
                │ ├─ Brand expression
                <br />
                Brand stewardship
              </pre>

              <p>Let’s take a look at each.</p>

              <AnchoredHeading level="3" content="1. Brand strategy" />

              <p>Brand strategy includes things like:</p>

              <ul>
                <li>
                  <a href="#vision-and-mission">Vision and mission</a>
                </li>
                <li>
                  <a href="#big-hairy-audacious-goal">
                    Big Hairy Audacious Goal
                  </a>
                </li>
                <li>
                  <a href="#positioning">Positioning</a>
                </li>
              </ul>

              <p>
                Together, these share a common purpose of defining what the
                company is in itself and how it’s positioned in the broader
                marketplace.
              </p>

              <p>
                These rarely change, and when they do, it has to be for a really
                good reason, because it reflects that the company has changed in
                a really deep and fundamental way.
              </p>

              <p>
                If a company is defined by a single product, pivoting to achieve
                product-market fit will almost always result in changes.{" "}
              </p>

              <AnchoredHeading level="4" content="Vision and mission" />

              <p>
                Vision statements and mission statements are both ways of
                articulating what the product or company is from a high-level,
                compelling, and action-driving point of view. They’re also
                weirdly complicated to write and easy to conflate and that’s why
                I’m explaining them together in one place.
              </p>

              <p>Now look.</p>

              <p>
                Your <strong>vision</strong> is an optimistic and inspiring call
                to action for the <strong>future</strong>. It reflects how the
                world will be changed for the better because of you.
              </p>

              <p>
                Your <strong>mission</strong> is a statement of what you’re
                doing <strong>now</strong> to reach your vision.
              </p>

              <p>
                While your vision is aspirational, your mission is tangible.
              </p>

              <div className="rounded-md mt-8 mb-8 p-6 md:-ml-6 md:-mr-6 border-4 border-solid border-blue-200">
                <p className="text-sm text-gray-600 mt-0">
                  Wikimedia’s{" "}
                  <a
                    href="https://wikimediafoundation.org/about/vision/"
                    target="_blank"
                  >
                    vision
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://wikimediafoundation.org/about/mission/"
                    target="_blank"
                  >
                    mission
                  </a>
                </p>
                <p className="leading-relaxed text-lg">
                  <strong>Vision:</strong> Imagine a world in which every single
                  human being can freely share in the sum of all knowledge.
                  That’s our commitment.
                </p>
                <p className="leading-relaxed text-lg">
                  <strong>Mission:</strong> The mission of the Wikimedia
                  Foundation is to empower and engage people around the world to
                  collect and develop educational content under a free license
                  or in the public domain, and to disseminate it effectively and
                  globally.
                </p>
              </div>
              
              <div className="bg-gray-100 rounded-md mt-8 mb-4 p-6 text-gray-800">
                <p className="mt-0 text-sm">
                  <strong>Brand vision vs. product vision</strong>
                </p>
                <p className="text-sm">
                  A brand vision reflects a broad aspirational view of the future shared with the company and its customers. A product vision is a narrower, more actionable vision meant to align the product team.
                </p>
                <p className="text-sm">
                  While the brand vision guides the company, the product vision guides the product team.
                </p>
              </div>

              <Accordion lead="Dig deeper into vision and mission statements">
                <h5>Writing vision and mission statements</h5>

                <p>
                  There’s no simple template for vision and mission statements,
                  but check out what other companies have written and create
                  your own along those lines. If it’s more than one or two
                  sentences, it’s probably trying to do too much.
                </p>

                <h5>More examples</h5>

                <div className="rounded-md mt-4 mb-4 p-6 bg-white">
                  <p className="text-sm text-gray-600 mt-0">Coinbase</p>
                  <p className="leading-relaxed">
                    <strong>Vision:</strong> Digital currency will bring about
                    more innovation, efficiency, and equality of opportunity in
                    the world by creating an open financial system.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Mission:</strong> Create an open financial system
                    for the world.
                  </p>
                </div>

                <div className="rounded-md mt-4 mb-4 p-6 bg-white">
                  <p className="text-sm text-gray-600 mt-0">Mozilla Firefox</p>
                  <p className="leading-relaxed">
                    <strong>Vision:</strong> Building a better internet.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Mission:</strong> Our mission is to ensure the
                    Internet is a global public resource, open and accessible to
                    all.
                  </p>
                </div>

                <p>
                  A mission statement can also be replaced with a Big Hairy
                  Audacious Goal.
                </p>

                <h5>Resources</h5>

                <ul>
                  <li>
                    <a>Coming soon!</a>
                  </li>
                </ul>
              </Accordion>
              
              <AnchoredHeading level="4" content="Big Hairy Audacious Goal" />

              <p>
                A Big Hairy Audacious Goal is a compelling, long-term goal that
                lights a fire under the team. It’s big and intimidating and
                looks 5–10 years into the future.
              </p>

              <p>
                Unlike samey-sounding corporate mission statements, Big Hairy
                Audacious Goals can be inspiring not only for your product team,
                but for your customers, which means it can do a lot of work to
                support the brand.
              </p>

              <p>Here’s a real hairy, real big goal from SpaceX:</p>

              <div className="rounded-md mt-8 mb-8 p-6 md:-ml-4 md:-mr-4 border-4 border-solid border-blue-200">
                <p className="text-sm text-gray-600 mt-0">SpaceX</p>
                <p className="leading-relaxed text-lg">
                  Enable human exploration and settlement of Mars.
                </p>
              </div>

              <p>
                A brand doesn’t need a Big Hairy Audacious Goal, but it can add
                a level of impact that isn’t always going to come across in a
                mission statement.
              </p>

              <Accordion lead="Dig deeper into Big Hairy Audacious Goals">
                <h5>Writing a Big Hairy Audacious Goal</h5>

                <p>
                  A good Big Hairy Audacious Goal is a bit scary. It might be
                  that you don’t actually accomplish it. That’s okay! The sheer
                  commitment and effort your team puts in towards achieving it
                  will make your product and team better.
                </p>

                <p>
                  A Big Hairy Audacious Goal also has to be measurable. There
                  has to be a very obvious finish line that you’re working
                  towards.
                </p>

                <p>
                  There’s four types of Big Hair Audacious Goals:
                  target-oriented, competitive, role model, or internal
                  transformation.
                </p>

                <h5>Examples</h5>

                <ul>
                  <li>
                    <strong>Target-oriented:</strong> Become the dominant player
                    in commercial aircraft and bring the world into the jet age.
                    (Boeing, 1950)
                  </li>
                  <li>
                    <strong>Competitive:</strong> Crush Adidas. (Nike, 1960s)
                  </li>
                  <li>
                    <strong>Role model:</strong> Become the Nike of the cycling
                    industry (Giro, 1986)
                  </li>
                  <li>
                    <strong>Internal transformation:</strong> Transform this
                    company from a chemical manufacturer into one of the
                    pre-eminent drug-making companies in the world. (Merch,
                    1930s)
                  </li>
                </ul>

                <h5>Resources</h5>

                <ul>
                  <li>
                    <a>Link!</a>
                  </li>
                </ul>
              </Accordion>

              <AnchoredHeading level="4" content="Positioning" />

              <p>
                Positioning is how your customers think about your brand (and
                how you want them to think about your brand) in relation to your
                competitors and the alternatives.
              </p>

              <p>
                Mission statements and vision statements and Big Hairy Audacious
                Goals are what the brand does. But positioning helps define what
                it is about a brand that the competitors aren’t.
              </p>

              <p>
                Sometimes positioning is articulated in positioning
                statements—one or two sentences that are cruelly hard to
                write—and other times it’s conveyed through manifestos or
                slogans or memos.
              </p>

              <Accordion lead="Dig deeper into positioning">
                <h5>Ways of positioning</h5>
                <p>
                  There’re quite a few different approaches to positioning. A
                  brand might use one or many of these approaches to position
                  themselves relative to their competition.
                </p>
                <p>
                  Here’s some examples directly from{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Positioning_(marketing)#strategies"
                    target="_blank"
                  >
                    Wikipedia
                  </a>
                  :
                </p>
                <ul>
                  <li>
                    <strong>Preemptive:</strong> Smith’s Chips—the original and
                    still the best.
                  </li>
                  <li>
                    <strong>Within a category:</strong> Volvo is the safest
                    choice in the prestige car category.
                  </li>
                  <li>
                    <strong>Price or premium:</strong> Apple products are
                    premium quality for premium prices.
                  </li>
                </ul>
                <h5>Writing positioning statements</h5>
                <p>
                  Positioning statements help take abstract thoughts about
                  positioning and make them tangible. The exact structure of a
                  positioning statement changes from company to company, but the
                  bones are the same.
                </p>
                <div className="bg-white rounded-md mt-4 mb-4 p-4">
                  <p className="mt-0 leading-relaxed text-lg">
                    For <span className="bg-yellow-200">(target customer)</span>{" "}
                    who{" "}
                    <span className="bg-yellow-200">(statement of need)</span>,{" "}
                    <span className="bg-yellow-200">(product)</span> is a{" "}
                    <span className="bg-yellow-200">(product category)</span>{" "}
                    that{" "}
                    <span className="bg-yellow-200">
                      (statement of key benefit)
                    </span>
                    . Unlike{" "}
                    <span className="bg-yellow-200">
                      (alternative product or solution)
                    </span>
                    , <span className="bg-yellow-200">(product)</span>{" "}
                    <span className="bg-yellow-200">
                      (statement of primary differentiation)
                    </span>
                    .
                  </p>
                </div>
                Here’s Amazon’s positioning statement from back in 2001:
                <div className="rounded-md mt-4 mb-4 p-4 border-4 border-solid border-blue-200">
                  <p className="text-sm text-gray-600 mt-0">
                    Amazon, literally two decades ago
                  </p>
                  <p className="leading-relaxed text-lg">
                    For World Wide Web users who enjoy books, Amazon.com is a
                    retail bookseller that provides instant access to over 1.1
                    million books. Unlike traditional book retailers, Amazon.com
                    provides a combination of extraordinary convenience, low
                    prices, and comprehensive selection.
                  </p>
                </div>
                <p>
                  Positioning statements like these are hard to write and
                  awkward to read. Keep in mind that it’s for{" "}
                  <strong>you</strong>. You’re not going to stick it on your
                  landing page and wave it in front of your customers.
                </p>
                <h5>Resources</h5>
                <ul>
                  <li>
                    <a>Coming soon!</a>
                  </li>
                </ul>
              </Accordion>

              <AnchoredHeading level="3" content="2. Brand identity" />

              <p>Brand identity includes:</p>

              <ul>
                <li>
                  <a href="#values">Values</a>
                </li>
                <li>
                  <a href="#principles">Principles</a>
                </li>
                <li>
                  <a href="#character-and-personality">
                    Character and personality
                  </a>
                </li>
                <li>
                  <a href="#name">Name</a>
                </li>
              </ul>

              <p>
                Each facet of brand identity combines to create an inherent
                personification of the brand. Each informs the other (but
                usually values and principles come first).
              </p>

              <p>
                What’s sometimes weird and uncomfortable about brand identity is
                that it doesn’t include things like logos or visuals. It’s
                mostly abstract concepts and a bunch of stuff written down. Look
                at it this way: no matter what you wear, your friends and family
                know you’re still the same person underneath.
              </p>

              <p>
                Much like brand strategy, brand identity doesn’t change all that
                often, and when it does, it’s always for a very good reason.
              </p>

              <AnchoredHeading level="4" content="Values" />

              <p>
                Values are the unchanging, inexorable rules or beliefs upon
                which a brand will never compromise. The more specific they are
                to the brand and the work they do, the more power they have to
                shape the brand identity.
              </p>

              <p>
                Values are usually a word or two that summarize the theme, and a
                bit of extrapolation to explain what it means. Values are a way
                to capture expectations, mostly around actions and behaviour,
                both internally for the team and externally for customers.
              </p>

              <div className="rounded-md mt-8 mb-8 p-6 md:-ml-6 md:-mr-6 border-4 border-solid border-blue-200">
                <p className="text-sm text-gray-600 mt-0">
                  Sourcegraph’s{" "}
                  <a
                    href="https://about.sourcegraph.com/company/values"
                    target="_blank"
                  >
                    values
                  </a>
                </p>
                <p className="leading-relaxed text-lg">
                  <strong>• High quality.</strong>
                </p>
                <p className="leading-relaxed text-lg">
                  <strong>• We not I.</strong>
                </p>
                <p className="leading-relaxed text-lg">
                  <strong>• Open and transparent.</strong>
                </p>
              </div>

              <p>Values are similar to, but not exactly, principles.</p>

              <Accordion lead="Dig deeper into values">
                <h5>Defining your values</h5>

                <p className="text-sm">I gotta write this still.</p>

                <h5>Resources</h5>

                <ul>
                  <li>
                    <a>Coming soon!</a>
                  </li>
                </ul>
              </Accordion>

              <AnchoredHeading level="4" content="Principles" />

              <p>
                A brand’s principles are the brand’s point of view. While values
                capture <strong>internal</strong> expectations for actions and
                behaviour, principles capture a stance on the way the world is,
                or should be.
              </p>

              <p>
                A brand with clear principles has a perspective on the world.
                This perspective then becomes a part of that brand’s identity,
                and gives its team a point of reference for making decisions.
              </p>

              <p>
                When you put together a few principles in one place, it becomes
                a <strong>manifesto</strong>. A manifesto is a powerful tool to
                share what matters most all in one place.
              </p>

              <div className="rounded-md mt-8 mb-8 p-6 md:-ml-6 md:-mr-6 border-4 border-solid border-blue-200">
                <p className="text-sm text-gray-600 mt-0">
                  Some of Mozilla’s{" "}
                  <a
                    href="https://www.mozilla.org/en-US/about/manifesto/"
                    target="_blank"
                  >
                    principles
                  </a>
                </p>
                <p className="leading-relaxed text-lg">
                  <strong>Principle 1:</strong>
                  <br />
                  The internet is an integral part of modern life—a key
                  component in education, communication, collaboration,
                  business, entertainment and society as a whole.
                </p>
                <p className="leading-relaxed text-lg">
                  <strong>Principle 2:</strong>
                  <br />
                  The internet is a global public resource that must remain open
                  and accessible.
                </p>
                <p className="leading-relaxed text-lg">
                  <strong>Principles 3:</strong>
                  <br />
                  The internet must enrich the lives of individual human beings.
                </p>
                <p>
                  Check out the{" "}
                  <a
                    href="https://www.mozilla.org/en-US/about/manifesto/"
                    target="_blank"
                  >
                    Mozilla Manifesto →
                  </a>
                </p>
              </div>

              <Accordion lead="Dig deeper into principles">
                <h5>Defining your principles</h5>

                <p className="text-sm">I gotta write this still.</p>

                <h5>Resources</h5>

                <ul>
                  <li>
                    <a>Coming soon!</a>
                  </li>
                </ul>
              </Accordion>

              <AnchoredHeading level="4" content="Character and personality" />

              <p>
                When you think of a friend, a colleague, or someone in your
                family, you can probably find all kinds of ways to describe
                their personality. Brands are the same. Brands have personality.
              </p>

              <p>
                Brand character and personality is more often than not the
                missing link in a company’s brand platform. When we look at
                visual designs and logos and think about the voice we use while
                writing stuff for the brand, we talk about look and feel.
                Character and personality is what provides the basis of that
                look and feel that we evaluate against: the character
                attributes.
              </p>

              <p>
                Brand character attributes are rarely shared publicly. For that
                reason, I'm going to make something up to give you an example.
              </p>

              <div className="rounded-md mt-8 mb-8 p-6 md:-ml-6 md:-mr-6 border-4 border-solid border-blue-200">
                <p className="text-sm text-gray-600 mt-0">
                  Character attributes for a fake outdoor gear brand
                </p>
                <p className="leading-relaxed text-lg">
                  This company is <strong>steadfast</strong>,{" "}
                  <strong>studious</strong>, <strong>rustic</strong>, and{" "}
                  <strong>playful</strong>.
                </p>
              </div>

              <p>
                Clear and explicit character attributes provide a baseline for
                everyone on your product team to make decisions while minimizing
                the subjective differences of interpretation around what is or
                isn’t “the brand.”
              </p>

              <p>
                Much like positioning statements, you’re not going to go out and
                wave your character attributes in front of your customers.
                They’re for you, to better talk about your brand’s personality
                and use to create expressions of your brand that capture that
                personality.
              </p>

              <Accordion lead="Dig deeper into character and personality">
                <h5>Defining your character attributes</h5>

                <p className="text-sm">I gotta write this still.</p>

                <h5>Resources</h5>

                <ul>
                  <li>
                    <a>Coming soon!</a>
                  </li>
                </ul>
              </Accordion>

              <AnchoredHeading level="4" content="Name" />

              <p>
                A product or company’s name does a whole lot of work in defining
                the brand identity. It’s for a very simple reason: a word is
                simply a symbol that represents a lot more than its literal
                definition.
              </p>

              <p>
                The process of “branding” is all about creating a certain
                perception for your product. A good name can shortcut the
                process, because if a word is a symbol that represents a lot
                more than its literal definition, then using that word for your
                name means your identity comes batteries-included with all that
                word represents.
              </p>

              <p>
                Consider these names and think about how much work each name
                does from its own symbolism:
              </p>

              <div className="rounded-md mt-8 mb-8 p-6 md:-ml-6 md:-mr-6 border-4 border-solid border-blue-200">
                <ul className="mt-0">
                  <li>
                    <strong>Tesla</strong> (electric cars)
                  </li>
                  <li>
                    <strong>Hey</strong> (email reimagined)
                  </li>
                  <li>
                    <strong>A Hundred Monkeys</strong> (A consultancy that helps
                    you name companies and products)
                  </li>
                </ul>
              </div>

              <Accordion lead="Naming is real hard">
                <h5>Coming up with a good name</h5>

                <p className="text-sm">I gotta write this still.</p>

                <h5>Resources</h5>

                <ul>
                  <li>
                    <a>Coming soon!</a>
                  </li>
                </ul>
              </Accordion>

              <AnchoredHeading level="3" content="3. Brand expression" />

              <p>
                Once the brand strategy and identity is figured out, brand
                expression is where all those abstract bits become concrete and
                tangible.
              </p>

              <p>
                It’s a super wide area and the world is full of brilliant people
                who specialize in taking brand strategy and identity and
                expressing it in ways that make everyone else in the same field
                vaguely irritated and questioning their chosen career path.
              </p>

              <p>
                The most relevant forms of brand expression for product teams
                include things like:
              </p>

              <p>
                <strong>Identity design</strong>
              </p>

              <ul>
                <li>Logo</li>
                <li>Colour</li>
                <li>Typography</li>
                <li>App icons</li>
                <li>
                  The gestalt of the thing (the “whole of perception” through
                  the combination of all of these elements and things like how
                  white space is used, how figure and ground relationships are
                  used, and so on)
                </li>
              </ul>

              <p>
                <strong>Copywriting</strong>
              </p>

              <ul>
                <li>Terminology</li>
                <li>Voice</li>
              </ul>

              <p>
                <strong>Interface design</strong>
              </p>

              <ul>
                <li>UI elements</li>
                <li>Animation</li>
                <li>Iconography</li>
              </ul>

              <p>
                <strong>Product design</strong>
              </p>

              <ul>
                <li>
                  Features (yes, really: the better you understand your brand,
                  the easier it is to decide what features are most in line with
                  your brand)
                </li>
                <li>
                  Flows (also yes, really: the whole of a flow in a product
                  draws from, and reinforces, your brand)
                </li>
              </ul>

              <p>
                Other examples of brand expression, though not always as
                relevant to product teams:
              </p>

              <ul>
                <li>Video and motion</li>
                <li>Packaging</li>
                <li>Printed materials and collateral</li>
                <li>Environmental design</li>
                <li>Sound design</li>
                <li>And lots more!</li>
              </ul>

              <AnchoredHeading level="3" content="Brand stewardship" />

              <p>
                Brand stewardship is separate but crucial for growing companies.
              </p>

              <p>It’s about:</p>

              <p>
                <strong>Organizing all of this so people can get at it</strong>
              </p>

              <ul>
                <li>
                  Brand guidelines that capture and share the brand strategy and
                  identity, and provide guidance around brand expression.
                </li>
                <li>
                  Asset libraries so that everyone’s using the same files and
                  assets wherever the brand is expressed.
                </li>
              </ul>

              <p>
                <strong>Having a plan for making changes</strong>
              </p>

              <ul>
                <li>
                  If you’re reading a novel and the character’s personality
                  changes every chapter, they’ll feel badly written and
                  artificial, and even untrustworthy.
                </li>
                <li>
                  The higher you go in the hierarchy of strategy –&nbsp;identity
                  – expression, the more purposeful and deliberate you have to
                  be about making changes.
                </li>
              </ul>

              <p>
                <strong>
                  Understanding and commitment from leadership and making brand
                  part of culture
                </strong>
              </p>

              <ul>
                <li>
                  Leaders have to have a strong understanding of brand concepts
                  and the company’s own brand, and take ownership of the core
                  strategy and identity.
                </li>
                <li>
                  Brand becomes culture: the entire team has to deeply
                  understand the brand, and feel confident making decisions
                  informed by that understanding.
                </li>
              </ul>

              <AnchoredHeading level="2" content="I have questions" />

              <p>
                I invented a bunch of questions and answered them. As I get more
                real questions from real readers, I’ll answer them.
              </p>

              <AnchoredHeading
                level="3"
                content="Oh wow how much work is this gonna be"
              />

              <p>As much or as little as you want it to be!</p>

              <p>
                Big companies with big branding projects might take a year or
                more. That’s because there’s a lot of people involved, a lot of
                money involved, and a lot of tangible-real-world outcomes
                (imagine doing a rebranding for a multinational car rental
                corporation and having the responsibility of replacing all the
                signage and all the vehicle wraps and all the brochures and now
                I have a headache).
              </p>

              <p>
                Most product teams don’t need anything near that much time and
                effort.
              </p>

              <p>
                Brand strategy and identity can be articulated in a single
                one-page document. If it’s much longer than that, you’re not
                going to remember it or read it or care much about it anyway.
              </p>

              <p>
                Brand identity and expression are often conflated because
                expression is where things become less abstract and more
                concrete, and there’s an infinite world of opportunity to
                explore, which is super overwhelming and frustrating and so it’s
                great to have an identity to add some constraints and make it
                easier to make decisions already.
              </p>

              <AnchoredHeading
                level="3"
                content="My product is doing fine without a brand"
              />

              <p>
                Here’s the thing: brand exists even if you didn’t go about
                articulating it in a purposeful way. And if you haven’t
                articulated it in a purposeful way, it’s really easy for it to
                start becoming inconsistent or start finding it hard to make
                decisions.
              </p>

              <p>
                Instead of letting the brand exist in its own weird, murky
                space, take a little bit of time to articulate it so that it
                exists with purpose!
              </p>

              <AnchoredHeading
                level="3"
                content="Can brand make up for a bad product"
              />

              <p>
                No, not at all. Brand ultimately shapes how people perceive your
                product in itself and in relation to your competitors.{" "}
              </p>

              <p>
                If you spend all your time making a solid brand identity
                eye-wateringly beautiful brand expressions, but there’s no
                substance behind it, nobody’s going to buy your product (a
                second time). Thankfully, if you’ve done a good job defining
                your brand strategy, this shouldn’t be a problem, because
                articulating your vision, mission, promise, and positioning
                forces you to have a point.
              </p>

              <AnchoredHeading
                level="3"
                content="We already have a logo and stuff but not the bits like character, do we have to start over"
              />

              <p>Nope!</p>

              <p>
                Sure, it’s easier to make decisions about the logo and UI design
                system if you already have these. But just because you didn’t do
                this work first, doesn’t mean that you{" "}
                <strong>don’t have</strong> a brand character and personality,
                or vision or mission or positioning. These things exist whether
                or not you defined them explicitly.
              </p>

              <p>
                The logo and UI design system has inherent attributes that
                reflect your brand. There was probably a lot of “it doesn’t feel
                like <strong>us</strong>” or “it doesn’t feel right somehow” in
                the decision-making process.
              </p>

              <p>
                The tricky part is the future: making decisions about what is or
                isn’t “the brand,” keeping consistency, helping new team members
                understand the brand.
              </p>

              <p>
                Reverse-engineer it! Figure out what’s missing and fill those
                things out.
              </p>

              <AnchoredHeading
                level="3"
                content="Has every company done all this work?"
              />

              <p>
                Smaller companies and particularly individuals are often great
                at understanding their own brand strategy and identity, even if
                they haven’t formally articulated it. That’s fine!{" "}
              </p>

              <p>
                But it’s still worthwhile to articulate the whole brand
                platform. It’ll make you reflect on things in deeply
                uncomfortable and frustrating ways and I bet you’ll come out of
                it with a clearer understanding of your product’s values, your
                vision, how you’re positioning yourself against your
                competition, and what aspects of your brand identity most make
                you <strong>you</strong>.
              </p>

              <AnchoredHeading
                level="3"
                content="Wait a moment, XYZ doesn’t do it like this"
              />

              <p>
                The whole field of branding is a relatively new one that’s still
                going through really rapid and profound changes. The language
                and conceptual frameworks we use to take all these abstract
                notions and turn them into tangible outcomes that we can talk
                about (and sell to each other as Brand Strategy Consultants and
                Brand Firms and Agencies) are continuously evolving.
              </p>

              <p>
                This primer is a summary and a useful starting point for product
                teams. Other companies do things in different ways, and that’s
                okay! Pick and choose the concepts that work best for your team.
              </p>

              <AnchoredHeading
                level="3"
                content="What about marketing and sales?"
              />

              <p>
                Branding and marketing (and sales) are all inherently connected
                and feed into each other, but branding isn’t marketing and
                marketing isn’t branding.
              </p>

              <p>
                Suppose you wanted to advertise your product to a potential
                audience. Marketing’s concerns include choosing where to place
                advertising to reach the right audience, what specific messaging
                would best connect with that audience in that context, and
                whether tools like incentives should be used to help drive
                conversions. Branding’s concerns are the elements of brand
                expression within that advertising, which in turn are based on
                the{" "}
              </p>
            </div>
            <div className="mt-16">
              <p className="text-sm">
                &copy; <a href="https://quinnkeast.com">Quinn Keast</a>
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <ul className="sidebar sticky top-0 pt-16">
              <li>
                <a href="#introduction">Introduction</a>
              </li>
              <li>
                <a href="#the-things-you-need-to-know">
                  The things you need to know
                </a>
                <ul>
                  <li>
                    <a href="#brand">Brand</a>
                  </li>
                  <li>
                    <a href="#brand-platform">Brand platform</a>
                  </li>
                  <li>
                    <a href="#1-brand-strategy">Brand strategy</a>
                    <ul>
                      <li>
                        <a href="#vision-and-mission">Vision and mission</a>
                      </li>
                      <li>
                        <a href="#big-hairy-audacious-goal">
                          Big Hairy Audacious Goal
                        </a>
                      </li>
                      <li>
                        <a href="#positioning">Positioning</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#2-brand-identity">Brand identity</a>
                    <ul>
                      <li>
                        <a href="#values">Values</a>
                      </li>
                      <li>
                        <a href="#principles">Principles</a>
                      </li>
                      <li>
                        <a href="#character-and-personality">
                          Character and personality
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#3-brand-expression">Brand expression</a>
                  </li>
                  <li>
                    <a href="#brand-stewardship">Brand stewardship</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#i-have-questions">I have questions</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
