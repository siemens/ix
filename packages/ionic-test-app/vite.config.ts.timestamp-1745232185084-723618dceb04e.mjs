// vite.config.ts
import path from "path";
import legacy from "file:///C:/Siemens/Projects/git/ix/node_modules/.pnpm/@vitejs+plugin-legacy@5.4.2_terser@5.22.0_vite@5.2.14_@types+node@20.16.5_less@4.2.0_sass@1.7_zyoly53mfqgqt2cilpwroakoxy/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import react from "file:///C:/Siemens/Projects/git/ix/node_modules/.pnpm/@vitejs+plugin-react@4.3.1_vite@5.2.14_@types+node@20.16.5_less@4.2.0_sass@1.77.8_stylus@0.59.0_terser@5.22.0_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Siemens/Projects/git/ix/node_modules/.pnpm/vite@5.2.14_@types+node@20.16.5_less@4.2.0_sass@1.77.8_stylus@0.59.0_terser@5.22.0/node_modules/vite/dist/node/index.js";
import fs from "file:///C:/Siemens/Projects/git/ix/node_modules/.pnpm/fs-extra@11.2.0/node_modules/fs-extra/lib/index.js";
var __vite_injected_original_dirname = "C:\\Siemens\\Projects\\git\\ix\\packages\\ionic-test-app";
function copyAdditionalThemeIfPresent() {
  try {
    const additionalTheme = import.meta.resolve("@siemens/ix-brand-theme");
    const basePath = path.join(
      additionalTheme.replace("file://", ""),
      "..",
      ".."
    );
    const targetPath = path.join(
      __vite_injected_original_dirname,
      "public",
      "additional-theme",
      "ix-brand-theme"
    );
    const distPath = path.join(basePath, "dist");
    const loaderPath = path.join(basePath, "loader");
    fs.ensureDirSync(targetPath);
    fs.copySync(distPath, path.join(targetPath, "dist"));
    fs.copySync(loaderPath, path.join(targetPath, "loader"));
    return true;
  } catch (e) {
    console.log("Skip injecting additional theme");
    return false;
  }
}
var vite_config_default = defineConfig(async () => {
  copyAdditionalThemeIfPresent();
  return {
    base: "./",
    plugins: [react(), legacy()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxTaWVtZW5zXFxcXFByb2plY3RzXFxcXGdpdFxcXFxpeFxcXFxwYWNrYWdlc1xcXFxpb25pYy10ZXN0LWFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcU2llbWVuc1xcXFxQcm9qZWN0c1xcXFxnaXRcXFxcaXhcXFxccGFja2FnZXNcXFxcaW9uaWMtdGVzdC1hcHBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1NpZW1lbnMvUHJvamVjdHMvZ2l0L2l4L3BhY2thZ2VzL2lvbmljLXRlc3QtYXBwL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5JztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5cbmZ1bmN0aW9uIGNvcHlBZGRpdGlvbmFsVGhlbWVJZlByZXNlbnQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYWRkaXRpb25hbFRoZW1lID0gaW1wb3J0Lm1ldGEucmVzb2x2ZSgnQHNpZW1lbnMvaXgtYnJhbmQtdGhlbWUnKTtcbiAgICBjb25zdCBiYXNlUGF0aCA9IHBhdGguam9pbihcbiAgICAgIGFkZGl0aW9uYWxUaGVtZS5yZXBsYWNlKCdmaWxlOi8vJywgJycpLFxuICAgICAgJy4uJyxcbiAgICAgICcuLidcbiAgICApO1xuICAgIGNvbnN0IHRhcmdldFBhdGggPSBwYXRoLmpvaW4oXG4gICAgICBfX2Rpcm5hbWUsXG4gICAgICAncHVibGljJyxcbiAgICAgICdhZGRpdGlvbmFsLXRoZW1lJyxcbiAgICAgICdpeC1icmFuZC10aGVtZSdcbiAgICApO1xuICAgIGNvbnN0IGRpc3RQYXRoID0gcGF0aC5qb2luKGJhc2VQYXRoLCAnZGlzdCcpO1xuICAgIGNvbnN0IGxvYWRlclBhdGggPSBwYXRoLmpvaW4oYmFzZVBhdGgsICdsb2FkZXInKTtcblxuICAgIGZzLmVuc3VyZURpclN5bmModGFyZ2V0UGF0aCk7XG5cbiAgICBmcy5jb3B5U3luYyhkaXN0UGF0aCwgcGF0aC5qb2luKHRhcmdldFBhdGgsICdkaXN0JykpO1xuICAgIGZzLmNvcHlTeW5jKGxvYWRlclBhdGgsIHBhdGguam9pbih0YXJnZXRQYXRoLCAnbG9hZGVyJykpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZygnU2tpcCBpbmplY3RpbmcgYWRkaXRpb25hbCB0aGVtZScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKGFzeW5jICgpID0+IHtcbiAgY29weUFkZGl0aW9uYWxUaGVtZUlmUHJlc2VudCgpO1xuICByZXR1cm4ge1xuICAgIGJhc2U6ICcuLycsXG4gICAgcGx1Z2luczogW3JlYWN0KCksIGxlZ2FjeSgpXSxcbiAgICB0ZXN0OiB7XG4gICAgICBnbG9iYWxzOiB0cnVlLFxuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgICBzZXR1cEZpbGVzOiAnLi9zcmMvc2V0dXBUZXN0cy50cycsXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLE9BQU8sVUFBVTtBQUNqQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sUUFBUTtBQU5mLElBQU0sbUNBQW1DO0FBUXpDLFNBQVMsK0JBQStCO0FBQ3RDLE1BQUk7QUFDRixVQUFNLGtCQUFrQixZQUFZLFFBQVEseUJBQXlCO0FBQ3JFLFVBQU0sV0FBVyxLQUFLO0FBQUEsTUFDcEIsZ0JBQWdCLFFBQVEsV0FBVyxFQUFFO0FBQUEsTUFDckM7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUNBLFVBQU0sYUFBYSxLQUFLO0FBQUEsTUFDdEI7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQ0EsVUFBTSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU07QUFDM0MsVUFBTSxhQUFhLEtBQUssS0FBSyxVQUFVLFFBQVE7QUFFL0MsT0FBRyxjQUFjLFVBQVU7QUFFM0IsT0FBRyxTQUFTLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxDQUFDO0FBQ25ELE9BQUcsU0FBUyxZQUFZLEtBQUssS0FBSyxZQUFZLFFBQVEsQ0FBQztBQUV2RCxXQUFPO0FBQUEsRUFDVCxTQUFTLEdBQUc7QUFDVixZQUFRLElBQUksaUNBQWlDO0FBQzdDLFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWEsWUFBWTtBQUN0QywrQkFBNkI7QUFDN0IsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sU0FBUyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFBQSxJQUMzQixNQUFNO0FBQUEsTUFDSixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
