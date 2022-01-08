import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;
  const { error, isPending, data } = useFetch(url);

  const [searchParams, setSearchParams] = URLSearchParams({})
  console.log(searchParams.get('recipe'))

  return (
    <div>
      <h2 className="page-title">recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p>Still searching...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}