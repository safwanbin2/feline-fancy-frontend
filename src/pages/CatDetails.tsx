
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCatById } from '@/services/api';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import TemperamentBadge from '@/components/TemperamentBadge';
import StatBar from '@/components/StatBar';
import { ArrowLeft, Heart, Weight, Globe, Calendar, AlertCircle, Database, Shield, Award, Hexagon } from 'lucide-react';

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
        <div className="container mx-auto px-4 py-8 flex-grow cyber-dots">
          <div className="animate-pulse space-y-8">
            <div className="h-6 bg-neon-green/10 rounded w-1/4"></div>
            <div className="h-96 bg-neon-green/5 rounded-lg"></div>
            <div className="h-8 bg-neon-green/10 rounded w-1/2"></div>
            <div className="h-24 bg-neon-green/5 rounded"></div>
            <div className="h-48 bg-neon-green/5 rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const breed = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0] : null;
  
  return (
    <div className="min-h-screen flex flex-col cyber-grid">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Link to="/" className="inline-flex items-center text-white/60 hover:text-neon-green mb-6 transition-colors neo-button">
          <ArrowLeft size={18} className="mr-2" />
          Back to cats
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="neo-glass-hover animate-fade-in relative group">
            <img 
              src={cat.url} 
              alt={breed?.name || 'Cyber Cat'} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            
            {/* Overlay UI elements */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm border border-neon-green/30 px-3 py-1 rounded font-orbitron text-neon-green text-sm">
              <Database size={12} className="inline mr-1" /> ID: {cat.id.substring(0, 8)}
            </div>
            
            <div className="absolute top-4 right-4">
              <button className="neo-glass p-2 rounded-full hover:border-neon-green/50 transition-all duration-300">
                <Heart size={18} className="text-neon-green" />
              </button>
            </div>
            
            {/* Scan lines */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-neon-green/5 to-transparent opacity-30"></div>
            
            {/* Animated corner embellishments */}
            <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-px h-8 bg-neon-green/50"></div>
              <div className="absolute top-0 left-0 w-8 h-px bg-neon-green/50"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
              <div className="absolute bottom-0 right-0 w-px h-8 bg-neon-green/50"></div>
              <div className="absolute bottom-0 right-0 w-8 h-px bg-neon-green/50"></div>
            </div>
          </div>
          
          <div className="animate-slide-in neo-glass p-6">
            {breed ? (
              <>
                <h1 className="text-3xl font-orbitron text-white mb-2 flex items-center gap-2">
                  <Hexagon size={24} className="text-neon-green" />
                  {breed.name}
                </h1>
                
                <div className="mb-4 p-3 bg-neon-green/5 border border-neon-green/20 rounded-lg">
                  <p className="text-white/80 leading-relaxed">{breed.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {breed.temperament.split(', ').map((trait) => (
                    <TemperamentBadge key={trait} trait={trait} />
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="neo-glass p-3 flex items-start gap-3">
                    <Globe className="text-neon-green mt-0.5" />
                    <div>
                      <h3 className="font-medium text-neon-green">Origin</h3>
                      <p className="text-white/70">{breed.origin}</p>
                    </div>
                  </div>
                  
                  <div className="neo-glass p-3 flex items-start gap-3">
                    <Weight className="text-neon-green mt-0.5" />
                    <div>
                      <h3 className="font-medium text-neon-green">Weight</h3>
                      <p className="text-white/70">{breed.weight.metric} kg</p>
                    </div>
                  </div>
                  
                  <div className="neo-glass p-3 flex items-start gap-3">
                    <Calendar className="text-neon-green mt-0.5" />
                    <div>
                      <h3 className="font-medium text-neon-green">Life Span</h3>
                      <p className="text-white/70">{breed.life_span} years</p>
                    </div>
                  </div>
                  
                  <div className="neo-glass p-3 flex items-start gap-3">
                    <Shield className="text-neon-green mt-0.5" />
                    <div>
                      <h3 className="font-medium text-neon-green">Health</h3>
                      <p className="text-white/70">
                        {breed.health_issues && breed.health_issues <= 2 ? 'Optimal' : 
                         breed.health_issues && breed.health_issues <= 4 ? 'Standard' : 'Monitor'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-orbitron text-xl mb-4 flex items-center gap-2 text-white">
                  <Award size={18} className="text-neon-green" />
                  Characteristics
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 neo-glass p-4">
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
                <h2 className="text-2xl font-orbitron text-neon-green mb-4">Cyber Feline</h2>
                <p className="text-white/60 mb-6">No breed information available for this digital cat specimen.</p>
                <button className="neo-button flex items-center gap-2 mx-auto">
                  <Heart size={18} />
                  <span>Add to Collection</span>
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
