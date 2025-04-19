
import React from 'react';

const DownloadApp = () => {
  return (
    <section className="py-16 text-center bg-white">
      <div className="container">
        <h2 className="text-xl md:text-2xl font-bold mb-6">For Better Experience Download<br />Tomato App</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#" 
            className="inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
              alt="Get it on Google Play" 
              className="h-12"
            />
          </a>
          
          <a 
            href="#" 
            className="inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
              alt="Download on the App Store" 
              className="h-12"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
