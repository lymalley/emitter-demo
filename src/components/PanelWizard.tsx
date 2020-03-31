import React, { useState, useEffect } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core'
import Panel, { PanelChangeProps } from './Panel'
import EventEmitter from 'eventemitter3'
import ReservationStateMachine from './ReservationStateMachine'
export const Emitter_ = new EventEmitter()

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
  const { panels, activePanel, opened, setActivePanel, } = StateMachine
  const [panelState, setPanelState] = useState(panels)

  const getInd = (id: string) => {
    // const l=props.panels.length
    const i = panels.findIndex(r => r.id === id)
    return i + 1
  }
  //init set
  useEffect(() => {
    Emitter_.on("PanelEvent", panelRequest)
  }, [])
  const panelRequest = (data: PanelChangeProps) => {
    const i = getInd(data.id)
    if (data.type === "setActive") {
      setActivePanel(i)
    } else if (data.type === "continue") {
      setActivePanel(i + 1)
    }
  }
  const hasErrors = (panel: any) => {
    if (panel.hasOwnProperty("error")) {
      return panel.error
    } else {
      return false
    }
  }
  const incomplete = (panel: any) => {
    if (panel.hasOwnProperty("completed")) {
      return !panel.completed
    }
    else {
      return false
    }
  }
  //will implement this to stop acknowledge and error caused by later change
  const checkForAnyErrors = (id: string) => {
    const i = getInd(id)
    let errs = []
    panels.forEach(p => {
      if (i >= getInd(p.id)) {
        if (hasErrors(p) || incomplete(p)) {
          errs.push(p.id)
        }
      }
    })
    return errs.length > 0 ? true : false
  }

  //on update
  useEffect(() => {
    if (panelState !== panels) {
      setPanelState(panels)
    }

  }, [panelState, panels])
  return (
    <div className={classes.root}>
      {panelState.map((p: any) => <Panel key={p.id}
        title={p.title}
        open={Boolean(getInd(p.id) === activePanel || opened.includes(p.id))}
        dimmed={p.dimmed}
        completed={p.completed}
        continueVisable={p.continueVisable && panels.length !== getInd(p.id)}
        continueDimmed={p.continueDimmed}
        error={p.error || !checkForAnyErrors(p.id)}
        component={getComonent(p.id)}
        id={p.id}
        icon={p.icon}
      />)}
    </div>
  )
}

export default PanelWizard
