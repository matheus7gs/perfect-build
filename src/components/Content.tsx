'use client'

import { useState } from "react"
import { Toggle } from "./Toggle"

export function Content() {
   const [checkQueue, setCheckQueue] = useState<string[]>([])
   const [checkboxGreenState, setCheckboxGreenState] = useState(false)
   const [checkboxPurpleState, setCheckboxPurpleState] = useState(false)
   const [checkboxRedState, setCheckboxRedState] = useState(false)

   // console.log("green", checkboxGreenState, "purple", checkboxPurpleState, "red", checkboxPurpleState)

   function updateCheckQueue(value: string) {
      let queue = checkQueue

      if (queue.length < 3) {
         queue.push(value)
      } else {
         queue.shift()
         queue.push(value)
         if (!queue.includes(value)) {
         }
      }
      setCheckQueue(queue)
   }

   function howCheckDesable () {
      if (checkQueue[0] === "green") {
         setCheckboxGreenState(false)
      }
      if (checkQueue[0] === "purple") {
         setCheckboxPurpleState(false)
      }
      if (checkQueue[0] === "red") {
         setCheckboxRedState(false)
      }
   }
   
   function toggleValues(color: string) {
        
      if (color === "green") {
         setCheckboxGreenState(!checkboxGreenState)
         if (!checkboxGreenState) {
            updateCheckQueue(color)
         }
         if (checkboxPurpleState && checkboxRedState) {
            howCheckDesable()
         }
      }
      if (color === "purple") {
         setCheckboxPurpleState(!checkboxPurpleState)
         if (!checkboxPurpleState) {
            updateCheckQueue(color)
         }
         if (checkboxGreenState && checkboxRedState) {
            howCheckDesable()
         }
      }
      if (color === "red") {
         setCheckboxRedState(!checkboxRedState)
         if (!checkboxRedState) {
            updateCheckQueue(color)
         }
         if (checkboxGreenState && checkboxPurpleState) {
            howCheckDesable()
         }
      }
   }
   // console.log(checkQueue)
   return (
      <main className="flex flex-col w-full h-full items-center justify-end max-w-xs">
         <p className="text-center mb-4">
            Como você quer a sua construção?
         </p>
         <div className="flex w-full justify-evenly">
         <Toggle 
            onChange={() => {              
               toggleValues("green")
            }}           
            checked={checkboxGreenState} 
            label="Bom" 
            color="green" 
         />
         <Toggle 
            onChange={() => {
               toggleValues("purple") 
            }}
            checked={checkboxPurpleState} 
            label="Rápido" 
            color="purple" 
         />
         <Toggle 
            onChange={() => {
               toggleValues("red")
            }}
            checked={checkboxRedState}
            label="Barato" 
            color="red" 
         />
         </div>

         <div className="">
            <iframe height={300} src="https://lottie.host/?file=37502be0-9a4d-41f1-b331-411989487301/hLGVfRSnK3.json"></iframe>
         </div>
      </main>
   )
}