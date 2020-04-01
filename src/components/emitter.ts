import EventEmitter from 'eventemitter3'

export const Emitter_ = new EventEmitter()
export enum EmitterEvents {
  PanelEvent = 'PanelEvent'
}
export enum PanelEvents {
  Continue = 'Continue',
  SetActive = 'SetActive',
  SetInactive = 'SetInactive'
}
export const panelEmitter = {
  continue: (id: string) =>
    Emitter_.emit(EmitterEvents.PanelEvent, {
      type: PanelEvents.Continue,
      id: id
    }),
  setActive: (id: string) =>
    Emitter_.emit(EmitterEvents.PanelEvent, {
      type: PanelEvents.SetActive,
      id: id
    }),
  setInactive: (id: string) =>
    Emitter_.emit(EmitterEvents.PanelEvent, {
      type: PanelEvents.SetInactive,
      id: id
    })
}
