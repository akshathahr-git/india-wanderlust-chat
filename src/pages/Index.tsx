
import React from 'react';
import TravelChatbot from '@/components/TravelChatbot';
import TravelBackground from '@/components/TravelBackground';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 relative bg-gradient-to-b from-white via-india-teal/5 to-india-orange/5">
      <TravelBackground />
      
      <header className="text-center mb-8 max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-india-teal mb-3">Incredible-Bot</h1>
        <p className="text-gray-600 text-lg">Your travel companion for exploring incredible destinations</p>
      </header>
      
      <TravelChatbot />
      
      <footer className="mt-10 text-center text-gray-500 max-w-lg mx-auto px-4">
        <p className="text-sm md:text-base">Discover diverse landscapes, rich culture, and delicious cuisine</p>
        <p className="mt-1 text-sm md:text-base">Ask about destinations, itineraries, travel tips, and more!</p>
      </footer>
    </div>
  );
};

export default Index;
