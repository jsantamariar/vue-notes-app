const privateRoutes = [
  {
    path: '/notes',
    name: 'Notes',
    component: () => import('@/views/NotesView.vue')
  },
  {
    path: '/notes/:id',
    name: 'Note',
    component: () => import('@/views/NoteView.vue')
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => import('@/views/StatsView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/AdminView.vue')
  }
]

export default privateRoutes
