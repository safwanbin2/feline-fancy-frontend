
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchRandomCats } from '@/services/api';
import CatCard from '@/components/CatCard';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LoadingGrid from '@/components/LoadingGrid';
import { PawPrint } from 'lucide-react';

const Index: React.FC = () => {
  const { data: cats, isLoading, refetch } = useQuery({
    queryKey: ['randomCats'],
    queryFn: () => fetchRandomCats(12),
  });

  const handleLoadMore = () => {
    refetch();
  };

  if (isLoading && !cats) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-6">Featured Cats</h2>
          <LoadingGrid />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-2xl font-semibold mb-6">Featured Cats</h2>
        
        <div className="image-grid">
          {cats?.map((cat, index) => (
            <CatCard key={cat.id} cat={cat} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-white border border-cat-feline text-cat-feline rounded-lg hover:bg-cat-light transition-all flex items-center gap-2 mx-auto"
          >
            <PawPrint size={20} />
            Load More Cats
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
