import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import { useGetDetailMovieQuery } from "src/service/api";

import Navbar from "src/components/Molecule/Navbar";
import Footer from "src/components/Molecule/Footer";
import Loading from "src/components/Atom/Loading";
import Button from "src/components/Atom/Button";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetDetailMovieQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return alert(error.message);
  }

  return (
    <>
      <Navbar />
      <section
        id="hero-movies"
        className="min-h-[100vh] w-full relative text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.50)), url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <div className="flex flex-col items-center gap-5 md:flex-row py-24 px-16 md:p-32">
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`}
            alt={data.title}
            className="rounded-xl shadow-xl"
          />
          <div className="flex items-center md:items-start flex-col gap-10 -mx-8 text-justify md:mx-0">
            <div className="flex items-center md:items-start flex-col">
              <h1 className="font-semibold text-2xl md:text-4xl">
                {data.title}
              </h1>
              <div className="flex items-center gap-2 text-xs">
                <span className="outline outline-1 p-[1px] text-sm">
                  {data.production_companies[0].origin_country}
                </span>
                &#8226; {data.release_date} &#8226; {data.runtime} minutes
              </div>
            </div>
            <p>{data.overview}</p>
            <div className="flex justify-center">
              <Button
                className="w-40 h-12 flex justify-center items-center"
                text={<FaHeart size={25}/>}
              />
            </div>
          </div>
        </div>
        <div className="italic md:text-lg text-slate-300 font-medium text-center w-full">
          {data.tagline}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MovieDetailPage;
