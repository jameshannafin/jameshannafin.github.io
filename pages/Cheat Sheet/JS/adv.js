// Define player stats and initial values
let player = {
    name: "Player",
    health: 100,
    attack: 20,
    defense: 10,
    inventory: [],
    equippedWeapon: {
      name: "Fists",
      attack: 0,
    },
  };
  
  // Function to update player stats on the screen
  function updateStats() {
    document.getElementById("player-name").textContent = player.name;
    document.getElementById("player-health").textContent = player.health;
    document.getElementById("player-attack").textContent = player.attack;
    document.getElementById("player-defense").textContent = player.defense;
    document.getElementById("equipped-weapon").textContent = player.equippedWeapon.name;
  }
  
  // Function to display the story text and player choices
  function displayStory(storyText, choices) {
    document.getElementById("story-text").textContent = storyText;
  
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = ""; // Clear previous choices
  
    choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.onclick = () => handleChoice(index);
      choicesContainer.appendChild(button);
    });
  }
  
  // Function to handle player choices
  function handleChoice(choiceIndex) {
    const choice = storyChoices[choiceIndex];
  
    // Update the game state based on the player's choice
    player.health += choice.healthChange;
    player.attack += choice.attackChange;
    player.defense += choice.defenseChange;
  
    // Add items to the player's inventory
    if (choice.item) {
      player.inventory.push(choice.item);
    }
  
    // Display the outcome of the choice
    displayStory(choice.outcome, choice.nextChoices);
    updateStats();
  
    // Continue to the next part of the story or start a combat encounter
    if (choice.isCombat) {
      startCombat(choice.monster);
    }
  }
  
  // Function to handle combat encounters
  function startCombat(monster) {
    displayStory(`You encounter a ${monster.name}!`, []);
    updateStats(); // Update stats before starting combat
  
    // Function to update the display during combat
    function updateCombatDisplay() {
      document.getElementById("player-health").textContent = player.health;
      document.getElementById("monster-health").textContent = monster.health;
    }
  
    // Implement the turn-based combat system between the player and the monster
    function performCombatRound() {
      // Player's turn
      const playerDamage = Math.max(player.attack + player.equippedWeapon.attack - monster.defense, 0);
      monster.health -= playerDamage;
      displayStory(`You attack the ${monster.name} for ${playerDamage} damage.`, []);
      updateCombatDisplay();
  
      if (monster.health <= 0) {
        displayStory(`You defeated the ${monster.name}!`, []);
        // Add rewards for defeating the monster, e.g., experience points, items
        updateStats();
      } else {
        // Monster's turn
        const monsterDamage = Math.max(monster.attack - player.defense, 0);
        player.health -= monsterDamage;
        displayStory(`The ${monster.name} attacks you for ${monsterDamage} damage.`, []);
        updateCombatDisplay();
  
        if (player.health <= 0) {
          displayStory("You have been defeated.", []);
          updateStats();
        } else {
          setTimeout(performCombatRound, 1000); // Delay the next round to make it more visually appealing
        }
      }
    }
  
    // Start the first round of combat
    performCombatRound();
  }
  
  // Define the story choices outside the function
const storyChoices = [
    {
      text: "Go left",
      healthChange: 0,
      attackChange: 0,
      defenseChange: 0,
      outcome: "You find a shiny gem.",
      item: "Shiny Gem",
      nextChoices: [
        { 
          text: "Continue down the path", 
          healthChange: 0, 
          attackChange: 0, 
          defenseChange: 0, 
          outcome: "You find a friendly merchant.",
          nextChoices: [],
          item: "Healing Potion",
        },
        { 
          text: "Go back", 
          healthChange: 0, 
          attackChange: 0, 
          defenseChange: 0, 
          outcome: "You return to where you started.",
          nextChoices: [],
          isCombat: false,
        },
      ],
      isCombat: false,
    },
    {
      text: "Go right",
      healthChange: 0,
      attackChange: 0,
      defenseChange: 0,
      outcome: "You encounter a scary monster!",
      monster: { name: "Scary Monster", health: 50, attack: 10, defense: 5 },
      nextChoices: [],
      isCombat: true,
    },
  ];
  
  
  // Function to handle random encounters and progress the story
  function progressStory() {
    // Code remains unchanged
  }
  
  // Game initialization function
  function initGame() {
    updateStats();
    progressStory();
  }
  
  // Call the initGame function to start the game
  initGame();
  