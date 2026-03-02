import Link from 'next/link'
import { FileText, Scale, Shield, Clock } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      {/* Back to Home Button */}
      <div className="py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
          >
            <span>← Ana Sayfaya Dön</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full px-6 py-3">
              <FileText className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white">Kullanım Şartları</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kullanım
            <span className="text-gradient block">Şartlarımız</span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Barış Can Daşcı Portfolyo sitesini ziyaret ettiğiniz ve kullandığınız için 
            teşekkür ederiz. Bu sayfa, sitemizi nasıl kullanabileceğinizi ve 
            sorumluluklarınızı açıklayan temel kuralları içerir.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="glass-card border grid-line p-8 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Kabul ve Kullanım</h3>
                  <p className="text-gray-400">Sitemizi kullanarak bu şartları kabul etmiş sayılırsınız.</p>
                </div>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>• Sitemiz sadece profesyonel tanıtım amaçlıdır</p>
                <p>• İçeriklerimiz telif hakları ile korunmaktadır</p>
                <p>• Ticari amaçlar için izin alınmadan kullanılamaz</p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="glass-card border grid-line p-8 hover:border-indigo-400 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Sorumluluk Reddi</h3>
                  <p className="text-gray-400">Sitemizdeki bilgilerin doğruluğu ve güncelliği konusunda sınırlı sorumluluk alırız.</p>
                </div>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>• Teknolojik gelişmeler nedeniyle bilgiler güncellenebilir</p>
                <p>• Proje ve deneyimlerle ilgili ifadeler doğrudur</p>
                <p>• Üçüncü tarafların içeriklerinden sorumlu değiliz</p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="glass-card border grid-line p-8 hover:border-purple-400 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Değişiklikler</h3>
                  <p className="text-gray-400">Bu şartları herhangi bir zamanda güncelleme hakkını saklı tutarız.</p>
                </div>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>• Güncellemeler site üzerinden duyurulur</p>
                <p>• Devam eden kullanım güncellenen şartları kabul anlamına gelir</p>
                <p>• Tarihler her güncellemede güncellenir</p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="glass-card border grid-line p-8 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Hukuki Uyarı</h3>
                  <p className="text-gray-400">Bu şartlar, site kullanımınızı yasal çerçevede düzenler.</p>
                </div>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>• Türkiye Cumhuriyeti yasalarına tabidir</p>
                <p>• Uyuşmazlıklarda İstanbul mahkemeleri yetkilidir</p>
                <p>• Şartlar ihlali durumunda erişim engellenebilir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card border grid-line p-12 neon-glow-cyan">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Daha Fazla Bilgi
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Kullanım şartlarımız hakkında sorularınız varsa veya 
              detaylı bilgiye ihtiyaç duyarsanız, iletişim sayfamızdan 
              bize ulaşabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                İletişime Geçin
              </Link>
              <Link href="/" className="btn-secondary">
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}