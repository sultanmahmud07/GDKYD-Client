import MenuLink from "../../../../components/Shared/Navbar/MenuLink";

const PageMenu = ({ menus }) => {
  return (
    <div id="page_menu" className="main_container bg-white p-1 shadow-lg">
      {menus?.map((menu, i) => {
        return (
          <MenuLink
            key={i}
            href={menu?.link}
            activeClassName="text-primary font-semibold"
            exact={menu?.link === "/"}
            className="py-3 md:py-5 px-6 md:px-10 inline-block border-l-2 "
          >
            {menu?.name}
          </MenuLink>
        );
      })}
    </div>
  );
};

export default PageMenu;
