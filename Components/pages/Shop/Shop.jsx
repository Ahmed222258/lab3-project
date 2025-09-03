
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from './Sidebar';

export default function Shop() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shop</h1>

      <section className="flex gap-6">
        <Sidebar/>
 

        <section className="flex-1 bg-white p-6 rounded-lg shadow">
          <Outlet />
        </section>
      </section>
    </div>
  );
}
