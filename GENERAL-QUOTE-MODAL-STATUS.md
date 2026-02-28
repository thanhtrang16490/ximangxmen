# GeneralQuoteModal.astro - Trạng thái triển khai

## ✅ Đã hoàn thành
1. Tạo file GeneralQuoteModal.astro cơ bản
2. Thêm đầy đủ translations cho 3 ngôn ngữ (vi, en, cn)
3. Thêm emailSubject vào translations để hỗ trợ chia sẻ qua email với subject

## 🔄 Đang triển khai
File hiện tại chỉ có cấu trúc cơ bản. Cần thêm các tính năng sau:

### 1. Cấu trúc 3 bước
- ✅ Step 1: Chọn sản phẩm (với 2 tabs: Custom và Capacity)
- ✅ Step 2: Thông tin liên hệ
- ✅ Step 3: Thông báo thành công

### 2. Tính năng chính
- [ ] Tab "Báo giá tùy chỉnh" - chọn sản phẩm thủ công
- [ ] Tab "Báo giá theo công suất" - tự động tính toán vật tư
  - Capacity calculator với các nút quick select (5kW, 10kW, 20kW, etc.)
  - Auto-calculate khi thay đổi công suất hoặc loại panel
  - Hiển thị số tấm pin tự động
- [ ] Form validation chỉ ở step 2
- [ ] Step 1 cho phép tạo báo giá generic (không cần thông tin khách hàng)

### 3. Mobile optimization
- [ ] Full-screen modal trên mobile
- [ ] Rounded corners trên desktop
- [ ] Sticky header & footer với safe area insets
- [ ] Touch-friendly buttons
- [ ] Responsive layout cho capacity calculator

### 4. Download & Preview
- [ ] Preview button - HTML trên desktop, PNG trên mobile
- [ ] Download PDF button
- [ ] Download PNG button
- [ ] Toast notifications thay vì alerts

### 5. Share functionality (YÊU CẦU MỚI)
- [ ] Share button ở step 3
- [ ] Chia sẻ với file PNG đính kèm
- [ ] Nội dung chia sẻ ngắn gọn (không có tiêu đề dài)
- [ ] **Thêm subject khi chia sẻ qua email** (đã có trong translations)
- [ ] Fallback cho trình duyệt không hỗ trợ Web Share API

### 6. Success page (Step 3)
- [ ] Hiển thị email khách hàng nổi bật
- [ ] Quote number tự động
- [ ] Thông tin liên hệ hỗ trợ (rõ ràng là "hỗ trợ")
- [ ] 3 bước tiếp theo
- [ ] Buttons: Download, Share, Close (2 rows trên mobile)

## 📝 Ghi chú kỹ thuật
- File cần khoảng 2000+ dòng code để implement đầy đủ
- Sử dụng jsPDF và html2canvas từ CDN
- Web Share API với file attachment
- Responsive design với Tailwind CSS
- Toast notifications với slide animation

## 🎯 Ưu tiên tiếp theo
1. Thêm share functionality với email subject
2. Implement 3-step structure
3. Add capacity calculator
4. Mobile optimizations
5. Download/Preview features

## 🔗 Tham khảo
- Context transfer summary có đầy đủ chi tiết implementation
- MultiStepQuoteModal.astro có thể tham khảo cấu trúc cơ bản
