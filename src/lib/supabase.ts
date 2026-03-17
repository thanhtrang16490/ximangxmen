// Static data API - Vietnamese only
import { 
  getProducts as getStaticProducts, 
  getProductBySlug as getStaticProductBySlug, 
  getCategories as getStaticCategories, 
  type Product, 
  type Category 
} from '../data/products'

// Re-export types
export type { Product, Category }

// Helper functions that match the old Supabase API
export async function getProducts(category?: string): Promise<Product[]> {
  console.log('Loading products from static data, language: vi')
  const products = getStaticProducts(category)
  console.log('Static data returned', products.length, 'products')
  return products
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  console.log('Loading product by slug:', slug, 'language: vi')
  return getStaticProductBySlug(slug)
}

export async function getCategories(): Promise<Category[]> {
  console.log('Loading categories from static data, language: vi')
  const categories = getStaticCategories()
  console.log('Static data returned', categories.length, 'categories')
  return categories
}