import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import Loading from '../components/Loading'

const AlbumList = () => {
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  const [is_error, setError] = useState(false)
  const getUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then((res) => {
        console.log(res);

        if (res.status == 200) {
          setAlbums(res?.data)
          console.log(res?.data);

        }
      })
      .catch((error) => {
        setError(true)
      })
      .finally(() => {
        console.log("API dan response qatydi");
        setLoading(false)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

  if (loading) {
    return <Loading />
  }
  if (is_error) {
    return <h1>Nimadir Xato</h1>
  }
  return (
    <div className='bg-gray-100 min-h-screen p-6 flex flex-col items-center mt-26'>
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Texnologiyalr</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <Fragment>
          {
            albums?.map((item) => {
              if (item.id % 6 == 0 || item.id % 10 == 0 || item.id % 15 == 0) {
                return (
                  <div key={item.id} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                    <img
                      src="https://avatars.mds.yandex.net/i?id=c12778bb9bb147e472f424555c38b29129788b8c-8253063-images-thumbs&n=13"
                      alt={item.title}
                      className='w-full h-48 object-cover rounded-lg mb-4 hover:shadow-blue-500 hover:shadow-lg' />
                    <h2 className="text-xl font-semibold text-gray-800">"Title:" +{item.title.length > 25 ? item.title.slice(0, 22) + "..." : item.title}</h2>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-500 hover:underline hover:decoration-blue-500 hover:cursor-pointer">{"UserID: " + item.userId}</span>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg active:bg-blue-300">
                        Batafsil
                      </button>
                    </div>
                  </div>
                )
              }
              else if (item.id % 2 == 0) {
                return (
                  <div key={item.id} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                    <img
                      src="https://overclockers.ru/st/legacy/blog/422120/358217_O.jpg"
                      alt={item.title}
                      className='w-full h-48 object-cover rounded-lg mb-4 hover:shadow-blue-500 hover:shadow-lg' />
                    <h2 className="text-xl font-semibold text-gray-800">"Title:" +{item.title.length > 25 ? item.title.slice(0, 22) + "..." : item.title}</h2>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-500 hover:underline hover:decoration-blue-500 hover:cursor-pointer">{"UserID: " + item.userId}</span>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg active:bg-blue-300">
                        Batafsil
                      </button>
                    </div>
                  </div>
                )
              }
              else if (item.id % 3 == 0) {
                return (
                  <div key={item.id} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                    <img
                      src="https://cdn1.ozone.ru/s3/multimedia-j/6892709923.jpg"
                      alt={item.title}
                      className='w-full h-48 object-cover rounded-lg mb-4 hover:shadow-blue-500 hover:shadow-lg' />
                    <h2 className="text-xl font-semibold text-gray-800">"Title:" +{item.title.length > 25 ? item.title.slice(0, 22) + "..." : item.title}</h2>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-500 hover:underline hover:decoration-blue-500 hover:cursor-pointer">{"UserID: " + item.userId}</span>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg active:bg-blue-300">
                        Batafsil
                      </button>
                    </div>
                  </div>
                )
              }
              else if (item.id % 5 == 0) {
                return (
                  <div key={item.id} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                    <img
                      src="https://avatars.mds.yandex.net/i?id=1a8dad36c68b92ca670c0ad5c19c5272_l-9181886-images-thumbs&n=13"
                      alt={item.title}
                      className='w-full h-48 object-cover rounded-lg mb-4 hover:shadow-blue-500 hover:shadow-lg' />
                    <h2 className="text-xl font-semibold text-gray-800">"Title:" +{item.title.length > 25 ? item.title.slice(0, 22) + "..." : item.title}</h2>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-500 hover:underline hover:decoration-blue-500 hover:cursor-pointer">{"UserID: " + item.userId}</span>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg active:bg-blue-300">
                        Batafsil
                      </button>
                    </div>
                  </div>
                )
              }
              else if (item.id % 7 == 0) {
                return (
                  <div key={item.id} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                    <img
                      src="https://avatars.mds.yandex.net/i?id=ab5da886f280617b075d428e13250993_l-12627978-images-thumbs&n=13"
                      alt={item.title}
                      className='w-full h-48 object-cover rounded-lg mb-4 hover:shadow-blue-500 hover:shadow-lg' />
                    <h2 className="text-xl font-semibold text-gray-800">"Title:" +{item.title.length > 25 ? item.title.slice(0, 22) + "..." : item.title}</h2>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-500 hover:underline hover:decoration-blue-500 hover:cursor-pointer">{"UserID: " + item.userId}</span>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg active:bg-blue-300">
                        Batafsil
                      </button>
                    </div>
                  </div>
                )
              }
              else {
                return (
                  <div key={item.id} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                    <img
                      src="https://avatars.mds.yandex.net/i?id=e280d6f11abfb7fbdec6dcf22f760125_l-10311822-images-thumbs&n=13"
                      alt={item.title}
                      className='w-full h-48 object-cover rounded-lg mb-4 hover:shadow-blue-500 hover:shadow-lg' />
                    <h2 className="text-xl font-semibold text-gray-800">"Title:" +{item.title.length > 25 ? item.title.slice(0, 22) + "..." : item.title}</h2>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-500 hover:underline hover:decoration-blue-500 hover:cursor-pointer">{"UserID: " + item.userId}</span>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg active:bg-blue-300">
                        Batafsil
                      </button>
                    </div>
                  </div>
                )
              }
            })
          }
        </Fragment>
      </div>

    </div>
  )
}

export default AlbumList