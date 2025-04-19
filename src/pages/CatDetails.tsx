
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCatById } from '@/services/api';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import TemperamentBadge from '@/components/TemperamentBadge';
import StatBar from '@/components/StatBar';
import { ArrowLeft, Heart, Weight, Globe, Calendar, AlertCircle } from 'lucide-react';

const CatDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: cat, isLoading } = useQuery({
    queryKey: ['cat', id],
    queryFn: () => fetchCatById(id!),
    enabled: !!id,
  });
  
  if (isLoading || !cat) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="container mx-auto px-4 py-8 flex-grow">
          <div className="animate-pulse space-y-8">
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-96 bg-gray-200 rounded-lg"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2"></div>
            <div className="h-24 bg-gray-200 rounded"></div>
            <div className="h-48 bg-gray-200 rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const breed = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0] : null;
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Link to="/" className="inline-flex items-center text-cat-secondary hover:text-cat-feline mb-6 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to cats
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="cat-details-image animate-fade-in">
            <img 
              src={cat.url} 
              alt={breed?.name || 'Cat image'} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="animate-slide-in">
            {breed ? (
              <>
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
                
                <h3 className="font-semibold text-xl mb-4">Characteristics</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
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
              </>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Beautiful Cat</h2>
                <p className="text-gray-500 mb-6">No breed information available for this cat.</p>
                <button className="flex items-center gap-2 mx-auto px-4 py-2 rounded-full bg-cat-light text-cat-secondary">
                  <Heart size={18} />
                  Add to Favorites
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CatDetails;
