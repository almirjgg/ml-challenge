import type { SearchResult, ProductDetailsResponse } from '../../types';

const API_BASE_URL = '/api';

export const searchItems = async (query: string): Promise<SearchResult> => {
  const response = await fetch(`${API_BASE_URL}/items?q=${query}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const getItemDetails = async (id: string): Promise<ProductDetailsResponse> => {
  const response = await fetch(`${API_BASE_URL}/items/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
