export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white mt-12 py-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Filters</h4>
          <p>All</p>
          <p>Electronics</p>
          <p>Clothing</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">About Us</h4>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-3">
            <span>🌐</span>
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
