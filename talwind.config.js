/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.jsx", // Se todos os componentes estiverem em App.jsx
    // Adicione aqui outros arquivos .jsx se você os criar na raiz
  ],
  theme: {
    extend: {
      colors: {
        'casino-black': '#1a1a1a', // Um preto profundo
        'casino-gold': '#FFD700', // Dourado vibrante
        'casino-red': '#DC2626',   // Vermelho cassino
        'casino-dark-red': '#B91C1C',
        'casino-light-gold': '#FFFDE7',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'button-push': 'button-push 0.2s ease-out',
      },
      keyframes: {
        'button-push': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        }
      },
      fontFamily: {
        'sans': ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
        // Você pode adicionar uma fonte mais temática aqui se desejar,
        // mas precisaria importá-la no index.html via Google Fonts ou similar
        // Ex: 'Playfair Display' para um toque elegante
      }
    },
  },
  plugins: [],
}