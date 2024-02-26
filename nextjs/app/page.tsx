import Link from "next/link";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

export default async function Home() {
  const movies = await getMovies();

  return (
    <div>
      <div>
        {movies.map((item: any) => {
          return (
            <li key={item.id}>
              <Link href={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}
