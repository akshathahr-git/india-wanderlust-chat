
import React from 'react';
import { Globe, Map, Compass, Plane, Mountain } from 'lucide-react';

const TravelBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Travel-themed gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-100 via-white to-pink-100"></div>
      
      {/* Travel-themed decorative elements with subtle styling */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-pink-500/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <Globe className="h-10 w-10 text-pink-500/40" />
        </div>
      </div>
      
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-purple-500/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <Compass className="h-14 w-14 text-purple-500/40" />
        </div>
      </div>
      
      <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-yellow-400/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <Map className="h-8 w-8 text-yellow-400/40" />
        </div>
      </div>

      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-green-500/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <Mountain className="h-8 w-8 text-green-500/40" />
        </div>
      </div>

      <div className="absolute bottom-1/3 left-10 w-28 h-28 rounded-full bg-blue-500/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <Plane className="h-12 w-12 text-blue-500/40" />
        </div>
      </div>
      
      {/* Subtle landmark silhouettes */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-contain bg-bottom bg-no-repeat opacity-5">
        <svg viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,200 L1200,200 L1200,180 C1150,180 1120,100 1100,120 C1080,140 1050,160 1020,155 C990,150 980,130 950,135 C920,140 900,150 870,145 C840,140 830,110 800,115 C770,120 760,140 730,135 C700,130 690,100 660,105 C630,110 620,140 590,135 C560,130 550,100 520,105 C490,110 480,150 450,145 C420,140 410,110 380,115 C350,120 340,140 310,135 C280,130 270,100 240,105 C210,110 200,130 170,125 C140,120 130,90 100,95 C70,100 60,150 30,145 C0,140 0,200 0,200 Z" fill="currentColor" className="text-purple-500" />
        </svg>
      </div>
    </div>
  );
};

export default TravelBackground;
