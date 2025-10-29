const searchParams = new URLSearchParams(location.search);

if (searchParams.has('theme')) {
  const theme = searchParams.get('theme');
  document.documentElement.dataset.ixTheme = theme!;
}

if (searchParams.has('colorSchema')) {
  const colorSchema = searchParams.get('colorSchema');
  document.documentElement.dataset.ixColorSchema = colorSchema!;
}
