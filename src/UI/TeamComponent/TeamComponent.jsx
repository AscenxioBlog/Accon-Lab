import React from 'react'
import TeamComponent1 from './TeamComponent1'
import TeamComponent2 from './TeamComponent2'
import TeamComponent3 from './TeamComponent3'
import TeamComponent4 from './TeamComponent4'
import TeamComponent5 from './TeamComponent5'

function TeamComponent() {
  return (
    <div className='mt-[110px] bg-white'>
      <TeamComponent1/>
      <TeamComponent2/>
      <TeamComponent3/>
      <TeamComponent4/>
      <TeamComponent5/>
    </div>
  )
}

export default TeamComponent