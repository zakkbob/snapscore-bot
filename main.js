const snapsPerSecond = 0; // 0 means no limit
const checkInterval = 10; // 10ms
const targetShortcut = "🔥";

var currentStep = 0;

function nextStep() {
	let delay = checkInterval;
	switch (currentStep) {
		case 0: { // take snap
			let elements = document.getElementsByClassName("gK0xL");
			if (elements.length == 0) break; 
			elements[0].click();
			currentStep++;
			break;
		} case 1: { // confirm snap
			let elements = document.getElementsByClassName("fGS78");
			if (elements.length == 0) break;
			elements[0].click();
			currentStep++;
			break;
		} case 2: { // select shortcut
			let shortcuts = document.getElementsByClassName("c47Sk");
			for (let i = 0; i < shortcuts.length; ++i) {
				if (shortcuts[i].innerHTML == targetShortcut) {
					shortcuts[i].click();
					currentStep++;
					break;
				}
			}
			break;
		} case 3: { //select people 
			let shortcutsEl = document.getElementsByClassName("GRZ27"); // check if 'Shortcuts' text is present
			let people = document.getElementsByClassName("Ewflr");
			if (shortcutsEl.length == 0 || shortcutsEl[0].innerText != "Shortcuts" || people.length == 0) break;
			for (let i = 0; i < people.length; ++i) {
				people[i].click();
			}
			currentStep++;
			break;
		} case 4: { //click send
			let elements = document.getElementsByClassName("TYX6O");
			if (elements.length == 0) break;
			elements[0].click();
			currentStep = 0;
			break;
		} default: {
			console.log("How did we get here?");
		}
	}


	setTimeout(nextStep, delay);
}

nextStep();
