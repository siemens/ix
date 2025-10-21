const searchParams = new URLSearchParams(location.search);

if (searchParams.has('theme')) {
  const theme = searchParams.get('theme');
  document.documentElement.setAttribute('data-ix-theme', theme!);
}

if (searchParams.has('colorSchema')) {
  const colorSchema = searchParams.get('colorSchema');
  document.documentElement.setAttribute('data-ix-color-schema', colorSchema!);
}
