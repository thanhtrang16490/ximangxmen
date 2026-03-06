#!/bin/bash

# Script to replace remaining Vietnamese text in EN homepage

FILE="src/pages/en/index.astro"

# Replace subtitle
sed -i '' 's/Sản xuất trực tiếp • Factory 3,000m² • Cung ứng trọn gói cho EPC/{homepageStaticEn.htmlContent.heroSubtitle}/g' "$FILE"

# Replace company intro description
sed -i '' 's/Chúng tôi chuyên cung cấp giải pháp trọn gói cho các dự án EPC quy mô lớn\./{homepageStaticEn.htmlContent.companyIntroDescription}/g' "$FILE"

# Replace key points
sed -i '' 's/Quy trình khép kín/Closed Process/g' "$FILE"
sed -i '' 's/Từ thiết kế khuôn, đùn ép, xử lý bề mặt đến gia công CNC và QC/From mold design, extrusion, surface treatment to CNC machining and QC/g' "$FILE"
sed -i '' 's/Đội ngũ chuyên nghiệp/Professional Team/g' "$FILE"

# Replace product section
sed -i '' 's/Nhóm sản phẩm/Product Groups/g' "$FILE"
sed -i '' 's/Sản xuất trực tiếp/Direct Manufacturing/g' "$FILE"

# Replace production section
sed -i '' 's/Năng lực cốt lõi/Core Competency/g' "$FILE"
sed -i '' 's/Từ thiết kế khuôn đến sản phẩm hoàn thiện, mọi công đoạn đều được kiểm soát chặt chẽ/From mold design to finished product, every step is strictly controlled/g' "$FILE"

# Replace capacity section
sed -i '' 's/Năng lực cung ứng/Supply Capacity/g' "$FILE"
sed -i '' 's/Đáp ứng dự án 10+ MWp\/tháng\. Delivery đúng tiến độ\. Kho vật tư sẵn sàng cho dự án khẩn cấp\./Meet 10+ MWp\/month projects. On-time delivery. Ready stock for urgent projects./g' "$FILE"

# Replace EPC section
sed -i '' 's/Giải pháp EPC chuyên nghiệp/Professional EPC Solutions/g' "$FILE"

# Replace CTA buttons
sed -i '' 's/Xem catalog sản phẩm/View Product Catalog/g' "$FILE"
sed -i '' 's/Tải catalog sản phẩm/Download Product Catalog/g' "$FILE"
sed -i '' 's/Xem năng lực nhà máy/View Factory Capacity/g' "$FILE"

# Replace why choose section
sed -i '' 's/Tại Sao Chọn Quang Minh?/Why Choose Quang Minh?/g' "$FILE"
sed -i '' 's/Đối tác tin cậy cho dự án EPC của bạn với 5 lợi thế vượt trội/Reliable partner for your EPC project with 5 outstanding advantages/g' "$FILE"

# Replace advantages
sed -i '' 's/Sản xuất trực tiếp, không qua trung gian\. Save 30% costs so với nhập khẩu\./Direct manufacturing, no intermediaries. Save 30% costs compared to imports./g' "$FILE"
sed -i '' 's/Đội ngũ 10+ kỹ sư giàu kinh nghiệm dự án MWp\. Hỗ trợ tại hiện trường\./Team of 10+ engineers with MWp project experience. On-site support./g' "$FILE"

echo "Replacement completed for $FILE"
