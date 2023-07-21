import React from 'react'

function HomePage() {
  return (
  
    <div>
    <div className="mx-10 md:mx-20 max-w-full pb p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h2>Start Survey</h2>
    <div>
      <p>Start collecting new responses by selecting the button below</p>
      <button className='px-4 py-2 bg-white border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-transform
         duration-100 ease-out'>Start New Survey</button>
    </div>
  </div>

  <div>
    <h1>Export Survey</h1>
  </div>
    </div>

  )
}

export default HomePage