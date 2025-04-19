
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Cat, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center">
        <div className="text-center max-w-lg animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Cat size={80} className="text-cat-feline animate-float" />
              <span className="absolute -top-2 -right-2 text-4xl">?</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-cat-dark mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Looks like this cat wandered off. The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link
            to="/"
            className="px-6 py-3 bg-cat-feline text-white rounded-lg shadow-md hover:shadow-lg hover:bg-cat-secondary transition-all inline-flex items-center gap-2"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
