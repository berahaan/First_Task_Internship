import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-semibold">
            Prodigy Tech web
          </div>
          <div className="space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>

            <Link to="/login" className="text-gray-300 hover:text-white">
              Login
            </Link>
            <Link to="/register" className="text-gray-300 hover:text-white">
              sign-up/register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Home;
