import React from "react";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "How do I report a new issue?",
      answer:
        "Log in to your account, navigate to the 'Add Issue' page, fill out the details with a photo, and click submit. Our team will verify it shortly.",
    },
    {
      id: 2,
      question: "Is there any cost for reporting?",
      answer:
        "No, reporting an issue is completely free. However, you can contribute a small amount to support cleanup drives if you wish.",
    },
    {
      id: 3,
      question: "Can I track the status of my report?",
      answer:
        "Yes! You can see the real-time status (ongoing/resolved) of all your reports in the 'My Issues' section of your dashboard.",
    },
    {
      id: 4,
      question: "How can I become a volunteer?",
      answer:
        "You can reach out to us via the contact form or join any community cleanup event listed on our impact page.",
    },
  ];

  return (
    <section className="py-24 bg-base-200/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading (আপনার স্টাইল অনুযায়ী) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-200 relative inline-block">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Common Questions (FAQ)
            </span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-green-500 rounded-full"></span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* বাম পাশে ইমেজ বা আইকন */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-green-500/10 rounded-full flex items-center justify-center animate-pulse">
                <HelpCircle className="w-32 h-32 md:w-40 md:h-40 text-green-600" />
              </div>
              <div className="absolute top-0 -right-4 w-20 h-20 bg-blue-600/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 -left-4 w-20 h-20 bg-green-600/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* ডান পাশে Accordion */}
          <div className="lg:w-1/2 space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="collapse collapse-plus bg-base-100 dark:bg-gray-800 shadow-sm border border-base-300 dark:border-gray-700"
              >
                <input
                  type="radio"
                  name="my-accordion-3"
                  defaultChecked={item.id === 1}
                />
                <div className="collapse-title text-lg font-bold text-gray-800 dark:text-gray-100">
                  {item.question}
                </div>
                <div className="collapse-content text-gray-500 dark:text-gray-400">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
