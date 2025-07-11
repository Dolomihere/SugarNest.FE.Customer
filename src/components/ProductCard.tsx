
export function ProductCard() {
  return(
    <div className="antialiased text-gray-900 cursor-pointer">
      <div className="bg-white rounded-lg overflow-hidden shadow-2xl group transition-transform duration-300 hover:translate-y-[-10px]">
        {/* Image */}
        <div className="h-64 w-full overflow-hidden">
          <img
            className="h-full w-full object-cover transform overflow-hidden transition-transform duration-[300ms] hover:scale-115 object-end"
            src="https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?_gl=1*mflc37*_ga*MTczMDkyMTYwNi4xNzQ1MTQxMTU4*_ga_8JE65Q40S6*czE3NTAxNjExNjgkbzYkZzEkdDE3NTAxNjExODYkajQyJGwwJGgw"
            alt="SugarNest bakery"
          />
        </div>

        {/* Content */}
        <div className="p-6 pb-4 group-hover:bg-gray-100 duration-[0.3s]">
          <div className="mt-1 group-hover:text-gray-800">
            <span className="group-hover:text-inherit text-2xl font-semibold">
              $8.99
            </span>
            {/* <span className="group-hover:text-inherit text-sm">/ wk</span> */}
          </div>
          <h4 className="mt-1 font-bold text-xl leading-tight truncate text-amber-600 shadow-gray-300 duration-[0.3s]">
            Delightful Strawberry Cheesecake
          </h4>
          <p className="Card-info text-gray-500 mt-2 ">
            A rich and creamy cheesecake topped with fresh strawberries and a
            delicate glaze. Perfectly balanced sweetness in every bite!
          </p>

          {/* Author */}
          <div className="mt-4 flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&q=80"
              alt="Daniela Metz"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a
                  href="#"
                  className="font-black  hover:underline duration-[0.3s]"
                >
                  Handsome administrator
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500  duration-[0.3s]">
                <time dateTime="2020-02-12">Feb 12, 2020</time>
                <span aria-hidden="true">·</span>
                {/* <span>11 min read</span> */}
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="mt-2 flex items-center justify-between">
            <span className="text-amber-500 font-semibold">★★★★☆</span>
            <div className="flex items-center text-gray-600 ">
              <span className="text-inherit group-hover:text-inherit text-sm">34 reviews</span>
              <span className="ml-4 text-inherit group-hover:text-inherit text-sm flex items-center">
                👁
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}