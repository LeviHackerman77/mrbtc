import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import mravatar from "./assets/mravatar.png"
import { useState, useEffect } from "react"
import { Medal,Trophy } from "lucide-react"

export default function Leaderboard() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 22,
    hours: 18,
    minutes: 8,
    seconds: 53,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const top3 = [
    {
      place: 2,
      color: "from-[#e0e0e0] to-[#a0a0a0]",
      border: "border-[#c0c0c0]",
      user: "***eric81",
      wagered: "$ 234,217.00",
      prize: "$ 6000",
    },
    {
      place: 1,
      color: "from-[#ffd700] to-[#b8860b]",
      border: "border-[#ffdf00]",
      user: "***amplios88",
      wagered: "$ 570,207.10",
      prize: "$ 12000",
    },
    {
      place: 3,
      color: "from-[#cd7f32] to-[#8b4513]",
      border: "border-[#d2691e]",
      user: "***billingdogs9",
      wagered: "$ 209,052.53",
      prize: "$ 4000",
    },
  ]

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 flex flex-col items-center justify-center bg-gradient-to-br from-[#0d1821] via-[#14222e] to-[#203240]">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold text-orange-600 text-center  tracking-wide my-8">LEADERBOARD</h1>

        {/* Top 3 Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-12 mb-10 p-12">
          {top3.map((card, index) => (
            <div key={index} className="relative pt-6 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b ${card.color} flex items-center justify-center font-semibold ${card.border} shadow-md`}>
                  {card.place}
                </div>
              </div>
              <div className={`w-64 sm:w-72 md:w-80 ${index === 1 ? 'h-[380px]' : 'h-[340px]'} bg-gradient-to-b from-[#1e2a36] to-[#172330] rounded-2xl shadow-2xl`}>
              <div className="p-5 text-center">
                <div className="flex flex-col items-center space-y-10">
                    <Avatar className='w-24 h-24'>
                    <AvatarImage src={mravatar}/>
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-md sm:text-lg font-bold ">{card.user}</div>
                    <div>
                    <div className="text-sm sm:text-lg ">{card.wagered}</div>
                    <div className="text-xs text-gray-500">Wagered</div>
                    </div>
                   
                </div>
                </div>

                <div className="py-3 text-center">
                  <div className="text-sm sm:text-xl font-bold">{card.prize}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timer */}
        <div className="text-center mb-6">
          <div className="text-xs text-gray-500 mb-2">Time Remaining</div>
          <div className="flex justify-center gap-2 sm:gap-4">
            {[timeRemaining.days, timeRemaining.hours, timeRemaining.minutes, timeRemaining.seconds].map((val, idx) => (
              <div key={idx} className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0e1820] rounded-md flex items-center justify-center shadow-md">
                <div className="text-base sm:text-xl font-bold">{val}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 sm:gap-4 mt-1">
            {["Days", "Hours", "Mins", "Secs"].map((label, i) => (
              <div key={i} className="w-10 sm:w-12 text-center text-xs text-gray-500">
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Timestamp */}
        <div className="text-center mb-8 text-xs text-gray-500">
          This Leaderboard finishes at (end of month date) 23:59 UTC
        </div>

        {/* Table */}
        <div className="bg-[#203240] rounded-lg overflow-x-auto mb-4 p-4 sm:p-6">
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr className="text-gray-500 border-b border-[#243442]">
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">User</th>
                <th className="py-3 px-4 text-right">Wagered</th>
                <th className="py-3 px-4 text-right">Prize</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["4", "***yoop", "$ 185,249.76", "$ 2,000"],
                ["5", "***ecorps", "$ 105,984.60", "$ 2,000"],
                ["6", "***ttz", "$ 80,272.70", "$ 930"],
                ["7", "***iga", "$ 80,000.00", "$ 830"],
                ["8", "***blyntz", "$ 57,900.24", "$ 730"],
                ["9", "***brave6", "$ 53,728.16", "$ 630"],
                ["10", "***dynamite20", "$ 51,147.41", "$ 530"],
                ["11", "***gPanda", "$ 44,567.58", "$ 430"],
                ["12", "***enPO", "$ 28,714.59", "$ 380"],
                ["13", "***peBun", "$ 25,015.94", "$ 330"],
                ["14", "***atar", "$ 22,735.99", "$ 300"],
                ["15", "***thra", "$ 21,858.02", "$ 270"],
              ].map(([rank, user, wagered, prize], i) => (
                <tr key={i} className={`${i % 2 === 0 ? "bg-[#14222e]" : ""} border-b border-[#243442]`}>
                  <td className="py-2 px-3">{rank}</td>
                  <td className="py-2 px-3">{user}</td>
                  <td className="py-2 px-3 text-right">{wagered}</td>
                  <td className="py-2 px-3 text-right">{prize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
