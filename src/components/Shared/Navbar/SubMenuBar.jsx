import NavLink from "./NavLink";

const SubMenuBar = ({ setNavToggle, allCategories, locale }) => {

  // console.log("HHHHHHHHHHHHHHHH:", allCategories);
  return (
    <div className="sub_nav_manu main_container rounded-b-md py-6 z-10 shadow-lg absolute top-28 left-0 right-0 w-full h-auto bg-[#465267] p-1 text-white ">
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
                  href={`/product/${service?._id}`}
                  className="text-xs"
                // activeClassName=""
                // exact={service?.path === "/"}
                >
                  {locale == "en" ? service?.name_en : service?.name_cn}
                </NavLink>
                <ul className=" py-2">
                  {service?.products?.map((subService, i) => {
                    // Function to convert a string into a URL-friendly slug
                    const generateSlug = (text) => {
                      return text
                        .toLowerCase() // Convert to lowercase
                        .replace(/\s+/g, "-") // Replace spaces with hyphens
                        .replace(/[^\w-]+/g, ""); // Remove all non-word characters
                    };
                    const slug = generateSlug(subService?.title_en);
                    // console.log("Hellowwwwww:", service)
                    return (
                      <li
                        key={i}
                        className="mx-auto z-40 hover:text-white capitalize font-normal hover:bg-[#50d6f730]  px-4 p-2"
                      >
                        <NavLink
                          onClick={() => setNavToggle(false)}
                          href={`/product/${slug}/${subService?._id}`}
                           className="text-xs"
                        // activeClassName=""
                        // exact={subService?.path === "/"}
                        >
                          {locale == "en" ? subService?.title_en : subService?.title_cn}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          {/* <div className="w-full flex items-center justify-center">
            <Link className="w-1/2" href={"/"}>
              <Image src={logo} alt="logo" width={200} className="w-full" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SubMenuBar;
