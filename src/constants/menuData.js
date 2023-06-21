const MOCK_MENU_DATA = {
  title: "User",
  url: "",
  submenu: [{ title: "List", url: "/users", onClick: (d) => alert(d) }],
};

export default Object.freeze({ MOCK_MENU_DATA });
