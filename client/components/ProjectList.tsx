import Link from "next/link";

interface Props {
  items: Project[];
}

const ProjectList = ({ items }: Props) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={item._id}
          className="max-w-2xl p-4 border-2 border-solid border-black rounded hover:bg-slate-100 transition ease-in-out duration-500 cursor-pointer"
        >
          <Link href={`/projects/${item.slug}`}>
            <span className="font-semibold">
              {index + 1}. {item.name}
            </span>

            <p className="mt-2 line-clamp-3">{item.description}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProjectList;
