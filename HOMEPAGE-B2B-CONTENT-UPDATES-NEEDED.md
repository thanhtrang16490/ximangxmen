# Homepage B2B Content Updates Needed

## Status: Phase 1 - Data Layer Complete ✅

### Completed:
- ✅ `src/data/company-info.ts` - Fully updated with B2B focus
- ✅ Backup created: `src/data/homepage-content.ts.backup`

### Next: Update `src/data/homepage-content.ts`

## Key Sections to Update

### 1. Process Timeline (Currently: 6 steps)
**Current:** Consumer-focused process
**Update to:** B2B EPC Process

```typescript
processTimeline: {
  title: 'Quy Trình Cung Ứng Dự Án',
  subtitle: 'Từ thiết kế đến thi công, đồng hành cùng EPC trong mọi giai đoạn dự án',
  steps: [
    {
      number: 1,
      title: 'Tư vấn & Khảo sát',
      description: 'Tư vấn giải pháp kết cấu, khảo sát hiện trường, báo giá dự án trong 24h',
      icon: '📋'
    },
    {
      number: 2,
      title: 'Thiết kế kỹ thuật',
      description: 'Thiết kế bản vẽ kết cấu, tính toán tải trọng, tối ưu vật tư',
      icon: '📐'
    },
    {
      number: 3,
      title: 'Sản xuất',
      description: 'Sản xuất theo tiêu chuẩn, kiểm soát chất lượng từng công đoạn',
      icon: '🏭'
    },
    {
      number: 4,
      title: 'Kiểm tra QC',
      description: 'Kiểm tra 100% sản phẩm, đảm bảo tiêu chuẩn ISO 9001:2015',
      icon: '✓'
    },
    {
      number: 5,
      title: 'Giao hàng',
      description: 'Giao hàng đúng tiến độ dự án, hỗ trợ logistics',
      icon: '🚚'
    },
    {
      number: 6,
      title: 'Hỗ trợ kỹ thuật',
      description: 'Hỗ trợ thi công, bảo hành 10 năm, dịch vụ sau bán hàng',
      icon: '🔧'
    }
  ]
}
```

### 2. Animated Counter
**Current:** Generic metrics
**Update to:** B2B-focused metrics

```typescript
animatedCounter: {
  title: 'Năng Lực Sản Xuất',
  subtitle: 'Đối tác tin cậy cho các dự án điện mặt trời quy mô lớn',
  metrics: [
    {
      value: 16,
      label: 'Năm kinh nghiệm',
      suffix: '+',
      icon: '📅'
    },
    {
      value: 3000,
      label: 'm² nhà máy',
      icon: '🏭'
    },
    {
      value: 1000,
      label: 'Khách hàng B2B',
      suffix: '+',
      icon: '🤝'
    },
    {
      value: 500,
      label: 'Dự án hoàn thành',
      suffix: '+',
      icon: '✨'
    },
    {
      value: 10,
      label: 'MWp/tháng',
      suffix: '+',
      icon: '☀️'
    },
    {
      value: 100,
      label: 'Đối tác EPC',
      suffix: '+',
      icon: '🔗'
    }
  ]
}
```

### 3. Product 3D Carousel
**Current:** 5 products with consumer descriptions
**Update to:** B2B technical focus

Keep structure but update descriptions to be more technical:
- Focus on specifications
- Mention standards (ISO, ASTM)
- Highlight MWp project suitability
- Add load capacity info

### 4. Trust Badges Carousel
**Current:** Generic badges
**Update to:** B2B certifications & partners

```typescript
trustBadges: {
  title: 'Chứng Nhận & Đối Tác',
  subtitle: 'Đạt tiêu chuẩn quốc tế, tin cậy bởi các EPC hàng đầu',
  badges: [
    {
      id: 'iso-9001',
      name: 'ISO 9001:2015',
      logo: '/certifications/iso-9001.png',
      type: 'certification'
    },
    {
      id: 'test-report',
      name: 'Test Report',
      logo: '/certifications/test-report.png',
      type: 'certification'
    },
    // Add major EPC partners
  ]
}
```

### 5. Case Studies
**Update:** Focus on MWp projects

```typescript
// In src/data/case-studies.ts
caseStudies: [
  {
    id: 'du-an-5mw-bac-ninh',
    title: 'Dự án 5MW tại Bắc Ninh',
    client: 'Công ty EPC ABC',
    location: 'KCN Bắc Ninh',
    capacity: '5 MWp',
    scope: 'Cung cấp trọn bộ hệ giá đỡ pin',
    products: ['Thanh ray 4.2m', 'Kẹp pin', 'Chân đỡ', 'Phụ kiện'],
    results: [
      'Tiết kiệm 30% chi phí',
      'Rút ngắn 40% thời gian thi công',
      'Hoàn thành đúng tiến độ'
    ],
    image: '/case-studies/bac-ninh-5mw.jpg',
    year: 2024
  },
  // Add 2-3 more MWp projects
]
```

## New Sections to Add

### 6. EPC Solutions Section (NEW)
Create new section showcasing EPC capabilities

