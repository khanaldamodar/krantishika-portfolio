import AboutSection from '@/components/AboutSection'
import AcademicTimeline from '@/components/AcademicTimeline'
import PageHeader from '@/components/global/PageHeader'
import React from 'react'

export const metadata = {
  title: "About Krantishikha Dhital",
  description: "Learn about the journey, education, and professional background of Krantishikha Dhital — from journalism to psychosocial counseling and federal leadership.",
};

const page = () => {
  return (
    <main>
        <PageHeader title="About Krantishikha" />
        <AboutSection/>
        <AcademicTimeline/>
    </main>
  )
}

export default page