import { useState, useEffect, useRef } from 'react'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const exitIntentTriggeredRef = useRef(false)
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    // Check if popup was already seen
    const hasSeenPopup = localStorage.getItem('exitPopupSeen')
    if (hasSeenPopup || exitIntentTriggeredRef.current) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top and hasn't been triggered before
      if (e.clientY <= 0 && !exitIntentTriggeredRef.current) {
        exitIntentTriggeredRef.current = true
        setIsVisible(true)
        localStorage.setItem('exitPopupSeen', 'true')
      }
    }

    // Delay adding the event listener to avoid immediate triggers
    timerRef.current = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 5000)

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Email submitted:', email)
    
    setIsSubmitting(false)
    setIsSuccess(true)

    // Close popup after success message
    setTimeout(() => {
      setIsVisible(false)
    }, 2000)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        style={{ cursor: 'pointer' }}
      />

      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
        style={{
          animation: 'scaleIn 0.3s ease-out'
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          aria-label="Đóng"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSuccess ? (
          <>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Trở thành đại lý APPE
              </h3>
              <p className="text-blue-100 text-lg">
                Cơ hội kinh doanh hấp dẫn
              </p>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Lợi ích khi trở thành đại lý:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Chiết khấu hấp dẫn
                      </div>
                      <div className="text-sm text-gray-600">
                        Chính sách giá ưu đãi theo doanh số
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Hỗ trợ marketing
                      </div>
                      <div className="text-sm text-gray-600">
                        Tài liệu, vật phẩm quảng cáo miễn phí
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Đào tạo chuyên sâu
                      </div>
                      <div className="text-sm text-gray-600">
                        Kiến thức sản phẩm và kỹ năng bán hàng
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tên doanh nghiệp / Cá nhân"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      Đăng ký ngay
                    </>
                  )}
                </button>
              </form>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800 text-center font-medium">
                  ⚡ Chỉ còn 10 suất đại lý tháng này
                </p>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                Hoặc gọi ngay: <a href="tel:+84351359520" className="text-blue-600 font-semibold">035 135 9520</a>
              </p>
            </div>
          </>
        ) : (
          <div className="p-12 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Thành công!
            </h3>
            <p className="text-gray-600">
              Kiểm tra email để tải tài liệu
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
