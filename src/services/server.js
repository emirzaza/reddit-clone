import { createServer } from 'miragejs';

createServer({
  routes() {
    this.get('/api/sidebar', () => ({
      categories: [
        {
          id: 1,
          icon: 'internet',
          title: 'Internet Culture',
        },
        {
          id: 2,
          icon: 'games',
          title: 'Games',
        },
        {
          id: 3,
          icon: 'technology',
          title: 'Technology',
        },
      ],
      items: [
        {
          icon: 'arts',
          slug: 'art',
          title: 'Arts',
        },
        {
          icon: 'business',
          slug: 'business',
          title: 'Business',
        },
        {
          icon: 'food',
          slug: 'food-drinks',
          title: 'Foof & Drinks',
        },
        {
          categoryId: 1,
          slug: 'amazing',
          title: 'Amazing',
        },
        {
          categoryId: 1,
          slug: 'animals-pets',
          title: 'Animals & Pets',
        },
        {
          categoryId: 1,
          slug: 'cringe-facepalm',
          title: 'Cringe & Facepalm',
        },
        {
          categoryId: 1,
          slug: 'funny',
          title: 'Funny',
        },
        {
          categoryId: 2,
          slug: 'action-games',
          title: 'Action Games',
        },
        {
          categoryId: 2,
          slug: 'adventure-games',
          title: 'Adventure Games',
        },
        {
          categoryId: 2,
          slug: 'esports',
          title: 'Esports',
        },
        {
          categoryId: 3,
          slug: '3-d-printing',
          title: '3D Printing',
        },
        {
          categoryId: 3,
          slug: 'ai',
          title: 'AI',
        },
        {
          categoryId: 3,
          slug: 'computers',
          title: 'Computers',
        },
        {
          icon: 'games',
          slug: 'bilge',
          title: 'bilge',
        },
        {
          icon: 'games',
          slug: 'emir',
          title: 'emir',
        },
      ],
    }));
  },
});
