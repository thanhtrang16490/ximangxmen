// Static product data for Xi Măng Chống Thấm CX Men
export interface Product {
  id: string
  code?: string
  name: string
  slug: string
  category_id?: string
  price: number | null  // null means "contact for price"
  unit: string
  stock?: number
  image_url?: string
  description?: string
  specifications?: string
  created_at: string
  updated_at?: string
  deleted_at?: string | null
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  icon?: string
  display_order?: number
}

// Categories - Xi Măng Chống Thấm CX Men
export const categories: Category[] = [
  {
    id: 'xi-mang-chong-tham',
    name: 'Xi Măng Chống Thấm CX Men',
    slug: 'xi-mang-chong-tham',
    description: 'Xi măng pooclang PCB 40 đa dụng, chống thấm, chống co ngót, rạn nứt hoàn hảo',
    icon: '💧',
    display_order: 1
  },
  {
    id: 'ung-dung-san-mai',
    name: 'Ứng Dụng Sàn Mái',
    slug: 'ung-dung-san-mai',
    description: 'Chống thấm sàn mái, sân thượng, ban công, seno',
    icon: '🏠',
    display_order: 2
  },
  {
    id: 'ung-dung-nha-ve-sinh',
    name: 'Ứng Dụng Nhà Vệ Sinh',
    slug: 'ung-dung-nha-ve-sinh',
    description: 'Chống thấm nhà vệ sinh, bể nước, bể bơi, hố pit',
    icon: '🚿',
    display_order: 3
  },
  {
    id: 'ung-dung-tuong',
    name: 'Ứng Dụng Tường & Bê Tông',
    slug: 'ung-dung-tuong-be-tong',
    description: 'Xây trát tường ngoài, đổ bê tông chống thấm, chân tường tầng 1',
    icon: '🧱',
    display_order: 4
  }
]

