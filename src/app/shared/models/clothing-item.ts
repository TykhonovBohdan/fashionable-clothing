export interface ClothingItem {
  id: number;
  name: string; // Назва товару
  description: string; // Опис товару
  price: number; // Ціна (також це буде ціна зі знижкою, якщо є originalPrice)
  originalPrice?: number; // Опціональна стара ціна
  imageUrl: string; // URL зображення товару
  category: string; // Категорія
  size: string[]; // Доступні розміри
  color?: string; // Колір (необов'язкове поле)
}
