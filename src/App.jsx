
function App() {
  const news = [
    {
      id: 1,
      title: "Yangi Texnologiyalar 2025",
      description: "2025-yilda texnologiya olamida katta o'zgarishlar kutilmoqda.",
      date: "2025-02-20",
      image: "https://cdn.uza.uz/2024/03/13/13/09/rdjFQb4PSrRS8MvCmMPnnMh6WVuP3cJ3_front.jpg"
    },
    {
      id: 2,
      title: "AI va Katta Ma'lumotlar",
      description: "Sun'iy intellekt katta ma'lumotlar bilan qanday ishlaydi?",
      date: "2025-02-18",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyny28LOAZ_1O2afwpVc9RQeFH9CJ-ke2YGg&s"
    },
    {
      id: 3,
      title: "Dasturlashning Kelajagi",
      description: "Dasturlash dunyosida yangi trendlar va texnologiyalar.",
      date: "2025-02-15",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1bVyLTOvudsT-np66niVxfx1mPMjxeeSUg&s"
    }
  ];
  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center mt-26">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Yangiliklar</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {news.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-cover rounded-lg mb-4 hover:shadow-blue-500 hover:shadow-lg" 
            />
            
            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
            
            <p className="text-gray-600 mt-2">{item.description}</p>
            
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-500 hover:underline hover:decoration-blue-500 hover:cursor-pointer">{item.date}</span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg active:bg-blue-300">
                Batafsil
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <h1 className=" text-[24px] font-semibold text-green-600 underline text-center pt-6 pb-4">World News</h1>
        <p className="text-[18px text-violet-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in tempora quo vero error dolores, mollitia voluptatibus amet accusantium quaerat iste dolorem. Tenetur labore, molestias aliquam a qui possimus molestiae.
        Natus reiciendis architecto ipsam animi minus alias quae neque maiores consequuntur exercitationem quas, repellat repellendus similique debitis optio ducimus officia consectetur? Nulla vero facere sed nam, ducimus tempore ipsa architecto.
        Labore, dignissimos? Fugit maxime voluptates doloribus voluptatem eligendi molestias quasi eos. Nobis, nam eius, ex atque voluptatum deleniti porro consectetur laboriosam molestiae nulla mollitia. Iusto quo suscipit quidem praesentium ipsa?
        Minus quisquam omnis eum ad distinctio iure. Rem soluta deleniti, sunt nam temporibus maiores unde, harum, tempore aliquid debitis nihil atque porro ipsa quisquam voluptatum quasi culpa ex beatae nisi?
        Sed asperiores quod incidunt enim ipsum. Earum dolor recusandae ullam excepturi aut quod voluptates, iste laudantium, harum explicabo, aperiam nam amet itaque. Eum debitis maiores optio commodi ex quod magni!
        Pariatur, eius doloremque ex fugit exercitationem quis tempore dolores dolore velit fuga rerum dicta ratione sequi. Exercitationem, error incidunt ex ipsa officia perspiciatis ducimus iste blanditiis nihil hic velit inventore?
        Laborum unde ipsam nemo aliquam molestiae explicabo laudantium maxime dolor debitis nobis. Sed alias, nesciunt officiis obcaecati reprehenderit explicabo temporibus, unde quam odio doloribus, labore tempore quia possimus itaque praesentium?
        Temporibus atque molestiae doloribus exercitationem aperiam quam odio assumenda cum possimus voluptatum, dolore a sed ratione quis iure consequatur nihil et harum. Possimus quae amet hic laudantium cum consequuntur facere.
        Tempore repellat neque sequi unde asperiores minima omnis voluptates quam, officia dicta incidunt at excepturi repellendus, provident voluptatem doloribus odio velit. Ipsam, consequatur quos veritatis hic itaque rerum dicta natus!
        Officia ipsa fugiat esse sed saepe repudiandae, quisquam numquam quos nesciunt obcaecati accusamus, magni earum necessitatibus, nemo rerum fugit. Maiores molestias aspernatur suscipit beatae quia consequatur ex neque sunt magnam!
        Cupiditate at illo possimus qui, quae libero officia! Corporis voluptas a quas excepturi quis tempora ab non culpa aliquid optio, delectus facere ducimus veritatis. Cumque laborum fuga ipsam natus obcaecati?
        Omnis quidem atque rem velit? Placeat accusantium labore error impedit ea repudiandae aliquam recusandae pariatur aliquid magni illum quae tempore mollitia optio omnis dignissimos, numquam consequuntur distinctio corporis. Pariatur, quibusdam!
        Similique asperiores iste, enim dolorum placeat est dicta provident quidem. Porro quidem eum dolorem corrupti cupiditate omnis accusamus nostrum, enim aliquid nam pariatur itaque aspernatur, alias, necessitatibus excepturi veniam! Sapiente.
        Tempore, explicabo nulla. Blanditiis delectus, architecto magni placeat qui quibusdam, dolor neque ipsum ex animi dolore dicta voluptate molestiae provident enim excepturi doloremque vel reprehenderit error tenetur voluptates, maxime officiis.</p>
        <br />
        <p className="font-semibold text-gray-500">
          Web-site: <a href="https://kun.uz/news/category/jahon" className="text-violet-800 underline">Kun.uz</a>
        </p>
      </div>
    </div>
  )
}

export default App
