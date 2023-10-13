export const getQuotes = () => {
  const pathname = window.location.pathname;
  if (pathname.includes("status") && !pathname.includes("/quotes")) {
    window.open(`https://twitter.com${pathname}/quotes`);
  }
}