import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Diretório de saída para o build
  },
  // IMPORTANTE: Para a restrição "sem pastas", você teria que manualmente
  // mover o conteúdo de 'public' para a raiz após o build,
  // ou ajustar caminhos se estivesse usando assets locais.
  // Como estamos focando em links externos ou SVGs embutidos, isso é menos problemático.
  // Se você tivesse um 'index.html' customizado que não fosse o padrão do Vite,
  // ele também precisaria estar na raiz.
})