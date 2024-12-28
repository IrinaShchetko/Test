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
    <section className='app'>
      <div className='tournament'>
        <h1 className='title'>GAME</h1>
        <Spinner />
        <PlayerInfo />
        <Loader progress={45} />
        <div className='app__tournament-list'>
          {tournaments.map(tournament => (
            <TournamentItem key={tournament.id} {...tournament} />
          ))}
        </div>
      </div>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
