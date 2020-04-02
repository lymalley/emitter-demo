export interface PanelChangeProps {
  type: string
  id: string
}
export interface PanelProps {
  title: string
  open: boolean
  dimmed?: boolean
  completed?: boolean
  continueVisible?: boolean
  continueDimmed?: boolean
  error?: boolean
  component: any
  id: string
  icon?: any
  customSummary?: any
}
