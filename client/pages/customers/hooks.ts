import { useEffect, useState } from 'react';
import { CustomerData } from '@/types/CustomerData';

export const useUniqueAreaCodes = (data: CustomerData[]) => {
  const [areaCodeOptions, setAreaCodeOptions] = useState<string[]>([]);

  useEffect(() => {
    const uniqueAreaCodes = Array.from(new Set(data.map(c => c.areaCodeNumber)));
    setAreaCodeOptions(uniqueAreaCodes);
  }, [data]);

  return areaCodeOptions;
};