import React from 'react'

function PodcastDetails({ params }: { params: { podcastId: string } }) {
    return (
        <p className='text-orange-1'>PodcastDetails for {params.podcastId}</p>
    )
}

export default PodcastDetails