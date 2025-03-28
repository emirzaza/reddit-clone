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

      // Örnek veri kümesi
      const data = {
        games: { content: 'Game content', img: '/image1.jpg' },
        books: { img: '/image0.jpg', content: 'Book content' },
        movies: { img: '/image2.jpg', content: 'Movie content' },
        emir: [{ id: 1, img: '/image3.jpg', content: 'Emir içeriği' }],
        bilge: [
          {
            id: 1,
            img: '/image2.jpg',
            content:
              'selamlar bu bilge içeriğinden gelen bir pararaf metnidir idsi 1 dir :)',
            username: 'bilgebiri',
            date: '11 hours ago',
            profilePic: '/sct.jpg',
          },
          {
            id: 2,
            img: '/image1.jpg',
            content:
              'selamlar bu bilge içeriğinden gelen bir pararaf metnidir idsi 12 dir :)',
            username: 'bilgebiri',
            date: '10 hours ago',
            profilePic: '/sct.jpg',
          },
          {
            id: 3,
            img: '/image0.jpg',
            content:
              'selamlar bu bilge içeriğinden gelen bir pararaf metnidir idsi 13 dir :)',
            username: 'bilgebiri',
            date: '9 hours ago',
            profilePic: '/sct.jpg',
          },
          {
            id: 4,
            img: '/image3.jpg',
            content: 'Bilge içerik devamı idsi 4dir ...',
            username: 'bilgebiri',
            date: '8 hours ago',
            profilePic: '/sct.jpg',
          },
          {
            id: 5,
            img: '/image2.jpg',
            content:
              'selamlar bu bilge içeriğinden gelen bir pararaf metnidir idsi 1 dir :)',
            username: 'bilgebiri',
            date: '11 hours ago',
            profilePic: '/sct.jpg',
          },
          {
            id: 6,
            img: '/image1.jpg',
            content:
              'selamlar bu bilge içeriğinden gelen bir pararaf metnidir idsi 12 dir :)',
            username: 'bilgebiri',
            date: '10 hours ago',
            profilePic: '/sct.jpg',
          },
          {
            id: 7,
            img: '/image0.jpg',
            content:
              'selamlar bu bilge içeriğinden gelen bir pararaf metnidir idsi 13 dir :)',
            username: 'bilgebiri',
            date: '9 hours ago',
            profilePic: '/sct.jpg',
          },
          {
            id: 8,
            img: '/image3.jpg',
            content: 'Bilge içerik devamı idsi 4dir ...',
            username: 'bilgebiri',
            date: '8 hours ago',
            profilePic: '/sct.jpg',
          },
          {
            id: 9,
            img: '/image2.jpg',
            content:
              'selamlar bu bilge içeriğinden gelen bir pararaf metnidir idsi 1 dir :)',
            username: 'bilgebiri',
            date: '11 hours ago',
            profilePic: '/sct.jpg',
          },
          {
            id: 10,
            img: '/image1.jpg',
            content:
              'selamlar bu bilge içeriğinden gelen bir pararaf metnidir idsi 12 dir :)',
            username: 'bilgebiri',
            date: '10 hours ago',
            profilePic: '/sct.jpg',
          },
          {
            id: 11,
            img: '/image0.jpg',
            content:
              'selamlar bu bilge içeriğinden gelen bir pararaf metnidir idsi 13 dir :)',
            username: 'bilgebiri',
            date: '9 hours ago',
            profilePic: '/sct.jpg',
          },
          {
            id: 12,
            img: '/image3.jpg',
            content: 'Bilge içerik devamı idsi 4dir ...',
            username: 'bilgebiri',
            date: '8 hours ago',
            profilePic: '/sct.jpg',
          },
        ],
      };

      // Eğer slug bulunamazsa 404 hatası döndür
      if (!data[slug]) {
        return new Response(404, {}, { error: 'Not found' });
      }

      // Eğer slug bir array değilse, doğrudan içeriği döndür
      if (!Array.isArray(data[slug])) {
        return data[slug];
      }

      // Cursor ve limit değerlerini al
      const cursor = parseInt(request.queryParams.cursor, 10) || 0;
      const limit = parseInt(request.queryParams.limit, 10) || 2;

      // Veriyi filtrele ve cursor mantığını uygula
      const allPosts = data[slug];

      // Cursor'un son id'yi takip ettiğini düşünerek slice uygula
      const startIndex = allPosts.findIndex(post => post.id === cursor);
      const start = startIndex === -1 ? 0 : startIndex + 1;
      const end = start + limit;

      // Seçilen sayfadaki verileri slice ile al
      const paginatedData = allPosts.slice(start, end);

      // Bir sonraki cursor'u belirle
      const nextCursor =
        paginatedData.length > 0
          ? paginatedData[paginatedData.length - 1].id
          : null;

      return {
        posts: paginatedData,
        nextCursor,
      };
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
        emir: {
          title: 'emir Games',
          communities: [
            {
              slug: 'allah',
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
