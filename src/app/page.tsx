"use client"
import Chat from '@/components/Chat'
import Sidebar from '@/components/Sidebar'
import { useAppSelector } from '@/redux/hooks'
import { selectShowSidebar } from '@/redux/selectors/commonSelectors';

export default function Home() {
  const isShowSidebar = useAppSelector(selectShowSidebar);

  return (
    <main className="flex h-[90dvh] bg-gray-100 text-black flex-col items-center justify-between p-10">
      <div className="grid grid-cols-3 gap-4 w-full h-full">
        <div className={`${isShowSidebar ? 'flex': 'hidden'} transition-[display] duration-700 ease-in-out`}>
          <Sidebar/>
        </div>
        <div className={`${isShowSidebar ? 'col-span-2' : 'col-span-3'}`}>
          <Chat />
        </div>
      </div>
    </main>
  )
}