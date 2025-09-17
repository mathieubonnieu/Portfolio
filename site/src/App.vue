<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="site">
    <header class="site__header">
      <div class="site__header-inner">
        <RouterLink to="/" class="site__brand">
          <img alt="Logo" class="site__logo" src="@/assets/logo.svg" width="36" height="36" />
          <span class="site__brand-name">APortefolio</span>
        </RouterLink>
        <nav class="site__nav">
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/projects">Projets</RouterLink>
          <RouterLink to="/about">À propos</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>
    </header>

    <main class="site__content">
      <RouterView />
    </main>

    <footer class="site__footer">
      <p>© {{ new Date().getFullYear() }} APortefolio — Tous droits réservés.</p>
    </footer>
  </div>
  
</template>

<style scoped>
.site {
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

/* Header toujours visible, collé en haut */
.site__header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid var(--color-border);
  background: black;
  margin-bottom: 100px;
}

/* Contenu du header */
.site__header-inner {
  margin: 0 auto;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 1rem; */
  /* max-width: 1200px; */
  width: 100%;
}

.site__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.site__brand-name {
  font-weight: 700;
}

.site__nav a {
  margin-left: 1rem;
}

.site__content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 1.5rem 1.5rem; /* ajoute une marge en haut = hauteur du header */
}

.site__footer {
  border-top: 1px solid var(--color-border);
  padding: 1rem 1.25rem;
  text-align: center;
  font-size: 0.9rem;
}

@media (min-width: 1024px) {
  .site__content {
    padding: 2rem;
  }
}
</style>

