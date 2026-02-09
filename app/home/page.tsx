import Image from "next/image";
import { DynamicIcon } from 'lucide-react/dynamic';




export default function Home() {
  const RecentData = [
                { label: "Movie Clon", icon: 'clapperboard' },
                { label: "Sunrise clone", icon: 'arrow-down' },
                { label: "Admin clone", icon: 'arrow-up' }
              ]

  return(
    <main className="min-h-screen bg-[#fdfbff7] text-netural-800">

      {/* //header */}

      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Image
          src="/Image.png"
          alt="Vibe loge"
          width={24}
          height={24}
          className="rounded-full bg-orange-400"
          />
          Vibe
        </div>

        <div className="flex gap-3  ">
          <button className="rounded-md border px-4 py-2 text-sm " >Sign up</button>
          <button className="rounded-md bg-orange-500 border px-4 py-2 text-sm">Sign in</button>
          </div>
      </header>

       <section className="grid grid-cols-12 px-6 pt-24">
  <div className="col-span-12 flex flex-col items-center text-center">
    <Image
      src="/Image.png"
      alt="logo"
      width={56}
      height={56}
      className="mb-6 rounded-full bg-orange-400"
    />

    <h1 className="text-4xl font-semibold">
      Build Something With Vibe
    </h1>


    <p className="mt-3 text-neutral-500">

      Create app and Websites by chatting with AI
    </p>

<div className="relative w-full">
  <textarea
    name="satyam"
    id="pop"
    className="w-full resize-none rounded-lg border p-2 pr-24 outline-none"
    placeholder="What would you like to build?"
    rows={4}
  />
<div className="flex  justify-between -mt-6.5 pl-2">

  <button className=" bottom-1 left-1 text-xs text-gray-500 hover:text-orange-400 pb-1">
    Enter to Submit
  </button>

</div>
</div>

{/* Recent Data */}

<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 flex-1" >
  {RecentData.map(item=>(
    <div key={item.label} id="iconss">
      {item.label}
      <DynamicIcon name={item.icon}/>
    </div>
  ))}
</div>

  </div>
</section>

    </main>
  )

}
