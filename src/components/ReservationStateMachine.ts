import { useEffect, useState, useMemo } from 'react'
//send all reservation state down
const ReservationStateMachine = () => {
  //pass in the reservation state obj
  const [state, setState] = useState({ eventId: -1 })
  const [activePanel, setActivePanel] = useState(1)
  const [opened, setOpen] = useState<string[]>([])
  const currentEvent = { eventId: 1, addOns: [' '] } //useSelector to get from store and update with useEffect
  const panels_ = [
    {
      title: '',
      id: '',
      visable: true

      // open: activePanel===0 ||
    },
    {
      title: 'Event Add Ons',
      id: 'Event Add Ons',
      visable: Boolean(currentEvent.addOns.length > 0)
      //need added logic.  also can be done in panel wizard if prefer
      // dimmed?: logic
      // completed: true
      //continueVisable?: boolean
      // continueDimmed?: boolean
      /// error?: boolean
    }
  ]
  const [panels, setPanels] = useState(panels_)

  useEffect(() => {
    if (currentEvent.eventId !== state.eventId) {
      setState({ ...state, eventId: currentEvent.eventId })
      //update all State
      GetPanels()
      let p: any = []

      panels_.map(t => {
        if (t.visable) {
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
