const fetch = require('node-fetch');
async function getOgImage() {
  const res = await fetch('https://www.routledge.com/Integrating-Spiritual-Interventions-in-Islamic-Psychology-A-Practical-Guide/Latif-Dockrat-Rassool/p/book/9781032383941');
  const text = await res.text();
  const match = text.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
  if (match) {
    console.log(match[1]);
  } else {
    // try any image
    const imgs = [...text.matchAll(/<img[^>]+src="([^"]+)"/g)];
    const cover = imgs.find(m => m[1].includes('9781032383941') || m[1].includes('cover'));
    console.log(cover ? cover[1] : 'Not found');
  }
}
getOgImage();
