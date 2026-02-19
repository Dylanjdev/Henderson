import React from "react";
import logo from "./assets/logo.jpg";

function App() {
  const services = [
    "Custom Framing",
    "Roof Replacement",
    "Siding & Exterior Repair",
    "Energy-Efficient Windows",
    "Drywall Installation & Repair",
    "Luxury Vinyl & Hardwood Flooring",
    "Kitchen Renovations",
    "Bathroom Upgrades",
  ];

  const processSteps = [
    {
      title: "1) On-Site Consultation",
      description:
        "We review your goals, timeline, and budget, then document the scope in plain language.",
    },
    {
      title: "2) Detailed Proposal",
      description:
        "You receive a written estimate with clear milestones, material options, and realistic lead times.",
    },
    {
      title: "3) Build & Communicate",
      description:
        "Our crew keeps a clean jobsite and provides regular updates so you always know what’s next.",
    },
    {
      title: "4) Final Walkthrough",
      description:
        "We complete a punch-list with you and ensure every finish meets expectations before sign-off.",
    },
  ];

  return (
    <div className="sans-serif">
      <section className="bg-dark-blue gold pa4 pa5-ns">
        <div className="mw9 center flex flex-column flex-row-ns items-center">
          <div className="w-100 w-60-ns tc tl-ns pr4-ns">
            <img src={logo} alt="Henderson Construction" className="w5 w6-ns mb3" />
            <p className="ttu tracked f7 mb2 o-80">Licensed & Insured • Residential Specialists</p>
            <h1 className="f2 f1-ns fw7 lh-title mt0 mb3">
              Trusted Home Renovation & Repair Across the Tri-Cities
            </h1>
            <p className="f5 lh-copy mw7 center ml0-ns">
              Henderson Construction delivers dependable craftsmanship for kitchens, bathrooms,
              roofing, and whole-home improvements. We combine practical planning with detail-driven
              execution to keep your project on schedule and built to last.
            </p>
            <div className="mt4 flex flex-column flex-row-ns items-start items-center-ns justify-start">
              <a
                href="#contact"
                className="bg-gold dark-blue pa3 ph4 br2 fw6 no-underline mr3-ns mb3 mb0-ns"
              >
                Request Free Estimate
              </a>
              <a
                href="tel:14232922511"
                className="ba b--gold gold pa3 ph4 br2 fw6 no-underline"
              >
                Call (423) 292-2511
              </a>
            </div>
          </div>

          <div className="w-100 w-40-ns mt4 mt0-ns">
            <div className="bg-white-10 pa4 br3">
              <h2 className="f4 mt0 mb3">Why Homeowners Choose Us</h2>
              <ul className="list pl0 mb0">
                <li className="mb2">✔ Transparent written proposals</li>
                <li className="mb2">✔ Dedicated project communication</li>
                <li className="mb2">✔ Quality materials from trusted suppliers</li>
                <li className="mb2">✔ Clean, respectful job sites</li>
                <li>✔ Work backed by workmanship warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-near-white pa4 pa5-ns">
        <div className="mw9 center">
          <div className="flex flex-column flex-row-ns justify-between mb4">
            <h2 className="f2 mt0 mb2">Core Services</h2>
            <p className="f5 lh-copy measure-narrow-ns mt0 mb0 o-80">
              From repairs to full remodels, we handle the details with a practical, homeowner-first approach.
            </p>
          </div>

          <div className="flex flex-wrap nl2 nr2">
            {services.map((service) => (
              <div key={service} className="w-100 w-50-m w-25-l pa2">
                <div className="bg-white pa3 br2 shadow-1 h-100">
                  <p className="fw6 mt0 mb0">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pa4 pa5-ns">
        <div className="mw9 center flex flex-column flex-row-ns">
          <div className="w-100 w-50-ns pr4-ns mb4 mb0-ns">
            <h2 className="f2 mt0 mb3">Built on Craftsmanship & Accountability</h2>
            <p className="lh-copy">
              We believe great construction starts with clear expectations. Every project is planned around your
              goals, budget, and timeline, then executed by a crew that values precision and professionalism.
            </p>
            <p className="lh-copy mb0">
              Whether you need structural repairs, exterior improvements, or a complete interior refresh,
              our team brings consistent quality from first consultation to final walkthrough.
            </p>
          </div>
          <div className="w-100 w-50-ns">
            <div className="flex flex-wrap nl2 nr2 tc">
              <div className="w-50 pa2">
                <div className="bg-near-white pa3 br2">
                  <p className="f2 fw7 dark-blue mv0">Licensed</p>
                  <p className="mv1">Professional Standards</p>
                </div>
              </div>
              <div className="w-50 pa2">
                <div className="bg-near-white pa3 br2">
                  <p className="f2 fw7 dark-blue mv0">Insured</p>
                  <p className="mv1">Jobsite Peace of Mind</p>
                </div>
              </div>
              <div className="w-50 pa2">
                <div className="bg-near-white pa3 br2">
                  <p className="f2 fw7 dark-blue mv0">Clear Scope</p>
                  <p className="mv1">Written Project Details</p>
                </div>
              </div>
              <div className="w-50 pa2">
                <div className="bg-near-white pa3 br2">
                  <p className="f2 fw7 dark-blue mv0">Reliable</p>
                  <p className="mv1">Consistent Communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-washed-blue dark-blue pa4 pa5-ns">
        <div className="mw9 center">
          <h2 className="f2 tc mt0 mb4">Our Process</h2>
          <div className="flex flex-wrap nl2 nr2">
            {processSteps.map((step) => (
              <div key={step.title} className="w-100 w-50-l pa2">
                <div className="bg-white pa4 br2 h-100">
                  <h3 className="f4 mt0 mb2">{step.title}</h3>
                  <p className="lh-copy mv0">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pa4 pa5-ns">
        <div className="mw9 center">
          <h2 className="tc f2 mt0 mb4">What You Can Expect</h2>
          <div className="flex flex-wrap nl2 nr2">
            <div className="w-100 w-third-l pa2">
              <div className="bg-near-white pa4 br2 h-100">
                <h3 className="f4 mt0 mb2">Clean Work Areas</h3>
                <p className="lh-copy mv0">
                  We protect surfaces, manage debris daily, and leave your space orderly throughout construction.
                </p>
              </div>
            </div>
            <div className="w-100 w-third-l pa2">
              <div className="bg-near-white pa4 br2 h-100">
                <h3 className="f4 mt0 mb2">Straightforward Communication</h3>
                <p className="lh-copy mv0">
                  You receive clear updates on timeline, materials, and next steps so there are fewer surprises.
                </p>
              </div>
            </div>
            <div className="w-100 w-third-l pa2">
              <div className="bg-near-white pa4 br2 h-100">
                <h3 className="f4 mt0 mb2">Quality-Focused Execution</h3>
                <p className="lh-copy mv0">
                  Our team prioritizes durable workmanship and finish details that hold up over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lightest-blue dark-blue pa4 pa5-ns">
        <div className="mw8 center">
          <h2 className="tc f2 mt0 mb4">Frequently Asked Questions</h2>
          <div className="bg-white pa4 br2 mb3">
            <h3 className="f4 mt0 mb2">How long does a typical remodel take?</h3>
            <p className="mv0 lh-copy">
              Smaller projects can be completed in 1–2 weeks, while full kitchen and bathroom remodels
              usually range from 3–8 weeks depending on scope, materials, and permitting.
            </p>
          </div>
          <div className="bg-white pa4 br2 mb3">
            <h3 className="f4 mt0 mb2">Do you provide written estimates?</h3>
            <p className="mv0 lh-copy">
              Yes. Every estimate includes scope details, material assumptions, and timeline expectations
              so you can make decisions with confidence.
            </p>
          </div>
          <div className="bg-white pa4 br2">
            <h3 className="f4 mt0 mb2">What areas do you serve?</h3>
            <p className="mv0 lh-copy">
              We proudly serve homeowners in Bristol (TN & VA), Johnson City, Kingsport, and nearby
              Tri-Cities communities.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-dark-blue gold pa4 pa5-ns tc">
        <div className="mw7 center">
          <h2 className="f2 mt0 mb3">Request Your Free Estimate</h2>
          <p className="f5 lh-copy mt0 mb4">
            Tell us about your project and timeline. We’ll follow up with next steps and a straightforward,
            no-pressure estimate.
          </p>
          <div className="flex flex-column flex-row-ns justify-center items-center">
            <a
              href="tel:14232922511"
              className="bg-gold dark-blue pa3 ph4 br2 fw6 no-underline mr3-ns mb3 mb0-ns"
            >
              Call (423) 292-2511
            </a>
            <a
              href="mailto:estimates@hendersonconstruction.co"
              className="ba b--gold gold pa3 ph4 br2 fw6 no-underline"
            >
              Email Our Team
            </a>
          </div>
        </div>
      </section>

      <section className="bg-near-black white pa3 pa4-ns tc">
        <p className="f5 fw6 mv2">Proudly Serving the Tri-Cities Since 2010</p>
        <p className="mv2 o-80">Bristol, TN & VA • Johnson City • Kingsport • Surrounding Areas</p>
      </section>

      <footer className="tc pa3 bg-black-90 white">
        <p className="f6">
          © {new Date().getFullYear()} Henderson Construction. Licensed & Insured. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;