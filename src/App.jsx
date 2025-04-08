
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Appbar from './Appbar'
import Footer from './Footer'
import Home from './Home'
import Perks from './Perks'
import Alphaverse from './Alphaverse.jsx'
import Leaderboard from './Leaderboard'
import Soon from './CommingSoon'


function App() {


  return (
<Router>
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0d1821] via-[#14222e] to-[#203240] text-white">
    <Appbar />
    <main className="flex-grow">
  
        <Routes>
          <Route path='/' element={
            <div>
              <Home/>
              <Perks/>
            </div>
          } />
          <Route path='/alphaverse' element={<Alphaverse />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/vipcalculator' element={<Soon />} />
        </Routes>
    </main>
    <Footer />
  </div>
</Router>

  )
}

export default App
