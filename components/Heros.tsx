import {useRouter} from 'next/router'

const Heros = () => {
  const router = useRouter()
  return (
    <>
      <div className="hero min-h-screen bg-heros">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold md:text-7xl">Create Your Events</h1>
            <p className="mb-5 md:text-xl">Estabilished in 2019, Tukutuku Organization is a Event Organizer based in Kebumen, Central Java. An event organizer that focuses on the field of ESPORTS.</p>
            <button  className="btn btn-primary " onClick={()=> {router.push("https://www.instagram.com/tukutuku.tour/")}}>Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Heros