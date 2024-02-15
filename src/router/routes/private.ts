const privateRoutes = [
  {
    path: '/notes',
    name: 'Notes',
    component: () => import('@/views/NotesView.vue')
  },
  {
    path: '/notes/:id',
    name: 'Note',
    component: () => import('@/views/NoteDetailsView.vue')
  },
  {
    path: '/editNote/:id',
    name: 'EditNote',
    component: () => import('@/views/EditNoteView.vue')
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
