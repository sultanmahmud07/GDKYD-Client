import NavLink from "./NavLink";

const SubMenuBar = ({ setNavToggle, allCategories, locale }) => {

  // console.log("HHHHHHHHHHHHHHHH:", allCategories);
  return (
    <div className="sub_nav_manu main_container rounded-b-md py-6 z-10 shadow-lg absolute top-[6.7rem] left-0 right-0 w-full h-auto bg-secondary p-1 text-white ">
      <div className="">
        <div className="relative">
          <span className="absolute z-50 top-[-30px] left-1/2  rotate-45  bg-[#465267] h-5 w-5 "></span>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {allCategories?.map((service, i) => {
            return (
              <div key={i} className="mx-auto z-40 p-2">
                <NavLink
                  onClick={() => setNavToggle(false)}
                  href={`/category/${service?.slug || service?._id}`}
                  className="text-xs"
                // activeClassName=""
                // exact={service?.path === "/"}
                >
                  {locale == "en" ? service?.name_en : service?.name_cn}
                </NavLink>
                <ul className=" py-2">
                  {service?.products?.map((product, i) => {
                 
                    return (
                      <li
                        key={i}
                        className="mx-auto z-40 hover:text-white capitalize font-normal hover:bg-[#50d6f730]  px-4 p-2"
                      >
                        <NavLink
                          onClick={() => setNavToggle(false)}
                          href={`/product/${product?.slug || product?._id}`}
                           className="text-xs"
                        // activeClassName=""
                        // exact={product?.path === "/"}
                        >
                          {locale == "en" ? product?.title_en : product?.title_cn}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubMenuBar;
