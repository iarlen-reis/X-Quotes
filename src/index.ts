const linkQuotes = document.querySelector('.btn__quotes') as HTMLAnchorElement;

linkQuotes.addEventListener('click', async () => {

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  const quote = () => {
    const pathname = window.location.pathname
    if(pathname.includes('status') && !pathname.includes('/quotes')) {
      window.open(`https://twitter.com${pathname}/quotes`)
    }
  }

  chrome.scripting.executeScript({
    target: { tabId: tab.id as number },
    func: quote
  })
})