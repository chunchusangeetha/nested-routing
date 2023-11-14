import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Frontend() {
  return (
    <div>
      <h1>Frontend</h1>
      <Link to="Html">Html</Link>
      <Link to='Javascriptpage'>Javascriptpage</Link>
      <Outlet />
    </div>
  );
}
