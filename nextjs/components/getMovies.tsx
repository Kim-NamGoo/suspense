import { API_URL } from "../app/page";

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(`Fetching movies: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}