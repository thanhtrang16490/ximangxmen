/**
 * Blog Posts Data - CX-MEN Xi Măng Chống Thấm
 */

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "huong-dan-chong-tham-san-mai-hieu-qua",
    title: "Hướng dẫn chống thấm sàn mái hiệu quả với CX-MEN",
    excerpt: "Hướng dẫn chi tiết cách thi công chống thấm sàn mái bằng xi măng CX-MEN, đảm bảo chống thấm hoàn hảo và bền vững.",
    category: "Hướng dẫn",
    author: "Kỹ sư Nguyễn Văn A",
    date: "2025-03-01",
    readTime: "5 phút",
    image: "/blog/chong-tham-san-mai.jpg",
    featured: true,
    content: `
      <p>Chống thấm sàn mái là một trong những công việc quan trọng nhất trong xây dựng. Xi măng chống thấm CX-MEN giúp bạn giải quyết vấn đề này một cách hiệu quả và bền vững.</p>

      <h2>Chuẩn bị bề mặt</h2>
      <p>Trước khi thi công, cần chuẩn bị bề mặt sạch sẽ, không có bụi bẩn, dầu mỡ. Đục bỏ các phần bê tông yếu, vữa rời.</p>

      <h2>Cấp phối vữa</h2>
      <ul>
        <li>1 bao CX-MEN 25kg</li>
        <li>2-3 xô cát sạch (tùy độ mác)</li>
        <li>5-8 lít nước sạch</li>
      </ul>

      <h2>Thi công</h2>
      <p>Trộn đều xi măng CX-MEN với cát và nước. Cán đều lên bề mặt sàn mái với độ dày 2-3cm. Bảo dưỡng bằng cách tưới nước trong 7 ngày.</p>

      <h2>Kết quả</h2>
      <p>Sau khi thi công đúng quy trình, sàn mái sẽ chống thấm hoàn hảo, không bị nứt, bong tróc. Tuổi thọ lên đến 20 năm.</p>

      <p>Liên hệ <strong>0962352394</strong> để được tư vấn chi tiết!</p>
    `
  },
  {
    id: 2,
    slug: "5-ly-do-chon-xi-mang-chong-tham-cx-men",
    title: "5 lý do nên chọn xi măng chống thấm CX-MEN",
    excerpt: "Tìm hiểu những ưu điểm vượt trội của xi măng chống thấm CX-MEN so với các sản phẩm khác trên thị trường.",
    category: "Sản phẩm",
    author: "CX-MEN",
    date: "2025-02-25",
    readTime: "4 phút",
    image: "/blog/ly-do-chon-cx-men.jpg",
    featured: true,
    content: `
      <p>Xi măng chống thấm CX-MEN đang được rất nhiều công trình tin dùng. Dưới đây là 5 lý do vì sao bạn nên chọn CX-MEN.</p>

      <h2>1. Chống thấm 2 chiều</h2>
      <p>CX-MEN chống thấm cả thuận và nghịch, bảo vệ công trình toàn diện từ cả hai phía.</p>

      <h2>2. Cường độ sớm cao</h2>
      <p>Cho phép tháo ván khuôn sớm hơn, tiết kiệm thời gian thi công đáng kể.</p>

      <h2>3. Dễ thi công</h2>
      <p>Thi công đơn giản như xi măng thường, không cần kỹ thuật phức tạp.</p>

      <h2>4. Bền vững theo thời gian</h2>
      <p>Chống nồm ẩm, kiềm hóa và muối-tuyết triệt để. Tuổi thọ lên đến 20+ năm.</p>

      <h2>5. Giá cả hợp lý</h2>
      <p>Giá thành cạnh tranh, phù hợp với mọi quy mô công trình.</p>

      <p>Liên hệ ngay <strong>0962352394</strong> để được tư vấn và báo giá!</p>
    `
  },
  {
    id: 3,
    slug: "xu-ly-tham-nuoc-nha-ve-sinh-hieu-qua",
    title: "Xử lý thấm nước nhà vệ sinh hiệu quả",
    excerpt: "Giải pháp xử lý thấm nước nhà vệ sinh, ban công bằng xi măng chống thấm CX-MEN, đơn giản và hiệu quả.",
    category: "Giải pháp",
    author: "Kỹ sư Trần Văn B",
    date: "2025-02-20",
    readTime: "6 phút",
    image: "/blog/xu-ly-tham-nha-ve-sinh.jpg",
    featured: false,
    content: `
      <p>Thấm nước nhà vệ sinh là vấn đề phổ biến gây nhiều phiền toái. Xi măng CX-MEN giúp bạn giải quyết triệt để.</p>

      <h2>Nguyên nhân thấm nước</h2>
      <ul>
        <li>Vữa trát không chống thấm</li>
        <li>Khe nứt do co ngót</li>
        <li>Áp lực nước ngầm</li>
      </ul>

      <h2>Giải pháp với CX-MEN</h2>
      <p>Sử dụng xi măng CX-MEN để trát lại toàn bộ nền và tường nhà vệ sinh. Đặc biệt chú ý các góc tường, chân tường.</p>

      <h2>Quy trình thi công</h2>
      <ol>
        <li>Đục bỏ lớp vữa cũ</li>
        <li>Vệ sinh bề mặt</li>
        <li>Trát vữa CX-MEN 2-3 lớp</li>
        <li>Bảo dưỡng 7 ngày</li>
      </ol>

      <p>Liên hệ <strong>0962352394</strong> để được hỗ trợ kỹ thuật!</p>
    `
  }
]

// Export as allPosts for compatibility
export const allPosts = blogPosts

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}
