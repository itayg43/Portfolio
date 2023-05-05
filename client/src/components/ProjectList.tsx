import Link from "next/link";

interface Props {
  items: Project[];
}

const ProjectList = ({ items }: Props) => {
  return (
    <>
      {items.map((item, index) => (
        <Link href={`/projects/${item.slug}`}>
          <div
            key={item._id}
            className="mt-2 max-w-2xl p-4 border-2 border-solid border-black rounded hover:bg-slate-200 transition ease-in-out duration-500 cursor-pointer"
          >
            <span className="font-semibold">
              {index + 1}. {item.name}
            </span>

            <p className="mt-2 line-clamp-3">{item.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProjectList;
