export function getItem () {
  return {
    id: 1,
    name: 'Test Item',
    description: 'This is a test item',
    ownerId: 234
  }
}

export function getItems () {
  return [
    {
      id: 1,
      name: 'Test Item',
      description: 'This is a test item',
      ownerId: 234
    },
    {
      id: 2,
      name: 'Test Item 2',
      description: 'This is a test item 2',
      ownerId: 234
    }
  ]
}

export function getUser () {
  return {
    id: 234,
    username: 'test'
  }
}
