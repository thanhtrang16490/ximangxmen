# Translation Status - Homepage EN/CN

## ✅ Completed

### Data Imports
- ✅ EN: Import `homepageContentEn`, `caseStudiesEn`, `companyInfoEn`
- ✅ CN: Import `homepageContentCn`, `caseStudiesCn`, `companyInfoCn`
- ✅ Created `homepage-static-en.ts` and `homepage-static-cn.ts` with translations

### Replaced Content
- ✅ SEO: title, description, keywords
- ✅ Stats array (4 items)
- ✅ Testimonials array (3 items)
- ✅ FAQs array (10 items for VI, 4 for EN/CN)
- ✅ Hero title and some subtitles
- ✅ Products section title

## ⚠️ Remaining Vietnamese Text in EN/CN Pages

### Hero Section
- Line 222: `Sản xuất trực tiếp • Factory 3,000m² • Cung ứng trọn gói cho EPC`
- Line 255: `Contact báo giá dự án` (appears multiple times)

### Company Intro Section  
- Line 406: `Chúng tôi chuyên cung cấp giải pháp trọn gói cho các dự án EPC quy mô lớn.`
- Line 430: `Quy trình khép kín`
- Line 431: `Từ thiết kế khuôn, đùn ép, xử lý bề mặt đến gia công CNC và QC`
- Line 442: `Đội ngũ chuyên nghiệp`

### Products Section
- Line 585: `Nhóm sản phẩm`
- Line 593: `Sản xuất trực tiếp`

### Production Section
- Line 631: `Năng lực cốt lõi`
- Line 637: `Từ thiết kế khuôn đến sản phẩm hoàn thiện, mọi công đoạn đều được kiểm soát chặt chẽ`
- Line 771: `Đáp ứng dự án 10+ MWp/tháng. Delivery đúng tiến độ. Kho vật tư sẵn sàng cho dự án khẩn cấp.`

### EPC Solutions Section
- Line 799: `Giải pháp EPC chuyên nghiệp`
- Line 847: `Contact báo giá dự án`
- Line 853: `Xem catalog sản phẩm`

### Why Choose Section
- Line 881: `Tại Sao Chọn Quang Minh?`
- Line 883: `Đối tác tin cậy cho dự án EPC của bạn với 5 lợi thế vượt trội`
- Line 934: `Sản xuất trực tiếp, không qua trung gian. Save 30% costs so với nhập khẩu.`
- Line 1060: `Đội ngũ 10+ kỹ sư giàu kinh nghiệm dự án MWp. Hỗ trợ tại hiện trường.`

### CTA Section
- Line 1022: `Contact ngay để nhận báo giá chi tiết, thiết kế kỹ thuật miễn phí và tư vấn giải pháp tối ưu cho dự án MWp của bạn`
- Line 1097: `Tải catalog sản phẩm`
- Line 1107: `Xem năng lực nhà máy`

### Products Data (hardcoded arrays)
- Lines 100-180: `products` array with Vietnamese descriptions
- Lines 182-200: `pricePreview` array with Vietnamese text
- Lines 202-220: `whyChooseUs` array with Vietnamese titles

## 📝 Recommended Solution

Due to the large amount of hardcoded Vietnamese text in HTML, there are 3 approaches:

### Option 1: Manual Replacement (Time-consuming)
Replace each Vietnamese text with translation variables one by one.

### Option 2: Use Translation Variables (Recommended)
Already created `homepageStaticEn.htmlContent` and `homepageStaticCn.htmlContent` with all translations.
Need to replace ~50+ hardcoded texts with variables like `{homepageStaticEn.htmlContent.heroSubtitle}`.

### Option 3: Create Separate EN/CN Homepage Files
Copy Vietnamese homepage and translate all content at once. This ensures no Vietnamese text remains but requires maintaining 3 separate files.

## 🎯 Next Steps

1. Decide on approach (Option 2 recommended)
2. Systematically replace all remaining Vietnamese text
3. Test build: `npm run build`
4. Verify translations on live site

## 📊 Progress

- Data layer: 90% complete ✅
- HTML content: 30% complete ⚠️
- Overall: 60% complete

Build is successful but Vietnamese content still visible in EN/CN pages.
