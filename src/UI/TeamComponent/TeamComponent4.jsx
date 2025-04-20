import React from 'react'
import { MdDone } from "react-icons/md";

function TeamComponent4() {
  return (
    <div>
      <div className='min-h-[100px] bg grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-[10px] lg:p-[50px]'>
        
        {/* Skills Section */}
        <div>
          <div className='p-[10px] box-border'>
            <h1 className='text-[1.7rem] font-custom text-boldtext font-semibold'>Skills</h1>
            <p className='text-start mt-2 font-custom text-[1.2rem] dark:text-black'>
              We are equipped with a wide range of skills essential for scientific and medical research. Our expertise helps us deliver precise and impactful outcomes that drive innovation and excellence.
            </p>
          </div>
          <div className='p-[10px] capitalize dark:text-black'>
            {[
              'Extramural Funding',
              'Bacterial Markers',
              'Advanced Data Analysis',
              'Molecular Diagnostics',
              'Technical Writing',
              'Clinical Research',
              'Project Management'
            ].map((skill, index) => (
              <h1 key={index} className='flex items-center gap-2 font-custom text-[1.1rem] font-normal'>
                <span><MdDone className='text-textc' /></span>{skill}
              </h1>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className='p-[10px] box-border'>
            <h1 className='text-[1.7rem] font-custom text-boldtext font-semibold'>Education</h1>
            <p className='text-start mt-2 font-custom text-[1.2rem] dark:text-black'>
              Our team members hold prestigious academic qualifications from globally recognized institutions. We continuously pursue educational growth and professional development in our fields of study.
            </p>
          </div>
          <div className='p-[10px] capitalize dark:text-black'>
            {[
              'Ph.D. in Microbiology',
              'MSc. in Biotechnology',
              'BSc. in Medical Laboratory Science',
              'Professional Certifications',
              'Workshops & Seminars',
              'Internships & Residencies',
              'Continuing Education Courses'
            ].map((edu, index) => (
              <h1 key={index} className='flex items-center gap-2 font-custom text-[1.1rem] font-normal'>
                <span><MdDone className='text-textc' /></span>{edu}
              </h1>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div>
          <div className='p-[10px] box-border'>
            <h1 className='text-[1.7rem] font-custom text-boldtext font-semibold'>Awards</h1>
            <p className='text-start mt-2 font-custom text-[1.2rem] dark:text-black'>
              We are proud to be recipients of several awards and recognitions, a testament to our commitment to excellence, innovation, and community impact in the medical and scientific domains.
            </p>
          </div>
          <div className='p-[10px] capitalize dark:text-black'>
            {[
              'Best Research Paper Award',
              'National Science Recognition',
              'Outstanding Achievement Award',
              'Innovative Research Grant',
              'Young Scientist Award',
              'Leadership Excellence in Health',
              'Community Service Recognition'
            ].map((award, index) => (
              <h1 key={index} className='flex items-center gap-2 font-custom text-[1.1rem] font-normal'>
                <span><MdDone className='text-textc' /></span>{award}
              </h1>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default TeamComponent4;
