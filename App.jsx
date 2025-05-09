import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// Importe seus ícones do lucide-react ou use SVGs diretamente
import { Casino, Gem, Users, VenetianMask, Crown, ShieldCheck } from 'lucide-react'; // Exemplos de ícones

// Tailwind CSS (normalmente importado em um main.jsx ou index.js, mas aqui o App.jsx é o ponto de entrada)
import './index.css'; // Crie um arquivo index.css na raiz para as diretivas do Tailwind

// --- ÍCONES SVG (Exemplos, substitua ou use Lucide) ---
// Se preferir usar SVGs diretamente para não depender de uma biblioteca:
const RouletteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-casino-gold">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M12 2v4M12 18v4M22 12h-4M6 12H2m7-7-3 3m11 5-3 3M9 15l-3-3m11-5 3 3" />
  </svg>
);

const SlotMachineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-casino-gold">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M7 12h10M7 7h2m6 0h2M7 17h2m6 0h2" />
    <path d="M19 12v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3" />
    <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14" />
    <path d="M12 17v2" />
  </svg>
);

const BlackjackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-casino-gold">
    <path d="M15 4H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
    <path d="M9 4l3 3 3-3" />
    <path d="M12 12h.01" />
    <path d="M7 18h10" />
    <path d="M12 7v2" />
  </svg>
);


// --- COMPONENTES ---

// Logo Component
const Logo = () => (
  // Substitua pelo seu logo. Pode ser um texto estilizado, um SVG embutido ou uma <img> com src para uma imagem hospedada.
  // Exemplo com texto:
  <div className="text-3xl md:text-4xl font-bold text-casino-gold font-['Playfair_Display'] tracking-wider">
    {/* Ou use uma tag <img> se tiver uma imagem hospedada externamente: */}
    {/* <img src="URL_DO_SEU_LOGO_EXTERNO.png" alt="Logo Cassino" className="h-12" /> */}
    Simulacro<span className="text-casino-red">Casino</span>
  </div>
);

// Hero Section
const HeroSection = () => {
  return (
    // Substitua 'URL_DA_SUA_IMAGEM_DE_FUNDO_HERO_EXTERNA.jpg' pela URL da sua imagem de fundo.
    // Recomenda-se uma imagem escura ou com overlay para que o texto branco seja legível.
    // Exemplo de imagem placeholder: 'https://images.unsplash.com/photo-1542622670-9a2f3c434f69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white p-6 bg-casino-black"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080/000000/FFD700?text=Imagem+Fundo+Cassino+Aqui')", // Substitua pela URL da sua imagem de fundo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay escuro para legibilidade */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8">
          <Logo />
        </div>
        {/* Substitua pelo seu H1 principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-pulse-slow">
          A Emoção do Cassino, <span className="text-casino-red">Sem Riscos!</span>
        </h1>
        {/* Substitua pelo seu subtítulo/descrição */}
        <p className="text-lg md:text-xl mb-10 max-w-2xl text-casino-light-gold">
          Divirta-se com nossos jogos de cassino 100% simulados. Nenhuma aposta real envolvida, apenas pura diversão.
        </p>
        <button
          className="bg-casino-red hover:bg-casino-dark-red text-white font-bold py-4 px-10 rounded-lg text-xl shadow-lg
                     transform transition-all duration-300 ease-in-out
                     hover:scale-110 active:animate-button-push focus:outline-none focus:ring-4 focus:ring-casino-gold focus:ring-opacity-50"
        >
          Simule Agora!
        </button>
      </div>
      {/* Você pode adicionar uma seta para baixo ou outro elemento aqui */}
      <div className="absolute bottom-10 text-casino-gold animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14m0 0l-4-4m4 4l4-4"/></svg>
      </div>
    </section>
  );
};

// Game Card
const GameCard = ({ title, description, icon }) => {
  return (
    <div className="bg-casino-black border-2 border-casino-gold rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-casino-gold/30">
      <div className="flex justify-center mb-4 text-casino-gold">
        {icon}
      </div>
      {/* Substitua pelos títulos dos seus jogos */}
      <h3 className="text-2xl font-bold text-casino-gold mb-2">{title}</h3>
      {/* Substitua pelas descrições dos seus jogos */}
      <p className="text-casino-light-gold text-sm">{description}</p>
      <button className="mt-6 bg-casino-red hover:bg-casino-dark-red text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200">
        Jogar Simulado
      </button>
    </div>
  );
};

