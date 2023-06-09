import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useGetMovieByGenreQuery } from "src/service/api";

import Loading from "src/components/Atom/Loading";
import { Genres, Card } from "src/components/Molecule";

const MovieGenres = () => {
  const [genre, setGenre] = useState(18);
  const [page, setPage] = useState(1);
  // const [movies, setMovies] = useState([]);

  const { data, isLoading, isError, isFetching, error } =
    useGetMovieByGenreQuery({
      genres: genre,
      pages: page,
    });

  useEffect(() => {
    page === 1 ? data?.results.slice(0, 20) : data?.results;
  }, [page, data]);

  // useEffect(() => {
  //   setMovies(data?.results);
  // }, [data]);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return alert(error.message);
  }

  return (
    <>
      <Genres handleFilter={setGenre} isActive={genre} handlePage={setPage} />
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-[1200px] mx-auto px-4 py-6">
        {data?.results.map((data, idx) => (
          <Card
            key={idx}
            id_movie={data.id}
            title={data.title}
            date={data.release_date}
            overview={data.overview}
            poster={data.poster_path}
          />
        ))}
      </section>
      {isFetching ? (
        <div className="h-24 flex justify-center items-center">
          <AiOutlineLoading3Quarters className="animate-spin text-grn text-5xl" />
        </div>
      ) : null}
    </>
  );
};

export default MovieGenres;
