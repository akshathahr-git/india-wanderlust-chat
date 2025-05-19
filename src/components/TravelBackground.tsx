
import React from 'react';

const TravelBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* India-themed pattern */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-india-blue/5 to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-india-orange/10 animate-float"></div>
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-india-teal/10 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-india-yellow/10 animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Landmark silhouettes */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-contain bg-bottom bg-no-repeat opacity-10">
        <svg viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,200 L1200,200 L1200,180 C1150,180 1120,100 1100,120 C1080,140 1050,160 1020,155 C990,150 980,130 950,135 C920,140 900,150 870,145 C840,140 830,110 800,115 C770,120 760,140 730,135 C700,130 690,100 660,105 C630,110 620,140 590,135 C560,130 550,100 520,105 C490,110 480,150 450,145 C420,140 410,110 380,115 C350,120 340,140 310,135 C280,130 270,100 240,105 C210,110 200,130 170,125 C140,120 130,90 100,95 C70,100 60,150 30,145 C0,140 0,200 0,200 Z" fill="currentColor" className="text-india-blue" />
        </svg>
      </div>
    </div>
  );
};

export default TravelBackground;
