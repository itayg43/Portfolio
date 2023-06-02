import { Experience } from "../interfaces";

import ChipList from "./ChipList";

interface Props {
  items: Experience[];
}

const ExperienceList = ({ items }: Props) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item._id}
          className="mt-2 max-w-2xl p-4 border-2 border-solid border-black rounded"
        >
          {/** title & company */}
          <div>
            <span className="font-semibold">{item.title}</span>

            <span> / {item.company}</span>
          </div>

          {/** period */}
          <span className="text-gray-500 mt-2">{item.period}</span>

          {/** description */}
          <p className="mt-2">{item.description}</p>

          {/** stack */}
          <div className="flex flex-col mt-4 space-y-2">
            <h2 className="font-semibold">Skills</h2>

            {/** frontend */}
            {item.stack.frontend && <ChipList items={item.stack.frontend} />}

            {/** backend */}
            {item.stack.backend && <ChipList items={item.stack.backend} />}
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceList;
