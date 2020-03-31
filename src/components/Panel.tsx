import React, { useState, useEffect, ReactNode, ReactElement } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {
  makeStyles,
  Theme,
  createStyles,
  ExpansionPanelActions
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import CheckIcon from "@material-ui/icons/Check";
import ErrorIcon from "@material-ui/icons/Error"
import { Emitter_ } from './PanelWizard'
export const panelEmitter = {
  continue: (id: string) => Emitter_.emit("PanelEvent", { type: "continue", id: id }),
  setActive: (id: string) => Emitter_.emit("PanelEvent", { type: "setActive", id: id })
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      width: '100%',
      position: "relative"
    },
    title: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      display: "inline-block"
    },
    icon: {
      position: "relative",
      display: "inline-block",
      paddingLeft: "1em",
      paddingRight: "1em",
      verticalAlign: "middle"
    },
    checkIcon: {
      position: "absolute",
      color: theme.palette.success.main,
      top: "0",
      left: "1em"
    },
    errorIcon: {
      position: "absolute",
      color: theme.palette.error.main,
      top: "0",
      left: "1em"
    },
  })
)
export interface PanelChangeProps {
  type: string
  id: string
}
export interface PanelProps {
  title: string | ReactElement
  open: boolean
  dimmed?: boolean
  completed?: boolean
  continueVisable?: boolean
  continueDimmed?: boolean
  error?: boolean
  component: any
  id: string
  icon?: ReactNode
}
const Panel = (props: PanelProps) => {
  const classes = useStyles()
  const [panelState, setPanelState] = useState<PanelProps>(props)
  //init set
  useEffect(() => {
    setPanelState(props)
  }, [])
  //on update
  useEffect(() => {
    if (panelState !== props) {
      setPanelState(props)
    }
  }, [panelState, props])

  return (
    <ExpansionPanel id={props.id} expanded={props.open} disabled={props.dimmed}
      onChange={() => panelEmitter.setActive(props.id)}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Box className={classes.heading}>
          <Box className={classes.icon}>
            {props.icon ? props.icon : null}
            {props.completed ? <CheckIcon className={classes.checkIcon} /> : props.error ? <ErrorIcon className={classes.errorIcon} /> : null}
          </Box>
          <Typography className={classes.title}>{props.title}</Typography>
        </Box>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{props.component}</ExpansionPanelDetails>
      <ExpansionPanelActions>
        {props.continueVisable ? (
          <Button
            disabled={props.continueDimmed}
            variant="contained"
            color="primary"
            onClick={() => panelEmitter.continue(props.id)}
            size="small"
          >
            Continue
          </Button>
        ) : null}
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}

export default Panel
