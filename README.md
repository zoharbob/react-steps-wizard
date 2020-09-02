# react-steps-wizard

   ### **Installation:**

 `npm i react-steps-wizard -S` <br /><br />
  or using Yarn: `yarn add react-steps-wizard`

  ### **Props:** 

#### Stepper Component

| Prop | Type | Description|Default
|--|--|--|--|
| `activeIndex` | Number | The current index of the step | 0 
|`iconSize`| String|Set the size the wizard's steps icons, could be `small`, `medium` or `large`|`medium`
|`direction`|String|The Direction of the stepper wizard, could be either `horizontal` or `vertical` |`horizontal`
|`hasError`|Boolean|Set an error icon on the step which the `currentIndex` represent|false
|`empLines`| Boolean|emphasize the lines between the checked steps|true|

#### Step Component
| Prop | Type | Description|Default
|--|--|--|--|
| `title` | String \| ReactNode | Title of a step
|`subtitle`| String \| ReactNode| Subtitle of a step
|`mark` |String \| ReactNode| a kind of badge to add which will be shown on the top right of the step

### **Usage:** 

```
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
```

