export type Project = {
  id: string
  title: string
  description: string
  cover?: string
  tags?: string[]
  links?: {
    repo?: string
    demo?: string
  }
}

export const projects: Project[] = [
  {
    id: 'platformer-jam',
    title: 'Platformer Jam',
    description: 'Prototype de platformer réalisé en 48h (game jam).',
    tags: ['Unity', 'C#', '2D'],
  },
  {
    id: 'roguelike',
    title: 'Roguelike Étudiant',
    description: 'Roguelike avec génération procédurale et inventaire.',
    tags: ['Godot', 'GDScript'],
  },
]



