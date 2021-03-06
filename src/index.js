import React from "react";
import ReactDOM from "react-dom";
import {Step, Stepper} from './lib';

function App() {

    const [current, setCurrent] = React.useState(0);

    const changeStep = direction => {
        setCurrent(current + (direction === 'next' ? 1 : -1));
    }

    return (
        <div>
            <Stepper activeIndex={current} iconSize="large">
                <Step title="some title" subtitle="some subtitle" />
                <Step title="some title" subtitle="some subtitle" />
            </Stepper>

            <div>
                <button onClick={() => changeStep('back')}>Back</button>
                <button onClick={() => changeStep('next')}>Next</button>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));