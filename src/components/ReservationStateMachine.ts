import { useEffect, useState } from 'react'
import { getPanelInfo } from './ReservationPanels'
//send all reservation state down
const ReservationStateMachine = () => {
  //pass in the reservation state obj
  const [state, setState] = useState({ eventId: -1 })
  const [activePanel, setActivePanel] = useState(1)
  //to be used if mult need to be open at once
  const [opened, setOpen] = useState<string[]>([])
  const currentEvent = { eventId: 1, addOns: [' '] } //useSelector to get from store and update with useEffect

  const panels_ = getPanelInfo(currentEvent)
  const [panels, setPanels] = useState(panels_)

  useEffect(() => {
    if (currentEvent.eventId !== state.eventId) {
      setState({ ...state, eventId: currentEvent.eventId })
      //update all State
      GetPanels()
      let p: any = []

      panels_.map(t => {
        if (t.visible) {
          p.push(t)
        }
      })
      setPanels(p)
    }
  }, [currentEvent, state.eventId])
  const GetPanels = () => {
    //pass back only the nec panels,
    panels.forEach((p: any) => {
      //maybe set errors and/or completed here or if mult need to be open at once push in open
    })
  }
  return { panels, activePanel, setActivePanel, opened }
}

export default ReservationStateMachine
