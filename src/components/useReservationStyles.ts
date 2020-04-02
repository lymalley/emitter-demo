import {
  makeStyles,
  Theme,
  createStyles,
  ExpansionPanelActions
} from '@material-ui/core'

export const useReservationStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      // textTransform: "capitalize",
      width: '100%',
      margin: theme.spacing()
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    smLayout: {
      width: 'auto',
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0)
    },
    popup: {
      padding: 0
    },
    //   margin: {
    //     margin: theme.spacing()
    //   },
    // paper: {
    //   marginTop: theme.spacing(3),
    //   // marginBottom: theme.spacing(3),
    //   paddingLeft: theme.spacing(3),
    //   paddingRight: theme.spacing(3)
    //   // position: "absolute",
    // },
    stepper: {
      padding: `${theme.spacing(3)}px 0 ${theme.spacing(5)}px`
    },
    nextButton: {
      marginLeft: theme.spacing(2), //".75rem",
      marginRight: theme.spacing(2) //".75rem"
    },
    timeButton: {
      marginLeft: theme.spacing(20),
      marginRight: theme.spacing()
    },
    backButton: {
      marginLeft: theme.spacing(2), //".75rem", //theme.spacing(),
      marginRight: theme.spacing(2) //".75rem"
    },
    groupedButtons: {
      marginTop: theme.spacing(3)
    },
    checkBox: {
      width: 'auto',
      flex: '3 1 0px',
      marginLeft: theme.spacing(4),
      marginTop: theme.spacing(),
      paddingBottom: theme.spacing(2)
      // flexDirection: "row",
      // marginBottom: theme.spacing(2),
    },
    confirmationButtons: {
      marginRight: '.75rem'
    },
    ticketTable: {
      display: 'block'
    },
    expansionPanelDetailsFlex: {
      display: 'flex',
      justifyContent: 'center'
    },
    billingInfoGrid: {
      margin: 0
    },
    descriptionPanel: {
      width: 120,
      maxWidth: '100%',
      height: 80,
      maxHeight: '100%',
      overflow: 'hidden',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    metricButtons: {
      marginTop: '1.25rem'
    },
    ticketDescription: {
      marginTop: '.5rem',
      marginBottom: '-.75rem'
    },
    ticketDetail: {
      padding: '.1rem'
    },
    intlTelInput: {
      display: 'block',
      input: {
        border: '1px solid transparent',
        maxWidth: '100%',
        width: '100%'
      }
    },
    questionGrid: {
      display: 'flex',
      justifyContent: 'center'
    },
    paperHeading: {
      width: '100%',
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      padding: 10
    },
    restrictionBadge: {
      color: theme.palette.warning.main,
      top: `-${theme.spacing(2)}px`
    }
  })
)
