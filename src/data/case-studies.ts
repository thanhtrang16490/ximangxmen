/**
 * Case Studies Data
 * 
 * Real project examples showcasing successful implementations
 */

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  capacity: string;
  image: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    icon: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'bac-ninh-5mw',
    title: 'Dự Án Điện Mặt Trời 5MW Bắc Ninh',
    client: 'Công ty TNHH Năng lượng Xanh Việt Nam (EPC Contractor)',
    industry: 'EPC - Năng lượng tái tạo',
    location: 'KCN Quế Võ, Bắc Ninh',
    capacity: '5MWp',
    image: '/images/projects/bac-ninh-5mw.jpg',
    challenge: 'Nhà thầu EPC cần cung cấp trọn gói hệ giá đỡ cho dự án 5MWp trong thời gian ngắn (2 tháng) với chi phí tối ưu. Địa hình phức tạp với mái nhà xưởng bằng và mái tôn nghiêng. Yêu cầu đảm bảo tiến độ thi công và chất lượng theo tiêu chuẩn quốc tế.',
    solution: 'Cung cấp trọn bộ giá đỡ nhôm A6005-T6 bao gồm: thanh ray 4.2m, chân đỡ mái bằng ballast, L-feet cho mái nghiêng, kẹp giữa/biên, phụ kiện tiếp địa và bulong inox. Hỗ trợ thiết kế kỹ thuật miễn phí, tính toán kết cấu theo AS/NZS 1170. Giao hàng theo 3 đợt phù hợp tiến độ thi công. Đội kỹ thuật hỗ trợ 24/7 tại hiện trường.',
    results: [
      { label: 'Tiết kiệm chi phí', value: '30%', icon: '💰' },
      { label: 'Rút ngắn thời gian', value: '33%', icon: '⚡' },
      { label: 'Vật tư đồng bộ', value: '100%', icon: '✓' }
    ],
    testimonial: {
      quote: 'Quang Minh là đối tác tin cậy cho dự án EPC của chúng tôi. Giá đỡ nhôm A6005-T6 chất lượng cao, giá cạnh tranh hơn 30% so với nhập khẩu. Đặc biệt là dịch vụ thiết kế kỹ thuật miễn phí và giao hàng đúng tiến độ giúp chúng tôi hoàn thành dự án sớm hơn 1 tháng. Sau 2 năm vận hành, hệ thống vẫn ổn định tuyệt đối.',
      author: 'Nguyễn Văn Thành',
      role: 'Giám đốc Dự án - Năng lượng Xanh Việt Nam'
    }
  },
  {
    id: 'khu-do-thi-2mw',
    title: 'Hệ Thống Mái Nghiêng 2MWp Khu Đô Thị',
    client: 'Công ty CP Xây dựng & Năng lượng Mai (EPC Contractor)',
    industry: 'EPC - Bất động sản & Năng lượng',
    location: 'Khu đô thị Ecopark, Hưng Yên',
    capacity: '2MWp',
    image: '/images/projects/khu-do-thi-2mw.jpg',
    challenge: 'Dự án lắp đặt hệ thống NLMT trên 150 mái nhà biệt thự với góc độ và loại mái khác nhau (mái ngói, mái tôn, mái bê tông). Yêu cầu thẩm mỹ cao, không làm hỏng kết cấu mái hiện có, đảm bảo chống thấm tuyệt đối. Nhà thầu cần giải pháp linh hoạt và dễ thi công để tiết kiệm nhân công.',
    solution: 'Thiết kế hệ thống giá đỡ mái nghiêng đa năng với chân L điều chỉnh được (10-30 độ), phù hợp mọi loại mái. Cung cấp đầy đủ: L-feet nhôm, tile hook cho mái ngói, vít tôn chuyên dụng, đệm cao su EPDM chống thấm. Hướng dẫn thi công chi tiết và hỗ trợ kỹ thuật tại 5 điểm thi công đồng thời. Giao hàng linh hoạt theo tiến độ từng cụm nhà.',
    results: [
      { label: 'Hoàn thành sớm', value: '2 tuần', icon: '📅' },
      { label: 'Mái nhà lắp đặt', value: '150+', icon: '🏠' },
      { label: 'Tiết kiệm nhân công', value: '40%', icon: '⭐' }
    ],
    testimonial: {
      quote: 'Hệ thống giá đỡ mái nghiêng của Quang Minh thiết kế rất thông minh, dễ lắp đặt, giúp chúng tôi tiết kiệm 40% nhân công so với dự kiến. Chất lượng nhôm A6005-T6 cao cấp, chịu được mưa bão tốt. Đặc biệt là dịch vụ giao hàng linh hoạt và hỗ trợ kỹ thuật nhiệt tình giúp dự án hoàn thành sớm hơn 2 tuần.',
      author: 'Trần Thị Mai',
      role: 'Giám đốc Điều hành - Xây dựng & Năng lượng Mai'
    }
  },
  {
    id: 'hai-phong-10mw',
    title: 'Dự Án Mái Bằng 10MWp Hải Phòng',
    client: 'Công ty CP Điện lực & Năng lượng Hải Phòng (EPC Contractor)',
    industry: 'EPC - Điện lực & Công nghiệp',
    location: 'KCN VSIP Hải Phòng',
    capacity: '10MWp',
    image: '/images/projects/hai-phong-10mw.jpg',
    challenge: 'Dự án quy mô lớn nhất của nhà thầu, lắp đặt trên mái bằng nhà xưởng 50,000m². Yêu cầu chịu tải cao do gần biển (cách biển 5km), chịu gió mạnh cấp 12, ăn mòn muối. Cần đảm bảo an toàn tuyệt đối, không khoan thủng mái để tránh thấm. Thời gian thi công gấp (3 tháng) để kịp hưởng giá FIT.',
    solution: 'Cung cấp hệ thống giá đỡ mái bằng ballast block chuyên dụng, không cần khoan mái. Tính toán kỹ thuật chi tiết theo tiêu chuẩn AS/NZS 1170 để chịu gió cấp 12 và tải trọng tuyết 1.5kN/m². Sử dụng nhôm A6005-T6 với lớp anodized 15µm chống ăn mòn muối. Cung cấp trọn bộ: ballast block bê tông, thanh ray 4.2m, kẹp giữa/biên, dây tiếp địa, bulong inox 316. Hỗ trợ 5 kỹ sư tại hiện trường trong suốt quá trình thi công.',
    results: [
      { label: 'Lắp đặt nhanh', value: '2x', icon: '⚡' },
      { label: 'An toàn tuyệt đối', value: '100%', icon: '🛡️' },
      { label: 'Chịu gió', value: 'Cấp 12', icon: '💨' }
    ],
    testimonial: {
      quote: 'Đây là dự án lớn nhất của chúng tôi và Quang Minh đã chứng minh là đối tác đáng tin cậy. Giá đỡ mái bằng ballast thiết kế thông minh, chịu tải tốt, lắp đặt nhanh gấp đôi so với hệ thống cũ. Đội ngũ kỹ thuật hỗ trợ tính toán chi tiết, đảm bảo an toàn tuyệt đối cho công trình. Nhờ đó chúng tôi hoàn thành dự án đúng hạn và đạt chứng nhận COD kịp thời.',
      author: 'Phạm Đức Long',
      role: 'Trưởng phòng Kỹ thuật - Điện lực & Năng lượng Hải Phòng'
    }
  }
];

