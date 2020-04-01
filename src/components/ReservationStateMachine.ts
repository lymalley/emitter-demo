import { useEffect, useState } from 'react'
import { getPanelInfo } from './ReservationPanels'
import { linkStore } from '../emitter/store'
//send all reservation state down
const ReservationStateMachine = () => {
  //pass in the reservation state obj
  const [state, setState] = useState({ eventId: -1 })
  const [activePanel, setActivePanel] = useState(1)
  //to be used if mult need to be open at once
  const [opened, setOpen] = useState<string[]>([])
  const appState = linkStore
  const params = {
    ticketRequiredFields: appState.currentEvent.ticketRequiredFields,
    questionGroupId: appState.currentEvent.questionGroupId,
    questions: appState.questions,
    addOnsLength: appState.currentEvent.addOns.length
  }
  const panels_ = getPanelInfo(params)
  const [panels, setPanels] = useState(panels_)

  useEffect(() => {
    if (appState.currentEvent.eventId !== state.eventId) {
      setState({ ...state, eventId: appState.currentEvent.eventId })
      //update all State
      GetPanels()
    }
  }, [appState.currentEvent, state.eventId])
  const GetPanels = () => {
    //pass back only the nec panels,
    panels.forEach((p: any) => {
      //maybe set errors and/or completed here or if mult need to be open at once push in open
    })
  }
  return { panels, activePanel, setActivePanel, opened }
}

export default ReservationStateMachine
