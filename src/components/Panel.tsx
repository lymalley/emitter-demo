import React, { useState, useEffect } from 'react'
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
import { panelEmitter } from './emitter'
import { PanelProps } from './Types'
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
  const handleChange = (id: string) => {
    if (props.open) {
      panelEmitter.setInactive(id)
    } else {
      panelEmitter.setActive(id)
    }
  }
  return (
    <ExpansionPanel id={props.id} expanded={props.open} disabled={props.dimmed}
      onChange={() => handleChange(props.id)}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        {props.customSummary ? props.customSummary :
          <Box className={classes.heading}>
            <Box className={classes.icon}>
              {props.icon ? props.icon : null}
              {props.completed ? <CheckIcon className={classes.checkIcon} /> : props.error ? <ErrorIcon className={classes.errorIcon} /> : null}
            </Box>
            <Typography className={classes.title}>{props.title}</Typography>
          </Box>}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{props.component}</ExpansionPanelDetails>
      <ExpansionPanelActions>
        {props.continueVisible ? (
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
