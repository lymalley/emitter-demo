import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import PanelWizard from './components/PanelWizard'
import { useDispatch } from 'react-redux'
import { INIT_LINK_STORE } from './emitter/store'
import ReservationStateMachine from './components/ReservationStateMachine'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch({ type: INIT_LINK_STORE })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PanelWizard stateMachine={ReservationStateMachine} />
      </header>
    </div>
  )
}

export default App
