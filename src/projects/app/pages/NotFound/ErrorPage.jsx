import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h2 className="text-9xl text-center">OOPS!!</h2>
      <h2 className="text-9xl text-center"> {error.status || error.message}</h2>


    </div>
  );
};

export default ErrorPage;
