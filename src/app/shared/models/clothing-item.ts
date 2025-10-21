export interface ClothingItem {
  id: number;
  name: string; // Назва товару
  description: string; // Опис товару
  price: number; // Ціна
  imageUrl: string; // URL зображення товару
  category: string; // Категорія
  size: string[]; // Доступні розміри
  color?: string; // Колір (необов'язкове поле)
}
