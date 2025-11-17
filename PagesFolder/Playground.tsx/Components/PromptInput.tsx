import { Send } from 'lucide-react';
import React, { Dispatch, SetStateAction, useState } from 'react'

function PromptInput({setPropmt}:{setPropmt:Dispatch<SetStateAction<string>>}) {
    const [inputvalue,setInputValue]=useState('');
  return (
   <form  onSubmit={(e) =>{e.preventDefault();inputvalue.trim() && setPropmt(inputvalue)}} className="w-full h-[100px] max-w-xl mx-auto">
      <div className="relative group">
        
        {/* Input Field */}
        <input
          value={inputvalue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your prompt..."
          className="
            w-full pl-4 pr-12 py-3 rounded-2xl bg-white/70 backdrop-blur 
            border border-gray-200 shadow-sm
            focus:outline-none focus:ring-2 focus:ring-black/70
            transition-all duration-200 text-sm
          "
        />

        {/* Submit Button */}
        <button
        type='submit'
         
          className=" cursor-pointer
            absolute right-2 top-1/2 -translate-y-1/2 
            bg-black text-white p-2 rounded-xl
            hover:bg-gray-900 active:scale-95 
            transition-all duration-150
          "
        >
          <Send size={16} />
        </button>
      </div>
    </form>
  )
}

export default PromptInput