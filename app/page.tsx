import { CharacterList } from '@/components/CharacterList';
import { Filter } from '@/components/Filter';

export default async function HomePage() {
  return (
   <div className='container mx-auto p-4'>
      <Filter></Filter>
      <CharacterList />
   </div>
  );
}

