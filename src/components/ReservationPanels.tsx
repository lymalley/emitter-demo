import React from 'react'
import SampleComponent from './SampleComponent'
export enum PanelId {
    _ = "",
    EventAddOns = 'Event Add Ons',
    SampleComponent = "Sample Component"
}
export const getPanelInfo = (currentEvent: any) => {
    const panels_ = [
        {
            title: PanelId._,
            visible: true

            // open: activePanel===0 ||
        },
        {
            title: PanelId.EventAddOns,
            visible: Boolean(currentEvent.addOns.length > 0),
            continueVisible: true
            //need added logic.  also can be done in panel wizard if prefer
            // dimmed?: logic
            // completed: true
            //continueVisable?: boolean
            // continueDimmed?: boolean
            /// error?: boolean
        },
        {
            title: PanelId.SampleComponent,
            visible: true
        }
    ]
    return panels_
}

//components and icons can be passed here
export const getComponent = (id: string) => {
    switch (id) {
        case PanelId._:
            return (<div>first panel</div>)
        case PanelId.EventAddOns:
            return <div>Event Add Ons Panel</div>
        case PanelId.SampleComponent:
            return <SampleComponent />
        default:
            return <div>Component Not Found</div>
    }


}