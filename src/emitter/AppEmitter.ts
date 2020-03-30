import Emitter from 'eventemitter3'

class AppEmitter_ {
  private static instance?: Emitter = undefined
  //
  emitter_: Emitter

  private constructor() {
    this.emitter_ = new Emitter()
  }

  static Instance() {
    if (AppEmitter_.instance === undefined) AppEmitter_.instance = new Emitter()
    return AppEmitter_.instance
  }
}

const AppEmitter: Emitter = AppEmitter_.Instance()
export default AppEmitter
