export const categories = [
  {
    label: "Adventure",
    id: 12,
  },
  {
    label: "Action",
    id: 18,
  },
  {
    label: "Sci-Fi",
    id: 878,
  },
  {
    label: "Animation",
    id: 16,
  },
];

const Genres = ({ handleFilter, isActive, handlePage }) => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-2 md:gap-6 text-white">
        {categories.map((data) => (
          <li
            key={data.id}
            onClick={() => {
              handleFilter(data.id);
              handlePage(1);
            }}
            className={`text-lg font-bold px-1 lg:px-4 my-8 py-2 whitespace-nowrap cursor-pointer transition-all duration-150 ease-in-out h-10 ${
              isActive === data.id ? `border-b-4 border-red-flix` : null
            }`}
          >
            {data.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Genres;
