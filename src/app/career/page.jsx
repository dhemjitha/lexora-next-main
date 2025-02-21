import { CareerHero } from '@/components/CareerHero'
import { JobListings } from '@/components/JobListings'
import React from 'react'

function Career() {
  return (
    <main className="dark bg-black text-white min-h-screen">
        <br /><br /><br /><br /><br />
      <CareerHero/>
      <JobListings/>
    </main>
  )
}

export default Career