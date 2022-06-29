import { FaChevronDown } from "react-icons/fa";

const AccordionItem = ({ item, idx, handleToggle, selected }) => {
  return (
    <div key={idx} className="border-2 border-green rounded flex-1">
      <div
        onClick={() => handleToggle(idx)}
        className={
          selected === idx
            ? "flex items-center justify-between gap-10 p-5 bg-green text-white cursor-pointer duration-150 ease-in"
            : "flex items-center justify-between gap-10 p-5 bg-white cursor-pointer duration-150 ease-in"
        }
      >
        <h3 className="font-bold text-sm sm:whitespace-nowrap md:text-lg">
          {item.question}
        </h3>
        <FaChevronDown
          className={
            selected === idx
              ? "text-white rotate-180 duration-150 ease-in"
              : "text-green duration-150 ease-in"
          }
        />
      </div>
      <div>
        <p
          className={selected === idx ? "p-5 text-black opacity-80" : "hidden"}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
