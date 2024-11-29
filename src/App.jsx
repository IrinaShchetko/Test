import React from 'react'
import ReactDOM from 'react-dom/client'
import Spinner from './components/Spinner'
import PlayerInfo from './components/PlayerInfo'
import Loader from './components/Loader'
import TournamentItem from './components/TournamentItem'
import { tournaments } from './data/tournament'
import '../styles/App.less'

const App = () => {
  return (
    <div className='app'>
      <h1 className='title'>Poker</h1>
      <Spinner />
      <PlayerInfo />
      <Loader progress={45} />
      <div>
        {tournaments.map(tournament => (
          <TournamentItem key={tournament.id} {...tournament} />
        ))}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
