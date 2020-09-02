import React from "react";
import ReactDOM from "react-dom";
import {Step} from './lib/Step';
import {Stepper} from './lib/Stepper';

function App() {

    const [current, setCurrent] = React.useState(0);

    const changeStep = direction => {
        setCurrent(current + (direction === 'next' ? 1 : -1));
    }

    return (
        <div className="App">
            <div className="home">
                <Stepper activeIndex={current} iconSize="large">
                    <Step title="go to the jym" subtitle="and do muscles workout" />
                    <Step title="play with friends" subtitle="call of duty on PS4"/>
                    <Step title="watch my tv show" subtitle="watch the boys season 2" />
                    <Step title="play with friends" />
                    <Step title="play with friends" />
                </Stepper>
            </div>

            <div>
                <button onClick={() => changeStep('back')}>Back</button>
                <button onClick={() => changeStep('next')}>Next</button>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));