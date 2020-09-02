# react-steps-wizard

   ### **Installation:**

 `npm i react-steps-wizard -S` <br /><br />
  or using Yarn: `yarn add react-steps-wizard`

  ### **Props:** 

#### Stepper

| Prop | Type | Description|Default
|--|--|--|--|
| `activeIndex` | Number | The current index of the step | 0 
|`iconSize`| String|Set the size the wizard's steps icons, could be `small`, `medium` or `large`|`medium`
|`direction`|String|The Direction of the stepper wizard, could be either `horizontal` or `vertical` |`horizontal`
|`hasError`|Boolean|Set an error icon on the on the step which the `currentIndex` represent|false
|`empLines`| Boolean|emphasize the lines between the checked steps|true|

#### Step
| Prop | Type | Description|Default
|--|--|--|--|
| `title` | String \| ReactNode | Title of a step | 
|`subtitle`| String \| ReactNode| Subtitle of a step
|`mark` |String \| ReactNode| a kind of badge to add which will be shown on the top right of the step
