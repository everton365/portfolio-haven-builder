import React from "react";

function Footer() {
  return (
    <footer className="bg-primary py-4"> {/* Cor de fundo e padding vertical */}
      <section className="footer">
        <div className="max-w-screen-xl mx-auto text-center"> {/* Centraliza o conteúdo */}
          <p className="text-white text-sm"> {/* Cor do texto e tamanho */}
            &copy; 2024 ewernoute. Todos os direitos reservados.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;