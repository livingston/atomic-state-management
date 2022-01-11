import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [nodeResolve(), react()]
});