// Products - Xi Măng Chống Thấm CX Men
export const products: Product[] = [
  // Xi Măng Chống Thấm CX Men - Sản phẩm chính
  {
    id: '1',
    code: 'CX-MEN-25',
    name: 'Xi Măng Chống Thấm CX Men 25kg',
    slug: 'xi-mang-chong-tham-cx-men-25kg',
    category_id: 'xi-mang-chong-tham',
    price: null,
    unit: 'bao',
    stock: 5000,
    image_url: '/products/cx-men-25kg.jpg',
    description: 'Xi măng chống thấm CX Men PCB 40 đa dụng cao cấp – công nghệ siêu kỵ nước (hiệu ứng lá sen), chống thấm vĩnh cửu theo tuổi thọ công trình.',
    specifications: `Mã sản phẩm: CX-MEN-25
Trọng lượng: 25kg/bao
Loại: Xi măng Pooclang PCB 40 đa dụng cao cấp
Thương hiệu: CX-MEN

ĐẶC TÍNH KỸ THUẬT:
• Công nghệ siêu kỵ nước – hiệu ứng "Lá Sen"
• Chống thấm thuận và nghịch cực tốt
• Chống nồm ẩm, kiềm hóa và muối tuyết triệt để
• Tạo nguyên khối liên kết bền chặt, không tách lớp, không bong tróc
• Cường độ sớm cao, rút ngắn thời gian thi công
• Tuổi thọ vĩnh cửu theo tuổi thọ công trình

KẾT QUẢ THÍ NGHIỆM (TCVN):
• Cường độ nén tỷ lệ 1:1 (TCVN 3121-11:2003): ~30,81 N/mm²
• Cường độ nén tỷ lệ 1:3 (TCVN 3121-11:2003): ~27,41 N/mm²
• Độ chống thấm (TCVN 3116:2022): 0/6 mẫu thấm ở áp lực 2–19 daN/cm²

CẤP PHỐI VỮA:
• Vữa M100: 1 bao CX Men (25kg) + 3 xô cát 18L
• Vữa M75: 1 bao CX Men (25kg) + 5 xô cát 18L

ỨNG DỤNG: Sân thượng, ban công, nhà vệ sinh, bể nước, bể cá, hồ bơi, phần ngầm, tường ngoài`,
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '2',
    code: 'CX-MEN-50',
    name: 'Xi Măng Chống Thấm CX Men 50kg',
    slug: 'xi-mang-chong-tham-cx-men-50kg',
    category_id: 'xi-mang-chong-tham',
    price: null,
    unit: 'bao',
    stock: 3000,
    image_url: '/products/cx-men-50kg.jpg',
    description: 'Xi măng chống thấm CX Men bao 50kg – tiết kiệm hơn cho công trình lớn. Công nghệ siêu kỵ nước, chống thấm vĩnh cửu.',
    specifications: `Mã sản phẩm: CX-MEN-50
Trọng lượng: 50kg/bao
Loại: Xi măng Pooclang PCB 40 đa dụng cao cấp
Thương hiệu: CX-MEN

ĐẶC TÍNH KỸ THUẬT:
• Công nghệ siêu kỵ nước – hiệu ứng "Lá Sen"
• Chống thấm thuận và nghịch cực tốt
• Cường độ nén tỷ lệ 1:1: ~30,81 N/mm² | tỷ lệ 1:3: ~27,41 N/mm²
• Độ chống thấm: 0/6 mẫu thấm ở áp lực 2–19 daN/cm²

CẤP PHỐI VỮA:
• Vữa M100: 1 bao CX Men (25kg) + 3 xô cát 18L
• Vữa M75: 1 bao CX Men (25kg) + 5 xô cát 18L`,
    created_at: '2025-01-01T00:00:00Z'
  },
  // Ứng dụng sàn mái
  {
    id: '3',
    code: 'CX-VUA-MAC150',
    name: 'Vữa Cán Mái Mác 150',
    slug: 'vua-can-mai-mac-150',
    category_id: 'ung-dung-san-mai',
    price: null,
    unit: 'bộ',
    stock: 1000,
    image_url: '/products/vua-can-mai-mac150.jpg',
    description: 'Vữa cán mái mác 150 dùng xi măng CX Men – chống thấm sàn mái, sân thượng, ban công hiệu quả cao',
    specifications: `Cấp phối vữa mác 150:
Xi măng CX Men: 1 bao (25kg)
Cát sạch: 2 xô 18L (50kg)
Nước sạch: 5-8 lít
Ứng dụng: Sàn mái, sân thượng, ban công`,
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '4',
    code: 'CX-VUA-MAC100',
    name: 'Vữa Cán Mái Mác 100',
    slug: 'vua-can-mai-mac-100',
    category_id: 'ung-dung-san-mai',
    price: null,
    unit: 'bộ',
    stock: 1000,
    image_url: '/products/vua-can-mai-mac100.jpg',
    description: 'Vữa cán mái mác 100 dùng xi măng CX Men – phù hợp cho các hạng mục chống thấm nhẹ',
    specifications: `Cấp phối vữa mác 100:
Xi măng CX Men: 1 bao (25kg)
Cát sạch: 3 xô 18L (50kg)
Nước sạch: 5-8 lít
Ứng dụng: Tường xây, trát nhẹ`,
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '5',
    code: 'CX-SENO',
    name: 'Chống Thấm Seno & Máng Nước',
    slug: 'chong-tham-seno-mang-nuoc',
    category_id: 'ung-dung-san-mai',
    price: null,
    unit: 'dịch vụ',
    stock: null,
    image_url: '/products/chong-tham-seno.jpg',
    description: 'Thi công chống thấm seno, máng nước, mái hiên bằng xi măng CX Men. Bền vững, chống thấm lâu dài.',
    specifications: `Ứng dụng: Seno, máng nước, mái hiên
Vật liệu: Xi măng CX Men + lưới thủy tinh
Bảo hành: Theo thỏa thuận
Hotline tư vấn: 096.2352.394`,
    created_at: '2025-01-01T00:00:00Z'
  },
  // Ứng dụng nhà vệ sinh & bể nước
  {
    id: '6',
    code: 'CX-NVS',
    name: 'Chống Thấm Nhà Vệ Sinh',
    slug: 'chong-tham-nha-ve-sinh',
    category_id: 'ung-dung-nha-ve-sinh',
    price: null,
    unit: 'dịch vụ',
    stock: null,
    image_url: '/products/chong-tham-nha-ve-sinh.jpg',
    description: 'Thi công chống thấm nhà vệ sinh, sàn vệ sinh bằng vữa CX Men. Chống thấm thuận và nghịch cực tốt.',
    specifications: `Ứng dụng: Nhà vệ sinh, sàn vệ sinh
Vật liệu: Xi măng CX Men + lưới thủy tinh
Thi công: Trát tường + cán nền
Hotline tư vấn: 096.2352.394`,
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '7',
    code: 'CX-BE-NUOC',
    name: 'Chống Thấm Bể Nước & Bể Bơi',
    slug: 'chong-tham-be-nuoc-be-boi',
    category_id: 'ung-dung-nha-ve-sinh',
    price: null,
    unit: 'dịch vụ',
    stock: null,
    image_url: '/products/chong-tham-be-nuoc.jpg',
    description: 'Xi măng CX Men chống thấm bể nước, bể bơi, hố pit. Chống nồm ẩm, kiềm hóa và muối triệt để.',
    specifications: `Ứng dụng: Bể nước, bể bơi, hố pit
Vật liệu: Xi măng CX Men
Thi công: Trát thành bể + cán đáy bể
An toàn cho nước sinh hoạt
Hotline tư vấn: 096.2352.394`,
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '8',
    code: 'CX-BAN-CONG',
    name: 'Chống Thấm Ban Công',
    slug: 'chong-tham-ban-cong',
    category_id: 'ung-dung-nha-ve-sinh',
    price: null,
    unit: 'dịch vụ',
    stock: null,
    image_url: '/products/chong-tham-ban-cong.jpg',
    description: 'Thi công chống thấm ban công, lô gia bằng xi măng CX Men. Bền vững theo thời gian.',
    specifications: `Ứng dụng: Ban công, lô gia
Vật liệu: Xi măng CX Men + lưới thủy tinh
Thi công: Cán vữa chống thấm
Hotline tư vấn: 096.2352.394`,
    created_at: '2025-01-01T00:00:00Z'
  },
  // Ứng dụng tường & bê tông
  {
    id: '9',
    code: 'CX-TUONG-NGOAI',
    name: 'Chống Thấm Tường Ngoài',
    slug: 'chong-tham-tuong-ngoai',
    category_id: 'ung-dung-tuong',
    price: null,
    unit: 'dịch vụ',
    stock: null,
    image_url: '/products/chong-tham-tuong-ngoai.jpg',
    description: 'Chống thấm tường ngoài, chân tường tầng 1, khe tiếp giáp giữa 2 nhà không trát được bên ngoài.',
    specifications: `Ứng dụng: Tường ngoài, chân tường tầng 1
Vật liệu: Xi măng CX Men
Thi công: Xây trát tường chống thấm
Hotline tư vấn: 096.2352.394`,
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '10',
    code: 'CX-BE-TONG',
    name: 'Đổ Bê Tông Chống Thấm',
    slug: 'do-be-tong-chong-tham',
    category_id: 'ung-dung-tuong',
    price: null,
    unit: 'dịch vụ',
    stock: null,
    image_url: '/products/do-be-tong-chong-tham.jpg',
    description: 'Xi măng CX Men PCB 40 đa dụng dùng để đổ bê tông. Cường độ sớm cao, cho phép tháo ván khuôn sớm hơn.',
    specifications: `Ứng dụng: Đổ bê tông, vữa xây
Loại: Xi măng pooclang PCB 40
Cường độ sớm cao, tháo ván khuôn sớm
Tiết kiệm thời gian và chi phí thi công
Hotline tư vấn: 096.2352.394`,
    created_at: '2025-01-01T00:00:00Z'
  }
]
// Helper functions
export function getProducts(categoryId?: string): Product[] {
  if (!categoryId || categoryId === 'all') {
    return products.filter(p => !p.deleted_at)
  }
  return products.filter(p => p.category_id === categoryId && !p.deleted_at)
}

export function getProductBySlug(slug: string): Product | null {
  const product = products.filter(p => p.slug === slug && !p.deleted_at)[0]
  return product || null
}

export function getCategories(): Category[] {
  return categories
}

export function getCategoryById(id: string): Category | null {
  const category = categories.filter(c => c.id === id)[0]
  return category || null
}
