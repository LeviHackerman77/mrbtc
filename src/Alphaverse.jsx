"use client"

import { useEffect, useState } from "react"
import alpsc from "./assets/alpsc.png"
import { Coins, Trophy, Target, TrendingUp, Zap, Sparkles, BarChartIcon as ChartBar, Rocket } from "lucide-react"
import btc from './assets/btc.png'
import trx from './assets/trx.png'
import eth from './assets/eth.png'

export default function Alphaverse() {
  const [currentWord, setCurrentWord] = useState("Faster")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const words = ["Faster", "Better", "Smarter"]
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      // Handle typing effect
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1))

        // If word is complete, start deleting after a pause
        if (text === currentWord) {
          setTypingSpeed(2000) // Pause at complete word
          setIsDeleting(true)
        } else {
          setTypingSpeed(150) // Normal typing speed
        }
      } else {
        setText(currentWord.substring(0, text.length - 1))

        // If deletion is complete, move to next word
        if (text === "") {
          setIsDeleting(false)
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
          setCurrentWord(words[(wordIndex + 1) % words.length])
          setTypingSpeed(500) // Pause before typing next word
        } else {
          setTypingSpeed(100) // Deletion speed
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, currentWord, wordIndex, words, typingSpeed])

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 flex flex-col items-center justify-center bg-gradient-to-br from-[#0d1821] via-[#14222e] to-[#203240]">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 rounded-3xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-sans text-white tracking-tight">
            Bet <span className="inline-block min-w-[180px] sm:min-w-[300px]">{text}</span>
            <span className="inline-block animate-blink">|</span>
            <br />
            <span className="mt-4 block relative">
              with{" "}
              <span className="text-orange-600 bg-clip-text relative">
                ALPHAVERSE
                {/* Floating Icons */}
                <div className="absolute inset-0 -m-8 pointer-events-none overflow-hidden">
               
                  <div
                    className="absolute text-amber-500/70 w-10 h-10 animate-float-2"
                    style={{ top: "20%", right: "5%" }}>
                        <img src={btc} alt="" />
                        </div>
         
                  <div
                    className="absolute text-purple-500/70 w-8 h-8 animate-float-3"
                    style={{ top: "40%", left: "95%" }}> <img src={eth} alt="" /> </div>
                  
                 
                </div>
              </span>
            </span>
          </h1>
        </div>
        <div className=" text-center">
            <p> Alphaverse is a cutting-edge betting system, engineered with precision to outsmart the casino and tilt the odds in your favor </p>
          <h2 className="text-3xl font-bold text-white mb-4 mt-8">Get Started Today !</h2>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752c4] text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                  fill="currentColor"
                />
              </svg>
              Join our Discord
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                  fill="currentColor"
                />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-12 transform hover:scale-[1.01] transition-all duration-300">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.2)]">
            <img className="w-full h-auto rounded-3xl" src={alpsc || "/placeholder.svg"} alt="Alphaverse Platform" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Project Description Section */}
   {/* Call to Action Section */}
  
      </div>
    </div>
  )
}
