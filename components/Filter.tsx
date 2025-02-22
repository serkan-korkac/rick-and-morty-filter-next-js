'use client';

import { useFilterStore } from '@/store/useFilterStore';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { useRouter } from 'next/navigation';

export const Filter = () => {
  const { status, gender, setFilter } = useFilterStore();
  const router = useRouter();

  const updateQuery = (filter: 'status' | 'gender', value: string) => {
    setFilter(filter, value);

    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(filter, value === 'all' ? '' : value);

    router.push(`?${queryParams.toString()}`, { scroll: false });
  };

  return (
    <div className="flex gap-6 flex-wrap justify-center bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 p-6 rounded-xl shadow-lg">
      <div className="flex flex-col gap-4 sm:flex-row items-center">
        <Select value={status} onValueChange={(val) => updateQuery('status', val !== 'all' ? val : '')}>
          <SelectTrigger className="bg-white text-gray-700 border border-gray-300 hover:border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            {(status !== 'all' && status) ? status : 'Status'}
          </SelectTrigger>
          <SelectContent className="bg-white rounded-md shadow-lg border border-gray-200">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="alive">Alive</SelectItem>
            <SelectItem value="dead">Dead</SelectItem>
            <SelectItem value="unknown">Unknown</SelectItem>
          </SelectContent>
        </Select>

        <Select value={gender} onValueChange={(val) => updateQuery('gender', val !== 'all' ? val : '')}>
          <SelectTrigger className="bg-white text-gray-700 border border-gray-300 hover:border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            {(gender !== 'all' && gender) ? gender : 'Gender'}
          </SelectTrigger>
          <SelectContent className="bg-white rounded-md shadow-lg border border-gray-200">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="genderless">Genderless</SelectItem>
            <SelectItem value="unknown">Unknown</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
