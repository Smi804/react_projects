import React from 'react'

function Card({name,niche,mylink}) {
  
  return (
    <a href="#" className="group relative block mt-3 bg-black w-5/12">
  <img
    alt=""
    src={mylink}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest  left-11 text-pink-500">{niche}</p>

    <h3 className="text-xl font-bold text-yellow-400 shadow-sm shadow shadow-transparent left-11 sm:text-2xl">{name}</h3>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
          quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>
  )
}

export default Card