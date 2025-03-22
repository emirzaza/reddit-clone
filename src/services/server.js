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
          slug: 'movies',
          title: 'Arts',
        },
        {
          icon: 'business',
          slug: 'movies',
          title: 'Business',
        },
        {
          icon: 'food',
          slug: 'games',
          title: 'Food & Drinks',
        },
        {
          categoryId: 1,
          slug: 'games',
          title: 'Amazing',
        },
        {
          categoryId: 1,
          slug: 'movies',
          title: 'Animals & Pets',
        },
        {
          categoryId: 1,
          slug: 'movies',
          title: 'Cringe & Facepalm',
        },
        {
          categoryId: 1,
          slug: 'movies',
          title: 'Funny',
        },
        {
          categoryId: 2,
          slug: 'emir',
          title: 'books',
        },
        {
          categoryId: 2,
          slug: 'adventure-games',
          title: 'Adventure Games',
        },
        {
          categoryId: 2,
          slug: 'bilge',
          title: 'Esports',
        },
        {
          categoryId: 3,
          slug: 'books',
          title: '3D Printing',
        },
        {
          categoryId: 3,
          slug: 'games',
          title: 'AI',
        },
        {
          categoryId: 3,
          slug: 'games',
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

    this.get('/items/:slug', (schema, request) => {
      const slug = request.params.slug;
    
      const data = {
        games: {  content: 'Game content', img: '/image1.jpg' },
        books: {  img: '/image0.jpg', content: 'Book content' },
        movies: {  img: '/image2.jpg', content: 'Movie content' },
        emir: {  img: '/image3.jpg', content: 'Emir içeriği' },
        bilge: {  img: '/image4.jpg', content: 'Bilge içeriği' },
      };
    
      return data[slug] || new Response(404, {}, { error: 'Not found' });
    });
    
  }
});
