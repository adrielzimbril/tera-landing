export default function Footer() {
  return (
    <footer className="w-full border-t border-mercury-800 py-12 mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <span className="text-2xl font-display font-semibold tracking-tighter">
            TERA<span className="text-mercury-500">.</span>
          </span>
          <p className="text-mercury-500 text-sm mt-2 max-w-xs">
            Zero Gravity Urbanism. A reimagined architectural concept.
          </p>
        </div>
        <div className="flex gap-8 text-sm text-mercury-400">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
