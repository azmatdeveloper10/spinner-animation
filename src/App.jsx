import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { SiTimescale } from 'react-icons/si';
const App = () => {
  // const [deg, setDeg] = useState(0);
  // const contRef = useRef();
  // const iconRef = useRef();
  // const [text, setText] = useState('My name is azmatullah');

  // function timeOut() {
  // setInterval(() => {
  // const cont = document.querySelector('.cont');
  // const icons = document.querySelectorAll('.icon');
  // contRef.style.transform = `{rotate(${deg}deg)}`;
  // contRef.current.forEach(
  //     //   icon => (icon.style.transform = `{rotate(-${deg}deg)}`)
  //     // );
  //     if (deg <= 450) {
  //       setDeg(prevDeg => {
  //         return prevDeg + 90;
  //       });
  //     } else {
  //       setDeg(0);
  //     }
  //     console.log(deg);
  //   }, 1000);
  // }

  // useEffect(() => {
  //   timeOut();
  // }, []);
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div
        // ref={contRef}
        className=' relative cont flex items-center justify-center  
       sm:max-w-[500px] max-h-[250px] max-w-[250px]  sm:max-h-[500px] w-[100%]  h-[100%] mx-auto my-auto rounded-full border-[1px]'
      >
        <div
          // ref={iconRef}
          className='absolute icon  h-[80%] w-[80%] bg-slate-200 rounded-full'
        >
          <p className='absolute top-[45%] left-[25%] sm:top-[50%] sm:left-[25%]'>
            azmat
          </p>
        </div>
        <div
          // ref={iconRef}
          className=' absolute icon flex items-center justify-center  -top-[30px]  
         rounded-full h-[50px] w-[50px] bg-slate-400 '
        >
          <SiTimescale className='text-4xl' />
        </div>
        <div
          // ref={iconRef}
          className='absolute icon flex items-center justify-center  -left-[30px] 
         rounded-full h-[50px] w-[50px] bg-slate-400 '
          // onTimeUpdate={timeOut()}
        >
          <SiTimescale className='text-4xl' />
        </div>

        <div
          // ref={iconRef}
          className='absolute icon flex items-center justify-center   -right-[30px] 
         rounded-full h-[50px] w-[50px] bg-slate-400 '
        >
          <SiTimescale className='text-4xl' />
        </div>

        <div
          // ref={iconRef}
          className='absolute icon flex items-center justify-center  -bottom-[30px] 
         rounded-full h-[50px] w-[50px] bg-slate-400 '
        >
          <SiTimescale className='text-4xl' />
        </div>
      </div>
    </div>
  );
};

export default App;
