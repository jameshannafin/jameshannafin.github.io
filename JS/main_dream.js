

//REDIRECT TO ITCH GAME PAGE 
	function redirectToItch() {
		window.location.href = 'https://kidflid.itch.io/sirens-abyss';
	};

 
	// Function to fetch game data using Itch SDK
	Itch.getGameData({
		user: "kidflid",
		game: "333am",
		onComplete: function (data) {
			console.log(data); // Log the full data object to see its structure
			if (data.title !== undefined) {
				document.getElementById('game-title').innerText = "Title: " + data.title;
			} else {
				document.getElementById('game-title').innerText = 'Title: N/A';
			}

			if (data.price !== undefined) {
				document.getElementById('game-price').innerText = "Price: " + data.price;
			} else {
				document.getElementById('game-price').innerText = 'Price: N/A';
			}

			if (data.cover_url !== undefined) {
				const coverImage = document.getElementById('game-cover');
				coverImage.src = data.cover_url;
				coverImage.style.display = 'block';
			} else {
				document.getElementById('game-cover').style.display = 'none';
			}

			if (data.short_text !== undefined) {
				document.getElementById('game-description').innerText = "Description: " + data.short_text;
			} else {
				document.getElementById('game-description').innerText = 'Description: N/A';
			}

			if (data.views_count !== undefined) {
				document.getElementById('game-views').innerText = "Views: " + data.views_count;
			} else {
				document.getElementById('game-views').innerText = 'Views: N/A';
			}

			if (data.downloads_count !== undefined) {
				document.getElementById('game-downloads').innerText = "Downloads: " + data.downloads_count;
			} else {
				document.getElementById('game-downloads').innerText = 'Downloads: N/A';
			}

			if (data.published_at !== undefined) {
				document.getElementById('game-published').innerText = "Published Date: " + data.published_at;
			} else {
				document.getElementById('game-published').innerText = 'Published Date: N/A';
			}
		},
		onError: function (error) {
			document.getElementById('game-title').innerText = 'Title: Error';
			document.getElementById('game-description').innerText = 'Description: Error';
			document.getElementById('game-views').innerText = 'Views: Error';
			document.getElementById('game-downloads').innerText = 'Downloads: Error';
			document.getElementById('game-published').innerText = 'Published Date: Error';
			console.error(error);
		}
	});
