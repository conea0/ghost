'use client';
import React, { useEffect, useState } from 'react';
import { initData } from '@/tmp/data';
import { CellData } from '@/types/cell_data';
import { Cell } from '@/components/Cell/Cell';
import { emit, listen } from '@tauri-apps/api/event';
import { open } from '@tauri-apps/api/dialog';
// import './InfiniteScrollTable.css'; // スタイルシートのインポート

const importCSV = () => {
  listen<string>('import', async (data) => {
    const path = await open({
      title: "Select a csv file",
      multiple: true,
      filters: [{
        name: 'CSV',
        extensions: ['csv']
      }]
    });

    console.log(path);
  });
}

const Page = () => {
  useEffect(() => {
    importCSV();
  }, []);

  return (
    <div>
      <h1>Page</h1>
    </div>
  );
};

export default Page;