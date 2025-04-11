import React, { useState } from 'react'
import research1 from './ResearchPictures/research01.jpg'
import research2 from './ResearchPictures/research-02.jpg'
import research3 from './ResearchPictures/research-03.jpg'
import research4 from './ResearchPictures/research-04.jpg'
import research5 from './ResearchPictures/research-05.jpg'
import research6 from './ResearchPictures/research-06.jpg'
import research7 from './ResearchPictures/research-07.jpg'
import research8 from './ResearchPictures/research-08.jpg'
import research9 from './ResearchPictures/research-09.jpg'
import Button from '../../ReusableComponent/Button'

function ResearchComponent2() {
    const datas = [
        {
            img: research1,
            name:'ONCOLOGY',
            title: 'Catalyses Processes',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'

        },
        {
            img:research2,
            name:'PATHOLOGY',
            title:'Organic Synthesis',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research3,
            name:'BOPSAFETY,INCUBATOR',
            title:'Hemoglobin Test',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research4,
            name:'HEMOGLOBIN',
            title:'Surface Cleaning',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research5,
            name:'ONCOLOGY',
            title:'Hemoglobin Test',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research6,
            name:'INCUBATOR',
            title:'Polymer Science',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research7,
            name:'HEMOGLOBIN',
            title:'Cancer Cell Biology',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research8,
            name:'HEMOGLOBIN',
            title:'DNA Vaccines',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research9,
            name:'HEMOGLOBIN',
            title:'Hemoglobin Test',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img: research1,
            name:'ONCOLOGY',
            title: 'Catalyses Processes',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'

        },
        {
            img:research2,
            name:'PATHOLOGY',
            title:'Organic Synthesis',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research3,
            name:'BOPSAFETY,INCUBATOR',
            title:'Hemoglobin Test',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research4,
            name:'HEMOGLOBIN',
            title:'Surface Cleaning',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research5,
            name:'ONCOLOGY',
            title:'Hemoglobin Test',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research6,
            name:'INCUBATOR',
            title:'Polymer Science',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research7,
            name:'HEMOGLOBIN',
            title:'Cancer Cell Biology',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research8,
            name:'HEMOGLOBIN',
            title:'DNA Vaccines',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research9,
            name:'HEMOGLOBIN',
            title:'Hemoglobin Test',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img: research1,
            name:'ONCOLOGY',
            title: 'Catalyses Processes',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'

        },
        {
            img:research2,
            name:'PATHOLOGY',
            title:'Organic Synthesis',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research3,
            name:'BOPSAFETY,INCUBATOR',
            title:'Hemoglobin Test',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research4,
            name:'HEMOGLOBIN',
            title:'Surface Cleaning',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research5,
            name:'ONCOLOGY',
            title:'Hemoglobin Test',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research6,
            name:'INCUBATOR',
            title:'Polymer Science',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research7,
            name:'HEMOGLOBIN',
            title:'Cancer Cell Biology',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research8,
            name:'HEMOGLOBIN',
            title:'DNA Vaccines',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research9,
            name:'HEMOGLOBIN',
            title:'Hemoglobin Test',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img: research1,
            name:'ONCOLOGY',
            title: 'Catalyses Processes',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'

        },
        {
            img:research2,
            name:'PATHOLOGY',
            title:'Organic Synthesis',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research3,
            name:'BOPSAFETY,INCUBATOR',
            title:'Hemoglobin Test',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research4,
            name:'HEMOGLOBIN',
            title:'Surface Cleaning',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research5,
            name:'ONCOLOGY',
            title:'Hemoglobin Test',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research6,
            name:'INCUBATOR',
            title:'Polymer Science',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research7,
            name:'HEMOGLOBIN',
            title:'Cancer Cell Biology',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research8,
            name:'HEMOGLOBIN',
            title:'DNA Vaccines',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },
        {
            img:research9,
            name:'HEMOGLOBIN',
            title:'Hemoglobin Test',
            about:'Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.Nam eget dui vel quam'
        },

  
  
        
    ]


    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerpage = 9;
    const totalRecords = datas.length
    const lastIndex = currentPage * recordsPerpage;
    const firstIndex = lastIndex - recordsPerpage;
    const records = datas.slice(firstIndex, lastIndex)
    const npage = Math.ceil(totalRecords / recordsPerpage);
    const [transitioning, setTransitioning] = useState(false);


    const goToPage = (page) => {
        setTransitioning(true); // Start transition
        setTimeout(() => {
          setCurrentPage(page);
          setTransitioning(false); // End transition
        }, 300); // Transition duration in milliseconds
      };


  const colors = ['red', 'blue', 'green', '#2c8cd0']

  

  return (
    <div className='mt-[40px] md:hidden p-[10px]'>
           <div className={`min-h-[500px] w-full grid grid-cols-1 gap-[30px] transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
            {records.map((dat,index) =>(

                <div key={index} className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                        src={dat.img}
                        alt="img" className='hover:scale-110 transition-transform duration-300 ease-in-out'/>
                    </figure>
                    <div className="card-body">
                        <h1 className='font-custom font-semibold' style={{color:colors[index % colors.length]}}>{dat.name}</h1>
                        <h2 className="card-title font-custom text-[22px] text-boldtext">{dat.title}</h2>

                        <p>{dat.about}</p>
                        <div className="card-actions justify-start" > 
                        <button className="btn  hover:opacity-60 text-bodybg font-custom font-semibold text-[19px] " style={{backgroundColor:colors[index % colors.length], }}>READ MORE</button>
                        </div>
                    </div>
                </div>
            ))}
   
        </div>
        <div className="join w-full h-[60px] items-center justify-center">
           {[...Array(npage)].map((_, i) => (
          <Button
            key={i + 1}
            className={`btn join-item ${currentPage === i + 1 ? 'btn-active' : ''} $ `}
            label={`${i + 1}`}
            onClick={() => goToPage(i + 1)}
          />
        ))}
           
        </div>
    </div>
  )
}

export default ResearchComponent2