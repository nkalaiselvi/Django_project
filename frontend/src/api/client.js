const API_BASE = 'https://wedding-backend-yhb1.onrender.com/api';

export async function fetchProducts() {
  const res = await fetch(`${API_BASE}/products/?format=json`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function fetchCategories() {
  const res = await fetch(`${API_BASE}/categories/?format=json`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}
export async function fetchReviews() {
  const res = await fetch(`${API_BASE}/reviews/?format=json`);
  if (!res.ok) throw new Error('Failed to fetch reviews');
  return res.json();
}