const STEP_DELAY = 10; // 10ms

const TAKE_SNAP = 0;
const CONFIRM_SNAP = 1;
const SELECT_SHORTCUT = 2;
const SELECT_PEOPLE = 3;
const CLICK_SEND = 4;

var lastStep = CLICK_SEND;

function nextStep() {
	// take snap
	let elements = document.getElementsByClassName("gK0xL");
	if (elements.length != 0 && lastStep != TAKE_SNAP) {
		lastStep = TAKE_SNAP;
		elements[0].click();
		return;
	}

	// click send
	elements = document.getElementsByClassName("TYX6O");
	if (elements.length != 0) {
		lastStep = CLICK_SEND;
		elements[0].click();
		return;
	}	
	// select people
	let shortcutsEl = document.getElementsByClassName("GRZ27"); // check if 'Shortcuts' text is present
	let people = document.getElementsByClassName("Ewflr");
	if (shortcutsEl.length != 0 && shortcutsEl[0].innerText == "Shortcuts" && people.length != 0) {
		for (let i = 0; i < people.length; ++i) {
			setTimeout(()=>{people[i].click();},1);
		}
		lastStep = SELECT_PEOPLE;
		return;
	}

	// select shortcut
	let shortcuts = document.getElementsByClassName("c47Sk");
	for (let i = 0; i < shortcuts.length; ++i) {
		if (shortcuts[i].innerHTML == SHORTCUT_NAME) {
			lastStep = SELECT_SHORTCUT;
			shortcuts[i].click();
			return;
		}
	}

	// confirm snap
	elements = document.getElementsByClassName("fGS78");
	if (elements.length != 0 && lastStep != CONFIRM_SNAP) { 
		lastStep = CONFIRM_SNAP;
		elements[0].click();
		return;
	}
}

function loopNextStep() {
	let delay = STEP_DELAY;
	nextStep();
    
	if (lastStep == CLICK_SEND && SNAPS_PER_SECOND != 0) {
        delay = 1000/SNAPS_PER_SECOND;
	}
        
	setTimeout(loopNextStep, delay);
    return;
}

loopNextStep();


// -- Settings -- //

// Changes the number of snaps per second which the bot will send to each person
// Use 0 to not limit the snaps per second, will probably make snapchat lag
const SNAPS_PER_SECOND = 2;

// The name of the shortcut to use
const SHORTCUT_NAME = "🔥";
