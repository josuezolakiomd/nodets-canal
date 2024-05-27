type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: MenuOptions) => {
  const menu = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  };

  if(activeMenu !== '') {
    menu[activeMenu] = true;
  }

  return menu;
}