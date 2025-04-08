import logo from "./assets/logo.jpg";
import { Button } from "@/components/ui/button.jsx";
import { Trophy, House, Cog, ChartNetwork, Menu } from "lucide-react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function Appbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate()
  return (
    
    <div className="border-gray-600 bg-[#1d2c3a]">
      
      <div className="container max-w-6xl mx-auto px-4 rounded-2xl relative">
        <div className="flex h-16 items-center justify-between relative">
          {/* Logo on the left */}
          <div className="cursor-pointer flex items-center z-10" onClick={()=>{navigate('/')}}>
            <img
              src={logo}
              alt="Company Logo"
              className="h-10 w-10 rounded-full object-contain border-[1px] border-black"
            />
            <div className="text-2xl font-bold text-orange-600 ml-2 mt-1">MBG</div>
          </div>

          {/* Centered Desktop Navigation */}
          <nav className="absolute inset-0 hidden md:flex items-center justify-center space-x-1 font-mono">


          <Button onClick={()=>{navigate('/')}} variant="ghost" className="text-white hover:bg-[#2a3b4a] hover:text-white">
          
              <span>HOME</span>
            </Button>

     

            <Button 
              onClick={()=>{navigate('/leaderboard')}}
              variant="ghost" 
              className="relative text-white hover:bg-[#2a3b4a] hover:text-white group transition-all duration-300"
            >
              <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
              <Trophy className="h-4 w-4 text-orange-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative">LEADERBOARD</span>
            </Button>

            <Button onClick={()=>{navigate('/alphaverse')}} variant="ghost" className="text-white hover:bg-[#2a3b4a] hover:text-white">
          
              <span>ALPHAVERSE</span>
            </Button>

            <Button onClick={()=>{navigate('/vipcalculator')}} variant="ghost" className="text-white hover:bg-[#2a3b4a] hover:text-white">
            
              <span>VIP CALCULATOR</span>
            </Button>

            <Button onClick={()=>{navigate('/vipcalculator')}} variant="ghost" className="text-white hover:bg-[#2a3b4a] hover:text-white">
            
              <span>SEED ANALYZER</span>
            </Button>

          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-10">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#2a3b4a]">
              <House className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#2a3b4a]">
              <Trophy className="mr-2 h-4 w-4" />
              Leaderboard
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#2a3b4a]">
              <Cog className="mr-2 h-4 w-4" />
              Alphaverse
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#2a3b4a]">
              <ChartNetwork className="mr-2 h-4 w-4" />
              Seed Analyzer
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
