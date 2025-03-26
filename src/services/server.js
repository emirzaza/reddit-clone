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
          slug: 'kitap',
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
          slug: 'emir',
          title: 'bilge',
        },
        {
          icon: 'games',
          slug: 'bilge',
          title: 'emir',
        },
      ],
    }));

    this.get('/api/topics/:slug/posts', (schema, request) => {
      const slug = request.params.slug;

      const data = {
        games: { content: 'Game content', img: '/image1.jpg' },
        books: { img: '/image0.jpg', content: 'Book content' },
        movies: { img: '/image2.jpg', content: 'Movie content' },
        emir: { img: '/image3.jpg', content: 'Emir içeriği' },
        bilge: {
          img: '/image4.jpg',
          content:
            'selamlar bu bilge içeriğinden gelen bir pararaf metnidir :)',
          username: 'bilgebiri',
          date: '11 hours ago',
          profilePic: '/sct.jpg',
        },
      };

      return data[slug] || new Response(404, {}, { error: 'Not found' });
    });

    this.get('/api/topics/:slug', (scheme, request) => {
      const slug = request.params.slug;

      const data = {
        bilge: {
          title: 'Adventure Games',
          communities: [
            {
              slug: 'reddeadredemption',
              imageUrl:
                'https://styles.redditmedia.com/t5_2rn7o/styles/communityIcon_2083me9o3ia21.png',
              description:
                'A subreddit dedicated to Red Dead Redemption & Red Dead Redemption 2, developed by Rockstar Games, the creators behind the Grand Theft Auto series.',
              members: 2300509,
            },
            {
              slug: 'bilgenin grup',
              imageUrl:
                'https://styles.redditmedia.com/t5_2rn7o/styles/communityIcon_2083me9o3ia21.png',
              description:
                'A subreddit dedicated to Red Dead Redemption & Red Dead Redemption 2, developed by Rockstar Games, the creators behind the Grand Theft Auto series.',
              members: 1020000,
            },
            {
              slug: 'emirin grup',
              imageUrl:
                'https://styles.redditmedia.com/t5_2rn7o/styles/communityIcon_2083me9o3ia21.png',
              description:
                'A subreddit dedicated to Red Dead Redemption & Red Dead Redemption 2, developed by Rockstar Games, the creators behind the Grand Theft Auto series.',
              members: 2333567,
            },
          ],
          parentSlug: 'games',
        },
      };

      return data[slug] || new Response(404, {}, { error: 'Not found' });
    });
  },
});
