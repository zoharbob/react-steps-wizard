import React from "react";
import ReactDOM from "react-dom";
import {Stepper, Step} from 'react-steps-wizard';

function App() {

    const [current, setCurrent] = React.useState(0);

    const changeStep = direction => {
        setCurrent(current => current + (direction === 'next' ? 1 : -1));
    }

    return (
        <>
            <Stepper activeIndex={current} iconSize="large">
                <Step title="Intro" subtitle="who we are" />
                <Step title="Personal Details"  />
                <Step title="Expectations" subtitle="what you expect from us" />
            </Stepper>

            <div>
                <button onClick={() => changeStep('back')}>Back</button>
                <button onClick={() => changeStep('next')}>Next</button>
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));