# CX-MEN – Xi Măng Chống Thấm

Website landing page bán hàng cho thương hiệu xi măng chống thấm **CX-MEN**.

## Thông tin dự án

- **Thương hiệu:** CX-MEN
- **Sản phẩm:** Xi măng chống thấm PCB 40 đa dụng cao cấp
- **Hotline:** 0962.916.488
- **Email:** info@cxmen.com
- **Hỗ trợ:** 7h–22h tất cả các ngày

## Tech Stack

- [Astro](https://astro.build/) – Static site framework
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [TypeScript](https://www.typescriptlang.org/) – Type safety

## Cài đặt & Chạy local

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
```

Deploy qua [Dokploy](https://dokploy.com/) với Dockerfile hoặc Nixpacks.

## Cấu trúc thư mục

```
src/
├── pages/          # Các trang (index, lien-he, san-pham, ...)
├── layouts/        # BaseLayout
├── components/     # UI components
├── data/           # Dữ liệu sản phẩm, công ty, nội dung trang chủ
└── lib/            # Config, utilities
```
