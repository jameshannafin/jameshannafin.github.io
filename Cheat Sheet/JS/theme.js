

//----------------------------------------//
//Theme Changer

const button = document.getElementById('change-shadow-color');

const shadowColors = ['shadow-blue', 'shadow-green', 'shadow-red', 'shadow-yellow'];
const boxShadowColors = ['boxShad-blue', 'boxShad-green', 'boxShad-red', 'boxShad-yellow'];
const boxFillColors = ['boxFill-blue', 'boxFill-green', 'boxFill-red', 'boxFill-yellow'];
const boxBorColors = ['boxBor-blue', 'boxBor-green', 'boxBor-red', 'boxBor-yellow'];
const boxTextColors = ['boxText-blue', 'boxText-green', 'boxText-red', 'boxText-yellow'];
const boxTranColors = ['boxTran-blue', 'boxTran-green', 'boxTran-red', 'boxTran-yellow'];
let currentColorIndex = 0;

button.addEventListener('click', () => {
  // get all elements with class 'shadows'
  const shadows = document.getElementsByClassName('shadows');
  const boxShadows = document.getElementsByClassName('boxShad');
  const boxFills = document.getElementsByClassName('boxFill');
  const boxBors = document.getElementsByClassName('boxBor');
  const boxTexts = document.getElementsByClassName('boxText');
  const boxTrans = document.getElementsByClassName('boxTran');

  // modify the classes of all elements with class 'shadows'
  for (let i = 0; i < shadows.length; i++) {
    shadows[i].classList.remove(shadowColors[(currentColorIndex + shadowColors.length - 1) % shadowColors.length]);
    shadows[i].classList.add(shadowColors[currentColorIndex]);
  }

  // modify the classes of all elements with class 'shadows'
  for (let i = 0; i < boxShadows.length; i++) {
    boxShadows[i].classList.remove(boxShadowColors[(currentColorIndex + boxShadowColors.length - 1) % boxShadowColors.length]);
    boxShadows[i].classList.add(boxShadowColors[currentColorIndex]);
  }

    // modify the classes of all elements with class 'shadows'
	for (let i = 0; i < boxFills.length; i++) {
		boxFills[i].classList.remove(boxFillColors[(currentColorIndex + boxFillColors.length - 1) % boxFillColors.length]);
    boxFills[i].classList.add(boxFillColors[currentColorIndex]);
  }

      // modify the classes of all elements with class 'shadows'
	for (let i = 0; i < boxBors.length; i++) {
		boxBors[i].classList.remove(boxBorColors[(currentColorIndex + boxBorColors.length - 1) % boxBorColors.length]);
		boxBors[i].classList.add(boxBorColors[currentColorIndex]);
  }

        // modify the classes of all elements with class 'shadows'
	for (let i = 0; i < boxTexts.length; i++) {
		boxTexts[i].classList.remove(boxTextColors[(currentColorIndex + boxTextColors.length - 1) % boxTextColors.length]);
		boxTexts[i].classList.add(boxTextColors[currentColorIndex]);
  }

          // modify the classes of all elements with class 'shadows'
	for (let i = 0; i < boxTrans.length; i++) {
		boxTrans[i].classList.remove(boxTranColors[(currentColorIndex + boxTranColors.length - 1) % boxTranColors.length]);
		boxTrans[i].classList.add(boxTranColors[currentColorIndex]);
  }

  // update the current color index
  currentColorIndex = (currentColorIndex + 1) % shadowColors.length;
  
  // reset the current color index if it reaches the end of the array
  if (currentColorIndex === 0) {
    currentColorIndex = 0;
  }
});

//----------------------------------------//
//----------------------------------------//
