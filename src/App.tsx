import React from 'react';
import Counter from './components/Counter'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Navbar/>
      <div id='dashboard' className='w-full mt-5 px-5 gap-2 grid sm:grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4'>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
