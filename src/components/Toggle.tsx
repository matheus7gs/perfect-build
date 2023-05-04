
import React, { InputHTMLAttributes} from "react"

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
   label: string
   color: "green" | "purple" | "red"
}

export const Toggle = <React, FC>({label, color, ...rest }: ToggleProps) => {

   const scheme = "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600"

   return (
      <label className="relative flex flex-col items-center justify-center cursor-pointer">
         <input 
            type="checkbox" 
            className="sr-only peer" 
            {...rest}
         />

         <div 
            className={` flex items-center justify-start w-[3.75rem] h-8 px-1 py-[2px] text-[12px] text-transparent uppercase bg-gray-200 rounded-full duration-500 peer dark:bg-gray-700 peer-focus:ring-2 peer-checked:text-white peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all after:duration-500 dark:border-gray-600 peer-focus:ring-${color}-300 dark:peer-focus:ring-${color}-800 peer-checked:bg-${color}-600`}
         >
            ON
         </div>
         
         <span className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {label}
         </span>
      </label>
   )
}