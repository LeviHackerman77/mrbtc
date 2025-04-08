export default function Footer() {
    return (
      <footer className="bg-[#0d1821] py-12 px-4  ">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-orange-500">MRBTCGAMBLER</div>
              <p className="text-gray-300">© 2025 All Rights Reserved</p>
            
            </div>
  
            {/* About Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">GambleAware</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
  
            {/* Explore Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Explore</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Leaderboard</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Alphaverse</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Seed Analyzer</a></li>
              </ul>
            </div>
  
            {/* Community Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Kick</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">YouTube</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">X</a></li>
              </ul>
            </div>
          </div>
  
          {/* Responsible Gambling Section */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400 text-sm">
            <h4 className="text-white text-lg font-medium mb-2">Responsible Gambling</h4>
            <p className="mb-4">
online casino support, as well as using responsible gambling tools which are provided at the link below.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition">Gambling Therapy</a>
          </div>
        </div>
      </footer>
    );
  }