/// <reference types="vite/client" />
export {};
declare global {
  interface Window {
    app: any;
  }

}
window.app = window.app || {};