import { useState } from "react"

export function FilterBar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [selected, setSelected] = useState();

  return(
    <div className="border-b border-gray-200 py-6">
      <h3 className="-my-3 flow-root">

        <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-category" aria-expanded="false">
          <span className="font-medium text-gray-900">Loại sản phẩm</span>
          <span className="ml-6 flex items-center">

            {toggle ? (
              <svg 
                className="size-5" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                aria-hidden="true" 
                data-slot="icon"
                onClick={() => setToggle(!toggle)}
              >
                <path fillRule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg 
                className="size-5" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                aria-hidden="true" 
                data-slot="icon"
                onClick={() => setToggle(!toggle)}
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg> 
            )}
            
          </span>
        </button>
      </h3>

      {toggle && (
        <div className="pt-6" id="filter-section-category">
          <div className="space-y-4">

            <div className="flex gap-3">

              <div className="flex h-5 shrink-0 items-center">
                <div className="group grid size-4 grid-cols-1">

                  <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                  <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                    <path className="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path className="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
              </div>

              <label htmlFor="filter-category-0" className="text-sm text-gray-600">New Arrivals</label>

            </div>

            <div className="flex gap-3">
              <div className="flex h-5 shrink-0 items-center">

                <div className="group grid size-4 grid-cols-1">

                  <input id="filter-category-1" name="category[]" value="sale" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                  <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                    <path className="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path className="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
              </div>

              <label htmlFor="filter-category-1" className="text-sm text-gray-600">Sale</label>

            </div>

            <div className="flex gap-3">
              <div className="flex h-5 shrink-0 items-center">

                <div className="group grid size-4 grid-cols-1">
                  
                  <input id="filter-category-2" name="category[]" value="travel" type="checkbox" checked className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                  <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                    <path className="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path className="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
              </div>

              <label htmlFor="filter-category-2" className="text-sm text-gray-600">Travel</label>

            </div>

            <div className="flex gap-3">
              <div className="flex h-5 shrink-0 items-center">

                <div className="group grid size-4 grid-cols-1">

                  <input id="filter-category-3" name="category[]" value="organization" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                  <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                    <path className="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path className="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
              </div>

              <label htmlFor="filter-category-3" className="text-sm text-gray-600">Organization</label>

            </div>

            <div className="flex gap-3">
              <div className="flex h-5 shrink-0 items-center">

                <div className="group grid size-4 grid-cols-1">

                  <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                  <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                    <path className="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path className="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
              </div>

              <label htmlFor="filter-category-4" className="text-sm text-gray-600">Accessories</label>

            </div>

          </div>
        </div>
      )}

    </div>
  )
}