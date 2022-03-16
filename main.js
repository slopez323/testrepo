const screenshotContainer = document.querySelector('#screenshotContainer');
const sharebtn = document.querySelector('#share-button');



// import html2canvas from 'html2canvas'


// export default {
//   methods: {
//     share() {
//       // iife here
//       ;(async () => {
//         if (!('share' in navigator)) {
//           return
//         }
//         // `element` is the HTML element you want to share.
//         // `backgroundColor` is the desired background color.
//         const canvas = await html2canvas(screenshotContainer)
//         canvas.toBlob(async (blob) => {
//           // Even if you want to share just one file you need to
//           // send them as an array of files.
//           const files = [new File([blob], 'image.png', { type: blob.type })]
//           const shareData = {
//             text: 'Some text',
//             title: 'Some title',
//             files,
//           }
//           if (navigator.canShare(shareData)) {
//             try {
//               await navigator.share(shareData)
//             } catch (err) {
//               if (err.name !== 'AbortError') {
//                 console.error(err.name, err.message)
//               }
//             }
//           } else {
//             console.warn('Sharing not supported', shareData)
//           }
//         })
//       })()
//     },
//   },
// }

const share = async() => {
  if (!('share' in navigator)) {
    return;
  }
  // `element` is the HTML element you want to share.
  // `backgroundColor` is the desired background color.
  const canvas = await html2canvas(screenshotContainer);
  console.log(canvas)

  canvas.toBlob(async (blob) => {
    // Even if you want to share just one file you need to 
    // send them as an array of files.
    const files = [new File([blob], 'image.png', { type: blob.type })];
    const shareData = {
      text: 'Some text',
      title: 'Some title',
      files,
    };
    if (navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error(err.name, err.message);      
        }
      }
    } else {
      console.warn('Sharing not supported', shareData);            
    }
  });
};

$(document).on('click', sharebtn, share);
// sharebtn.addEventListener('click', share);