
		///Modular COntent 








		//



		// <!-- VARIABLE DOS -->

		const emailForm = document.getElementById("email-form");

		emailForm.addEventListener("submit", function (event) {
			event.preventDefault(); // Prevent the form from submitting

			const recipient = document.getElementById("recipient").value;
			const cc = document.getElementById("cc").value;
			const subject = document.getElementById("subject").value;
			const message = document.getElementById("message").value;

			let mailtoLink = "mailto:" + recipient + "?cc=" + cc + "&subject=" + subject + "&body=" + encodeURIComponent(message);

			window.location.href = mailtoLink; // Open the mailto link in the browser
		});











		function search_firm() {
			let input = document.getElementById('searchbar').value
			input = input.toLowerCase();
			let x = document.getElementsByClassName('firmsCode');


			for (i = 0; i < x.length; i++) {
				if (!x[i].innerHTML.toLowerCase().includes(input)) {

					x[i].style.visibility = "hidden ";
				}
				else {
					x[i].style.display = "list-item";
				}
			}
		}

		function search_reset() {
			for (i = 0; i < x.length; i++) {

				x[i].style.display = "initial ";
			}
		}








		// //<!--- Table Form fUNCTION-------->


		// function addData() {
		// 	var firstname = document.getElementById('firstname').value;
		// 	var lastname = document.getElementById('lastname').value;
		// 	var address = document.getElementById('address').value;

		// 	if (firstname == "" || lastname == "" || address == "") {
		// 		alert("Please enter something first!");
		// 	} else {
		// 		var html = "";

		// 		html = "<tr><td>" + firstname + "</td><td>" + lastname + "</td><td>" + address + "</td></tr>";

		// 		document.getElementById('result').innerHTML += html;

		// 		document.getElementById('firstname').value = "";
		// 		document.getElementById('lastname').value = "";
		// 		document.getElementById('address').value = "";
		// 	}

		// }

		// // <!------------------------>
		// // <!--- eND Form fUNCTION-------->
		// // <!------------------------>







		// // <!----------------------------------->
		// // <!--- Send Custom Pier Pass Request Function-------->
		// // <!----------------------------------->

		// function requestPierPass() {
		// 	var v_master = document.getElementById('masterTMF').value;
		// 	var v_shipment = document.getElementById('shipmentTMF').value;
		// 	var v_container = document.getElementById('containerTMF').value;
		// 	var v_type = document.getElementById('typerTMF').value;

		// 	console.log(Set Changes)
		// 	if (v_master == "" || v_shipment == "" || v_container == "" || v_type == "") {
		// 		alert("Fill out all information before sending.");
		// 	} else {
		// 		var html = ' \ 
		// 		html =  < a target = "_blank" \
		// 		href = "mailto:ctfandpierpass@mallorygroup.com?\
		// 		cc = Tylerm@mallorygroup.com \
		// 							& subject=CTF and Pier Pass / "+  v_master +" / Sxxxxxxxxx / Cxxxxxx / xxHC \
		// 			& body= \
		// 							Good Day Team, please assist in clearing the CTF and Pier Pass for the referenced shipment.Thankyou! % 0D % 0A % 0D % 0A \ 

		// 		BILLXXXXXXX – Bill % 0D % 0A\
		// 		Sxxxxxxxxx– Shipment % 0D % 0A\
		// 		Cxxxxxx– Cont % 0D % 0A\
		// 		xxHC % 0D % 0A '

		// 			> <img alt="DO SHOPVAC" src="IMAGES/do_primeline.jpg"
		// 				width=150" height="70">
	    //   						</a >


					

		// 		document.getElementById('emailPierPass').innerHTML += html;

		// 		document.getElementById('masterTMF').value = "";
		// 		document.getElementById('shipmentTMF').value = "";
		// 		document.getElementById('containerTMF').value = "";
		// 		document.getElementById('typerTMF').value = "";
		// 	}

		// }
	
	    // < !--------------------------------------->
	    // < !--- End Send Pier Pass Function-------->
	    // < !--------------------------------------->
	
	

	
	    // < !------------------------>
	    // < !--- ADD TERMINAL NCTION-------->
	    // < !------------------------>

			function addTerminal() {
				var firstname = document.getElementById('firstname').value;
				var lastname = document.getElementById('lastname').value;
				var address = document.getElementById('address').value;

				if (firstname == "" || lastname == "" || address == "") {
					alert("Please enter something first!");
				} else {
					var html = "";

					html = "<tr><td>" + firstname + "</td><td>" + lastname + "</td><td>" + address + "</td></tr>";

					document.getElementById('result').innerHTML += html;

					document.getElementById('firstname').value = "";
					document.getElementById('lastname').value = "";
					document.getElementById('address').value = "";
				}

			}

		// 	< !------------------------>
	    // < !--- eND Form fUNCTION-------->
	    // < !------------------------>


		// ---------------------------//



