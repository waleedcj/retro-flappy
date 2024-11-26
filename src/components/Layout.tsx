import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-purple-600 text-white p-4">
        
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">FlapySol</Link>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/game" className="hover:text-yellow-300">Game</Link></li>
            <li><Link to="/scoreboard" className="hover:text-yellow-300">Scoreboard</Link></li>
            <li><Link to="/roadmap" className="hover:text-yellow-300">Roadmap</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-purple-600 text-white p-4 text-center">
        <p>&copy; 2024 FlapySol. All rights reserved.</p>
      </footer>
    </div>
  );
}

