export interface MenuItemRaw {
  id: string;
  categoria: string;
  nombre: string;
  descripcion: string;
  precio: string;
  disponible: string; // viene como 'TRUE' / 'FALSE' (o vacío) desde Sheets
  etiqueta?: string;
}

export interface MenuItemData {
  id: string;
  categoria: string;
  nombre: string;
  descripcion: string;
  precio: string;
  disponible: boolean;
  etiqueta?: string;
}

export interface CategoryGroup {
  categoria: string;
  slug: string;
  items: MenuItemData[];
}
