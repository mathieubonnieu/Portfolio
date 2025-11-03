import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// Plugin to exclude large ZIP files from the build
const excludeLargeZips = () => {
  return {
    name: 'exclude-large-zips',
    generateBundle() {
      const distPath = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(distPath)) return;
      
      const demosPath = path.resolve(distPath, 'demos');
      if (!fs.existsSync(demosPath)) return;
      
      const files = fs.readdirSync(demosPath);
      files.forEach(file => {
        if (file.endsWith('.zip')) {
          const filePath = path.resolve(demosPath, file);
          const stats = fs.statSync(filePath);
          const sizeInMB = stats.size / (1024 * 1024);
          
          // Remove files larger than 10MB
          if (sizeInMB > 99) {
            fs.unlinkSync(filePath);
            console.log(`Removed large file from dist: ${file} (${sizeInMB.toFixed(2)} MB)`);
          }
        }
      });
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Portfolio/", // <-- ajoute ça
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    excludeLargeZips()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
