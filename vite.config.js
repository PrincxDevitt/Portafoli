import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portafoli/', // Reemplaza <tu_repositorio> con el nombre del repositorio
});
