
import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Shop() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shop</h1>

      <section className="flex gap-6">
        <aside className="w-48 bg-gray-100 p-4 rounded-lg shadow">
          <nav className="flex flex-col space-y-3">
            <Link
              to=""
              className="px-3 py-2 rounded hover:bg-blue-500 hover:text-white transition"
            >
              All Products
            </Link>
            <Link
              to="Men"
              className="px-3 py-2 rounded hover:bg-blue-500 hover:text-white transition"
            >
              Men
            </Link>
            <Link
              to="Women"
              className="px-3 py-2 rounded hover:bg-blue-500 hover:text-white transition"
            >
              Women
            </Link>
          </nav>
        </aside>

        <section className="flex-1 bg-white p-6 rounded-lg shadow">
          <Outlet />
        </section>
      </section>
    </div>
  );
}
