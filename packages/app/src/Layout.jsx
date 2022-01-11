import { Outlet } from 'react-router-dom';

const Layout = () => (
  <main>
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-0">
      <div className="border-1 border-gray-400 rounded-lg px-10 py-10 bg-gray-100 shadow">
        <Outlet />
      </div>
    </div>
  </main>
);

export default Layout;
