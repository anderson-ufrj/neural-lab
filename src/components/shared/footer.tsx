import Link from 'next/link';
import { Zap, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Neural LAB</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Transformamos ideias em soluções inteligentes com IA. Do Brasil para o mundo.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com" className="p-2 rounded-lg bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="p-2 rounded-lg bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contato@neural-lab.com" className="p-2 rounded-lg bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</Link></li>
              <li><Link href="/servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Desenvolvimento de IA</span></li>
              <li><span className="text-gray-400">Machine Learning</span></li>
              <li><span className="text-gray-400">Automação Inteligente</span></li>
              <li><span className="text-gray-400">Consultoria em IA</span></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">contato@neural-lab.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Neural LAB. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="text-sm text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="/termos" className="text-sm text-gray-400 hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}