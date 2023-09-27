'use client'

import { useEffect, useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'

const getGreeting = async (name: string): Promise<string> => {
  return await invoke('greet', { name: name })
}

export default function Greet() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => { 
    getGreeting("World").then(setGreeting)
  }
  , [])

  return (
    <div className="msg">
      {/* inputに入れた名前に挨拶する */}
      <input className='border' type="text" id="name" />
      <button className='border ml-5' onClick={() => {
        getGreeting((document.getElementById("name") as HTMLInputElement).value).then(setGreeting)
      }}>Greet</button>
      <p>{greeting}</p>
    </div>
  );
}