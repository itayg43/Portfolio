interface Props {
  value: string;
}

const Chip = ({ value }: Props) => {
  return (
    <div className="flex justify-center items-center p-2 rounded-full text-gray-700 bg-gray-100 border border-gray-300 ">
      <div className="leading-none max-w-full flex-initial">{value}</div>
    </div>
  );
};

export default Chip;
