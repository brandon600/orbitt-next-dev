// components/DataDisplay.tsx
'use client';
import React from 'react';
import { useStore } from '../store/store';

function DataDisplay() {
  const { data, fetchData } = useStore();

  React.useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);
  return (
    <div>
      <h2>Data Display</h2>
      <ul>
        <li>{data.userid}</li>
      </ul>
    </div>
  );
}

export default DataDisplay;