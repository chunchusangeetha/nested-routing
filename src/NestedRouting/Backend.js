import React from 'react';
import { Link, Outlet } from 'react-router-dom';



export default function Backend() {
  return (
    <div>
      <h1>Backend</h1>
    
      <Link to="Python">Python</Link>

      <Outlet />
    </div>
  );
}
