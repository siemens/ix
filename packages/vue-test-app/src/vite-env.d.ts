/// <reference types="vite/client" />

export {};
declare module 'vue' {
  interface ComponentCustomProps {
    onClick?: (...args: any[]) => void;
  }
}
