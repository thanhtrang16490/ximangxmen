# Bottom Navigation - Global Update

## Tóm tắt
Đã cập nhật float bottom navigation để hiển thị trên tất cả các trang mobile, không chỉ trang chủ.

## Thay đổi thực hiện

### 1. BaseLayout.astro
- ✅ Thêm import `BottomNav` component
- ✅ Thêm `<BottomNav>` component trước footer với `currentPath={Astro.url.pathname}`
- ✅ Thêm class `has-bottom-nav` vào body tag

### 2. BottomNav.tsx
- ✅ Cập nhật logic để hỗ trợ đa ngôn ngữ (vi/en/cn)
- ✅ Tự động phát hiện ngôn ngữ từ URL path
- ✅ Hiển thị labels phù hợp với từng ngôn ngữ
- ✅ Cập nhật logic `isActive` để hoạt động với tất cả các trang:
  - Exact match cho trang chủ
  - Starts with match cho các trang khác (products, contact)

### 3. mobile.css
- ✅ Cập nhật spacing cho `body.has-bottom-nav`
- ✅ Thêm safe area inset support cho iPhone notch
- ✅ Thêm margin-bottom cho footer để không bị che bởi bottom nav

### 4. Cleanup
- ✅ Xóa `<BottomNav>` khỏi `src/pages/index.astro`
- ✅ Xóa `<BottomNav>` import khỏi `src/pages/index.astro`
- ✅ Xóa `<BottomNav>` import khỏi `src/pages/en/index.astro`
- ✅ Xóa `<BottomNav>` import khỏi `src/pages/cn/index.astro`

## Tính năng

### Đa ngôn ngữ
Bottom nav tự động phát hiện ngôn ngữ và hiển thị:
- 🇻🇳 Tiếng Việt: Trang chủ, Sản phẩm, Liên hệ, Báo giá
- 🇬🇧 English: Home, Products, Contact, Quote
- 🇨🇳 中文: 首页, 产品, 联系, 报价

### Active State
- Trang chủ: Exact match với path
- Các trang khác: Starts with match (vd: `/san-pham` active cho `/san-pham/abc`)
- Màu primary cho tab đang active

### Responsive
- Chỉ hiển thị trên mobile (< 768px)
- Ẩn hoàn toàn trên desktop
- Hỗ trợ safe area cho iPhone notch

### Spacing
- Body có padding-bottom để nội dung không bị che
- Footer có margin-bottom để không bị che
- Tính toán safe area inset cho iPhone

## Testing

Kiểm tra trên các trang:
- ✅ Trang chủ: `/`, `/en`, `/cn`
- ✅ Sản phẩm: `/san-pham`, `/en/products`, `/cn/products`
- ✅ Chi tiết sản phẩm: `/san-pham/[slug]`
- ✅ Liên hệ: `/lien-he`, `/en/contact`, `/cn/contact`
- ✅ Giới thiệu: `/gioi-thieu`, `/en/about`, `/cn/about`
- ✅ Tin tức: `/tin-tuc`, `/en/news`, `/cn/news`
- ✅ Đối tác: `/doi-tac`, `/en/partners`, `/cn/partners`

## Kết quả
Bottom navigation giờ đây hiển thị trên tất cả các trang mobile với:
- Đa ngôn ngữ tự động
- Active state chính xác
- Spacing phù hợp
- Không bị duplicate trên trang chủ
