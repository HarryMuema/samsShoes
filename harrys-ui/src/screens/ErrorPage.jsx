import React from 'react'
import { useRouteError } from 'react-router-dom';
import errorGif from '../assets/coming-soon.gif';

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className="flex h-screen justify-center bg-[#CEE8F4] -mx-[20px] items-center">
      <div
        id='"error page'
        className="flex justify-center flex-col items-center"
      >
        <h1 className="text-xleb mb-[40px]">Oops!</h1>
        <img
          src={errorGif}
          alt="error"
          className="mb-[40px] rounded-[10px] md:w-[720px]"
        />
        <p className="flex text-center flex-col text-basem">
          An unexpected error has occured.
          <i className="text-sml italic">{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage