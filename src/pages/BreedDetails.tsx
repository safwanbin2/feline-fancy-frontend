
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchBreedById, fetchCatsByBreed } from '@/services/api';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CatCard from '@/components/CatCard';
import TemperamentBadge from '@/components/TemperamentBadge';
import StatBar from '@/components/StatBar';
import { ArrowLeft, Weight, Globe, Calendar, AlertCircle } from 'lucide-react';

const BreedDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: breed, isLoading: isLoadingBreed } = useQuery({
    queryKey: ['breed', id],
    queryFn: () => fetchBreedById(id!),
    enabled: !!id,
  });
  
  const { data: cats, isLoading: isLoadingCats } = useQuery({
    queryKey: ['breedCats', id],
    queryFn: () => fetchCatsByBreed(id!, 8),
    enabled: !!id,
  });
  
  const isLoading = isLoadingBreed || isLoadingCats;
  
  if (isLoading || !breed) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="container mx-auto px-4 py-8 flex-grow">
          <div className="animate-pulse space-y-8">
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-48 bg-gray-200 rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Link to="/breeds" className="inline-flex items-center text-cat-secondary hover:text-cat-feline mb-6 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to breeds
        </Link>
        
        <div className="bg-white rounded-xl shadow-md p-8 mb-12 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              {breed.image && (
                <img 
                  src={breed.image.url} 
                  alt={breed.name} 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              )}
            </div>
            
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-cat-dark mb-4">{breed.name}</h1>
              
              <p className="text-gray-700 mb-6">{breed.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {breed.temperament.split(', ').map((trait) => (
                  <TemperamentBadge key={trait} trait={trait} />
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Globe className="text-cat-feline mt-0.5" />
                  <div>
                    <h3 className="font-medium">Origin</h3>
                    <p className="text-gray-600">{breed.origin}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Weight className="text-cat-feline mt-0.5" />
                  <div>
                    <h3 className="font-medium">Weight</h3>
                    <p className="text-gray-600">{breed.weight.metric} kg</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="text-cat-feline mt-0.5" />
                  <div>
                    <h3 className="font-medium">Life Span</h3>
                    <p className="text-gray-600">{breed.life_span} years</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-cat-feline mt-0.5" />
                  <div>
                    <h3 className="font-medium">Health Issues</h3>
                    <p className="text-gray-600">
                      {breed.health_issues && breed.health_issues <= 2 ? 'Low' : 
                       breed.health_issues && breed.health_issues <= 4 ? 'Moderate' : 'High'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold text-xl mb-4">Characteristics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
              {breed.adaptability && <StatBar label="Adaptability" value={breed.adaptability} />}
              {breed.affection_level && <StatBar label="Affection Level" value={breed.affection_level} />}
              {breed.child_friendly && <StatBar label="Child Friendly" value={breed.child_friendly} />}
              {breed.dog_friendly && <StatBar label="Dog Friendly" value={breed.dog_friendly} />}
              {breed.energy_level && <StatBar label="Energy Level" value={breed.energy_level} />}
              {breed.grooming && <StatBar label="Grooming" value={breed.grooming} />}
              {breed.intelligence && <StatBar label="Intelligence" value={breed.intelligence} />}
              {breed.shedding_level && <StatBar label="Shedding Level" value={breed.shedding_level} />}
              {breed.social_needs && <StatBar label="Social Needs" value={breed.social_needs} />}
              {breed.stranger_friendly && <StatBar label="Stranger Friendly" value={breed.stranger_friendly} />}
              {breed.vocalisation && <StatBar label="Vocalisation" value={breed.vocalisation} />}
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">{breed.name} Cats</h2>
          
          <div className="image-grid animate-fade-in">
            {cats?.map((cat, index) => (
              <CatCard key={cat.id} cat={cat} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BreedDetails;
