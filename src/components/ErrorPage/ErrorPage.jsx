import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div 
     className="ml-20 mt-10"
    id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
       <Link to="/">
       <button className="bg-amber-400 rounded">Go Back</button>
       </Link>
    </div>
  );
}