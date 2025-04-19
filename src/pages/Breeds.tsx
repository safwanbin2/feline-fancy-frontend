
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchBreeds, fetchCatsByBreed } from '@/services/api';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BreedFilter from '@/components/BreedFilter';
import CatCard from '@/components/CatCard';
import BreedCard from '@/components/BreedCard';
import LoadingGrid from '@/components/LoadingGrid';
import useCatStore from '@/store/useCatStore';

const Breeds: React.FC = () => {
  const { selectedBreed, setSelectedBreed } = useCatStore();
  
  const { data: breeds, isLoading: isLoadingBreeds } = useQuery({
    queryKey: ['breeds'],
    queryFn: fetchBreeds,
  });
  
  const { data: catsByBreed, isLoading: isLoadingCatsByBreed } = useQuery({
    queryKey: ['catsByBreed', selectedBreed],
    queryFn: () => fetchCatsByBreed(selectedBreed!, 12),
    enabled: !!selectedBreed,
  });
  
  const isLoading = isLoadingBreeds || (selectedBreed && isLoadingCatsByBreed);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Cat Breeds</h1>
          <p className="text-gray-600">
            Explore different cat breeds and discover their unique characteristics.
          </p>
        </div>
        
        {isLoadingBreeds ? (
          <div className="animate-pulse h-12 bg-gray-200 rounded-lg w-full mb-8"></div>
        ) : (
          <BreedFilter
            breeds={breeds || []}
            selectedBreed={selectedBreed}
            onSelectBreed={setSelectedBreed}
          />
        )}
        
        {isLoading ? (
          <LoadingGrid count={12} />
        ) : selectedBreed ? (
          <>
            <h2 className="text-2xl font-semibold mb-6">
              {breeds?.find(breed => breed.id === selectedBreed)?.name} Cats
            </h2>
            <div className="image-grid">
              {catsByBreed?.map((cat, index) => (
                <CatCard key={cat.id} cat={cat} index={index} />
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breeds?.map((breed, index) => (
              <BreedCard key={breed.id} breed={breed} index={index} />
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Breeds;
