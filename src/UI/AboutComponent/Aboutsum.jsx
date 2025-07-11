import React,  { useEffect, useRef, useState } from 'react'

function AboutComponent4() {
    let targetLabNum = 1492;
    let targetSpecialistNum = 152;
    let targetMaterialNum = 1022;
    let targetPatientsNum = 24332;
  
    let duration = 2000; 
    let steps = 100; 
    let intervalTime = duration / steps;
  
    let labStep = targetLabNum / steps;
    let specialistStep = targetSpecialistNum / steps;
    let materialStep = targetMaterialNum / steps;
    let patientsStep = targetPatientsNum / steps;
  
    let [labNum, setLabNum] = useState(0);
    let [specialistNum, setSpecialistNum] = useState(0);
    let [materialNum, setMaterialNum] = useState(0);
    let [patientsNum, setPatientsNum] = useState(0);
    const [isVisible, setIsVisible] = useState(false); 
    const sectionRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true); // Trigger counting when the section enters the viewport
                observer.disconnect(); // Stop observing once the component is in view
            }
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return; 
      let stepCount = 0;
  
      const numberscount = setInterval(() => {
        stepCount += 1;
  
        setLabNum((prev) => Math.min(prev + labStep, targetLabNum));
        setSpecialistNum((prev) => Math.min(prev + specialistStep, targetSpecialistNum));
        setMaterialNum((prev) => Math.min(prev + materialStep, targetMaterialNum));
        setPatientsNum((prev) => Math.min(prev + patientsStep, targetPatientsNum));
  
        if (stepCount >= steps) {
          clearInterval(numberscount); // Stop when all steps are done
        }
      }, intervalTime);
  
      return () => clearInterval(numberscount); // Cleanup on unmount
    }, [isVisible]);
  return (
    <div>
         <div className='min-h-[600px] md:min-h-[500px] lg:min-h-[300px] mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around gap-5 p-[20px] box-border' ref={sectionRef}>
            <div className=' p-[20px] hover:border-[2px] hover:border-[blue] transition delay-75 duration-75 rounded lg border-[#18151529] border-[1px]'>
                <div className='lab '>
                  
                    
                </div>
                <div className='mt-8'>
                    <h1 className='text-5xl font-bold text-black font'>{Math.round(labNum)}</h1>
                    <p className='font-custom text-[18px] text-black font-semibold'>Laboratories in 100+ states</p>
                </div>
                
            </div>
            <div className=' p-[20px]  hover:border-[2px] hover:border-[red] transition delay-75 duration-75 rounded-lg border-[#18151529] border-[1px]'>
                <div className='special'>
                    
                </div>
                <div className='mt-8'>
                    <h1 className='text-5xl text-black font-bold'>{Math.round(specialistNum)}</h1>
                    <p className='font-custom  text-black text-[18px] font-semibold'>Laboratory Specialists</p>
                </div>
            </div>
            <div className=' p-[20px]  hover:border-[2px] hover:border-[blue] transition delay-75 duration-75 rounded-lg border-[#18151529] border-[1px]'>
                <div className='material'>
                    
                </div>
                <div className='mt-8 '>
                    <h1 className='text-5xl text-black font-bold'>{Math.round(materialNum)}</h1>
                    <p className='font-custom text-black text-[18px] font-semibold'>Material collection points</p>
                </div>
            </div>
            <div className='p-[20px]  hover:border-[2px] hover:border-[green] transition delay-75 duration-75 rounded-lg border-[#18151529] border-[1px]'> 
                <div className='patients'>
                    
                </div>
                <div className='mt-8 '>
                    <h1 className='text-5xl text-black font-bold'>{Math.round(patientsNum)}</h1>
                    <p className='font-custom text-[18px] text-black font-semibold'>Patients diagnosed in 2022</p>
                </div>
            </div>

        </div>
    </div>
    
  )
}

export default AboutComponent4
