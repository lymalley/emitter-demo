import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import AppEmitter from "../emitter/AppEmitter"

// We will type the props once we near logic completion
export default function SampleComponent(props: any) {
    const [componentState, setComponentState] = React.useState(props);
    const [count, setCount] = React.useState(0);

    //
    // Make the constructor and Destructor
    //
    React.useEffect(() => {
        // Get Data from Reservation.Store()

        // Destructor
        return function destructor() {
            // Clean up
        }
    }, []);

    // Map State to Props
    React.useEffect(() => {
        setComponentState(props);
    }, [props]);

    const handleChange = () => {
        // Validate, Update, Update the Store, just act independently
        // then emit a message to that your Step is complete or go next...
        let okToContinue = true;

        // This call is Synchronous. We will type the data eventually.
        if (props.emitterId) {
            AppEmitter.emit(props.emitterId,
                {
                    component: props.component,
                    completed: okToContinue
                });
        }

    }

    return (
        <React.Fragment>
            <Typography id="discrete-slider" gutterBottom>
                Temperature
      </Typography>
            <Slider
                defaultValue={30}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
                onChange={handleChange}
            />
        </React.Fragment>
    );
}

