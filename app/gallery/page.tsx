import GalleryGrid from '@/components/GalleryGrid'
import PageHeader from '@/components/global/PageHeader'
import React from 'react'

export const metadata = {
  title: "Gallery | Krantishikha Dhital",
  description: "Visual glimpses of Krantishikha Dhital's work in the parliament, community engagement, and public addresses across Nepal.",
};

const page = () => {
  return (
    <main>
        <PageHeader title="Gallery" />
        <GalleryGrid/> 
    </main>
  )
}

export default page