// --------------------------------------------------------------------//
//---- Copy the Text of this Element-------------------------------------
// --------------------------------------------------------------------//

function copySelf(event) {
    const textToCopy = event.target.innerText;
    // create a temporary textarea element to copy the text to clipboard
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    // create a "Copied" message element and position it next to the mouse cursor
    const copiedMessage = document.createElement('span');
    copiedMessage.textContent = 'Copied';
    copiedMessage.classList.add('copied-message');
    const x = event.pageX + 10; // add an offset of 10 pixels to the left of the cursor
    const y = event.pageY;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const messageWidth = copiedMessage.offsetWidth;
    const messageHeight = copiedMessage.offsetHeight;
    if (x + messageWidth > viewportWidth) {
        // if the message would go off the right edge of the viewport, move it to the left of the cursor instead
        copiedMessage.style.left = (x - messageWidth - 10) + 'px'; // add an offset of 10 pixels to the right of the cursor
    } else {
        copiedMessage.style.left = x + 'px';
    }
    if (y + messageHeight > viewportHeight) {
        // if the message would go off the bottom edge of the viewport, move it above the cursor instead
        copiedMessage.style.top = (y - messageHeight) + 'px';
    } else {
        copiedMessage.style.top = y + 'px';
    }
    document.body.appendChild(copiedMessage);

    // fade the "Copied" message away after 2 seconds
    setTimeout(() => {
        copiedMessage.classList.add('fade-out');
        setTimeout(() => {
            document.body.removeChild(copiedMessage);
        }, 1000); // wait for the fade-out animation to complete before removing the message element
    }, 900);

    closeNav();
}

// --------------------------------------------------------------------//
//----END Copy the Text of this Element-------------------------------------
// --------------------------------------------------------------------//



	// <!----------------------------------------------------->
	// < !-----------------------------SORTING FUNCTIONS------>
	// < !---------------------------------------------------->

			function ft_sortTerminals(n) {
				var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
				table = document.getElementById("tbl_terminals");
				switching = true; //Set the sorting direction to ascending:
				dir = "asc";	/*Make a loop that will continue until no switching has been done:*/
				while (switching) { //start by saying: no switching is done:
					switching = false;
					rows = table.rows; /*Loop through all table rows (except the first, which contains table headers):*/
					for (i = 1; i < (rows.length - 1); i++) { //start by saying there should be no switching: shouldSwitch=false; /*Get the two elements you want to compare, one from current row and one from the next:* /
						x = rows[i].getElementsByTagName("TD")[n]; y = rows[i + 1].getElementsByTagName("TD")[n]; /*check if the two rows should switch place, based on the direction, asc or desc:*/ 
						if (dir == "asc") {
							if (x.innerHTML.toLowerCase() >
								y.innerHTML.toLowerCase()) {
								//if so, mark as a switch and break the loop:
								shouldSwitch = true;
								break;
							}
						} else if (dir == "desc") {
							if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) { //if so, mark as a switch and break the loop:
								shouldSwitch = true; break;
							}
						}
					} if (shouldSwitch) { /*If a switch has been marked, make the switch and mark that a switch has been done:*/
						 rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; //Each time a switch is done, increase this count by 1: 
						switchcount++;
					} else { /*If no switching has been done AND the
			direction is "asc" , set the direction to "desc" and run the while loop again.*/ if (switchcount == 0 &&
							dir == "asc") { dir = "desc"; switching = true; }
					}
				}
			} 
			

			//Sorting Steam Ship Lines Function.

			function ft_sortSSLs(n) {
				var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
				table = document.getElementById("tbl_SSls"); switching = true; //Set the sorting direction to ascending: dir = "asc"; /*Make a loop that will continue until no switching has been done:*/
				while (switching) { //start by saying: no switching is done: switching=false; rows=table.rows; /*Loop through //all table rows(except the first, which contains table headers):* / 
									
					for (i=1; i < (rows.length - 1); i++) {
						//start by saying there should be no switching: shouldSwitch=false; /*Get the two elements you want to compare,	one from current row and one from the next:* / 
						
						x=rows[i].getElementsByTagName("TD")[n]; y=rows[i +	1].getElementsByTagName("TD")[n]; /*check if the two rows should switch place, based on the direction, asc or desc:*/ 
						if (dir == "asc") {
							if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
								//if so, mark as a switch and break the loop:
								shouldSwitch = true;
								break;
							}
						} 
						else if (dir == "desc") {
								if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) { //if so, mark as a switch and break the loop:
									shouldSwitch = true; break;
								}
						}
					}

					if (shouldSwitch) { /*If a switch has been marked, make the switch and markthat a switch has been done:*/ 
						rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; //Eachtime a switch is done, increase this count by 1:
						 switchcount++;

					} 
					else { /*If no switching has been done AND the direction is "asc" , set the direction to "desc" and run the while loop again.*/ 
						if (switchcount == 0
							&& dir == "asc") { dir = "desc"; switching = true; }
					}
				}
			}


	