// Export for multilingual support
export const caseStudiesEn: CaseStudy[] = [
  {
    id: 'bac-ninh-5mw',
    title: '5MWp Solar Power Project in Bac Ninh',
    client: 'Vietnam Green Energy Co., Ltd. (EPC Contractor)',
    industry: 'EPC - Renewable Energy',
    location: 'Que Vo Industrial Park, Bac Ninh',
    capacity: '5MWp',
    image: '/images/projects/bac-ninh-5mw.jpg',
    challenge: 'EPC contractor needed complete mounting structure package for 5MWp project in short time (2 months) with optimized costs. Complex terrain with flat factory roofs and tilted metal roofs. Required to ensure construction schedule and international quality standards.',
    solution: 'Provided complete A6005-T6 aluminum mounting package including: 4.2m rails, flat roof ballast mounts, L-feet for tilted roofs, mid/end clamps, grounding accessories and stainless steel bolts. Free technical design support, structural calculations per AS/NZS 1170. Delivery in 3 batches matching construction schedule. 24/7 on-site technical team support.',
    results: [
      { label: 'Cost Savings', value: '30%', icon: '💰' },
      { label: 'Time Reduction', value: '33%', icon: '⚡' },
      { label: 'Material Sync', value: '100%', icon: '✓' }
    ],
    testimonial: {
      quote: 'Quang Minh is a reliable partner for our EPC project. High-quality A6005-T6 aluminum mounting, 30% more competitive than imports. Especially the free technical design service and on-time delivery helped us complete the project 1 month early. After 2 years of operation, the system remains absolutely stable.',
      author: 'Nguyen Van Thanh',
      role: 'Project Director - Vietnam Green Energy'
    }
  },
  {
    id: 'khu-do-thi-2mw',
    title: '2MWp Tilted Roof System in Urban Area',
    client: 'Mai Construction & Energy JSC (EPC Contractor)',
    industry: 'EPC - Real Estate & Energy',
    location: 'Ecopark Urban Area, Hung Yen',
    capacity: '2MWp',
    image: '/images/projects/khu-do-thi-2mw.jpg',
    challenge: 'Project to install solar system on 150 villa roofs with different angles and roof types (tile, metal, concrete). High aesthetic requirements, no damage to existing roof structure, absolute waterproofing. Contractor needed flexible and easy-to-install solution to save labor.',
    solution: 'Designed versatile tilted roof mounting system with adjustable L-feet (10-30 degrees), suitable for all roof types. Provided complete: aluminum L-feet, tile hooks for tile roofs, specialized roofing screws, EPDM rubber gaskets for waterproofing. Detailed installation guidance and technical support at 5 simultaneous construction points. Flexible delivery according to each housing cluster schedule.',
    results: [
      { label: 'Early Completion', value: '2 weeks', icon: '📅' },
      { label: 'Roofs Installed', value: '150+', icon: '🏠' },
      { label: 'Labor Savings', value: '40%', icon: '⭐' }
    ],
    testimonial: {
      quote: 'Quang Minh\'s tilted roof mounting system is very intelligently designed, easy to install, helping us save 40% labor compared to plan. High-quality A6005-T6 aluminum withstands storms well. Especially the flexible delivery service and enthusiastic technical support helped complete the project 2 weeks early.',
      author: 'Tran Thi Mai',
      role: 'CEO - Mai Construction & Energy'
    }
  },
  {
    id: 'hai-phong-10mw',
    title: '10MWp Flat Roof Project in Hai Phong',
    client: 'Hai Phong Power & Energy JSC (EPC Contractor)',
    industry: 'EPC - Power & Industrial',
    location: 'VSIP Hai Phong Industrial Park',
    capacity: '10MWp',
    image: '/images/projects/hai-phong-10mw.jpg',
    challenge: 'Contractor\'s largest project, installation on 50,000m² flat factory roof. High load requirements due to coastal location (5km from sea), level 12 wind resistance, salt corrosion. Absolute safety required, no roof drilling to avoid leaks. Tight construction time (3 months) to catch FIT price.',
    solution: 'Provided specialized ballast block flat roof mounting system, no roof drilling needed. Detailed technical calculations per AS/NZS 1170 standards for level 12 wind and 1.5kN/m² snow load. Used A6005-T6 aluminum with 15µm anodized layer for salt corrosion resistance. Complete package: concrete ballast blocks, 4.2m rails, mid/end clamps, grounding wire, 316 stainless steel bolts. 5 engineers on-site support throughout construction.',
    results: [
      { label: 'Fast Installation', value: '2x', icon: '⚡' },
      { label: 'Absolute Safety', value: '100%', icon: '🛡️' },
      { label: 'Wind Resistance', value: 'Level 12', icon: '💨' }
    ],
    testimonial: {
      quote: 'This is our largest project and Quang Minh proved to be a reliable partner. Ballast flat roof mounting intelligently designed, bears loads well, installs twice as fast as old systems. Technical team provided detailed calculations ensuring absolute project safety. Thanks to that we completed the project on time and achieved COD certification timely.',
      author: 'Pham Duc Long',
      role: 'Technical Manager - Hai Phong Power & Energy'
    }
  }
];

