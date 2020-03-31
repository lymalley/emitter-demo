import { Store, createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Reducer, combineReducers, compose, Action } from 'redux'
export const INIT_LINK_STORE = 'INIT_LINK_STORE'
export const linkStore = {
  company: {
    companyId: 1,
    name: 'Pegasus Charters',
    homeUrl: 'https://pegasuscharters.com/',
    logoUrl:
      'https://pegasuscharters.com/wp-content/uploads/2018/11/PegasusLogoBlu.png',
    urlFriendlyName: 'Pegasus-Charters',
    lat: 32.776587,
    lon: -79.93098,
    companyFilesBaseUrl: 'https://ebmtest.blob.core.windows.net/companydata',
    justLogo: false
  },
  companyLoading: false,
  events: {
    '0': {
      eventId: 0,
      companyId: 0,
      name: '',
      urlFriendlyName: '',
      questionGroupId: 0,
      imgUrl: '',
      duration: 0,
      description: '',
      maxRate: 0,
      minRate: 0,
      rates: [],
      addOns: []
    }
  },
  eventkeys: [],
  eventsLoading: true,
  rates: {
    '0': {
      rateId: 0,
      rate: 0,
      rateDescription: '',
      questionGroupId: 0,
      eventId: 0,
      maxTickets: 0,
      minReservation: 0,
      durationInSeconds: 0,
      effectiveRates: []
    }
  },
  ratekeys: [],
  currentEvent: {
    eventId: 2367,
    companyId: 1,
    name: 'Parasailing',
    urlFriendlyName: 'Parasailing-1',
    imgUrl:
      'https://ebmtest.blob.core.windows.net/companydata/1/2367/EventPic.jpg',
    description:
      'Experience the thrill of floating on air with Charleston‛s premier parasail operator.  We specialize in providing the safest, easiest, and most exciting watersports activity available- **PARASAILING!** Breathtaking panoramic views of the Charleston Peninsula await as you are gently lifted from the boat‛s flight deck. Share in the fun- bring your friends and family. Flights can accommodate two or three people at a time. Observers are also welcome (space permitting).',
    restrictions:
      'WE DO NOT FLY SINGLES, ONLY DOUBLES AND TRIPLES. \r\n\r\n**The minimum age for parasailing is 6 years old, and the minimum age for observers is 3 years old.**\r\n\r\nParasailing and observing can experience turbulent seas. Parasailing is a participant sport that requires the ability to board, maneuver about, and disembark the vessel without the aid of assistance.\r\n\r\n',
    duration: 0,
    minRate: 0,
    maxRate: 0,
    questionGroupId: 0,
    latestSell: 3600,
    earliestSell: 7776000,
    ticketRequiredFields: 16,
    singleTimeEventDateId: 0,
    oneDay: false,
    depositOnly: false,
    deposit: -1,
    singleTime: '0001-01-01T00:00:00',
    rates: [1966, 1967, 1968],
    addOns: [57, 58, 59],
    dates: [
      {
        day: '2020-02-21T00:00:00',
        minTime: '2020-02-21T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-02-22T00:00:00',
        minTime: '2020-02-22T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-02-23T00:00:00',
        minTime: '2020-02-23T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-02-24T00:00:00',
        minTime: '2020-02-24T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-02-25T00:00:00',
        minTime: '2020-02-25T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-02-26T00:00:00',
        minTime: '2020-02-26T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-02-27T00:00:00',
        minTime: '2020-02-27T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-02-28T00:00:00',
        minTime: '2020-02-28T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-02-29T00:00:00',
        minTime: '2020-02-29T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-03-01T00:00:00',
        minTime: '2020-03-01T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-03-02T00:00:00',
        minTime: '2020-03-02T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-03-03T00:00:00',
        minTime: '2020-03-03T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-03-04T00:00:00',
        minTime: '2020-03-04T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-03-05T00:00:00',
        minTime: '2020-03-05T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-03-06T00:00:00',
        minTime: '2020-03-06T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-03-07T00:00:00',
        minTime: '2020-03-07T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-03-08T00:00:00',
        minTime: '2020-03-08T09:00:00-05:00',
        timeCount: 3
      },
      {
        day: '2020-03-09T00:00:00',
        minTime: '2020-03-09T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-10T00:00:00',
        minTime: '2020-03-10T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-11T00:00:00',
        minTime: '2020-03-11T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-12T00:00:00',
        minTime: '2020-03-12T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-13T00:00:00',
        minTime: '2020-03-13T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-14T00:00:00',
        minTime: '2020-03-14T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-15T00:00:00',
        minTime: '2020-03-15T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-16T00:00:00',
        minTime: '2020-03-16T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-17T00:00:00',
        minTime: '2020-03-17T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-18T00:00:00',
        minTime: '2020-03-18T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-19T00:00:00',
        minTime: '2020-03-19T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-20T00:00:00',
        minTime: '2020-03-20T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-21T00:00:00',
        minTime: '2020-03-21T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-22T00:00:00',
        minTime: '2020-03-22T09:00:00-04:00',
        timeCount: 3
      },
      {
        day: '2020-03-23T00:00:00',
        minTime: '2020-03-23T09:00:00-04:00',
        timeCount: 3
      }
    ],
    rateDtos: [
      {
        rateId: 4001,
        eventId: 3763,
        rate: 100,
        maxTickets: 1,
        minReservation: 0,
        durationInSeconds: 3600,
        rateDescription: '1 Hour Rental',
        questionGroupId: -1,
        effectiveRates: [
          {
            rateId: 4001,
            rate: 100,
            effectiveFrom: '2018-06-29T00:00:00',
            effectiveTo: '9999-12-31T00:00:00'
          }
        ]
      },
      {
        rateId: 4002,
        eventId: 3763,
        rate: 200,
        maxTickets: 999,
        minReservation: 0,
        durationInSeconds: 7200,
        rateDescription: '2 Hour Rental',
        questionGroupId: -1,
        effectiveRates: [
          {
            rateId: 4002,
            rate: 200,
            effectiveFrom: '2018-06-29T00:00:00',
            effectiveTo: '9999-12-31T00:00:00'
          }
        ]
      },
      {
        rateId: 4003,
        eventId: 3763,
        rate: 400,
        maxTickets: 999,
        minReservation: 0,
        durationInSeconds: 14400,
        rateDescription: '4 Hour Rental',
        questionGroupId: -1,
        effectiveRates: [
          {
            rateId: 4003,
            rate: 400,
            effectiveFrom: '2018-06-29T00:00:00',
            effectiveTo: '9999-12-31T00:00:00'
          }
        ]
      },
      {
        rateId: 4004,
        eventId: 3763,
        rate: 800,
        maxTickets: 999,
        minReservation: 0,
        durationInSeconds: 28800,
        rateDescription: '8 Hour Rental',
        questionGroupId: -1,
        effectiveRates: [
          {
            rateId: 4004,
            rate: 800,
            effectiveFrom: '2018-06-29T00:00:00',
            effectiveTo: '9999-12-31T00:00:00'
          }
        ]
      }
    ],
    questions: [],
    catalogDetails: null
  },
  currentEventLoading: false,
  timesLoading: true,
  dates: [
    {
      date: '2020-02-21T05:00:00.000Z'
    },
    {
      date: '2020-02-22T05:00:00.000Z'
    },
    {
      date: '2020-02-23T05:00:00.000Z'
    },
    {
      date: '2020-02-24T05:00:00.000Z'
    },
    {
      date: '2020-02-25T05:00:00.000Z'
    },
    {
      date: '2020-02-26T05:00:00.000Z'
    },
    {
      date: '2020-02-27T05:00:00.000Z'
    },
    {
      date: '2020-02-28T05:00:00.000Z'
    },
    {
      date: '2020-02-29T05:00:00.000Z'
    },
    {
      date: '2020-03-01T05:00:00.000Z'
    },
    {
      date: '2020-03-02T05:00:00.000Z'
    },
    {
      date: '2020-03-03T05:00:00.000Z'
    },
    {
      date: '2020-03-04T05:00:00.000Z'
    },
    {
      date: '2020-03-05T05:00:00.000Z'
    },
    {
      date: '2020-03-06T05:00:00.000Z'
    },
    {
      date: '2020-03-07T05:00:00.000Z'
    },
    {
      date: '2020-03-08T05:00:00.000Z'
    },
    {
      date: '2020-03-09T04:00:00.000Z'
    },
    {
      date: '2020-03-10T04:00:00.000Z'
    },
    {
      date: '2020-03-11T04:00:00.000Z'
    },
    {
      date: '2020-03-12T04:00:00.000Z'
    },
    {
      date: '2020-03-13T04:00:00.000Z'
    },
    {
      date: '2020-03-14T04:00:00.000Z'
    },
    {
      date: '2020-03-15T04:00:00.000Z'
    },
    {
      date: '2020-03-16T04:00:00.000Z'
    },
    {
      date: '2020-03-17T04:00:00.000Z'
    },
    {
      date: '2020-03-18T04:00:00.000Z'
    },
    {
      date: '2020-03-19T04:00:00.000Z'
    },
    {
      date: '2020-03-20T04:00:00.000Z'
    },
    {
      date: '2020-03-21T04:00:00.000Z'
    },
    {
      date: '2020-03-22T04:00:00.000Z'
    },
    {
      date: '2020-03-23T04:00:00.000Z'
    }
  ],
  datesLoading: true,
  catalog: {
    '57': {
      catalogId: 57,
      itemCode: 'Photo Package',
      description: 'Digital Photo Package',
      longDescription: null,
      requiresShipping: false,
      unitPrice: '$30.00',
      imgUrls: [],
      giftCard: false
    },
    '58': {
      catalogId: 58,
      itemCode: 'Video Package',
      description: 'High Definition Video Package',
      longDescription: null,
      requiresShipping: false,
      unitPrice: '$50.00',
      imgUrls: [],
      giftCard: false
    },
    '59': {
      catalogId: 59,
      itemCode: 'Combo Package',
      description: 'Photo and Video Combo Package',
      longDescription: null,
      requiresShipping: false,
      unitPrice: '$70.00',
      imgUrls: [
        'https://ebmtest.blob.core.windows.net/companydata/1/Cat_Img/59/1581625119709144800sharegrid-N10auyEVst8-unsplash.jpg'
      ],
      giftCard: false
    },
    '88': {
      catalogId: 88,
      itemCode: 'Gc ',
      description: 'Www.indexic.net',
      longDescription: 'Gift Certificate valid for tandem flight ',
      requiresShipping: false,
      unitPrice: '$100.00',
      imgUrls: [],
      giftCard: true
    },
    '97': {
      catalogId: 97,
      itemCode: 'SR',
      description: 'Scuba Rental',
      longDescription: 'Full scuba gear - BC, Regulator, Fins, Mask',
      requiresShipping: false,
      unitPrice: '$45.00',
      imgUrls: [
        'https://ebmtest.blob.core.windows.net/companydata/1/Cat_Img/97/1582056186548786000download%20(5).jpg'
      ],
      giftCard: false
    },
    '98': {
      catalogId: 98,
      itemCode: 'DG',
      description: 'Diver Guide',
      longDescription: 'Guide for one or two divers ',
      requiresShipping: false,
      unitPrice: '$50.00',
      imgUrls: [
        'https://ebmtest.blob.core.windows.net/companydata/1/Cat_Img/98/1582056225135639600download%20(6).jpg'
      ],
      giftCard: false
    }
  },
  catalogKeys: [57, 58, 59, 88, 97, 98],
  catalogLoading: false,
  cart: {
    cartId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reservationItems: [],
    catalogItems: [],
    urlFriendlyName: '',
    errorMessages: [],
    fees: '',
    subtotal: '',
    total: '',
    tax: ''
  },
  questions: [],
  activeStep: 1,
  open: false,
  dateCollected: true,
  rateCollected: false,
  showTimes: false,
  timeSelected: false,
  holderCollected: false,
  ticketQCollected: false,
  groupQCollected: false,
  merchandise: false,
  editReservation: true,
  hasDetails: false,
  error: false,
  errMsg: '',
  dateSelected: false,
  hasCart: false,
  eventAddOnsCollected: false,
  selectedDate: '2020-02-29T05:00:00.000Z',
  eventDateId: 0
}
export const initialState = {}
export const linkReducer: Reducer<any> = (
  state: any | undefined,
  incomingAction: Action
): any => {
  if (state === undefined) {
    return initialState
  }
  const action = incomingAction as any
  switch (action.type) {
    case INIT_LINK_STORE:
      return { ...state, linkStore }
    default:
      return state
  }
}

export const selectLink = (state: IApplicationStore) => state.linkStore

export interface IApplicationStore {
  linkStore: any
}

export const reducers: Reducer<IApplicationStore> = combineReducers<
  IApplicationStore
>({
  linkStore: linkReducer
})

function configureStore(): Store<IApplicationStore> {
  // This supports Redux Extensions and the Extension does not have to be installed.
  var store = null
  let hasExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__ !== undefined
  if (hasExtension && process.env.NODE_ENV === 'development') {
    store = createStore(
      reducers,
      undefined,
      compose(
        applyMiddleware(ReduxThunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
          (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      )
    )
  } // Production
  else store = createStore(reducers, undefined, applyMiddleware(ReduxThunk))

  return store
}

const store = configureStore()
export default store
