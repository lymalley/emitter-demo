import React from 'react'
import SampleComponent from './SampleComponent'
// export enum PanelId {
//     _ = "",
//     EventAddOns = 'Event Add Ons',
//     SampleComponent = "Sample Component"
// }
export enum PanelId {
    _ = "",
    EventDates = "Event Dates",
    TicketRates = "Ticket Rates",
    EventTimes = "Event Times",
    ReservationHolder = "Reservation Holder", //
    Questions = "Questions",
    EventAddOns = "Event Add-Ons"
}
export const getPanelInfo = (props: any) => {
    const panels = [
        {
            id: PanelId._,
            title: PanelId._,
            visible: true

        },
        {
            title: PanelId.EventDates,
            id: PanelId.EventDates,
            visible: true,
            continueVisible: true
        },
        {
            title: PanelId.TicketRates,
            id: PanelId.TicketRates,
            visible: true,
            continueVisible: true,
        },
        {
            title: PanelId.EventTimes,
            id: PanelId.EventTimes,
            visible: true,
            continueVisible: true,
        },
        {
            title: PanelId.ReservationHolder,
            id: PanelId.ReservationHolder,
            visible: true
        },
        {
            title: PanelId.Questions,
            id: PanelId.Questions,
            visible: props.ticketRequiredFields > 0 || props.questionGroupId > 0 || (props.questions && props.questions.length > 0),
            continueVisible: true
        },
        {
            id: PanelId.EventAddOns,
            title: PanelId.EventAddOns,
            visible: Boolean(props.addOnsLength > 0),
            continueVisible: true
            //need added logic.  also can be done in panel wizard if prefer
            // dimmed?: logic
            // completed: true
            //continueVisable?: boolean
            // continueDimmed?: boolean
            /// error?: boolean
        },

    ]
    let panels_: any = []
    panels.map((p) => {
        if (p.visible) {
            panels_.push(p)
        }
    })
    return panels_
}

//components and icons can be passed here
export const getComponent = (id: string) => {
    switch (id) {
        case PanelId._:
            return (<div>first panel</div>)
        case PanelId.EventDates:
            return (<SampleComponent />)
        case PanelId.TicketRates:
            return (<div>Third panel</div>)
        case PanelId.ReservationHolder:
            return (<div>Reservation Holder</div>)
        case PanelId.Questions:
            return <div>Questions</div>
        case PanelId.EventAddOns:
            return <div>Event Add Ons Panel</div>

        default:
            return <div>Component Not Found</div>
    }


}