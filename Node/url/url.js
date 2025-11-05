import url from 'url';

const myUrl = new URL("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=4630794199182200206&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061897&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1")



console.log('Hostname',myUrl.hostname);
console.log('pathname', myUrl.pathname);

console.log('params',myUrl.searchParams);

console.log('Dats tag',myUrl.searchParams.get("tag"));