import Head from 'next/head'
import Accordion from '../components/accordion';
import AnchoredHeading from '../components/AnchoredHeading';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main class="mb-24">
        <div class="text-center pt-24 pb-16">
          <h1 class="">What is this Brand Thing Anyway?</h1>
          <h2 class="font-normal mt-0">A primer on brand for product teams</h2>
        </div>
        <div class="w-content mx-auto">
          <div className="bg-yellow-100 rounded-md mt-4 mb-4 p-4">
            <p className="mt-0 text-yellow-900">There's gonna be a story to kick this off eh?</p>
          </div>

          <AnchoredHeading level="2" content="The Challenge" />
          
          <p>Many of us have an instinctive understanding of the <strong>Brand Thing</strong>, but don’t have the language or concepts to anchor that understanding around.</p>
          
          <p>Many of us have different interpretations of what brand is, and so we approach conversations from different vantage points without realizing it, which often leaves us vaguely confused and dissatisfied.</p>
          
          <p>Many products and companies have some parts of the Brand Thing articulated, but not all of them—and often the ones missing are the ones that everything else is built around, which leaves us grasping for something that’s not there.</p>
          
          <p>Better understanding the Brand Thing will make it easier to:</p>
	        
          <ul>
            <li><strong>Have conversations</strong> about brand from a shared vocabulary and a shared conceptual understanding of <em>what brand is</em>.</li>
	          <li><strong>Make decisions</strong> based on a shared understanding of <em>what the product’s brand is</em>.</li>
	          <li><strong>Reduce ambiguity and subjectivity</strong> in conversations related to brand.</li>
	          <li><strong>Create consistency</strong> across a product and all of its touchpoints.</li>
	          <li><strong>Make onboarding easier</strong> for new members of the team.</li>
          </ul>
          
          <p>This primer is high-level but includes deeper dives in context for readers who want to get into the nitty-gritty.</p>

          <AnchoredHeading level="2" content="The concepts" />
          
          <AnchoredHeading level="3" content="Brand" />
          
          <p>The first thing to know: brand isn’t a Thing. You can’t “do the brand.”</p>
          
          <p>Brand is how others perceive your product or company. It’s inherently abstract, emotional, and jumbles together a bunch of things: the whole of their experience with your product or company, their interactions with you, what they hear about you in the media, how others describe you, and how they feel when you magically solve that thing they’ve been wasting ten hours on every week. Then it’s mingled with their own experiences and beliefs and worldview and that outcome is your brand, as far as that person is concerned.</p>
          
          <p>While we can’t “do the brand,” we <em>can</em> articulate what we want the brand to be. This is the <strong>brand platform</strong>.</p>
          
          <p>“Branding” is the act of creating a good brand platform and finding how people are, or end up, perceiving it.</p>
          
          <p>The better we articulate our brand platform, the more likely it is that others will perceive the brand the way we want it to be perceived.</p>

          <AnchoredHeading level="3" content="Brand platform" />

          <p>The brand platform is made up of three broad hierarchical areas and one adjacent area:</p>

          <pre className="bg-gray-100 rounded-md mt-4 mb-4 p-6 text-gray-800 text-sm">
            Brand strategy<br />
            ├─ Brand identity<br />
            │  ├─ Brand expression<br />
            Brand stewardship
          </pre>
          
          <p>Brand strategy shapes brand identity, which shapes brand expression.</p>

          <p>Brand stewardship is separate but just as crucial.</p>

          <AnchoredHeading level="3" content="Brand strategy" />

          <p>Brand strategy includes the topics like:</p>

          <AnchoredHeading level="4" content="Positioning" />

          <p>Positioning is a strategic approach to defining what your product is, who it’s for, and how you’re distinct from your competitors.</p>

          <p>A positioning statement is one or two sentences that’s cruelly hard to write, but when the dust settles, captures what your product is very simply and within a broader context.</p>

          <p>The exact structure of a positioning statement changes from company to company, but the bones are the same.</p>

          <div className="bg-gray-100 rounded-md mt-4 mb-4 p-4 -ml-4 -mr-4">
            <p className="mt-0 leading-relaxed">For <span className="bg-yellow-300">(target customer)</span> who <span className="bg-yellow-300">(statement of need)</span>, <span className="bg-yellow-300">(product)</span> is a <span className="bg-yellow-300">(product category)</span> that <span className="bg-yellow-300">(statement of key benefit)</span>. Unlike <span className="bg-yellow-300">(alternative product or solution)</span>, <span className="bg-yellow-300">(product)</span> <span className="bg-yellow-300">(statement of primary differentiation)</span>.</p>
          </div>
          
          <p>When you’re at the point of creating a positioning statement, you probably already have a product or you’ve got something in the works. Creating (and iterating on) a positioning statement at the same time will help you make product decisions that make your product more purposeful.</p>

          <p>One other thing: it’s important to keep in mind that a positioning statement is for <em>you</em>. You’re not going to stick it on your landing page and wave it in front of your customers. It’s a way to make sure that you clearly understand yourself, and then you can use that to guide everything else.</p>

          <Accordion lead="Dig deeper">
            
            <AnchoredHeading level="5" content="Examples" />
            
            <p>Example</p>
            <p>Example</p>
            <p>Example</p>

            <AnchoredHeading level="5" content="Resources" />

            <ul>
              <li>Positioning: The Battle for your Mind</li>
              <li>Firstround link</li>
            </ul>
            
          </Accordion>
          
          <AnchoredHeading level="4" content="Vision" />
          
          <div className="bg-yellow-100 rounded-md mt-4 mb-4 p-4">
            <p className="mt-0 text-yellow-900">Look I gotta do this section still</p>
          </div>

          <Accordion lead="How to articulate your vision">
            <p>content!</p>
          </Accordion>

          <AnchoredHeading level="4" content="Mission" />
          
          <div className="bg-yellow-100 rounded-md mt-4 mb-4 p-4">
            <p className="mt-0 text-yellow-900">Look I gotta do this section still</p>
          </div>

          <Accordion lead="How to articulate your mission">
            <p>content!</p>
          </Accordion>
          
          <AnchoredHeading level="4" content="Promise" />
          
          <div className="bg-yellow-100 rounded-md mt-4 mb-4 p-4">
            <p className="mt-0 text-yellow-900">Look I gotta do this section still</p>
          </div>

          <Accordion lead="How to create your brand promise">
            <p>content!</p>
          </Accordion>
	        
          <p>Together, these share a common purpose of defining what the company is in itself and how it’s positioned in the broader marketplace.</p>

	        <p>These rarely change, and when they do, it has to be for a really good reason, because it reflects that the company has changed in a really deep and fundamental way.</p>
	        
          <p>If a company is defined by a single product, pivoting to achieve product-market fit will almost always result in changes. </p>
	        
          <p>Note that if a company is distinct from the product (maybe it has six different products), the product itself will often be a sub-brand that can change without the company’s own brand changing all that much.</p>

          <AnchoredHeading level="3" content="Brand identity" />

          <p>Brand identity includes:</p>

          <AnchoredHeading level="4" content="Values and principles" />

          <div className="bg-yellow-100 rounded-md mt-4 mb-4 p-4">
            <p className="mt-0 text-yellow-900">Look I gotta do this section still</p>
          </div>

          <Accordion lead="How to figure out your values and principles">
            <p>content!</p>
          </Accordion>
          
          <AnchoredHeading level="4" content="Brand character and personality" />
          
          <div className="bg-yellow-100 rounded-md mt-4 mb-4 p-4">
            <p className="mt-0 text-yellow-900">Look I gotta do this section still</p>
          </div>

          <Accordion lead="How to figure out your brand character and personality">
            <p>content!</p>
          </Accordion>
          
          <AnchoredHeading level="4" content="Name" />
          
          <div className="bg-yellow-100 rounded-md mt-4 mb-4 p-4">
            <p className="mt-0 text-yellow-900">Look I gotta do this section still</p>
          </div>
          
          <Accordion lead="Naming is real hard so read this book">
            <p>What's awesome about naming is the name can do a whole lot of work around establishing personality, almost for free.</p>
          </Accordion>
	
          <p>These are at a conceptual and almost visceral level.</p>
          
          <p>Together, these combine to create an inherent personification of the brand.</p>
	        
          <p>Each informs the other (but usually values come first).</p>
          
          <p>This is the missing link for a lot of companies because it’s very abstract.</p>

          <AnchoredHeading level="3" content="Brand expression" />

          <p>Brand expression is where the abstract identity becomes concrete and tangible.</p>
	        
          <p>It’s a super wide area.</p>
	        
          <p>The most relevant things for product teams include things like:</p>

          <AnchoredHeading level="4" content="Identity design" />
          
          <ul>
            <li>Logo</li>
            <li>Colour</li>
            <li>Typography</li>
            <li>App icons</li>
            <li>The gestalt of the thing (the “whole of perception” through the combination of all of these elements and things like how white space is used, how figure and ground relationships are used, and so on)</li>
          </ul>

          <AnchoredHeading level="4" content="Copywriting" />
          
          <ul>
            <li>Terminology</li>
            <li>Voice</li>
          </ul>
          
          <AnchoredHeading level="4" content="Interface design" />
          
          <ul>
            <li>UI elements</li>
            <li>Animation</li>
            <li>Iconography</li>
          </ul>
          
          <AnchoredHeading level="4" content="Product design" />
          
          <ul>
            <li>Features</li>
            <li>Workflows</li>
          </ul>
          
	        <p>Other examples of brand expression, though not always as relevant to product teams:</p>

          <ul>
            <li>Video and motion</li>
            <li>Packaging</li>
            <li>Printed materials and collateral</li>
            <li>Environmental design</li>
            <li>Sound design</li>
            <li>And lots more!</li>
          </ul>

          <AnchoredHeading level="3" content="Brand stewardship" />

          <p>Brand stewardship is separate but crucial for growing companies.</p>
          
          <p>It’s about:</p>

          <AnchoredHeading level="4" content="Organizing all of this so people can get at it" />
          
          <ul>
            <li>Brand guidelines that capture and share the brand strategy and identity, and provide guidance around brand expression</li>
            <li>Asset libraries so that everyone’s using the same files and assets wherever the brand is expressed</li>
          </ul>
          
          <AnchoredHeading level="4" content="Having a plan for making changes" />
          
          <ul>
            <li>If you’re reading a novel and the character’s personality changes every chapter, they’ll feel badly written and artificial, and even untrustworthy.</li>
            <li>The higher you go in the hierarchy of strategy –&nbsp;identity – expression, the more purposeful and deliberate you have to be about making changes.</li>
          </ul>
          
          <AnchoredHeading level="4" content="Understanding and commitment from leadership and making brand part of culture" />
          
          <ul>
            <li>Leaders have to have a strong understanding of brand concepts and the company’s own brand, and take ownership of the core strategy and identity.</li>
            <li>Brand becomes culture: the entire team has to deeply understand the brand, and feel confident making decisions informed by that understanding.</li>
          </ul>

          <AnchoredHeading level="2" content="I have questions" />

          <AnchoredHeading level="3" content="Oh wow how much work is this gonna be" />

          <p>As much or as little as you want it to be!</p>
          
          <p>Big companies with big branding projects might take a year or more. That’s because there’s a lot of people involved, a lot of money involved, and a lot of tangible-real-world outcomes (imagine doing a rebranding for a multinational car rental corporation and having the responsibility of replacing all the signage and all the vehicle wraps and all the brochures and now I have a headache).</p>
          
          <p>Most product teams don’t need anything near that much time and effort.</p>
          
          <p>Brand strategy and identity can be articulated in a single one-page document. If it’s much longer than that, you’re not going to remember it or read it or care much about it anyway.</p>
          
          <p>Here’s a one-pager you can use as a template. → </p>
          
          <p>Brand identity and expression are often conflated because expression is where things become less abstract and more concrete, and there’s an infinite world of opportunity to explore, which is super overwhelming and frustrating and so it’s great to have an identity to add some constraints and make it easier to make decisions already.</p>

          <AnchoredHeading level="3" content="My product is doing fine without a brand" />

          <p>Here’s the thing: brand exists even if you didn’t go about articulating it in a purposeful way. And if you haven’t articulated it in a purposeful way, it’s really easy for it to start becoming inconsistent or start finding it hard to make decisions.</p>
          
          <p>Instead of letting the brand exist in its own weird, murky space, take a little bit of time to articulate it so that it exists with purpose!</p>

          <AnchoredHeading level="3" content="Can brand make up for a bad product" />

          <p>No, not at all. Brand ultimately shapes how people perceive your product in itself and in relation to your competitors. </p>
          
          <p>If you spend all your time making a solid brand identity eye-wateringly beautiful brand expressions, but there’s no substance behind it, nobody’s going to buy your product (a second time). Thankfully, if you’ve done a good job defining your brand strategy, this shouldn’t be a problem, because articulating your vision, mission, promise, and positioning forces you to have a point.</p>

          <AnchoredHeading level="3" content="We already have a logo and stuff but not the bits like character, do we have to start over" />

          <p>Nope!</p>
          
          <p>Sure, it’s easier to make decisions about the logo and UI design system if you already have these. But just because you didn’t do this work first, doesn’t mean that you <em>don’t have</em> a brand character and personality, or vision or mission or positioning. These things exist whether or not you defined them explicitly.</p>
          
          <p>The logo and UI design system has inherent attributes that reflect your brand. There was probably a lot of “it doesn’t feel like <em>us</em>” or “it doesn’t feel right somehow” in the decision-making process.</p>
          
          <p>The tricky part is the future: making decisions about what is or isn’t “the brand,” keeping consistency, helping new team members understand the brand.</p>
          
          <p>Reverse-engineer it! Figure out what’s missing and fill those things out.</p>

          <AnchoredHeading level="3" content="Has every company done all this work?" />
        
          <p>Smaller companies and particularly individuals are often great at understanding their own brand strategy and identity, even if they haven’t formally articulated it. That’s fine! </p>
          
          <p>But it’s still worthwhile to articulate the whole brand platform. It’ll make you reflect on things in deeply uncomfortable and frustrating ways and I bet you’ll come out of it with a clearer understanding of your product’s values, your vision, how you’re positioning yourself against your competition, and what aspects of your brand identity most make you <em>you</em>.</p>
        
          <AnchoredHeading level="3" content="Wait a moment, XYZ doesn’t do it like this" />
        
          <p>The whole field of branding is a relatively new one that’s still going through really rapid and profound changes. The language and conceptual frameworks we use to take all these abstract notions and turn them into tangible outcomes that we can talk about (and sell to each other as Brand Strategy Consultants and Brand Firms and Agencies) are continuously evolving.</p>
        
          <p>This primer is a summary and a useful starting point for product teams. Other companies do things in different ways, and that’s okay! Pick and choose the concepts that work best for your team.</p>

          <AnchoredHeading level="3" content="What about marketing and sales?" />

          <p>Branding and marketing (and sales) are all inherently connected and feed into each other, but branding isn’t marketing and marketing isn’t branding.</p>
        
          <p>Suppose you wanted to advertise your product to a potential audience. Marketing’s concerns include choosing where to place advertising to reach the right audience, what specific messaging would best connect with that audience in that context, and whether tools like incentives should be used to help drive conversions. Branding’s concerns are the elements of brand expression within that advertising, which in turn are based on the </p>

        </div>
      </main>
    </div>
  )
}
