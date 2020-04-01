import React, { useState, useEffect } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core'
import Panel from './Panel'
import { PanelChangeProps } from './Types'
import { Emitter_, PanelEvents, EmitterEvents } from './emitter'
import ReservationStateMachine from './ReservationStateMachine'
import { getComponent } from './ReservationPanels'

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

const PanelWizard = () => {
  const classes = useStyles()
  const StateMachine = ReservationStateMachine()
  const { panels, activePanel, opened, setActivePanel, } = StateMachine
  const [panelState, setPanelState] = useState(panels)

  const getInd = (id: string) => {
    const i = panels.findIndex(r => r.title === id)
    return i + 1
  }
  //init set
  useEffect(() => {
    Emitter_.on(EmitterEvents.PanelEvent, panelRequest)
  }, [])
  const panelRequest = (data: PanelChangeProps) => {
    const i = getInd(data.id)
    if (data.type === PanelEvents.SetActive) {
      setActivePanel(i)
    } else if (data.type === PanelEvents.SetInactive) {
      setActivePanel(-1)
    } else if (data.type === PanelEvents.Continue) {
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
      if (i >= getInd(p.title)) {
        if (hasErrors(p) || incomplete(p)) {
          errs.push(p.title)
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
  console.log("Panels", panels)
  return (
    <div className={classes.root}>
      {panelState.map((p: any) => <Panel key={p.title}
        title={p.title}
        open={Boolean(getInd(p.title) === activePanel || opened.includes(p.title))}
        dimmed={p.dimmed}
        completed={p.completed}
        continueVisible={p.continueVisible && panels.length !== getInd(p.title)}
        continueDimmed={p.continueDimmed}
        error={p.error || checkForAnyErrors(p.title)}
        component={getComponent(p.title)}
        id={p.title}
        icon={p.icon}
      />)}
    </div>
  )
}

export default PanelWizard