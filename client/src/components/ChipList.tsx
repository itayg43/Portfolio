import Chip from "./Chip";

interface Props {
  items: string[];
}

const ChipList = ({ items }: Props) => {
  return (
    <div className="flex space-x-2">
      {items.map((v, i) => (
        <Chip key={i} value={v} />
      ))}
    </div>
  );
};

export default ChipList;
