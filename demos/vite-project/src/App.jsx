import React from 'react'
import ButtonWrapper from './components/ButtonWrapper'
import {ButtonDemoList1} from './components/ButtonDemoList1'
import {buttonDemoList2} from './components/buttonDemoList2'

function App() {
  return (
    <div className="App">
      <ButtonWrapper comp={ButtonDemoList1()} />

      <ButtonWrapper comp={buttonDemoList2()} />
    </div>
  )
}

export default App
