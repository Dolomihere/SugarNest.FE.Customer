export interface Product {
  productId: string,
  name: string,
  description: string,
  details: string | null,
  isActive: boolean,
  imgs: string[],
  unitPrice: number,
  deletedAt: string | null,
  deletedBy: string | null,
  isDeleted: boolean,
  createdAt: string,
  createdBy: string | null,
  lastUpdatedAt: string | null,
  lastUpdatedBy: string | null,
  categoryId: string,
  categoryName: string,
  averageRatingPoint: number,
  ratingCount: number,
  optionCount: number
}

export interface Category {
  CategoryId: string,
  Name: string,
  ActiveStatus: number,
  ProductCount: number,
  CreateAt: Date
}

export interface SearchQuery {
  searchTerm: string,
  sortBy: string,
  sortDecending: boolean,
  filter: Filter,
  pageIndex: number,
  pageSize: number
}

export interface Filter {
  isActive: boolean,
  categoryId: string
}
