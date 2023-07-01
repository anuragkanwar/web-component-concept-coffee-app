const _store = {
  menus: null,
  cart: {}
};

export const Store = new Proxy(_store, {
  set(target: { menus: null; cart: any[] }, p: string | symbol, newValue: any): boolean {
    // @ts-ignore
    target[p] = newValue;
    if (p === "menus") {
      window.dispatchEvent(new Event("ck-menu-change"));
    } else if (p === "cart") {
      window.dispatchEvent(new Event("ck-cart-change"));
      if (Object.keys(target[p]).length === 0) {
        window.dispatchEvent(new Event("ck-cart-empty"));
      }
    }
    return true;
  }
});




