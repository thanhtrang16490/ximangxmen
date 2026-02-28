# Fix Nút "Nhận Báo Giá" Không Hoạt Động

## Ngày: 28/02/2026

## Vấn đề
Nút "Nhận báo giá" trên các trang sản phẩm không hoạt động khi click.

## Nguyên nhân
Các trang sản phẩm có nút với `id="quote-button"` nhưng không import component `GeneralQuoteModal.astro`, dẫn đến:
- Modal không được render trên trang
- Script để mở modal không được load
- Click vào nút không có phản ứng

## Giải pháp

### 1. Thêm import GeneralQuoteModal vào các trang sản phẩm

**Trang tiếng Việt** (`src/pages/san-pham/[slug].astro`):
```astro
import GeneralQuoteModal from '../../components/GeneralQuoteModal.astro'
```

**Trang tiếng Anh** (`src/pages/en/products/[slug].astro`):
```astro
import GeneralQuoteModal from '../../../components/GeneralQuoteModal.astro'
```

**Trang tiếng Trung** (`src/pages/cn/products/[slug].astro`):
```astro
import GeneralQuoteModal from '../../../components/GeneralQuoteModal.astro'
```

### 2. Thêm component vào cuối mỗi trang

Trước thẻ đóng `</BaseLayout>`, thêm:
```astro
<!-- Quote Modal -->
<GeneralQuoteModal />
</BaseLayout>
```

## Cách hoạt động

1. **Nút "Nhận báo giá"** có `id="quote-button"`
2. **GeneralQuoteModal** có script tự động tìm và gắn event listener:
   ```javascript
   const productButton = document.getElementById('quote-button')
   if (productButton) productButton.addEventListener('click', openModal)
   ```
3. Khi click nút → Modal mở → Người dùng có thể chọn sản phẩm và nhập thông tin

## Các nút được hỗ trợ

GeneralQuoteModal tự động kết nối với các nút sau:
- `#header-quote-button` - Nút ở header
- `#mobile-quote-button` - Nút ở mobile menu
- `#footer-quote-button` - Nút ở footer
- `#quote-button` - Nút ở trang sản phẩm (đã fix)

## Kết quả

✅ Build thành công: 148 pages
✅ Nút "Nhận báo giá" hoạt động trên tất cả trang sản phẩm
✅ Modal hiển thị đúng với 3 ngôn ngữ (vi, en, cn)
✅ Người dùng có thể chọn sản phẩm và tạo báo giá

## Test

Để test, truy cập:
- `/san-pham/[slug]` (tiếng Việt)
- `/en/products/[slug]` (tiếng Anh)
- `/cn/products/[slug]` (tiếng Trung)

Click nút "Nhận báo giá" / "Get Quote" / "获取报价" → Modal sẽ mở
