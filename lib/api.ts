import { User } from './types'

const API_URL = 'https://jsonplaceholder.typicode.com'

export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${API_URL}/users`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }
    
    return response.json()
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}