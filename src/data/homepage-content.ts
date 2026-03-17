/**
 * Homepage Content Data Structure
 * 
 * This file contains TypeScript interfaces and initial content data for all
 * homepage sections following the Apple-inspired design improvements.
 * 
 * Requirements: 30.1, 30.2, 30.4
 */

// ============================================================================
// Type Definitions
// ============================================================================

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string; // SVG icon or emoji
}

export interface ProcessTimelineSection {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface CounterMetric {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface AnimatedCounterSection {
  title: string;
  subtitle: string;
  metrics: CounterMetric[];
  duration?: number; // Animation duration in ms, default: 2000
}

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
}

export interface Product3DCarouselSection {
  title: string;
  subtitle: string;
  products: Product[];
  autoRotateInterval?: number; // Default: 5000ms
}

export interface ComparisonSliderSection {
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  defaultPosition?: number; // 0-100, default: 50
}

export interface Metric {
  id: string;
  label: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: number;
  sparklineData?: number[];
}

export interface LiveMetricsDashboardSection {
  title: string;
  subtitle: string;
  metrics: Metric[];
  updateInterval?: number; // Default: 5000ms
}

export interface TrustBadge {
  id: string;
  name: string;
  logo: string;
  type: 'partner' | 'certification';
}

export interface TrustBadgesCarouselSection {
  title: string;
  subtitle: string;
  badges: TrustBadge[];
  speed?: number; // Pixels per second, default: 50
}

export interface VideoTestimonial {
  id: string;
  videoUrl: string;
  posterImage: string;
  customerName: string;
  role: string;
  company: string;
  duration: number; // Seconds
}

export interface VideoTestimonialsSection {
  title: string;
  subtitle: string;
  testimonials: VideoTestimonial[];
}

export interface MapLocation {
  lat: number;
  lng: number;
  name: string;
  address: string;
  phone: string;
  photo?: string;
}

export interface InteractiveMapSection {
  title: string;
  subtitle: string;
  location: MapLocation;
  zoom?: number; // Default: 15
  fallbackImage?: string;
}

export interface CalculatorInput {
  id: string;
  label: string;
  type: 'number' | 'select' | 'range';
  min?: number;
  max?: number;
  step?: number;
  options?: { value: string; label: string }[];
  defaultValue: number | string;
}

export interface ComparisonOption {
  id: string;
  name: string;
  basePrice: number;
  features: string[];
  recommended?: boolean;
}

export interface ComparisonCalculatorSection {
  title: string;
  subtitle: string;
  inputs: CalculatorInput[];
  options: ComparisonOption[];
}

export interface HomepageContent {
  processTimeline: ProcessTimelineSection;
  animatedCounter: AnimatedCounterSection;
  product3DCarousel: Product3DCarouselSection;
  comparisonSlider: ComparisonSliderSection;
  liveMetrics: LiveMetricsDashboardSection;
  trustBadges: TrustBadgesCarouselSection;
  videoTestimonials: VideoTestimonialsSection;
  interactiveMap: InteractiveMapSection;
  comparisonCalculator: ComparisonCalculatorSection;
}

// ============================================================================
// Content Data Validation
// ============================================================================

function validateRequired<T>(value: T | null | undefined, fieldName: string): T {
  if (value === null || value === undefined || value === '') {
    throw new Error(`Required field "${fieldName}" is missing or empty`);
  }
  return value;
}

function validateProcessStep(step: ProcessStep): void {
  validateRequired(step.number, 'ProcessStep.number');
  validateRequired(step.title, 'ProcessStep.title');
  validateRequired(step.description, 'ProcessStep.description');
  validateRequired(step.icon, 'ProcessStep.icon');
}

function validateProduct(product: Product): void {
  validateRequired(product.id, 'Product.id');
  validateRequired(product.name, 'Product.name');
  validateRequired(product.image, 'Product.image');
  validateRequired(product.description, 'Product.description');
  if (!product.features || product.features.length === 0) {
    throw new Error('Product.features must have at least one feature');
  }
}

function validateMetric(metric: CounterMetric | Metric): void {
  validateRequired(metric.label, 'Metric.label');
  if (typeof metric.value !== 'number') {
    throw new Error('Metric.value must be a number');
  }
}

function validateVideoTestimonial(testimonial: VideoTestimonial): void {
  validateRequired(testimonial.id, 'VideoTestimonial.id');
  validateRequired(testimonial.videoUrl, 'VideoTestimonial.videoUrl');
  validateRequired(testimonial.posterImage, 'VideoTestimonial.posterImage');
  validateRequired(testimonial.customerName, 'VideoTestimonial.customerName');
  validateRequired(testimonial.role, 'VideoTestimonial.role');
  validateRequired(testimonial.company, 'VideoTestimonial.company');
  if (typeof testimonial.duration !== 'number' || testimonial.duration <= 0) {
    throw new Error('VideoTestimonial.duration must be a positive number');
  }
}

function validateTrustBadge(badge: TrustBadge): void {
  validateRequired(badge.id, 'TrustBadge.id');
  validateRequired(badge.name, 'TrustBadge.name');
  validateRequired(badge.logo, 'TrustBadge.logo');
  validateRequired(badge.type, 'TrustBadge.type');
}

function validateMapLocation(location: MapLocation): void {
  validateRequired(location.name, 'MapLocation.name');
  validateRequired(location.address, 'MapLocation.address');
  validateRequired(location.phone, 'MapLocation.phone');
  if (typeof location.lat !== 'number' || typeof location.lng !== 'number') {
    throw new Error('MapLocation coordinates must be numbers');
  }
}

function validateCalculatorInput(input: CalculatorInput): void {
  validateRequired(input.id, 'CalculatorInput.id');
  validateRequired(input.label, 'CalculatorInput.label');
  validateRequired(input.type, 'CalculatorInput.type');
  if (input.defaultValue === null || input.defaultValue === undefined) {
    throw new Error('CalculatorInput.defaultValue is required');
  }
}

function validateComparisonOption(option: ComparisonOption): void {
  validateRequired(option.id, 'ComparisonOption.id');
  validateRequired(option.name, 'ComparisonOption.name');
  if (typeof option.basePrice !== 'number') {
    throw new Error('ComparisonOption.basePrice must be a number');
  }
  if (!option.features || option.features.length === 0) {
    throw new Error('ComparisonOption.features must have at least one feature');
  }
}

// ============================================================================
// Initial Content Data
// ============================================================================

export const homepageContent: HomepageContent = {
  // 1. Process Timeline Section (6 steps) - Quy trình thi công CX Men
  processTimeline: {
    title: 'Quy Trình Thi Công Chống Thấm',
    subtitle: 'Hướng dẫn thi công xi măng chống thấm CX Men đúng kỹ thuật, đảm bảo hiệu quả lâu dài',
    steps: [
      {
        number: 1,
        title: 'Tư vấn & Khảo sát',
        description: 'Tư vấn phương án chống thấm miễn phí, khảo sát hiện trường, báo giá trong 24h',
        icon: '📋'
      },
      {
        number: 2,
        title: 'Chuẩn bị mặt bằng',
        description: 'Loại bỏ bụi bẩn, đục tẩy bê tông yếu, vệ sinh bề mặt bằng máy phun nước áp lực',
        icon: '🧹'
      },
      {
        number: 3,
        title: 'Trộn vữa CX Men',
        description: 'Trộn CX Men với cát sạch theo tỉ lệ, thêm nước 5-8L, trộn đều 5 phút rồi để nghỉ 3-5 phút',
        icon: '🔧'
      },
      {
        number: 4,
        title: 'Thi công chống thấm',
        description: 'Tưới ẩm bề mặt, thi công hồ dầu, trải lưới thủy tinh, cán/trát vữa CX Men',
        icon: '🏗️'
      },
      {
        number: 5,
        title: 'Bảo dưỡng',
        description: 'Sau 3-5 giờ quét nước xi măng CX Men lên bề mặt, bảo dưỡng bằng nước như vữa thường',
        icon: '💧'
      },
      {
        number: 6,
        title: 'Kiểm tra & Nghiệm thu',
        description: 'Sau 24-48 giờ bơm nước ngâm kiểm tra thấm, đảm bảo chất lượng trước khi bàn giao',
        icon: '✓'
      }
    ]
  },

  // 2. Animated Number Counter (4 metrics) - CX Men Focus
  animatedCounter: {
    title: 'Uy Tín Được Kiểm Chứng',
    subtitle: 'Hơn 24 năm cung cấp xi măng chống thấm CX Men chính hãng trên toàn quốc',
    metrics: [
      {
        value: 10000,
        label: 'Công trình đã thi công',
        suffix: '+',
        icon: '🏗️',
        trend: 'up'
      },
      {
        value: 24,
        label: 'Năm kinh nghiệm',
        suffix: '+',
        icon: '🏆',
        trend: 'neutral'
      },
      {
        value: 5000,
        label: 'Khách hàng tin dùng',
        suffix: '+',
        icon: '🤝',
        trend: 'up'
      },
      {
        value: 200,
        label: 'Đại lý toàn quốc',
        suffix: '+',
        icon: '🚚',
        trend: 'up'
      }
    ],
    duration: 2000
  },

  // 3. Product 3D Carousel (5+ products) - CX Men applications
  product3DCarousel: {
    title: 'Ứng Dụng Xi Măng CX Men',
    subtitle: 'Xi măng chống thấm CX Men – giải pháp chống thấm toàn diện cho mọi hạng mục công trình',
    products: [
      {
        id: 'chong-tham-san-mai',
        name: 'Chống Thấm Sàn Mái',
        image: '/products/chong-tham-san-mai.jpg',
        description: 'Xi măng CX Men cán vữa sàn mái, sân thượng, ban công. Chống thấm hoàn hảo, bền vững theo thời gian.',
        features: [
          'Vữa mác 150: 1 bao CX Men + 2 xô cát 18L',
          'Vữa mác 100: 1 bao CX Men + 3 xô cát 18L',
          'Trải lưới thủy tinh gia cường chống xé',
          'Kiểm tra bơm nước ngâm sau 24-48h'
        ]
      },
      {
        id: 'chong-tham-nha-ve-sinh',
        name: 'Chống Thấm Nhà Vệ Sinh',
        image: '/products/chong-tham-nha-ve-sinh.jpg',
        description: 'Thi công chống thấm nhà vệ sinh, sàn vệ sinh bằng vữa CX Men. Chống thấm thuận và nghịch cực tốt.',
        features: [
          'Chống thấm thuận và nghịch hiệu quả',
          'Trát tường, cán nền nhà vệ sinh',
          'Lưới thủy tinh gia cường tại chân tường',
          'Bảo dưỡng bằng nước như vữa thường'
        ]
      },
      {
        id: 'chong-tham-be-nuoc',
        name: 'Chống Thấm Bể Nước',
        image: '/products/chong-tham-be-nuoc.jpg',
        description: 'Xi măng CX Men chống thấm bể nước, bể bơi, hố pit. Chống nồm ẩm, kiềm hóa và muối triệt để.',
        features: [
          'Chống thấm bể nước, bể bơi, hố pit',
          'Chống nồm ẩm, kiềm hóa và muối',
          'Trát thành bể, cán đáy bể',
          'An toàn cho bể chứa nước sinh hoạt'
        ]
      },
      {
        id: 'chong-tham-tuong-ngoai',
        name: 'Chống Thấm Tường Ngoài',
        image: '/products/chong-tham-tuong-ngoai.jpg',
        description: 'Chống thấm tường ngoài, chân tường tầng 1, khe tiếp giáp giữa 2 nhà không trát được bên ngoài.',
        features: [
          'Xây trát tường ngoài chống thấm',
          'Chân tường tầng 1 chống ẩm',
          'Khe tiếp giáp giữa 2 nhà',
          'Chống co ngót, rạn nứt hoàn hảo'
        ]
      },
      {
        id: 'do-be-tong-chong-tham',
        name: 'Đổ Bê Tông Chống Thấm',
        image: '/products/do-be-tong-chong-tham.jpg',
        description: 'Xi măng CX Men PCB 40 đa dụng dùng để đổ bê tông. Cường độ sớm cao, cho phép tháo ván khuôn sớm hơn.',
        features: [
          'Xi măng pooclang PCB 40 đa dụng',
          'Cường độ sớm cao, tháo ván khuôn sớm',
          'Tiết kiệm thời gian và chi phí thi công',
          'Chống co ngót, rạn nứt bê tông'
        ]
      },
      {
        id: 'chong-tham-seno-ban-cong',
        name: 'Chống Thấm Seno & Ban Công',
        image: '/products/chong-tham-seno.jpg',
        description: 'Thi công chống thấm seno, ban công, mái hiên bằng xi măng CX Men. Bền vững, chống thấm lâu dài.',
        features: [
          'Chống thấm seno, máng nước',
          'Ban công, mái hiên, lô gia',
          'Chống thấm khe co giãn',
          'Bền vững theo thời gian'
        ]
      }
    ]
  },

  // 4. Before/After Comparison Slider
  comparisonSlider: {
    title: 'Hiệu Quả Chống Thấm Vượt Trội',
    subtitle: 'So sánh bề mặt trước và sau khi thi công xi măng chống thấm CX Men',
    beforeImage: '/images/comparison/before-chong-tham.jpg',
    afterImage: '/images/comparison/after-chong-tham.jpg',
    beforeLabel: 'Trước thi công',
    afterLabel: 'Sau thi công CX Men',
    defaultPosition: 50
  },

  // 5. Live Metrics Dashboard (4+ metrics)
  liveMetrics: {
    title: 'Hoạt Động Kinh Doanh',
    subtitle: 'Theo dõi các chỉ số phân phối xi măng chống thấm CX Men trên toàn quốc',
    metrics: [
      {
        id: 'orders-today',
        label: 'Đơn hàng hôm nay',
        value: 85,
        unit: 'đơn',
        trend: 'up',
        trendValue: 12.5,
        sparklineData: [65, 70, 72, 75, 78, 82, 85]
      },
      {
        id: 'bags-delivered',
        label: 'Bao CX Men giao hôm nay',
        value: 1250,
        unit: 'bao',
        trend: 'up',
        trendValue: 8.3,
        sparklineData: [980, 1050, 1100, 1150, 1180, 1220, 1250]
      },
      {
        id: 'customer-satisfaction',
        label: 'Khách hàng hài lòng',
        value: 98.5,
        unit: '%',
        trend: 'up',
        trendValue: 0.5,
        sparklineData: [97.8, 98.0, 98.1, 98.2, 98.3, 98.4, 98.5]
      },
      {
        id: 'delivery-ontime',
        label: 'Giao hàng đúng hạn',
        value: 97.2,
        unit: '%',
        trend: 'up',
        trendValue: 1.0,
        sparklineData: [96.0, 96.3, 96.5, 96.8, 97.0, 97.1, 97.2]
      }
    ],
    updateInterval: 5000
  },

  // 6. Trust Badges Carousel - Đối tác & Chứng nhận CX Men
  trustBadges: {
    title: 'Đối Tác & Chứng Nhận',
    subtitle: 'Được tin tưởng bởi các nhà thầu xây dựng hàng đầu và đạt chứng nhận chất lượng',
    badges: [
      { id: 'bdo', name: 'BDO', logo: '/partner_brand/bdo-logo.png', type: 'partner' },
      { id: 'hoa-phat', name: 'Hòa Phát', logo: '/partner_brand/hoa-phat-logo.png', type: 'partner' },
      { id: 'komatsu', name: 'Komatsu', logo: '/partner_brand/komatsu-logo.png', type: 'partner' },
      { id: 'lideco', name: 'Lideco', logo: '/partner_brand/lideco-logo.png', type: 'partner' },
      { id: 'nami-energy', name: 'Nami Energy', logo: '/partner_brand/nami-energy.png', type: 'partner' },
      { id: 'poma', name: 'POMA', logo: '/partner_brand/poma-logo.png', type: 'partner' },
      { id: 'scg', name: 'SCG', logo: '/partner_brand/scg-logo.png', type: 'partner' },
      { id: 'sev', name: 'SEV', logo: '/partner_brand/sev-logo.png', type: 'partner' },
      { id: 'son-ha', name: 'Sơn Hà', logo: '/partner_brand/son-ha-logo.png', type: 'partner' },
      { id: 'sp-group', name: 'SP Group', logo: '/partner_brand/sp-group-logo.png', type: 'partner' },
      { id: 'tisco', name: 'TISCO', logo: '/partner_brand/tisco-logo.png', type: 'partner' },
      { id: 'tqis', name: 'TQIS', logo: '/partner_brand/tqis-logo.png', type: 'partner' },
      { id: 'typ-steel', name: 'TYP Steel', logo: '/partner_brand/typ-steel-logo.png', type: 'partner' },
      { id: 'vas', name: 'VAS', logo: '/partner_brand/vas-logo.png', type: 'partner' },
      { id: 'vatec-saigon', name: 'Vatec Saigon', logo: '/partner_brand/vatec-saigon-logo.png', type: 'partner' },
      { id: 'vinacomin', name: 'Vinacomin', logo: '/partner_brand/vinacomin-logo.png', type: 'partner' }
    ],
    speed: 50
  },

  // 7. Video Testimonials (3 videos)
  videoTestimonials: {
    title: 'Khách Hàng Nói Gì Về CX Men',
    subtitle: 'Những chia sẻ chân thực từ khách hàng đã sử dụng xi măng chống thấm CX Men',
    testimonials: [
      {
        id: 'testimonial-1',
        videoUrl: '/videos/testimonials/customer-1.mp4',
        posterImage: '/images/testimonials/customer-1-poster.jpg',
        customerName: 'Nguyễn Văn A',
        role: 'Chủ thầu xây dựng',
        company: 'Công ty Xây dựng ABC',
        duration: 120
      },
      {
        id: 'testimonial-2',
        videoUrl: '/videos/testimonials/customer-2.mp4',
        posterImage: '/images/testimonials/customer-2-poster.jpg',
        customerName: 'Trần Thị B',
        role: 'Chủ nhà',
        company: 'Hà Nội',
        duration: 95
      },
      {
        id: 'testimonial-3',
        videoUrl: '/videos/testimonials/customer-3.mp4',
        posterImage: '/images/testimonials/customer-3-poster.jpg',
        customerName: 'Lê Văn C',
        role: 'Giám đốc dự án',
        company: 'Công ty Xây dựng DEF',
        duration: 150
      }
    ]
  },

  // 8. Interactive Map (store location)
  interactiveMap: {
    title: 'Tổng Kho CX Men Hà Nội',
    subtitle: 'Ghé thăm tổng kho sơn và chống thấm của chúng tôi',
    location: {
      lat: 20.9719,
      lng: 105.7852,
      name: 'Tổng Kho Sơn Và Chống Thấm CX Men',
      address: 'Số 790 Quang Trung, Quận Hà Đông, Hà Nội',
      phone: '0919.229.227',
      photo: '/images/factory/exterior.jpg'
    },
    zoom: 15,
    fallbackImage: '/images/factory/map-fallback.jpg'
  },

  // 9. Comparison Calculator - Tính lượng CX Men cần dùng
  comparisonCalculator: {
    title: 'Tính Lượng Xi Măng CX Men Cần Dùng',
    subtitle: 'Ước tính số bao CX Men cần thiết cho công trình của bạn',
    inputs: [
      {
        id: 'area',
        label: 'Diện tích cần chống thấm (m²)',
        type: 'number',
        min: 1,
        max: 1000,
        step: 1,
        defaultValue: 50
      },
      {
        id: 'application',
        label: 'Hạng mục thi công',
        type: 'select',
        options: [
          { value: 'san-mai', label: 'Sàn mái / Ban công' },
          { value: 'nha-ve-sinh', label: 'Nhà vệ sinh / Sàn' },
          { value: 'be-nuoc', label: 'Bể nước / Bể bơi' },
          { value: 'tuong', label: 'Tường xây / Trát' }
        ],
        defaultValue: 'san-mai'
      },
      {
        id: 'thickness',
        label: 'Độ dày lớp vữa (mm)',
        type: 'range',
        min: 10,
        max: 50,
        step: 5,
        defaultValue: 20
      }
    ],
    options: [
      {
        id: 'mac-100',
        name: 'Vữa Mác 100',
        basePrice: 180000,
        features: [
          '1 bao CX Men (25kg)',
          '3 xô cát sạch 18L (50kg)',
          'Nước sạch 5-8 lít',
          'Phù hợp tường xây, trát nhẹ',
          'Tiết kiệm chi phí vật liệu'
        ],
        recommended: false
      },
      {
        id: 'mac-150',
        name: 'Vữa Mác 150',
        basePrice: 200000,
        features: [
          '1 bao CX Men (25kg)',
          '2 xô cát sạch 18L (50kg)',
          'Nước sạch 5-8 lít',
          'Phù hợp sàn mái, bể nước, nhà vệ sinh',
          'Độ bền và chống thấm tối ưu'
        ],
        recommended: true
      }
    ]
  }
};

// ============================================================================
// Validation on Export
// ============================================================================

// Validate all content on module load
try {
  // Validate Process Timeline
  homepageContent.processTimeline.steps.forEach(validateProcessStep);
  if (homepageContent.processTimeline.steps.length !== 6) {
    throw new Error('Process Timeline must have exactly 6 steps');
  }

  // Validate Animated Counter
  homepageContent.animatedCounter.metrics.forEach(validateMetric);
  if (homepageContent.animatedCounter.metrics.length < 4) {
    throw new Error('Animated Counter must have at least 4 metrics');
  }

  // Validate Product 3D Carousel
  homepageContent.product3DCarousel.products.forEach(validateProduct);
  if (homepageContent.product3DCarousel.products.length < 5) {
    throw new Error('Product 3D Carousel must have at least 5 products');
  }

  // Validate Comparison Slider
  validateRequired(homepageContent.comparisonSlider.beforeImage, 'ComparisonSlider.beforeImage');
  validateRequired(homepageContent.comparisonSlider.afterImage, 'ComparisonSlider.afterImage');

  // Validate Live Metrics
  homepageContent.liveMetrics.metrics.forEach(validateMetric);
  if (homepageContent.liveMetrics.metrics.length < 4) {
    throw new Error('Live Metrics Dashboard must have at least 4 metrics');
  }

  // Validate Trust Badges
  homepageContent.trustBadges.badges.forEach(validateTrustBadge);
  if (homepageContent.trustBadges.badges.length < 8) {
    throw new Error('Trust Badges Carousel must have at least 8 badges');
  }

  // Validate Video Testimonials
  homepageContent.videoTestimonials.testimonials.forEach(validateVideoTestimonial);
  if (homepageContent.videoTestimonials.testimonials.length !== 3) {
    throw new Error('Video Testimonials must have exactly 3 testimonials');
  }

  // Validate Interactive Map
  validateMapLocation(homepageContent.interactiveMap.location);

  // Validate Comparison Calculator
  homepageContent.comparisonCalculator.inputs.forEach(validateCalculatorInput);
  homepageContent.comparisonCalculator.options.forEach(validateComparisonOption);
  if (homepageContent.comparisonCalculator.options.length < 2) {
    throw new Error('Comparison Calculator must have at least 2 options');
  }

  console.log('✓ Homepage content validation passed');
} catch (error) {
  console.error('✗ Homepage content validation failed:', error);
  throw error;
}
