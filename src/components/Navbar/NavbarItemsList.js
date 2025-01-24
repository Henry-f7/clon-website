const NavbarItemsList = ({ items }) => {
  const renderItems = () => {
    return items?.map((item, index) => {
      return (
        <li key={index}>
          <a
            href={item.url}
            className="block uppercase font-semibold py-2 px-3 text-sm tracking-[1.4px] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            {item.name}
          </a>
        </li>
      );
    });
  };

  return (
    <ul className="flex flex-col md:flex-row justify-between p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {renderItems()}
    </ul>
  );
};

export default NavbarItemsList;
