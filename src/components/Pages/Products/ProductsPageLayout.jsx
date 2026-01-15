import getProducts from '../../../lib/getProducts'
import CategorySidebar from './CategorySidebar' // Renamed for clarity
import ShowProducts from './ShowProducts'

const ProductsPageLayout = async ({ slug, locale, searchParams }) => {
      const allProducts = await getProducts(searchParams, slug);

      return (
            <div className='bg-[#F8F9FA] min-h-screen'> {/* Added light gray bg */}
                  <div className="main_container py-8 md:pb-12">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                              {/* Left Sidebar - Sticky */}
                              <aside className="w-full lg:w-1/4 lg:sticky lg:top-28 z-10">
                                    <CategorySidebar slug={slug} />
                              </aside>

                              {/* Right Content */}
                              <main className="w-full lg:w-3/4">
                                    <ShowProducts locale={locale} metaData={allProducts?.data?.meta} products={allProducts?.data?.data} />
                              </main>
                        </div>
                  </div>
            </div>
      )
}

export default ProductsPageLayout