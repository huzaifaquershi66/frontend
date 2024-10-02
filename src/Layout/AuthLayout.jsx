import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
const AuthLayout = () => {
  return (
    <section className="w-full sm:w-96 md:w-8/12 lg:w-6/12 xl:w-1/4 mx-auto p-4 ">
      <main className="my-10 sm:my-20">
        <div>
          <Link to="/" className="text-base font-bold flex items-center gap-2">
            <FaChevronLeft />
            <span>Go Back</span>
          </Link>
        </div>
        <Outlet />
      </main>
    </section>
  );
};

export default AuthLayout;