export const caseStudiesCn: CaseStudy[] = [
  {
    id: 'bac-ninh-5mw',
    title: '北宁5MWp太阳能项目',
    client: '越南绿色能源有限公司（EPC承包商）',
    industry: 'EPC - 可再生能源',
    location: '北宁桂武工业园',
    capacity: '5MWp',
    image: '/images/projects/bac-ninh-5mw.jpg',
    challenge: 'EPC承包商需要在短时间内（2个月）以优化成本为5MWp项目提供完整的支架包。地形复杂，有平屋顶工厂和倾斜金属屋顶。需要确保施工进度和国际质量标准。',
    solution: '提供完整的A6005-T6铝合金支架包，包括：4.2m导轨、平屋顶压载支架、倾斜屋顶L型支脚、中间/端部夹具、接地配件和不锈钢螺栓。免费技术设计支持，按AS/NZS 1170标准进行结构计算。分3批交货，配合施工进度。24/7现场技术团队支持。',
    results: [
      { label: '节省成本', value: '30%', icon: '💰' },
      { label: '缩短时间', value: '33%', icon: '⚡' },
      { label: '材料同步', value: '100%', icon: '✓' }
    ],
    testimonial: {
      quote: '光明是我们EPC项目的可靠合作伙伴。高质量A6005-T6铝合金支架，比进口产品便宜30%。特别是免费技术设计服务和准时交货帮助我们提前1个月完成项目。运行2年后，系统仍然绝对稳定。',
      author: '阮文成',
      role: '项目总监 - 越南绿色能源'
    }
  },
  {
    id: 'khu-do-thi-2mw',
    title: '城市2MWp斜屋顶系统',
    client: '梅建筑与能源股份公司（EPC承包商）',
    industry: 'EPC - 房地产与能源',
    location: 'Ecopark城市区，兴安',
    capacity: '2MWp',
    image: '/images/projects/khu-do-thi-2mw.jpg',
    challenge: '在150个别墅屋顶上安装太阳能系统，角度和屋顶类型不同（瓦片、金属、混凝土）。高美学要求，不损坏现有屋顶结构，绝对防水。承包商需要灵活且易于安装的解决方案以节省人工。',
    solution: '设计多功能斜屋顶支架系统，配有可调L型支脚（10-30度），适合所有屋顶类型。提供完整：铝制L型支脚、瓦片屋顶挂钩、专用屋顶螺钉、EPDM橡胶垫片防水。详细安装指导和5个同时施工点的技术支持。根据每个住宅群进度灵活交货。',
    results: [
      { label: '提前完成', value: '2周', icon: '📅' },
      { label: '安装屋顶', value: '150+', icon: '🏠' },
      { label: '节省人工', value: '40%', icon: '⭐' }
    ],
    testimonial: {
      quote: '光明的斜屋顶支架系统设计非常智能，易于安装，帮助我们节省了40%的人工成本。高质量A6005-T6铝材抗风暴性能好。特别是灵活的交货服务和热情的技术支持帮助项目提前2周完成。',
      author: '陈氏梅',
      role: '首席执行官 - 梅建筑与能源'
    }
  },
  {
    id: 'hai-phong-10mw',
    title: '海防10MWp平屋顶项目',
    client: '海防电力与能源股份公司（EPC承包商）',
    industry: 'EPC - 电力与工业',
    location: 'VSIP海防工业园',
    capacity: '10MWp',
    image: '/images/projects/hai-phong-10mw.jpg',
    challenge: '承包商最大项目，在50,000平方米平屋顶工厂上安装。由于靠近海岸（距海5公里），需要高承载要求，抗12级风，耐盐腐蚀。需要绝对安全，不钻孔以避免漏水。紧张的施工时间（3个月）以赶上FIT价格。',
    solution: '提供专用压载块平屋顶支架系统，无需钻孔。按AS/NZS 1170标准进行详细技术计算，抗12级风和1.5kN/m²雪载。使用A6005-T6铝材，15µm阳极氧化层抗盐腐蚀。完整包装：混凝土压载块、4.2m导轨、中间/端部夹具、接地线、316不锈钢螺栓。5名工程师全程现场支持。',
    results: [
      { label: '快速安装', value: '2倍', icon: '⚡' },
      { label: '绝对安全', value: '100%', icon: '🛡️' },
      { label: '抗风', value: '12级', icon: '💨' }
    ],
    testimonial: {
      quote: '这是我们最大的项目，光明证明是可靠的合作伙伴。压载平屋顶支架设计巧妙，承载力好，安装速度是旧系统的两倍。技术团队提供详细计算，确保项目绝对安全。因此我们按时完成项目并及时获得COD认证。',
      author: '范德龙',
      role: '技术经理 - 海防电力与能源'
    }
  }
];
