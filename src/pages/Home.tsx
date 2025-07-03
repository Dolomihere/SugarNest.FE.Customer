import { Nav } from "./shared/Nav"
import { Footer } from "./shared/Footer"

// import { ProductCard } from "../components/ProductCard"

// import LoopComponent from "../components/LoopComponent"

export function HomePage() {
  const reviews = [
    { name: "Phùng Ngọc Yến Nhi", comment: "Bánh kem sinh nhật từ SugarNest là lựa chọn hoàn hảo cho bữa tiệc của tôi.", rating: 5 },
    { name: "Phạm Thị Minh Nhàn", comment: "Những chiếc cupcake ở đây thật sự ngon không thể cưỡng lại.", rating: 4},
    { name: "Nguyễn Thị Mai", comment: "Dịch vụ đặt bánh theo yêu cầu rất tuyệt vời. Họ làm đúng những gì tôi muốn.", rating: 5 },
  ];

  return(
  <div className="dark:bg-grey-900">
    
    <Nav />
    
    <section className="dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

        <div className="mr-auto place-self-center lg:col-span-7">

          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Bánh Ngọt <span className="text-amber-600">Tuyệt Hảo</span><br />
            Cho Mọi Dịp</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Hãy để mỗi khoảnh khắc trong cuộc sống thêm phần ngọt ngào với những chiếc bánh thủ công tinh tế từ chúng tôi được chế biến từ nguyên liệu tự nhiên, kết hợp giữa hương vị truyền thống và sự sáng tạo hiện đại trong từng lớp bánh.</p>

          <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#1d4ed8] hover:bg-[#1e40af] focus:ring-4 focus:ring-[#93c5fd] dark:focus:ring-[#1e3a8a]">
            Đặt bánh ngay
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>

          <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-amber-500 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Liên hệ với chúng tôi
          </a>

        </div>
        
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://i.pinimg.com/736x/f3/40/aa/f340aa237513bc33d67074f674b2305a.jpg" alt="mockup"/>
        </div>

      </div>
    </section>

    {/* <div className="grid grid-cols-4 gap-4 p-5">
      <LoopComponent count={4} >
        <ProductCard />
      </LoopComponent>
    </div> */}

    <section className="px-10 my-10 space-y-20 dark:bg-gray-900">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

        <img
          src="https://i.pinimg.com/736x/3d/83/98/3d83988ed8c5c02a87c1c1e8cd367dba.jpg"
          alt="Tiệm bánh SugarNest"
          className="w-full h-[360px] object-cover rounded-3xl shadow-lg border border-amber-200"
        />

        <div className="space-y-5">
          <h2 className= "text-4xl font-extrabold text-amber-600">Về SugarNest</h2>

          <p className="text-stone-600 leading-relaxed text-lg">
            SugarNest được thành lập vào năm 2025 với niềm đam mê tạo ra những chiếc bánh không chỉ ngon miệng mà còn đẹp mắt. Từ một tiệm bánh nhỏ, chúng tôi đã trở thành thương hiệu được yêu thích nhờ sự tận tâm và sáng tạo.
          </p>

          <p className="text-stone-600 leading-relaxed text-lg">
            Chúng tôi chọn nguyên liệu chất lượng, kết hợp công thức độc quyền và đôi bàn tay thủ công để tạo nên từng chiếc bánh ngọt ngào, đậm chất nghệ thuật và cảm xúc.
          </p>
        </div>
      </div>

      <div className="text-center">

        <div className="max-w-6xl mx-auto mb-14 space-y-3">
          <h2 className="text-4xl font-extrabold text-amber-600 mb-4">Khách Hàng Nói Gì</h2>
          <p className="text-stone-600 text-lg">
            Những chia sẻ thật lòng từ khách hàng đã trải nghiệm bánh và dịch vụ của SugarNest
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">

          {reviews.map((r, i) => (
            <div key={i} className="bg-[#fffcf8] border-amber-100 shadow rounded-2xl p-6 text-left space-y-4 transition hover:shadow-lg">
              <p className="text-stone-700 italic leading-relaxed">“{r.comment}”</p>

              <div className="flex items-center justify-between">

                <span className="text-sm font-semibold text-gray-800">{r.name}</span>
                <div className="flex text-yellow-500">

                  {[...Array(5)].map((_, idx) =>
                    idx < r.rating ? "★" : "☆"
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>

    <div className="w-2/3 mx-auto p-4 my-8 text-center border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-amber-500 dark:border-gray-700">

      <h5 className="mb-2 text-3xl font-bold text-amber-500 dark:text-white">Đăng Ký Nhận Khuyến Mãi</h5>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Đừng bỏ lỡ những chiếc bánh mới nhất cùng các ưu đãi hấp dẫn chỉ dành riêng cho khách hàng đăng ký nhận tin.</p>

      <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">

        <input className="px-5 py-3 w-full sm:w-2/3 rounded-xl border border-stone-300" type="text" />

        <a href="#" className="w-full sm:w-auto bg-amber-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-6 py-4 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
          
          <div className="text-left rtl:text-right">
            <div className="font-sans text-sm font-semibold">Đăng kí</div>
          </div>

        </a>

      </div>

      <p className="mt-6 text-sm text-stone-500 italic">
        Chúng tôi cam kết bảo mật thông tin và không chia sẻ với bên thứ ba.
      </p>

    </div>

    <Footer />

  </div>
  )
}
