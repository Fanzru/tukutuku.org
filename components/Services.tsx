import {dataServices} from '../data/services'
const Services = () => {
  return (
    <>
      <div>
        <div className="mt-[100px] flex flex-col items-center mb-[50px] ">
          <div className="max-w-[1440px] w-full">
            <div className="text-center text-5xl md:text-6xl font-bold">
              <p>Other Services</p>
            </div>
            <div className="grid md:grid-rows-2 md:grid-cols-2 gap-[20px] mt-10 mx-10">
              {
                dataServices.map((data,idx)=> {
                  return (
                    <div key={idx} className="card w-full bg-base-100 shadow-xl image-full h-[400px] shadow-lg shadow-gray-500/50" >
                      <figure><img src={data.image} className="object-cover w-full" alt="Shoes"/></figure>
                      <div className="card-body">
                        <h2 className="card-title text-3xl ">{data.name}</h2>
                        <p className="text-xl opacity-80">{data.description}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services