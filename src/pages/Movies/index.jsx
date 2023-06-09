import { useState } from "react";

import { useGetMovieByNameQuery } from "src/service/api";

import MovieGenres from "src/components/Organism/MovieGenres";
import FormSearch from "src/components/Molecule/Form/Search";
import Navbar from "src/components/Molecule/Navbar";
import Footer from "src/components/Molecule/Footer";
import Loading from "src/components/Atom/Loading";

const Movies = () => {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError, error } = useGetMovieByNameQuery(search);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return alert(error.message);
  }

  return (
    <>
      <div className="bg-herohome bg-cover">
        <div className="bg-gradient-to-b from-black/80 via-black/50 to-black/80 border-b-8 border-neutral-800">
          <Navbar />
          <div className="flex flex-col justify-center items-center h-screen gap-6">
            <p className="text-xl lg:text-3xl text-white font-black ">
              Tell me what you're going to watch...
            </p>
            <FormSearch
              placeholder={`What you want to watch?`}
              handleSearch={(e) => setSearch(e.target.value)}
              isSearch={search.length !== 0}
              data={data.results}
              noData={data.results.length === 0}
            />
          </div>
        </div>
      </div>
      <MovieGenres />
      <Footer />
    </>
  );
};

export default Movies;
