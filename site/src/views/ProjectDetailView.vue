<script setup lang="ts">
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()
const projectId = route.params.id as string
const project = projects.find(p => p.id === projectId)
</script>

<template>
  <section>
    <h1>Détail du projet</h1>
    <template v-if="project">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <ul v-if="project.tags?.length" class="tags">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>
    </template>
    <p v-else>Projet introuvable.</p>
  </section>
</template>

<style scoped>
.tags {
  display: flex;
  gap: 0.5rem;
  padding: 0;
  margin: 0.5rem 0 0 0;
  list-style: none;
}

.tags li {
  border: 1px solid var(--color-border);
  padding: 0.125rem 0.5rem;
  border-radius: 999px;
  font-size: 0.8rem;
}
</style>


