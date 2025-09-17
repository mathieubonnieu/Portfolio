<script setup lang="ts">
import ProjectCard, { type ProjectItem } from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'

const items = projects as ProjectItem[]
</script>

<template>
  <section class="projects">
    <h1 class="projects__title">Projets</h1>
    <div class="projects__grid">
      <ProjectCard v-for="p in items" :key="p.id" :project="p" />
    </div>
  </section>
</template>

<style scoped>
.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}
</style>


