import { Link } from "react-router-dom";
import moment from "moment";

const Card = ({ title, overview, date, poster, id_movie }) => {
  return (
    <Link
      to={`/movies/${id_movie}`}
      className="group relative block bg-black rounded-xl h-[20rem] lg:h-[25rem] shadow-2xl shadow-white/40"
    >
      <img
        alt={title}
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster}`}
        className="absolute inset-0 max-h-full w-full object-cover opacity-80 transition-all group-hover:opacity-30 rounded-xl"
      />
      <div className="relative p-[5%] rounded-xl flex flex-col justify-between h-full">
        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex flex-col justify-between gap-4">
          <p className="text-base font-bold text-white text-justify">
            {moment(date).format("DD MMMM YYYY")}
          </p>
          <p className="text-sm text-white line-clamp-[10]">{overview}</p>
        </div>
        <div className="rounded-xl bg-black/60 lg:mx-10">
          <span className="text-base font-bold tracking-wide text-white line-clamp-2 text-center">
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
