
import React from 'react';
import TravelChatbot from '@/components/TravelChatbot';
import TravelBackground from '@/components/TravelBackground';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 relative">
      <TravelBackground />
      
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-india-teal mb-2">Incredible-Bot</h1>
        <p className="text-gray-600 max-w-md mx-auto">Your animated travel companion for exploring incredible destinations</p>
      </header>
      
      <TravelChatbot />
      
      <footer className="mt-10 text-center text-sm text-gray-500">
        <p>Discover diverse landscapes, rich culture, and delicious cuisine</p>
        <p className="mt-1">Ask about destinations, itineraries, travel tips, and more!</p>
      </footer>
    </div>
  );
};

export default Index;
