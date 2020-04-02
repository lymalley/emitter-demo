import React, { useState, useEffect } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core'
import Panel from './Panel'
import { PanelChangeProps } from './Types'
import { Emitter_, PanelEvents, EmitterEvents } from './emitter'
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
interface PanelWizardProps {
  stateMachine: () => {
    panels: any;
    activePanel: number;
    setActivePanel: React.Dispatch<React.SetStateAction<number>>;
    opened: string[];
  }
}
const PanelWizard = (props: PanelWizardProps) => {
  const classes = useStyles()
  const StateMachine = props.stateMachine()
  const { panels, activePanel, opened, setActivePanel, } = StateMachine
  const [panelState, setPanelState] = useState(panels)

  const getInd = (id: string) => {
    const i = panels.findIndex((r: any) => r.id === id)
    return i
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
    panels.forEach((p: any) => {
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
        continueVisible={p.continueVisible && panels.length !== getInd(p.id)}
        continueDimmed={p.continueDimmed}
        error={p.error || checkForAnyErrors(p.id)}
        component={p.component}
        id={p.title}
        icon={p.icon}
      />)}
    </div>
  )
}

export default PanelWizard