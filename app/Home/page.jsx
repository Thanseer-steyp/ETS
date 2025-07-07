import Link from "next/link"

function Home() {
  return (
    <div className="bg-[#131d30]">
      <div className="wrapper">
        <section className="h-[calc(100vh-64px)] flex justify-center flex-col gap-5" >
        <h1 className="text-7xl font-semibold  w-2/3">Discover And Book Events Near You</h1>
        <Link href="" className="bg-[#fab641] p-2.5 rounded-lg font-bold block tracking-wider  w-max text-[#131d30]" >Browse Events</Link>
      </section>
    </div>
    </div>
  )
}

export default Home
