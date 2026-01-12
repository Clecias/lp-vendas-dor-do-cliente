export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-center">
          <a href="https://www.unicodrop.com.br/termosepolitica.asp" className="hover:underline">
            Termos de uso
          </a>
          <span className="hidden md:inline">•</span>
          <a href="https://www.unicodrop.com.br/termosepolitica.asp" className="hover:underline">
            Políticas de privacidade da plataforma
          </a>
          <span className="hidden md:inline">•</span>
          <a href="https://www.unicodrop.com.br/lgpd.asp" className="hover:underline">
            LGPD
          </a>
        </div>
        <div className="mt-4 text-center text-xs text-background/70">
          © 2026 Unico Servicos de Informacao LTDA 38.018.422/0001-67
        </div>
      </div>
    </footer>
  );
};
