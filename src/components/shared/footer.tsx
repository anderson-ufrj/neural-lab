export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">Neural LAB</span>
          </div>
          
          <p className="text-sm text-gray-600 text-center md:text-left">
            © 2025 Neural LAB. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}