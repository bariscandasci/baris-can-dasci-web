"use client";

import Link from 'next/link';
import { Rss, ExternalLink, Calendar, ArrowLeft } from 'lucide-react';
import feedData from '../../data/feed.json';

export default function Feed() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-4 mb-8">
              <Link 
                href="/" 
                className="inline-flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Ana Sayfa</span>
              </Link>
              
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full px-6 py-3">
                <Rss className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">Akış</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Genel
              <span className="text-gradient block">Akış</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Mühendislik, teknoloji ve kariyer gelişimi üzerine paylaşımlar
            </p>
          </div>
        </div>
      </section>

      {/* Feed Cards */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {feedData.map((post) => (
              <Link
                key={post.id}
                href={post.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card border grid-line p-8 group hover:border-cyan-400 transition-all duration-300 relative overflow-hidden block"
              >
                {/* Neon glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-cyan-500/10 group-hover:to-cyan-500/5 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Header with Image and Date */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors duration-300">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('tr-TR', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {post.title}
                      </h2>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {post.summary}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center space-x-3">
                    <span className="btn-primary inline-flex items-center space-x-2 text-sm">
                      <span>LinkedIn'de Gör</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>

                {/* Animated border glow */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card border grid-line p-12 neon-glow-cyan">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bağlantıda Kalalım
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Güncel paylaşımlarımı takip etmek için LinkedIn'de bana katılın.
            </p>
            <Link
              href="https://www.linkedin.com/in/barış-can-daşci-809541340?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-3"
            >
              <span>LinkedIn Profilim</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}