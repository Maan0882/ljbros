"use client";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-20 transition-colors duration-500">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <a href="#home" className="text-3xl font-serif tracking-tighter mb-8 block text-foreground">
              LJ Bros<span className="text-accent">.</span>
            </a>
            <p className="text-muted max-w-sm leading-relaxed font-medium">
              Architectural infrastructure solutions. Redefining the landscape of concrete engineering since 1998.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted mb-8">Navigation</h4>
            <ul className="space-y-4 text-[13px] uppercase tracking-widest font-medium text-foreground">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted mb-8">Social</h4>
            <ul className="space-y-4 text-[13px] uppercase tracking-widest font-medium text-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-border gap-8">
          <p className="text-[10px] uppercase tracking-widest text-muted font-bold">
            © {new Date().getFullYear()} LJ Bros. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-muted font-bold">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
