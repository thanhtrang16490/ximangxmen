# Homepage B2B Redesign - Design Document

## Design Philosophy
Thiết kế theo phong cách Apple: Tối giản, chuyên nghiệp, tập trung vào nội dung và trải nghiệm người dùng.

## Color Palette

### Primary Colors
```css
--primary: #1e40af;        /* Professional Blue */
--primary-dark: #1e3a8a;   /* Darker Blue */
--primary-light: #3b82f6;  /* Lighter Blue */
```

### Neutral Colors
```css
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-200: #e5e7eb;
--gray-600: #4b5563;
--gray-900: #111827;
--white: #ffffff;
```

### Accent Colors
```css
--accent: #10b981;         /* Success Green */
--warning: #f59e0b;        /* Warning Orange */
--error: #ef4444;          /* Error Red */
```

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

### Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

## Spacing System
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

## Section Designs

### 1. Hero Section

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│         [Background Image]          │
│         [Gradient Overlay]          │
│                                     │
│     Headline (text-6xl, bold)       │
│     Subtitle (text-xl, light)       │
│                                     │
│   [CTA Primary]  [CTA Secondary]    │
│                                     │
│     [Trust Indicators - 4 items]    │
│                                     │
└─────────────────────────────────────┘
```

**Specifications:**
- Height: 100vh (desktop), 80vh (mobile)
- Background: Image with dark overlay (opacity: 0.4)
- Text: White, center-aligned
- CTAs: Large buttons (px-8 py-4)
- Animation: Fade in + slide up

**Content:**
```
Headline: "Giải Pháp Kết Cấu Nhôm Cho Dự Án Điện Mặt Trời MWp"
Subtitle: "Sản xuất trực tiếp • Nhà máy 3,000m² • Cung ứng trọn gói cho EPC"
CTA 1: "Liên hệ báo giá dự án"
CTA 2: "Xem năng lực sản xuất"

Trust Indicators:
- 1,000+ Khách hàng
- 16+ Năm kinh nghiệm
- 3,000m² Nhà máy
- ISO 9001:2015
```

### 2. Giới thiệu công ty

**Layout:**
```
┌─────────────────────────────────────┐
│  [Image/Video]  │  [Content]        │
│                 │                   │
│   Factory       │  Heading          │
│   Photo         │  Description      │
│                 │  • Point 1        │
│                 │  • Point 2        │
│                 │  • Point 3        │
│                 │  [Learn More]     │
└─────────────────────────────────────┘
```

**Specifications:**
- Layout: 50/50 split (desktop), stacked (mobile)
- Image: Aspect ratio 16:9
- Content: Left-aligned, generous padding
- Animation: Scroll-triggered fade in

**Content:**
```
Heading: "Quang Minh - Đối Tác Tin Cậy Cho Dự Án Của Bạn"

Description:
"Công ty Cổ phần Kỹ thuật Công nghệ Quang Minh là nhà sản xuất trực tiếp các sản phẩm kết cấu nhôm và phụ kiện cho hệ thống điện năng lượng mặt trời."

Key Points:
• Nhà máy sản xuất 3,000m² tại KCN Nguyên Khê, Hà Nội
• Quy trình sản xuất khép kín từ khuôn đến thành phẩm
• Đội ngũ kỹ sư và công nhân lành nghề
• Kinh nghiệm cung ứng cho các dự án MWp quy mô lớn
```

### 3. Năng lực cốt lõi

**Layout:**
```
┌─────────────────────────────────────┐
│         Heading (center)            │
│                                     │
│  ┌──────┐  ┌──────┐  ┌──────┐     │
│  │ Icon │  │ Icon │  │ Icon │     │
│  │Title │  │Title │  │Title │     │
│  │ Desc │  │ Desc │  │ Desc │     │
│  └──────┘  └──────┘  └──────┘     │
│                                     │
│  ┌──────┐  ┌──────┐  ┌──────┐     │
│  │ Icon │  │ Icon │  │ Icon │     │
│  │Title │  │Title │  │Title │     │
│  │ Desc │  │ Desc │  │ Desc │     │
│  └──────┘  └──────┘  └──────┘     │
└─────────────────────────────────────┘
```

**Specifications:**
- Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Cards: White background, subtle shadow, hover effect
- Icons: 48x48px, primary color
- Animation: Stagger fade in on scroll

**Content:**
```
Heading: "Năng Lực Sản Xuất Chuyên Nghiệp"

