import Link from 'next/link';
import { Zap, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center" style={{ borderRadius: '0.25rem 0.75rem 0.25rem 0.75rem' }}>
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Neural LAB</span>
            </div>
            <p className="text-stone-400 text-sm mb-4 font-light">
              Construímos soluções sólidas em IA com a confiabilidade do concreto armado brasileiro.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com" className="p-2 bg-stone-800 text-stone-400 hover:text-amber-100 hover:bg-stone-700 transition-colors" style={{ borderRadius: '0.25rem 0.75rem 0.25rem 0.75rem' }}>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="p-2 bg-stone-800 text-stone-400 hover:text-amber-100 hover:bg-stone-700 transition-colors" style={{ borderRadius: '0.25rem 0.75rem 0.25rem 0.75rem' }}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contato@neural-lab.com" className="p-2 bg-stone-800 text-stone-400 hover:text-amber-100 hover:bg-stone-700 transition-colors" style={{ borderRadius: '0.25rem 0.75rem 0.25rem 0.75rem' }}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="text-stone-400 hover:text-amber-100 transition-colors font-medium">Sobre</Link></li>
              <li><Link href="/servicos" className="text-stone-400 hover:text-amber-100 transition-colors font-medium">Serviços</Link></li>
              <li><Link href="/portfolio" className="text-stone-400 hover:text-amber-100 transition-colors font-medium">Portfolio</Link></li>
              <li><Link href="/blog" className="text-stone-400 hover:text-amber-100 transition-colors font-medium">Blog</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2">
              <li><span className="text-stone-400 font-light">Engenharia de IA</span></li>
              <li><span className="text-stone-400 font-light">Sistemas MLOps</span></li>
              <li><span className="text-stone-400 font-light">Arquitetura Robusta</span></li>
              <li><span className="text-stone-400 font-light">Consultoria Estratégica</span></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-400" />
                <span className="text-stone-400 text-sm font-light">contato@neural-lab.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-stone-400" />
                <span className="text-stone-400 text-sm font-light">+55 (31) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-stone-400" />
                <span className="text-stone-400 text-sm font-light">Belo Horizonte, Minas Gerais</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-stone-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-400 font-light">
            © 2025 Neural LAB. Construído com solidez brasileira.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="text-sm text-stone-400 hover:text-amber-100 transition-colors font-light">Política de Privacidade</Link>
            <Link href="/termos" className="text-sm text-stone-400 hover:text-amber-100 transition-colors font-light">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}