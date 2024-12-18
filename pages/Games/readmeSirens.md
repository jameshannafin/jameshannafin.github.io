Welcome to the Sirens Abyss repository! This project is an exciting underwater adventure game where players explore the depths of the ocean, uncover hidden secrets, and navigate various underwater threats. The primary objective is to retrieve the uranium rod from an old shipwreck and return it to the reactor.

Table of Contents
Installation

How to Play

Movement

Gold

Tools

Threats

Development Logs

Upcoming Updates

Contributing

License

Installation
To get started with Sirens Abyss, clone the repository and open the project in your preferred game development environment:

bash
git clone https://github.com/your-username/sirens-abyss.git
cd sirens-abyss
How to Play
The primary objective is to get to the bottom of the ocean, find the uranium rod in the old shipwreck, and bring it back to the reactor, which you will be guided to. To do all of this, you will need to find depth modules so you can safely travel deeper.

Movement
Movement in Sirens Abyss isn't standard WASD movement. While 'A' and 'D' move the submarine left and right, 'W' and 'S' control the ballast tanks. Press 'W' to lighten the sub and decrease density; any density below 1 will make it float that much harder. The opposite goes for 'S', which will increase density, eventually making the submarine sink.

Gold
Gold is found in the abyss and used to fund the expedition through the purchase of supplies like flares, buoys, and parts. In later updates, new upgrades and gear will also be available for purchase. I am also considering having the gold collected play a part in the density of the submarine.

Tools
The use of tools still needs to be fleshed out. While this is currently considered a lackluster part of the game, the major idea is to use tools to manipulate the environment and unlock previously restricted areas. The demo gives access to all four tools; future updates may block tools behind upgrades.

Switch Tool (E = Cycle Next) (1 = Scanner) (2 = Claw) (3 = Drill) (4 = Saw)

Scanner (1) - Get information on almost any object in the game.

Claw (2) - Move debris and collect loot by pulling them closer to the submarine.

Drill (3) - Break BOLTS that hold together pieces of shipwreck.

Saw (4) - Cut CHAINS and SEAWEED that restrict movement and loot.

Repair (R) - Increase hull integrity. (The demo also allows passive repair at operational bases.)

Flares (F) - Illuminate darker areas for about 10 seconds.

Drop-Weights (J) - Instantly decrease density by 1.

Threats
CRUSH-DEPTH: Keep an eye on the depth gauge; your submarine needs upgrades to reach greater depths.

DEPTH-MINES / CAVESPIKES / DEBRIS: These can damage your HULL INTEGRITY.

PHANTOMS: Dangerous entities that feed on the life force in the abyss.

Phantom Mariners: Scared of light but can be deadly.

Phantom Cephalopods: Release INK that limits light effectiveness.

Phantom Whales: Will consume the submarine if you’re in their way.

Development Logs
11/10/2024
Corrected hitbox for item boxes (most notable when using sonar).

Added a HUD indication for sonar on/off.

Fixed errors with schools of fish spawning above the water line.

Reworked Support Ship and Rotten Wood sprites.

General code fixes and edits.

11/11/2024
Added a small menu to repair broken bases.

11/12/2024
Redid the menu system.

Added simple credits, controls, and settings screens.

11/13/2024
Added the ability to repair old bases.

Worked on the menu for repairs.

11/16/2024
Added rotation to seaweed hitbox.

Adjusted gold display, including making it red when in debt.

Added a sonar hit to the sub/player for visibility in darkness.

Added murky water and minor tile fixes.

Added 3 new tiles for corners and niche spots.

11/17/2024
Updated/fixed the blackbox GUI message.

Fixed respawn notifications.

Adjusted Rotten Wood hitbox.

Fixed tool noise bug.

Added ocean ambience to the main menu.

11/18/2024
Enhanced the blackbox system with early game messages to guide the player.

11/19/2024
Added planned updates list.

Added in-game menu to return to the main menu.

11/24/2024
Fixed phantoms retreating from inked light.

Fixed ending doors locking the player in.

Made the ending transition to the credits screen.

11/25/2024
Last minute UI changes/fixes.

Added controls to the in-game menu (Tab).

Added ballast tank UI.

Replaced control UI with objectives UI.

Upcoming Updates
Nov 30
FYGJ2 Ends // Flesh out some areas

Dec 6
IYGJJ Ends // Testing, gameplay, and balance fixes

Dec 25
Remastered Game Jam Ends (audio/visuals/bugs/Steam release)

Contributing
We welcome contributions! Please submit pull requests and report issues in the issue tracker.

License
This project is licensed under the MIT License - see the LICENSE.mdfile for details.