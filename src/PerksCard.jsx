import { DollarSign, Trophy, Lock } from "lucide-react";
import trophy from "./assets/trophy.png"
import alp from "./assets/alp2.png"
import bill from "./assets/bill.png"

const perks = [
  {
    icon: <img className="w-10 h-10 object-contain" src={alp} alt="" />,
    title: "Alphaverse Access",
    description: "Unlock a private betting system with elite insights and secret strategies.",
  },

  {
    
    icon: <img className="w-10 h-10 object-contain" src={bill} alt="" />,
    title: "10% Rakeback",
    description: "Get 10% back on every bet, win or lose — instantly credited.",
  },
  {
    icon: <img className="w-10 h-10 object-contain" src={trophy} alt="" />,
    title: "Wager Leaderboard",
    description: "Compete weekly for exclusive rewards and leaderboard bragging rights.",
  },
];

export default function PerksCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10 md:px-8">
      {perks.map((perk, index) => (
        <div
          key={index}
          className="relative group perspective-1000 transition-transform duration-300 ease-in-out"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a4456]/30 to-[#345672]/30 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-all duration-500 animate-pulse" />

          <div
            className={`relative bg-[#203240] rounded-2xl p-6 sm:p-8 shadow-xl
              transform transition-all duration-500 ease-out
              hover:-translate-y-2 hover:translate-x-1
              group-hover:shadow-2xl group-hover:shadow-[#2a4456]/20
              backdrop-blur-lg`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div
                className="bg-[#14222e] p-2 rounded-xl shadow-lg 
                transform transition-all duration-500 ease-out
                group-hover:scale-110 group-hover:rotate-3
                hover:shadow-xl hover:shadow-[#2a4456]/30"
              >
                {perk.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-200 group-hover:scale-105 transition-all duration-300">
                {perk.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                {perk.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
