import './styles/global.css';

import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed={4}/>
      <Habit completed={3}/>
      <Habit />
      <Habit />
      <Habit completed={1}/>
    </div>
  )
}

export default App
