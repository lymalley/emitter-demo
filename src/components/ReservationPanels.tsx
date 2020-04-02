import React from 'react'
import SampleComponent from './SampleComponent'

export enum PanelId {
    Description = "Description",
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
            id: PanelId.Description,
            title: "",
            visible: true,
            component: <SampleComponent />

        },
        {
            title: PanelId.EventDates,
            id: PanelId.EventDates,
            visible: true,
            continueVisible: true,
            component: <SampleComponent />
        },
        {
            title: PanelId.TicketRates,
            id: PanelId.TicketRates,
            visible: true,
            continueVisible: true,
            component: <SampleComponent />
        },
        {
            title: PanelId.EventTimes,
            id: PanelId.EventTimes,
            visible: true,
            continueVisible: true,
            component: <SampleComponent />
        },
        {
            title: PanelId.ReservationHolder,
            id: PanelId.ReservationHolder,
            visible: true,
            component: <SampleComponent />
        },
        {
            title: PanelId.Questions,
            id: PanelId.Questions,
            visible: props.ticketRequiredFields > 0 || props.questionGroupId > 0 || (props.questions && props.questions.length > 0),
            continueVisible: true,
            component: <SampleComponent />
        },
        {
            id: PanelId.EventAddOns,
            title: PanelId.EventAddOns,
            visible: Boolean(props.addOnsLength > 0),
            continueVisible: true,
            component: <SampleComponent />
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

