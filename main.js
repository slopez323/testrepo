// This function is called when the use hits the take screenshot button on the app. This is where we are creating the image that will be shared via Web Share API

function createFinalImage() {
    const screenshotContainer =  document.getElementById("screenshot-container") 

    // here we are turning all elements in our screenshot container into one image
    html2canvas(screenshotContainer).then(canvas => {

        try {
            var finalScreenshot = canvas.toDataURL('image/jpeg', 1);

            // share image
            shareScreenshot(finalScreenshot)
        }
        catch (e) {
            console.log("Screenshot failed: " + e);
        }

    });
}

// Here we are sending the image to the web share API

async function shareScreenshot(finalScreenshot) {
    const blob = await (await fetch(finalScreenshot)).blob();

    const filesArray = [
      new File(
        [blob],
        `test${Date.now()}.jpg`,
        {
          type: blob.type,
          lastModified: new Date().getTime()
        }
      )
    ];

    const shareData = {
      files: filesArray,
    };

    if (navigator.canShare && navigator.canShare({ files: filesArray })) {
        navigator.share(shareData);
    } else {
        console.log(`Your system doesn't support sharing files.`);
    }
}

// share screenshot 
document.getElementById("share-button").addEventListener("click", function() {
    createFinalImage()
});