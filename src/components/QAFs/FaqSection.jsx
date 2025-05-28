import React, { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Conversion Rate Optimisation?",
      answer:
        "Conversion Rate Optimization (CRO) is the process of refining a website to better convert visitors into customers or subscribers. Essentially, it involves boosting the percentage of visitors who complete a specific action—whether that’s making a purchase, signing up for a newsletter, or downloading a file. By carefully analyzing user behavior and employing techniques such as A/B testing, design adjustments, and improved navigation, businesses can create a more engaging and effective online experience.",
    },
    {
      question: "How can a CRO agency help your business?",
      answer:
        "A Conversion Rate Optimization (CRO) agency is dedicated to understanding how visitors interact with your website and using that knowledge to drive better results. These agencies delve deep into user behavior analytics to uncover patterns and identify friction points in the user journey. By running A/B tests—comparing different versions of a page or element—they can pinpoint which design or content variant produces a higher conversion rate. Moreover, the team works on optimizing site layouts, rearranging elements and streamlining navigation to ensure that visitors have a seamless, intuitive experience.",
    },
    {
      question: "What services do you offer as a CRO agency?",
      answer:
        "The range of services offered by a professional CRO firm is designed to comprehensively enhance a website’s performance. One of the foundational services is an extensive website audit, where every component—from design elements to content structure and technical performance—is scrutinized to identify areas for improvement. In addition, these firms conduct systematic A/B testing to evaluate different versions of web pages, ensuring that the most effective elements are employed to boost user engagement and conversion. ",
    },
    {
      question: "How long does it take to see results from CRO efforts?",
      answer:
        "The outcomes of Conversion Rate Optimization initiatives can vary significantly from one project to another, yet many businesses observe noticeable improvements within a relatively short timeframe. In the initial weeks following the implementation of CRO strategies, even minor tweaks—such as adjustments to call-to-action buttons or minor layout changes—can result in measurable increases in conversion rates. These early signs are encouraging and provide valuable insights that can be further refined in subsequent phases.",
    },
    {
      question: "Do I need to redesign my entire website for CRO?",
      answer:
        "It is a common misconception that Conversion Rate Optimization requires a complete overhaul of your website. In reality, CRO is more about making calculated, incremental changes rather than embarking on a full redesign. The process focuses on using detailed data and user feedback to identify specific areas where small improvements can yield significant benefits.",
    },
    {
      question: "Will CRO impact my website's SEO?",
      answer:
        "When considering the benefits of Conversion Rate Optimization, it is clear that the impact is overwhelmingly positive. A well-optimized website does more than just improve conversion metrics—it also creates a superior user experience that resonates with visitors. By ensuring that the site is easy to navigate, visually appealing, and responsive to user needs, CRO helps in reducing bounce rates and encouraging longer site visits. ",
    },
    {
      question: "Can you integrate CRO with my existing marketing strategies?",
      answer:
        "Integrating Conversion Rate Optimization with your existing digital marketing strategy is a highly effective approach that can amplify overall business results. Rather than treating CRO as an isolated initiative, incorporating its principles into your broader marketing efforts creates a more cohesive and powerful digital strategy. By combining data-driven optimization techniques with ongoing digital campaigns—such as content marketing, social media outreach, and targeted advertising—you ensure that every element of your online presence is working in tandem to drive conversions.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq">
    <div className="container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((item, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleAccordion(index)}>
            <span>{item.question}</span>
            <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
          </button>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
      </div>
    </section>
  );
};

export default FaqSection;
