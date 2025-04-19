
import { Cat, Breed } from '@/types/cat';

const API_KEY = 'live_OLyTK3lfXGz7NdcTzQ81Hza1kfQcPrXzY4h7I2C9OFjeSQnNuV9yIWJwwpOA0jnP';
const API_URL = 'https://api.thecatapi.com/v1';

export const fetchRandomCats = async (limit: number = 10): Promise<Cat[]> => {
  try {
    const response = await fetch(
      `${API_URL}/images/search?limit=${limit}&has_breeds=1`,
      {
        headers: {
          'x-api-key': API_KEY,
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch cats');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching random cats:', error);
    return [];
  }
};

export const fetchBreeds = async (): Promise<Breed[]> => {
  try {
    const response = await fetch(
      `${API_URL}/breeds`,
      {
        headers: {
          'x-api-key': API_KEY,
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch breeds');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching breeds:', error);
    return [];
  }
};

export const fetchCatsByBreed = async (breedId: string, limit: number = 10): Promise<Cat[]> => {
  try {
    const response = await fetch(
      `${API_URL}/images/search?breed_ids=${breedId}&limit=${limit}`,
      {
        headers: {
          'x-api-key': API_KEY,
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch cats by breed');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching cats by breed:', error);
    return [];
  }
};

export const fetchCatById = async (id: string): Promise<Cat | null> => {
  try {
    const response = await fetch(
      `${API_URL}/images/${id}`,
      {
        headers: {
          'x-api-key': API_KEY,
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch cat');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching cat by id:', error);
    return null;
  }
};

export const fetchBreedById = async (id: string): Promise<Breed | null> => {
  try {
    const response = await fetch(
      `${API_URL}/breeds/${id}`,
      {
        headers: {
          'x-api-key': API_KEY,
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch breed');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching breed by id:', error);
    return null;
  }
};
