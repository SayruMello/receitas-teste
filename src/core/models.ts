export type Category = {
  id: string
  name: string
  createdAt: Date
}

export type Ingredient = {
  id: string
  name: string
  createdAt: Date
}

export type Recipe = {
  id: string
  title: string
  description?: string
  ingredients: { ingredientId: string; quantity: number; unit: string }[]
  steps: string[]
  servings: number
  categoryId: string
  state: 'draft' | 'published' | 'archived' // Estado da receita: rascunho, publicada ou arquivada
  createdAt: Date
}

// Adicionamos o campo 'state' para controlar o workflow da receita (draft, published, archived)
export type CreateRecipeInput = {
  title: string
  description?: string
  ingredients: { name: string; quantity: number; unit: string }[]
  steps: string[]
  servings: number
  categoryId: string
}
