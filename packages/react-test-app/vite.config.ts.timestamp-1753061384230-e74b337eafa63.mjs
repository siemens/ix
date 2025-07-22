// vite.config.ts
import react from "file:///C:/DevIXCode/ix2377/ix/node_modules/.pnpm/@vitejs+plugin-react@4.3.4_vite@4.5.14_@types+node@22.15.16_less@4.2.0_sass@1.77.8_stylus@0.59.0_terser@5.36.0_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/DevIXCode/ix2377/ix/node_modules/.pnpm/vite@4.5.14_@types+node@22.15.16_less@4.2.0_sass@1.77.8_stylus@0.59.0_terser@5.36.0/node_modules/vite/dist/node/index.js";
import path from "path";
import fs from "fs";
import { reactScopedCssPlugin } from "file:///C:/DevIXCode/ix2377/ix/node_modules/.pnpm/rollup-plugin-react-scoped-css@1.1.0/node_modules/rollup-plugin-react-scoped-css/dist/index.js";
var __vite_injected_original_dirname = "C:\\DevIXCode\\ix2377\\ix\\packages\\react-test-app";
var previewPath = path.join(
  __vite_injected_original_dirname,
  "node_modules",
  "html-test-app",
  "src",
  "preview-examples"
);
var vite_config_default = defineConfig(() => {
  fs.readdirSync(previewPath).filter((f) => f.endsWith(".css")).forEach((file) => {
    const fileName = file.split(".")[0];
    fs.copyFileSync(
      path.join(previewPath, file),
      path.join(
        __vite_injected_original_dirname,
        "src",
        "preview-examples",
        fileName !== "global" ? `${fileName}.scoped.css` : `${fileName}.css`
      )
    );
  });
  return {
    plugins: [react(), reactScopedCssPlugin()]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxEZXZJWENvZGVcXFxcaXgyMzc3XFxcXGl4XFxcXHBhY2thZ2VzXFxcXHJlYWN0LXRlc3QtYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxEZXZJWENvZGVcXFxcaXgyMzc3XFxcXGl4XFxcXHBhY2thZ2VzXFxcXHJlYWN0LXRlc3QtYXBwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9EZXZJWENvZGUvaXgyMzc3L2l4L3BhY2thZ2VzL3JlYWN0LXRlc3QtYXBwL3ZpdGUuY29uZmlnLnRzXCI7LypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjQgU2llbWVucyBBR1xuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyByZWFjdFNjb3BlZENzc1BsdWdpbiB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tcmVhY3Qtc2NvcGVkLWNzcyc7XG5cbmNvbnN0IHByZXZpZXdQYXRoID0gcGF0aC5qb2luKFxuICBfX2Rpcm5hbWUsXG4gICdub2RlX21vZHVsZXMnLFxuICAnaHRtbC10ZXN0LWFwcCcsXG4gICdzcmMnLFxuICAncHJldmlldy1leGFtcGxlcydcbik7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4ge1xuICAvLyBDb3B5IHRoZSBzdHlsZXMgZnJvbSB0aGUgcHJldmlldy1leGFtcGxlcyBmb2xkZXIgdG8gdGhlIHNyYyBmb2xkZXJcbiAgZnMucmVhZGRpclN5bmMocHJldmlld1BhdGgpXG4gICAgLmZpbHRlcigoZikgPT4gZi5lbmRzV2l0aCgnLmNzcycpKVxuICAgIC5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGUuc3BsaXQoJy4nKVswXTtcbiAgICAgIGZzLmNvcHlGaWxlU3luYyhcbiAgICAgICAgcGF0aC5qb2luKHByZXZpZXdQYXRoLCBmaWxlKSxcbiAgICAgICAgcGF0aC5qb2luKFxuICAgICAgICAgIF9fZGlybmFtZSxcbiAgICAgICAgICAnc3JjJyxcbiAgICAgICAgICAncHJldmlldy1leGFtcGxlcycsXG4gICAgICAgICAgZmlsZU5hbWUgIT09ICdnbG9iYWwnID8gYCR7ZmlsZU5hbWV9LnNjb3BlZC5jc3NgIDogYCR7ZmlsZU5hbWV9LmNzc2BcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtyZWFjdCgpLCByZWFjdFNjb3BlZENzc1BsdWdpbigpIGFzIGFueV0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFTQSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sUUFBUTtBQUNmLFNBQVMsNEJBQTRCO0FBYnJDLElBQU0sbUNBQW1DO0FBZXpDLElBQU0sY0FBYyxLQUFLO0FBQUEsRUFDdkI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWEsTUFBTTtBQUVoQyxLQUFHLFlBQVksV0FBVyxFQUN2QixPQUFPLENBQUMsTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDLEVBQ2hDLFFBQVEsQ0FBQyxTQUFTO0FBQ2pCLFVBQU0sV0FBVyxLQUFLLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDbEMsT0FBRztBQUFBLE1BQ0QsS0FBSyxLQUFLLGFBQWEsSUFBSTtBQUFBLE1BQzNCLEtBQUs7QUFBQSxRQUNIO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBLGFBQWEsV0FBVyxHQUFHLFFBQVEsZ0JBQWdCLEdBQUcsUUFBUTtBQUFBLE1BQ2hFO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUVILFNBQU87QUFBQSxJQUNMLFNBQVMsQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQVE7QUFBQSxFQUNsRDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
