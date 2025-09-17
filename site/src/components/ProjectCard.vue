<script setup lang="ts">
import { RouterLink } from 'vue-router'

export interface ProjectItem {
  id: string
  title: string
  description: string
  cover?: string
  tags?: string[]
}

defineProps<{ project: ProjectItem }>()
</script>

<template>
  <article class="project-card">
    <RouterLink :to="`/projects/${project.id}`" class="project-card__thumb" aria-label="Voir le projet">
      <img v-if="project.cover" :src="project.cover" :alt="project.title" />
      <div v-else class="project-card__placeholder" aria-hidden="true">🎮</div>
    </RouterLink>
    <div class="project-card__body">
      <h3 class="project-card__title">
        <RouterLink :to="`/projects/${project.id}`">{{ project.title }}</RouterLink>
      </h3>
      <p class="project-card__desc">{{ project.description }}</p>
      <ul v-if="project.tags?.length" class="project-card__tags">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>
    </div>
  </article>
  
</template>

<style scoped>
.project-card {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-background-soft);
}

.project-card__thumb {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
  background: #1112;
}

.project-card__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card__placeholder {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 2rem;
}

.project-card__title {
  margin: 0 0 0.25rem 0;
}

.project-card__desc {
  margin: 0.25rem 0 0.5rem 0;
  color: var(--color-text-soft);
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.project-card__tags li {
  border: 1px solid var(--color-border);
  padding: 0.125rem 0.5rem;
  border-radius: 999px;
  font-size: 0.8rem;
}

@media (max-width: 600px) {
  .project-card {
    grid-template-columns: 1fr;
  }
}
</style>