// Games Section
const GamesSection = () => {
  const games = [
    {
      title: "Roleta Clássica",
      description: "Faça suas apostas simuladas e veja a roda girar! Muita emoção sem gastar nada.",
      // Substitua 'URL_ICONE_ROLETA_EXTERNO.svg' ou use o componente SVG
      icon: <RouletteIcon /> // Ou <img src="URL_ICONE_ROLETA_EXTERNO.svg" alt="Roleta" className="h-12 w-12 mx-auto" />
    },
    {
      title: "Caça-Níqueis 777",
      description: "Alinhe os símbolos e sinta a adrenalina dos slots. Prêmios virtuais te esperam!",
      // Substitua 'URL_ICONE_SLOTS_EXTERNO.svg' ou use o componente SVG
      icon: <SlotMachineIcon /> // Ou <img src="URL_ICONE_SLOTS_EXTERNO.svg" alt="Caça-Níqueis" className="h-12 w-12 mx-auto" />
    },
    {
      title: "Blackjack Pro",
      description: "Desafie o dealer virtual e tente chegar a 21 neste clássico jogo de cartas.",
      // Substitua 'URL_ICONE_BLACKJACK_EXTERNO.svg' ou use o componente SVG
      icon: <BlackjackIcon /> // Ou <img src="URL_ICONE_BLACKJACK_EXTERNO.svg" alt="Blackjack" className="h-12 w-12 mx-auto" />
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-casino-black via-gray-900 to-casino-black text-white px-6">
      <div className="container mx-auto text-center">
        {/* Substitua pelo título da sua seção de jogos */}
        <h2 className="text-4xl font-bold mb-3 text-casino-gold font-['Playfair_Display']">Nossos Jogos <span className="text-casino-red">Simulados</span></h2>
        <p className="text-lg text-casino-light-gold mb-12 max-w-xl mx-auto">
          Explore nossa seleção de jogos clássicos de cassino, recriados para sua diversão virtual.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={index} title={game.title} description={game.description} icon={game.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonial Card
const TestimonialCard = ({ quote, author, avatar }) => {
  return (
    <div className="bg-casino-black border border-casino-gold/50 rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
       {/* Substitua pela URL da imagem de avatar ou use um placeholder/ícone */}
      <img
        src={avatar || `https://via.placeholder.com/80/FFD700/000000?text=${author.substring(0,1)}`}
        alt={author}
        className="w-20 h-20 rounded-full mb-4 border-2 border-casino-gold object-cover"
      />
      {/* Substitua pelo texto do depoimento */}
      <p className="text-casino-light-gold italic mb-4">"{quote}"</p>
      {/* Substitua pelo nome do autor do depoimento */}
      <p className="font-bold text-casino-gold">{author}</p>
    </div>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      // Substitua pelos seus textos de depoimentos
      quote: "Nunca me diverti tanto sem gastar um centavo! O design é incrível e os jogos são super realistas.",
      author: "Usuário Feliz 1",
      // Substitua pela URL da imagem de avatar ou deixe null para placeholder
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "A simulação de roleta é perfeita para entender o jogo antes de pensar em cassinos reais. Adorei!",
      author: "Entusiasta de Jogos",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "Finalmente um lugar para sentir a emoção do cassino de forma segura e responsável. Recomendo!",
      author: "Jogador Consciente",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white px-6">
      <div className="container mx-auto text-center">
        {/* Substitua pelo título da sua seção de depoimentos */}
        <h2 className="text-4xl font-bold mb-3 text-casino-gold font-['Playfair_Display']">O Que Dizem Nossos <span className="text-casino-red">Jogadores Virtuais</span></h2>
         <p className="text-lg text-casino-light-gold mb-12 max-w-xl mx-auto">
          Veja como a simulação pode ser empolgante e divertida.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} avatar={testimonial.avatar} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-casino-black text-casino-light-gold py-12 px-6 text-center">
      <div className="container mx-auto">
        <div className="mb-6">
          <Logo />
        </div>
        <div className="mb-6">
          {/* Substitua ou adicione seus links de rodapé */}
          <a href="#simulacao" className="px-3 hover:text-casino-gold transition-colors">Termos de Simulação</a>
          <a href="#privacidade" className="px-3 hover:text-casino-gold transition-colors">Política de Privacidade Fictícia</a>
          <a href="#contato" className="px-3 hover:text-casino-gold transition-colors">Contato (Simulado)</a>
        </div>
        <div className="mb-6 text-sm text-casino-gold/80">
          {/* Aviso importante */}
          <p className="font-bold text-lg text-casino-red mb-2">
            <ShieldCheck size={24} className="inline mr-2" /> ATENÇÃO: ESTE É UM SITE DE SIMULAÇÃO!
          </p>
          <p>Todos os jogos são apenas para entretenimento. Nenhum dinheiro real é apostado ou ganho.</p>
          <p>Divirta-se com responsabilidade. Conteúdo para maiores de 18 anos (ou idade legal aplicável).</p>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Simulacro Grand Casino. Todos os direitos reservados (simulados).</p>
      </div>
    </footer>
  );
};


// Main App Component
function App() {
  return (
    <div className="bg-casino-black min-h-screen font-sans">
      <HeroSection />
      <GamesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Export App para que o index.html possa importá-lo
export default App;