import React from 'react'

export default function VideoBackground({ opacity = 0.35, overlayIntensity = 0.6 }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020509]">
      {/* 1. Actual Video Element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute min-w-full min-h-full object-cover"
        style={{ opacity: opacity }}
      >
        {/* Replace the src with your local file path or URL */}
        <source src="/video-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Overlay Gradients (Essential for text readability) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, 
            rgba(2,5,9,${overlayIntensity}) 0%, 
            rgba(5,10,20,${overlayIntensity * 0.4}) 40%, 
            rgba(5,10,20,${overlayIntensity * 0.5}) 70%, 
            rgba(2,5,9,${overlayIntensity}) 100%)`
        }}
      ></div>

      {/* 3. Subtle Blue Glow (Optional: keeps the "tech" feel) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(26,107,204,0.15))' }}
      ></div>
    </div>
  )
}