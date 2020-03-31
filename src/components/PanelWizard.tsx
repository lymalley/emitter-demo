import React, { useState, useEffect } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core'
import Panel, { PanelProps, PanelChangeProps } from './Panel'
import Emitter from 'eventemitter3'
import ReservationStateMachine from './ReservationStateMachine'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  })
)
//components and icons can be passed here
const getComonent = (id: string) => {
  if (id === "") {
    return (<div>first panel</div>)
  } else if (id === "Event Add Ons") {
    return <div>Event Add Ons Panel</div>
  } else return <div>Component Not Found</div>
}
const PanelWizard = () => {
  const classes = useStyles()
  const StateMachine = ReservationStateMachine()
  const { emitter_, panels, activePanel, opened, setActivePanel } = StateMachine
  const [panelState, setPanelState] = useState(StateMachine)
  // const [emitter, setEmitter]=useState()

  const getInd = (id: string) => {
    // const l=props.panels.length
    const i = panels.findIndex(r => r.id === id)
    return i + 1
  }
  //init set
  useEffect(() => {
    // const em_=StateMachine.emitter_
    setPanelState(StateMachine)
    //setEmitter(em_)
    emitter_.on("PanelEvent", (data) => {
      const i = getInd(data.id)
      if (data.type === "setActive") {

        setActivePanel(i)
      } else if (data.type === "continue") {
        setActivePanel(i + 1)
      }
    })
  }, [])
  // useEffect(()=>{
  //  if (emitter_ !== undefined) { emitter_.on("PanelEvent", (data: any)=>{

  //   })}
  // }, [emitter])

  //on update
  useEffect(() => {
    if (panelState !== StateMachine) {
      setPanelState(StateMachine)
    }

  }, [panelState, StateMachine])
  return (
    <div className={classes.root}>
      {panelState.panels.map((p: any) => <Panel
        title={p.title}
        open={Boolean(getInd(p.id) === activePanel || opened.includes(p.id))}
        dimmed={p.dimmed}
        completed={p.completed}
        continueVisable={p.continueVisable && panels.length !== getInd(p.id)}
        continueDimmed={p.continueDimmed}
        error={p.error}
        component={getComonent(p.id)}
        id={p.id}
        icon={p.icon}
        emitter={StateMachine.emitter_}
      />)}
    </div>
  )
}

export default PanelWizard