Capabilities:
1. Nhôm Hợp Kim 6xxx
   - Sản xuất profile nhôm 6005, 6061, 6063
   - Đáp ứng tiêu chuẩn quốc tế

2. Quy Trình Khép Kín
   - Thiết kế khuôn → Đùn ép → Xử lý bề mặt → QC
   - Kiểm soát chất lượng từng công đoạn

3. Thiết Bị Hiện Đại
   - Máy đùn ép công suất lớn
   - Dây chuyền xử lý bề mặt tự động

4. Đội Ngũ Chuyên Nghiệp
   - Kỹ sư thiết kế & kỹ thuật
   - Công nhân lành nghề

5. Kiểm Soát Chất Lượng
   - Quy trình QC nghiêm ngặt
   - Chứng nhận ISO 9001:2015

6. Năng Lực Cung Ứng
   - Sản lượng ổn định
   - Đáp ứng dự án quy mô lớn
```

### 4. Danh mục sản phẩm

**Layout:**
```
┌─────────────────────────────────────┐
│         Heading (center)            │
│         Subtitle                    │
│                                     │
│  ┌────────┐ ┌────────┐ ┌────────┐ │
│  │ Image  │ │ Image  │ │ Image  │ │
│  │ Title  │ │ Title  │ │ Title  │ │
│  │ Desc   │ │ Desc   │ │ Desc   │ │
│  │ [Link] │ │ [Link] │ │ [Link] │ │
│  └────────┘ └────────┘ └────────┘ │
│                                     │
│  ┌────────┐ ┌────────┐             │
│  │ Image  │ │ Image  │             │
│  │ Title  │ │ Title  │             │
│  │ Desc   │ │ Desc   │             │
│  │ [Link] │ │ [Link] │             │
│  └────────┘ └────────┘             │
│                                     │
│      [Xem tất cả sản phẩm]         │
└─────────────────────────────────────┘
```

**Specifications:**
- Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Cards: Image on top, content below
- Image: Aspect ratio 4:3, object-fit cover
- Hover: Scale image, show overlay

**Content:**
```
Heading: "Danh Mục Sản Phẩm"
Subtitle: "Giải pháp hoàn chỉnh cho hệ thống điện mặt trời"

Products:
1. Thanh Ray Nhôm
   - Profile nhôm 6005-T6
   - Độ bền cao, chống ăn mòn
   
2. Chân Đỡ & Kết Cấu
   - L-feet, Triangle bracket
   - Phù hợp mọi loại mái

3. Kẹp Pin
   - Mid clamp, End clamp
   - Kliplock, Seamlock

4. Phụ Kiện Tiếp Địa
   - Grounding accessories
   - Bulong Inox 304/316

5. Thang Cáp & Máng Cáp
   - Mạ kẽm nhúng nóng
   - Tiêu chuẩn công nghiệp
```

### 5. Giải pháp EPC

**Layout:**
```
┌─────────────────────────────────────┐
│         Heading (center)            │
│                                     │
│  [Diagram/Infographic]              │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Feature 1                   │   │
│  │ Feature 2                   │   │
│  │ Feature 3                   │   │
│  │ Feature 4                   │   │
│  └─────────────────────────────┘   │
│                                     │
│      [Liên hệ tư vấn]              │
└─────────────────────────────────────┘
```

**Content:**
```
Heading: "Giải Pháp Trọn Gói Cho Dự Án EPC"

