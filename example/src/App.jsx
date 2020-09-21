import React from 'react';
import { Step, Stepper } from 'react-steps-wizard';
import Intro from './Intro';
import Expectations from './Expectations';
import PersonalDetails from './PersonalDetails';
import 'antd/dist/antd.css';
import './App.css';
import { Button } from 'antd';

const steps = [
  {title: 'Intro', subtitle: 'who we are'},
  {title: 'Personal Details'},
  {title: 'Expectations', subtitle: 'what you expect from us'}
];

export const Views = {
  'INTRO': 'intro',
  'PERSONAL_DETAILS': 'personalDetails',
  'EXPECTATIONS': 'expectations'
}

const views = [
  {name: Views.INTRO, comp: Intro},
  {name: Views.PERSONAL_DETAILS, comp: PersonalDetails},
  {name: Views.EXPECTATIONS, comp: Expectations}
];

function App() {

  const [current, setCurrent] = React.useState(0);
  const [sectionsData, setSectionsData] = React.useState({ [Views.PERSONAL_DETAILS]: {}, [Views.EXPECTATIONS]: {} });
  const [isFinished, setFinish] = React.useState(false);

  const changeStep = direction => {
      setCurrent(current => current + (direction === 'next' ? 1 : -1));
  }

  const onFinish = () => {
    console.log()
  }

  const setData = (data, view) => {
    setSectionsData({
      ...sectionsData,
      [view]: {
        ...sectionsData[view],
        ...data
      }
    })
  }

  const Comp = views[current].comp;

  return (
    <div>
      <Stepper activeIndex={current} iconSize="large">
        {steps.map(({ title, subtitle }) => (
          <Step key={title} title={title} subtitle={subtitle} />
        ))}
      </Stepper>
    
      <div className="content">
        {<Comp setData={setData} data={sectionsData[views[current].name]} />}
      </div>

      <div style={{padding: 10, width: 160, display: 'flex', justifyContent: 'space-between'}}>
          <Button onClick={() => changeStep('back')} shape="round">Back</Button>
          {current < 2 ? <Button onClick={() => changeStep('next')} shape="round">Next</Button> : <Button type="primary" shape="round" onClick={() => setFinish(true)}>Finish</Button>}
      </div>

      <div style={{padding: 10}}>
        <pre>
          {isFinished && JSON.stringify(sectionsData, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App;
