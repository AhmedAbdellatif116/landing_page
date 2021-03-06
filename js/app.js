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
	let navBarList = document.getElementById('navbar__list');  // Get Navigation Bar
	let getSections = document.querySelectorAll('section'); // Get Live HTML Collection Of Section Tag
	let count = 1; // Count No of Sections

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

// Loop Over All Sections...Making NavBar
	const navBar =()=> {
	getSections = document.querySelectorAll('section');
	let fragment = document.createDocumentFragment();  // Create Fragment For Performance Optimization 
	getSections.forEach((section)=>{ // loop Over Page Sections
		const sectionId = section.id; //Get Section Id
		const sectionData = section.dataset.nav; //Get Section Dataset  
		const newList = document.createElement('li'); //Create List
		const newAnchor = document.createElement('a'); //Create Anchor
		newAnchor.textContent = sectionData; //Anchor Content
		newAnchor.setAttribute('id', sectionData); // Give Id To Each Anchor same as Dataset
		newAnchor.setAttribute('class', 'menu__link'); // Give A class To All Anchor 
		newAnchor.setAttribute('data_link', section.id); // Make DataSet To Anchors
		newList.appendChild(newAnchor);	//Append Anchor To List
		fragment.appendChild(newList); // Append Each List To The Fragment Containter
		count = count + 1; // Increament Counter Of Sections
	});
	navBarList.innerHTML = ''; // Empty Bar List
	navBarList.appendChild(fragment); // Append Fragment Containter To The Bar List 
}
	navBar();

// Add class 'active' to section when near top of viewport

// Return If Section In The View Port
	const isActive = () => {
		const inViewPort = section.getBoundingClientRect().top;
		return inViewPort<150 && inViewPort >= -150;
	}
	
// change The Active Class To The Section In The View Port
	const activeClass =() => {
		const getLinks = document.querySelectorAll('#navbar__list a'); // Get HTML Collection Of All Links
		for (section of getSections){ // loop Over Sections
			let linkId = document.getElementById(section.getAttribute("data-nav")); // Get Link Of Section
			section.classList.remove('your-active-class'); // Clear The Section and The Link Of Active Class
			linkId.removeAttribute('class'); 
			linkId.setAttribute('class', 'menu__link'); // Set Back The Class
			if (isActive(section)){ // Condition if The Section In The View Port
					section.classList.add('your-active-class'); // Set The Section And The Link As Active Class 
					linkId.removeAttribute('class'); 
					linkId.setAttribute('class', 'your-active-class');
			}
		}
		document.addEventListener('scroll', activeClass); // Document Event  To Scroll
	}
	activeClass(); 
	

// Scroll to anchor ID using scrollTO event

//Scrolling To The Clicked Section
	const scrolling = () => {
		const links = document.querySelectorAll(".menu__link");	
		links.forEach((item)=>{
			item.addEventListener("click", ()=>{
				const el = document.getElementById(item.getAttribute("data_link"));
				el.scrollIntoView({behavior:"smooth",block:"center"});
			});
		});
	}
	scrolling();
	
// Add new Section To The Page Dynamically 
	const addSection= ()=> {
		const mainSection = document.querySelector('#main'); // Get Main Element 
		const newSection= document.createElement('section'); // Create New Section 
		const { newDiv, newHead, newP1, newP2 } = createSection(); // Create Div, Header, & Two Paragraphs
		newSection.setAttribute('id','section'+count); // Set Id To Section
		newSection.setAttribute('data-nav','section '+count); // Set Dataset 
		newDiv.setAttribute('class','landing__container'); // Set Class To Section
		newSection.appendChild(newDiv); // Append Div To Section
		newHead.textContent='Section '+count; // Set Header Content
		newDiv.appendChild(newHead); // Append Header To Div
		newP1.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
		newP2.textContent='Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
		newDiv.appendChild(newP1); // Append First And Seconde Paragraphs To  Div
		newDiv.appendChild(newP2);
		mainSection.appendChild(newSection); //Append Div To Main Element
		// Create Div, Header, & Two Paragraphs
		function createSection() {
			const newDiv = document.createElement('div');
			const newHead = document.createElement('h2');
			const newP1 = document.createElement('p');
			const newP2 = document.createElement('p');
			return { newDiv, newHead, newP1, newP2 };
		}
	}
	
	
// Create Button To Add Sections
	const createButton = () =>{
		const newButton = document.createElement('input');
		newButton.setAttribute('type','submit'); // Set As Submit Type 
		newButton.setAttribute('value','Add a new section'); // Set Button Value
		const header = document.querySelector('.main__hero'); // Get Header Element 
		header.appendChild(newButton); //Append Button To Header
		// Set An Event To Button On Click
		newButton.addEventListener('click',(e)=>{
		e.preventDefault(); 
		addSection(); // Add Section Every Click
		count = 1; // Reset Section Counter 
		navBar(); // Call To Create New Bar List 
		scrolling(); // Refersh Function Variables 
		getSections = document.querySelectorAll('section'); // Get The New Created Sections 
		});
	}
	createButton();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//use...fragment..forEach 

	
	
	
	
	
	
	
	