Features:
✓ Cung cấp đầy đủ hệ giá đỡ pin NLMT
✓ Đồng bộ vật tư - tối ưu thi công
✓ Kiểm soát chi phí hiệu quả
✓ Hỗ trợ kỹ thuật toàn diện
✓ Phù hợp dự án MWp quy mô lớn
✓ Giao hàng đúng tiến độ
```

### 6. Lý do chọn Quang Minh

**Layout:**
```
┌─────────────────────────────────────┐
│         Heading (center)            │
│                                     │
│  ┌──────┐  ┌──────┐  ┌──────┐     │
│  │ Icon │  │ Icon │  │ Icon │     │
│  │Title │  │Title │  │Title │     │
│  │ Desc │  │ Desc │  │ Desc │     │
│  └──────┘  └──────┘  └──────┘     │
│                                     │
│  ┌──────┐  ┌──────┐                │
│  │ Icon │  │ Icon │                │
│  │Title │  │Title │                │
│  │ Desc │  │ Desc │                │
│  └──────┘  └──────┘                │
└─────────────────────────────────────┘
```

**Content:**
```
Heading: "Tại Sao Chọn Quang Minh?"

Reasons:
1. Chi Phí Tối Ưu
   Sản xuất trực tiếp, không qua trung gian

2. Chất Lượng Cam Kết
   ISO 9001:2015, tiêu chuẩn quốc tế

3. Thiết Bị Hiện Đại
   Máy móc công nghệ tiên tiến

4. Dịch Vụ Tận Tâm
   Hỗ trợ kỹ thuật 24/7

5. Cung Ứng Ổn Định
   Đáp ứng dự án quy mô lớn
```

### 7. Số liệu năng lực

**Layout:**
```
┌─────────────────────────────────────┐
│  ┌──────┐  ┌──────┐  ┌──────┐     │
│  │ 1000+│  │  16+ │  │ 3000 │     │
│  │Client│  │Years │  │  m²  │     │
│  └──────┘  └──────┘  └──────┘     │
│                                     │
│  ┌──────┐  ┌──────┐                │
│  │ 100+ │  │  50+ │                │
│  │Partner│ │Product│               │
│  └──────┘  └──────┘                │
└─────────────────────────────────────┘
```

**Specifications:**
- Animated counters
- Large numbers (text-5xl)
- Labels below (text-sm)
- Background: Light gray or gradient

### 8. CTA Final

**Layout:**
```
┌─────────────────────────────────────┐
│                                     │
│         Heading (center)            │
│         Subtitle                    │
│                                     │
│   [CTA Primary]  [CTA Secondary]    │
│                                     │
│         Contact Info                │
│    Phone • Email • Address          │
│                                     │
└─────────────────────────────────────┘
```

**Content:**
```
Heading: "Sẵn Sàng Bắt Đầu Dự Án?"
Subtitle: "Liên hệ ngay để nhận tư vấn và báo giá chi tiết"

CTAs:
- "Liên hệ ngay: 0947 776 662"
- "Tải catalog sản phẩm"

Contact:
📞 0947 776 662
📧 info@qmalu.com
📍 Lô CN09, KCN Nguyên Khê, Đông Anh, Hà Nội
```

## Animations & Interactions

### Scroll Animations
- Fade in + slide up
- Stagger animations for lists
- Parallax for backgrounds
- Progress indicator

### Hover Effects
- Button: Scale + shadow
- Card: Lift + shadow
- Image: Scale + overlay
- Link: Underline animation

### Loading States
- Skeleton screens
- Smooth transitions
- Progress indicators

## Responsive Breakpoints
```css
--mobile: 640px
--tablet: 768px
--desktop: 1024px
--wide: 1280px
--ultra: 1536px
```

## Component Library

### Buttons
- Primary: Solid background
- Secondary: Outline
- Text: No background
- Sizes: sm, md, lg

### Cards
- Product card
- Feature card
- Stat card
- Case study card

### Forms
- Input fields
- Textarea
- Select dropdown
- Checkbox/Radio
- Submit button

### Navigation
- Sticky header
- Mobile menu
- Breadcrumbs
- Footer

## Accessibility

### WCAG 2.1 AA Compliance
- Color contrast ratio ≥ 4.5:1
- Keyboard navigation
- Focus indicators
- Alt text for images
- ARIA labels
- Semantic HTML

## Performance Targets

### Core Web Vitals
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

### Lighthouse Scores
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95
