import { create } from 'zustand'; 

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Spaghetti Bolognese', description: 'A classic Italian pasta dish with meat sauce.' },
    { id: 2, title: 'Chicken Curry', description: 'A flavorful chicken curry with spices and coconut milk.' },
  ],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
