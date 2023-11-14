import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Backend from './Backend';
import Frontend from './Frontend';

export default function About() {
  return (
    <div>
      <h1>About</h1>

      <Link to="Frontend">Frontend</Link>
      <Link to="Backend">Backend</Link>

      <Outlet />
    </div>
  );
}
