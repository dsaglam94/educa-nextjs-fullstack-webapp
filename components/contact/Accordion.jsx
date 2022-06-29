import faqData from "../../faqData";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (idx) => {
    if (selected === idx) {
      return setSelected(null);
    }

    setSelected(idx);
  };

  return (
    <section className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto duration-300 ease-in my-20">
      <h2 className="text-2xl font-bold py-10 md:text-3xl lg:text-4xl text-center">
        Frequently Asked Questions
      </h2>
      <div className="flex items-start flex-wrap gap-10">
        {faqData.map((item, idx) => (
          <AccordionItem
            item={item}
            idx={idx}
            handleToggle={toggle}
            selected={selected}
          />
        ))}
      </div>
    </section>
  );
};

export default Accordion;
