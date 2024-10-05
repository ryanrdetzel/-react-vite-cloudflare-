function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Add this wrapper */}
      <header className="bg-purple-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Home</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/app" className="hover:underline">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Main content */}
      <main className="flex-grow container mx-auto py-8">
        <p>This is where the main content goes for logged out experience</p>
      </main>
      {/* Footer */}
      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto text-center">
          <p>Footer</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