```typescript
epcSolutions: {
  title: 'Giải Pháp Trọn Gói Cho Dự Án EPC',
  subtitle: 'Cung cấp đầy đủ hệ giá đỡ pin NLMT từ thiết kế đến thi công',
  features: [
    {
      icon: '📦',
      title: 'Cung cấp trọn bộ',
      description: 'Đầy đủ thanh ray, chân đỡ, kẹp pin, phụ kiện từ một nguồn'
    },
    {
      icon: '🔗',
      title: 'Đồng bộ vật tư',
      description: 'Tất cả sản phẩm tương thích, dễ quản lý và lắp đặt'
    },
    {
      icon: '⚡',
      title: 'Tối ưu thi công',
      description: 'Thiết kế dễ lắp, tiết kiệm 50% thời gian thi công'
    },
    {
      icon: '💰',
      title: 'Kiểm soát chi phí',
      description: 'Giá sản xuất trực tiếp, tiết kiệm 30% so với nhập khẩu'
    },
    {
      icon: '🔧',
      title: 'Hỗ trợ kỹ thuật',
      description: 'Tư vấn thiết kế, tính toán kết cấu miễn phí 24/7'
    },
    {
      icon: '☀️',
      title: 'Phù hợp MWp',
      description: 'Năng lực 10+ MWp/tháng, giao hàng đúng tiến độ'
    }
  ],
  cta: {
    primary: 'Liên hệ báo giá dự án',
    secondary: 'Tải catalog kỹ thuật'
  }
}
```

### 7. Why Choose Us Section (NEW)
Highlight competitive advantages

```typescript
whyChooseUs: {
  title: 'Tại Sao Chọn Quang Minh?',
  subtitle: 'Đối tác tin cậy cho dự án của bạn',
  reasons: [
    {
      icon: '💰',
      title: 'Chi Phí Tối Ưu',
      description: 'Sản xuất trực tiếp, không qua trung gian. Giảm 30% chi phí dự án.',
      stats: '30% tiết kiệm'
    },
    {
      icon: '✓',
      title: 'Chất Lượng Cam Kết',
      description: 'ISO 9001:2015. Nhôm 6xxx đạt chuẩn quốc tế. Bảo hành 10 năm.',
      stats: '10 năm bảo hành'
    },
    {
      icon: '⚙️',
      title: 'Thiết Bị Hiện Đại',
      description: 'Máy đùn ép công suất lớn, dây chuyền xử lý bề mặt tự động.',
      stats: '3 dây chuyền'
    },
    {
      icon: '🔧',
      title: 'Dịch Vụ Kỹ Thuật',
      description: 'Hỗ trợ thiết kế, tính toán kết cấu, tư vấn thi công 24/7.',
      stats: '24/7 support'
    },
    {
      icon: '📦',
      title: 'Cung Ứng Ổn Định',
      description: 'Năng lực 10+ MWp/tháng. Giao hàng đúng tiến độ dự án.',
      stats: '10+ MWp/tháng'
    }
  ]
}
```

## Hero Section Updates

### Current Hero (in index.astro)
```
Headline: "Giá Đỡ Năng Lượng Mặt Trời Nhôm A6005-T6 Cao Cấp"
Subtitle: "Hệ thống lắp đặt hoàn chỉnh..."
```

### New B2B Hero
```
Headline: "Giải Pháp Kết Cấu Nhôm Cho Dự Án Điện Mặt Trời MWp"
Subtitle: "Sản xuất trực tiếp • Nhà máy 3,000m² • Cung ứng trọn gói cho EPC"
CTA Primary: "Liên hệ báo giá dự án"
CTA Secondary: "Xem năng lực sản xuất"
```

## Implementation Priority

### High Priority (Do First):
1. ✅ company-info.ts - DONE
2. ⏳ Hero section text (index.astro)
3. ⏳ Process Timeline
4. ⏳ Animated Counter
5. ⏳ EPC Solutions (new section)
6. ⏳ Why Choose Us (new section)

### Medium Priority:
7. Product descriptions (more technical)
8. Case studies (MWp focus)
9. Trust badges (certifications)
10. FAQ (B2B questions)

### Low Priority:
11. Video testimonials (optional)
12. Comparison calculator (simplify or remove)
13. Live metrics (optional)

## Files to Modify

### Data Files:
- ✅ `src/data/company-info.ts` - DONE
- ⏳ `src/data/homepage-content.ts`
- ⏳ `src/data/case-studies.ts`

### Page Files:
- ⏳ `src/pages/index.astro` - Hero section
- ⏳ `src/pages/index.astro` - Add EPC section
- ⏳ `src/pages/index.astro` - Add Why Choose Us section

### Component Files (if needed):
- ⏳ Create `src/components/EPCSolutions.tsx`
- ⏳ Create `src/components/WhyChooseUs.tsx`

## Next Steps

1. Update Hero section in index.astro
2. Update homepage-content.ts sections
3. Create EPC Solutions component
4. Create Why Choose Us component
5. Update case studies
6. Test all changes
7. Review with stakeholders

## Notes
- Keep existing components working
- Add new sections gradually
- Test after each major change
- Maintain responsive design
- Keep Apple-style minimalism
