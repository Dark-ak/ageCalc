import Birthday from "./components/Birthday"
import Fields from "./components/Fields"
import { useState } from "react"


function App() {

  const [date, setDate] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [bday,setBday] = useState([])

  
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white mt-28 p-12 w-fit rounded-br-[30%]  lg:w-[45%]  rounded-2xl ">
        <Fields date={date} setD={setDate} month={month} setM={setMonth} year={year} setY={setYear} setB={setBday}/>
        <Birthday bday={bday}/>
      </div>
    </div>
  )
}

export default App
