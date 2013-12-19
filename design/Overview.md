# A plaintext high-level overview of the system

## Overarching Goal

The prime directive of this program will be to provide functionality in a
Dungeons and Dragons (D&D) campaign based upon the simple tabletop map with
pieces placed upon it. Even though this is the basis, the actual functionality
should extend well beyond its humble origins.


## The Map

The map will be a square-tile (D&D 3.5e based) map. Each square has a terrain
and may optionally have objects upon, and may additionally optionally have
"creatures" upon it.

### Terrain

Each piece of terrain can be passable, impassable, or difficult, and may
additionally apply a special effect (e.g. acid which both is difficult and
applies damage while within it).

### Objects

Squares may have objects including scenery (trees) or treasure. These objects
may optionally have a weight and hardness (if not provided, each is
assumed to be too large to overcome normally) associated with them. The objects
also may effect movement through the square in the same way as terrain.
Objects
may also have "passive" skill checks associated with them. Passive skillchecks
include spot (but not search), listen, etc. For example, a slightly hidden chest
may have a passive spot DC 30 at 5ft, 40 at > 5ft associated with it.

### Players/creatures

Creatures / players may also have these 'passive' checks associated with them
for similar reasons. More importantly, players are able to move along the map.
Each player has a given movespeed, and may, on her turn trace a route which will
be correctly limited by the system (e.g. not going through impassable terrain,
slowing appropriately in difficult). Combat features would be nice, but is optional and
may be handled outside of the system.

### Vision
Each creature on the board has an associated sight range and has a suitable
fog-of-war based on this number. This is to encourage NPC enemies to act
realistically (e.g. when the DM controls an archer with bad sight, he does not
make an impossible shot) and to encourage players to cooperate to have a fuller
view of the battlefield. As an optional feature, 
the fog-of-war extends further than it should  with
rules-as-written by a configurable amount, but in that area it is 'murky' with
things not aligning directly to squares.

## Users

There are two types of users. The "DM" and the "players". The DM may be assumed
to be singular. There can be many players. Players are not limited solely to
completely traditional D&D players - they might solely control NPCs or even
enemeies (for example a friend of the DM might control the enemies for an encounter).

### DM

The DM does not have any limitations imposed upon her. She may make alterations
to the map and any pieces upon it at any time. For convenience, the DM should be
able to temporarily assume the role of any player as well.

### Player

Each player controls a limited set of creatures. 

## Typical full interaction

### DM
The DM begins with a system-provided database of map-pieces including terrain,
objects, and creatures. The DM may also upload any image and give it a name to
include as a map-piece. The DM is provided an interface to view any of the
following
* creatures
* spells
* skills (or just hardcode them all to begin with)
* feats (bonus feature)
* Equipment
* terrain
* map fragments (such as cities)
* the map
* the overview zoomed-out map.
* Players

The view screen shows a list and has searching capabilities. Items may be added,
edited, or removed.

The DM will edit each item appropriately. When ready, she will add players for
her campaign. Adding a player will generate a 'player link' which will be
provided to the player in place of a username/password.

At a later date, the DM may start a session. Only one session may ever be in
progress at a time. TODO complete this section

### Player
A player will follow a provided 'player-link'. This link will prompt them to
create a character. Doing this will include inputting, at a minimum, a name,
health, saves, and skills. The player may upload an avatar/image to be used on
the map or select one from a pre-existing list of 'character' texture tiles.
TODO

