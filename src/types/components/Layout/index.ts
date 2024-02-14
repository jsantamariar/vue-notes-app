//  Interfaces
interface Note {
  id: string
  title: string
  description: string
}

//  Enums
enum MenuOptions {
  Profile = 'profile',
  Settings = 'settings',
  SignOut = 'signOut'
}

export { type Note, MenuOptions }
