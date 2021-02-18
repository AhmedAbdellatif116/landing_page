/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//use...fragment..forEach 

	const navBarList = document.getElementById('navbar__list');  // Get Navigation Bar
	const mainSection = document.querySelector('#main'); // Get Main Element
	const getSections = document.querySelectorAll('section'); // Get Live HTML Collection Of Section Tag
	const newButton = document.createElement('input');// create button 
	let count=1; // Count No of Sections
	
	// Loop Over All Sections...Making NavBar
	 function NavBar(){
		const newList = document.createElement('li'); //Create List
		const newAnchor = document.createElement('a'); //Create Anchor
		newAnchor.textContent='Section '+count; //List Content
		newAnchor.setAttribute('id', 'SectionNo'+count); // Give Id To Each List
		newAnchor.setAttribute('href','#section'+count); // Link Of Each List
		newList.appendChild(newAnchor);	//Append Anchor To List
		navBarList.appendChild(newList); // Append Each List To The UL Containter
		count=count+1;
	}
	// Add new Section To The Page Dynamically 
	function addSection() {
		const newSection= document.createElement('section');
		const newDiv = document.createElement('div');
		const newHead = document.createElement('h2');
		const newP1= document.createElement('p');
		const newP2= document.createElement('p');
		newSection.setAttribute('id','section'+count);
		newDiv.setAttribute('class','landing__container');
		newSection.appendChild(newDiv);
		newHead.textContent='Section '+count;
		newDiv.appendChild(newHead);
		newP1.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
		newP2.textContent='Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
		newDiv.appendChild(newP1);
		newDiv.appendChild(newP2);
		mainSection.appendChild(newSection);
		//mainSection.insertAdjacentHTML('beforeend', newSection);
	}
	// Create Button To Add Sections
	function createButton(){
		newButton.setAttribute('type','submit');
		newButton.setAttribute('value','Add a new section');
		const header = document.querySelector('.main__hero');
		header.appendChild(newButton);
	}
	// get the viewed section
	function scrollIntoView(element){
		let rect = element.getBoundingClientRect();
		return (rect.top >= 0&& rect.left >= 0);
	}
	// chnage viewed section class
	function activeClass(){
		for (section of  getSections){
			if (scrollIntoView(section))
			if (!section.classList.contains('your-active-class')){
				section.classList.add('your-active-class');
			}
			else {
				section.classList.remove('your-active-class');
			}
		}
	}
	// Create Event To Add Section When Button Pressed
	newButton.addEventListener('click', function(e){
		e.preventDefault();
		addSection();
		NavBar();
});
	// evetn to scroll 
	document.addEventListener('scroll', activeClass); 
	// loop over menue list
	getSections.forEach(NavBar);
	// create button 
	createButton();

	
	





