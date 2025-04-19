
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchBreeds, fetchCatsByBreed } from '@/services/api';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BreedFilter from '@/components/BreedFilter';
import CatCard from '@/components/CatCard';
import BreedCard from '@/components/BreedCard';
import LoadingGrid from '@/components/LoadingGrid';
import useCatStore from '@/store/useCatStore';
import { useLocation } from 'react-router-dom';

const Breeds: React.FC = () => {
  const { selectedBreed, setSelectedBreed } = useCatStore();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Parse search query from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('search');
    setSearchTerm(search || '');
  }, [location.search]);
  
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
  
  // Filter breeds based on search term
  const filteredBreeds = breeds?.filter(breed => 
    searchTerm ? 
      breed.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      breed.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      breed.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      breed.temperament.toLowerCase().includes(searchTerm.toLowerCase())
    : true
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2 text-foreground">Cat Breeds</h1>
          <p className="text-muted-foreground">
            Explore different cat breeds and discover their unique characteristics.
          </p>
        </div>
        
        {isLoadingBreeds ? (
          <div className="animate-pulse h-12 bg-muted rounded-lg w-full mb-8"></div>
        ) : (
          <BreedFilter
            breeds={breeds || []}
            selectedBreed={selectedBreed}
            onSelectBreed={setSelectedBreed}
          />
        )}
        
        {searchTerm && filteredBreeds?.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">No breeds found for "{searchTerm}"</h2>
            <p className="text-muted-foreground">Try a different search term or browse all breeds.</p>
          </div>
        )}
        
        {isLoading ? (
          <LoadingGrid count={12} />
        ) : selectedBreed ? (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-foreground animate-fade-in">
              {breeds?.find(breed => breed.id === selectedBreed)?.name} Cats
            </h2>
            <div className="image-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {catsByBreed?.map((cat, index) => (
                <CatCard key={cat.id} cat={cat} index={index} />
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBreeds?.map((breed, index) => (
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
