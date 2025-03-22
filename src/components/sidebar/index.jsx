import { useEffect, useState } from 'react';
import { getSidebar } from '../../services/api';
import Single from './components/Single';
import Category from './components/Category';
import { Link } from '@tanstack/react-router';

function Index() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await getSidebar();
        const result = data.items.reduce((acc, curr) => {
          if (!curr.categoryId) {
            return [...acc, { ...curr, type: 'single' }];
          }

          const index = acc.findIndex(
            item => item.category?.id === curr.categoryId
          );

          if (index !== -1) {
            acc[index].items.push(curr);
            return acc;
          }

          const category = data.categories.find(
            category => category.id === curr.categoryId
          );

          return [...acc, { category, items: [curr], type: 'category' }];
        }, []);
        console.log(result);
        setData(result);
      } catch (err) {
        console.log(err);
        setError('Failed to load movies...');
      } finally {
        setLoading(false);
      }
    };
    loadItems();
  }, []);
  return (
    <div className="w-full h-full  flex justify-center pt-5 ">
      <ul>
        {data
          .filter(item => item.type === 'single')
          .map((item, index) => (
            <li key={index}>
              <Link to={`/t/${item.slug}`}><Single title={item.title} iconName={item.icon}></Single></Link>
            </li>
          ))}

        {data
          .filter(item => item.type === 'category')
          .map((item, index) => (
            <li key={index}>
             <Category
                title={item.category.title}
                iconName={item.category.icon}
                aytım={item.items.map(subItem => subItem.title)}
              > </Category>
              
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Index;
