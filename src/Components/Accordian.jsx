import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

// Accordion Item Component
const AccordionItem = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-4 bg-[#3A3A3C] mb-4 rounded">
      <div
        className="flex items-center justify-between cursor-pointer text-[#2CC884]"
        onClick={() => setToggle(!toggle)}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        {toggle ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      <div className={`mt-4 ${toggle ? "block" : "hidden"}`}>
        <p className="text-white">{answer}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const sampleText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <div className="flex flex-col md:flex-row justify-between mt-8 md:space-x-8 px-4 max-w-7xl mx-auto">
      {/* Left - 2 accordions */}
      <div className="flex-1 ">
        <AccordionItem
          question="Lorem ipsum dolor sit amet, consectetur?"
          answer={sampleText}
        />
        <AccordionItem
          question="How do I track my order?"
          answer={sampleText}
        />
      </div>

      {/* Right - 3 accordions */}
      <div className="flex-1 mt-4 md:mt-0">
        <AccordionItem
          question="Lorem ipsum dolor sit amet, consectetur?"
          answer={sampleText}
        />
        <AccordionItem
          question="Lorem ipsum dolor sit amet, consectetur?"
          answer={sampleText}
        />
        <AccordionItem
          question="Lorem ipsum dolor sit amet, consectetur??"
          answer={sampleText}
        />
      </div>
    </div>
  );
};

export default Accordion;
