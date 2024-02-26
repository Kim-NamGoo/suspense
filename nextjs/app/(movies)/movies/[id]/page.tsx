import { Suspense } from "react";
import MovieInfo from "@/components/getMovies";

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
    </div>
  );
}
