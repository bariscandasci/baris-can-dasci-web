import Link from 'next/link'
import { ShieldCheck, Lock, User, Globe } from 'lucide-react'

export default function PrivacyPolicy() {
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
              <ShieldCheck className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white">Gizlilik Politikası</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gizlilik
            <span className="text-gradient block">İlkelerimiz</span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Barış Can Daşcı Portfolyo sitesi olarak, ziyaretçilerimizin gizliliğini 
            korumak bizim için öncelikli bir meseledir. Bu sayfa, sitemizi kullandığınızda 
            topladığımız bilgileri ve bu bilgileri nasıl koruduğumuzu açıklar.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Section 1 */}
            <div className="glass-card border grid-line p-8 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Veri Toplama</h3>
                  <p className="text-gray-400">Sitemiz, ziyaretçilerin deneyimini iyileştirmek amacıyla minimal veri toplar.</p>
                </div>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>• İletişim formu aracılığıyla paylaşılan iletişim bilgileri</p>
                <p>• Site kullanım istatistikleri ve ziyaretçi analizleri</p>
                <p>• Çerezler ve benzeri izleme teknolojileri</p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="glass-card border grid-line p-8 hover:border-indigo-400 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Veri Kullanımı</h3>
                  <p className="text-gray-400">Topladığımız bilgileri güvenli bir şekilde yönetir ve yalnızca belirtilen amaçlarla kullanırız.</p>
                </div>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>• İletişim taleplerinizi yanıtlamak</p>
                <p>• Site performansını ve kullanıcı deneyimini iyileştirmek</p>
                <p>• Teknik sorunları tespit etmek ve çözmek</p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="glass-card border grid-line p-8 hover:border-purple-400 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Veri Paylaşımı</h3>
                  <p className="text-gray-400">Topladığımız kişisel bilgileri üçüncü taraflarla paylaşmayız.</p>
                </div>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>• Ziyaretçilerimizin gizliliği her zaman önceliğimizdir</p>
                <p>• Yalnızca yasal zorunluluklar durumunda bilgi paylaşımı yapılır</p>
                <p>• İş ortaklarımızla yalnızca hizmet kalitesini artırmak için sınırlı bilgi paylaşımı</p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="glass-card border grid-line p-8 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Güvenlik Önlemleri</h3>
                  <p className="text-gray-400">Verilerinizin güvenliği için modern güvenlik önlemleri kullanıyoruz.</p>
                </div>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>• SSL sertifikası ile güvenli veri iletimi</p>
                <p>• Güncel güvenlik protokolleri ve duvarlar</p>
                <p>• Düzenli güvenlik denetimleri ve güncellemeler</p>
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
              Sorularınız mı Var?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Gizlilik politikamız hakkında daha fazla bilgi edinmek veya 
              sorularınızı iletmek için iletişim sayfamızdan bize ulaşabilirsiniz.
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