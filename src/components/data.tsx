import { Equipment } from '@/components/columns';
import { WikiLink } from '@/components/wiki-link';

export const data: Equipment[] = [
  {
    name: 'Everburn Blade',
    location: (
      <div>
        Looted from <WikiLink>Commander Zhalk</WikiLink> at the helm of the <WikiLink>Nautiloid</WikiLink> during the{' '}
        <WikiLink>Prologue</WikiLink>. Can also be obtained by casting <WikiLink>Command (Drop)</WikiLink> on Commander
        Zhalk instead of killing him, though his chance of succeeding the <WikiLink>Saving throw</WikiLink> is high.
      </div>
    ),
  },
  {
    name: "The Watcher's Guide",
    location: (
      <div>
        Found in a trapped sarcophagus in the <WikiLink>Dank Crypt</WikiLink> (X:-293, Y:-323).
      </div>
    ),
  },
  {
    name: 'The Amulet of Lost Voices',
    location: (
      <div>
        Looted from a heavy chest in the same room that <WikiLink>Withers</WikiLink> emerges from inside the{' '}
        <WikiLink>Dank Crypt</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Gloves of Power',
    location: (
      <div>
        Looted from the <WikiLink>Goblin</WikiLink> Boss <WikiLink>Za'Krug</WikiLink> in front of the{' '}
        <WikiLink>Druid Grove</WikiLink>.
      </div>
    ),
  },
  {
    name: "Hellrider's Pride",
    location: (
      <div>
        Carried by <WikiLink>Zevlor</WikiLink> in the <WikiLink>Druid Grove</WikiLink> and can be either bought from
        him, stolen or earned as a reward for <WikiLink>Investigate Kagha</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Gloves of Missile Snaring',
    location: (
      <div>
        Sold by <WikiLink>Arron</WikiLink> in the <WikiLink>Druid Grove</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Ring of Flinging',
    location: (
      <div>
        Sold by <WikiLink>Arron</WikiLink> in the <WikiLink>Druid Grove</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Hedge Wanderer Armour',
    location: (
      <div>
        Sold by <WikiLink>Arron</WikiLink> in the <WikiLink>Druid Grove</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Rain Dancer',
    location: (
      <div>
        Sold by <WikiLink>Arron</WikiLink> in the <WikiLink>Druid Grove</WikiLink>.
      </div>
    ),
  },
  {
    name: "Dragon's Grasp",
    location: (
      <div>
        Sold by <WikiLink>Arron</WikiLink> in the <WikiLink>Druid Grove</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Spellthief',
    location: (
      <div>
        Sold by <WikiLink>Arron</WikiLink> in the <WikiLink>Druid Grove</WikiLink>.
      </div>
    ),
  },
  {
    name: "Corellon's Grace",
    location: (
      <div>
        This weapon can be bought or looted from <WikiLink>Auntie Ethel</WikiLink> in the{' '}
        <WikiLink>Riverside Teahouse</WikiLink> or the Hollow in the <WikiLink>Druid Grove</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Safeguard Shield',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> in the <WikiLink>Druid Grove</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Hunting Shortbow',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> in the <WikiLink>Druid Grove</WikiLink>.
      </div>
    ),
  },
  {
    name: "Komira's Locket",
    location: (
      <div>
        Given to you by <WikiLink>Arabella</WikiLink>'s parents after protecting her from <WikiLink>Kagha</WikiLink> in{' '}
        <WikiLink>Save Arabella</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Whispering Promise',
    location: (
      <>
        <div>Sold by:</div>
        <ul>
          <li>
            <WikiLink>Volo</WikiLink> in the <WikiLink>Druid Grove</WikiLink>. He'll leave the area after your first
            visit. The player needs to complete <WikiLink>Rescue Volo</WikiLink> to be able to trade with him again.
          </li>
          <li>
            <WikiLink>Grat the Trader</WikiLink> in the <WikiLink>Goblin Camp</WikiLink> (Act 1)
          </li>
          <li>
            <WikiLink>Roah Moonglow</WikiLink> in <WikiLink>Moonrise Towers</WikiLink> (Act 2)
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "Broodmother's Revenge",
    location: (
      <div>
        Looted from <WikiLink>Kagha</WikiLink> either by killing or by knocking her unconscious with non-lethal attacks.
      </div>
    ),
  },
  {
    name: 'Pale Oak',
    location: (
      <ul>
        <li>
          Obtained as a reward for completing the quest <WikiLink>Investigate Kagha</WikiLink> and both persuading and
          sparing <WikiLink>Kagha</WikiLink>, which must be completed before the quest{' '}
          <WikiLink>Rescue the Druid Halsin</WikiLink>. In this scenario, Kagha will give you the Pale Oak.
        </li>
        <li>
          If Kagha is killed, then all of the shadow druids and rogue Emerald Grove druids must also be defeated
          including <WikiLink>Loic</WikiLink> and <WikiLink>Marcoryl</WikiLink>. If Marcoryl isn't in the main chamber,
          he will likely be in the Servant's Quarters and will attack on sight after Khaga is defeated. In this
          scenario, Rath will give you the Pale Oak.
        </li>
        <li>
          This reward is available only to <WikiLink>Druids</WikiLink>.
        </li>
      </ul>
    ),
  },
  {
    name: 'Amulet of Silvanus',
    location: (
      <div>
        Hidden under a rock that must be moved, near <WikiLink>Ormn</WikiLink> the bear in the{' '}
        <WikiLink>Druid Grove</WikiLink> (X:262, Y:481).
      </div>
    ),
  },
  {
    name: 'Ring of Protection',
    location: (
      <div>
        Rewarded by <WikiLink>Mol</WikiLink> for completing the quest <WikiLink>Steal the Sacred Idol</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Cap of Curing',
    location: (
      <div>
        This hat is found in a locked gilded chest behind a pillar near to where <WikiLink>Alfira</WikiLink> is
        composing her song in the <WikiLink>Druid Grove</WikiLink> <span>X: 289 Y: 488</span>.
      </div>
    ),
  },
  {
    name: 'Ring of Colour Spray',
    location: (
      <div>
        Found in the Harpy Nest to the south of the harpy encounter in the <WikiLink>Secluded Cove</WikiLink>{' '}
        <span>X: 326 Y: 495</span>.
      </div>
    ),
  },
  {
    name: "Nature's Snare",
    location: (
      <div>
        Looted from a locked chest within the <WikiLink>Underground Passage</WikiLink> of the{' '}
        <WikiLink>Druid Grove</WikiLink> <span>X: -425 Y: 200</span>. The key to the chest can be found on a corpse on
        the lower part of the island in the middle, guarded by two turret statues.
      </div>
    ),
  },
  {
    name: 'Key of the Ancients',
    location: (
      <ul>
        <li>
          Dropped or pickpocketed from <WikiLink>Findal</WikiLink> in the <WikiLink>Underground Passage</WikiLink> that
          connects to the <WikiLink>Druid Grove</WikiLink>.
        </li>
        <li>
          Also dropped by <WikiLink>Nettie</WikiLink>.
        </li>
      </ul>
    ),
  },
  {
    name: 'Silver Pendant',
    location: (
      <div>
        Looted from a skeleton on the <WikiLink>Harper Outpost</WikiLink> southwest of the{' '}
        <WikiLink>Druid Grove</WikiLink> (X:152, Y:366). To reach this area, jump up two small ridges and climb a wooden
        ladder.
      </div>
    ),
  },
  {
    name: 'Vision of the Absolute',
    location: (
      <>
        <div>
          Repaired by finding and combining the <WikiLink>Shaft of a Broken Spear</WikiLink> and the{' '}
          <WikiLink>Head of a Broken Spear</WikiLink> (by right-clicking on one of the items in your inventory and
          pressing 'combine', then dragging the other item into the open slot.)
        </div>
        <ul>
          <li>
            <WikiLink>Shaft of a Broken Spear</WikiLink>: Found on the body of <WikiLink>Edowin</WikiLink> in the{' '}
            <WikiLink>Forest</WikiLink> west of the <WikiLink>Druid Grove</WikiLink> <span>X: 136 Y: 446</span>.
          </li>
          <li>
            <WikiLink>Head of a Broken Spear</WikiLink>: Looted from the <WikiLink>Owlbear</WikiLink> in the{' '}
            <WikiLink>Owlbear Nest</WikiLink>.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "The Oak Father's Embrace",
    location: (
      <div>
        Found on a headless skeleton in the <WikiLink>Owlbear Nest</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Moondrop Pendant',
    location: (
      <div>
        Found in a Sel&#xfb;nite Glided Chest in the <WikiLink>Owlbear Nest</WikiLink>. You must read the Sel&#xfb;nite
        Prayer Sheet in front of the chest to unlock it. The sheet can be spotted on the ground behind the statue of
        Sel&#xfb;ne by passing a <WikiLink>Perception</WikiLink> check.
      </div>
    ),
  },
  {
    name: 'Haste Helm',
    location: (
      <div>
        Found inside the locked chest near the <WikiLink>Ancient Sigil Circle</WikiLink> <WikiLink>waypoint</WikiLink>{' '}
        in the <WikiLink>Blighted Village</WikiLink> <span>X: 32 Y: 403</span>.
      </div>
    ),
  },
  {
    name: 'Very Heavy Greataxe',
    location: (
      <div>
        Looted from <WikiLink>Fezzerk</WikiLink> in front of the windmill in the <WikiLink>Blighted Village</WikiLink>,
        or later in <WikiLink>Moonrise Towers</WikiLink> if he was spared in the village.
      </div>
    ),
  },
  {
    name: 'Fleetfingers',
    location: (
      <div>
        Can be found inside a buried chest in the <WikiLink>Forest</WikiLink> <span>X: 77 Y: 347</span>.
      </div>
    ),
  },
  {
    name: 'Steelforged Sword',
    location: (
      <div>
        This weapon can be found in a locked chest in the abandoned workshop in the{' '}
        <WikiLink>Blighted Village</WikiLink>, across from the <WikiLink>Ancient Rune Circle</WikiLink> (X:45, Y:408).
      </div>
    ),
  },
  {
    name: 'Warped Headband of Intellect',
    location: (
      <div>
        Dropped by <WikiLink>Lump the Enlightened</WikiLink> in the <WikiLink>Blighted Village</WikiLink>{' '}
        <span>X: 13 Y: 366</span>.
      </div>
    ),
  },
  {
    name: 'Bracers of Defence',
    location: (
      <div>
        In the secret area of the <WikiLink>Apothecary's Cellar</WikiLink> beneath the{' '}
        <WikiLink>Blighted Village</WikiLink>. The bracers are located in a gilded chest <span>X: -656 Y: -370</span>.
      </div>
    ),
  },
  {
    name: 'The Speedy Lightfeet',
    location: (
      <div>
        Found inside a Heavy Chest in the cellar behind the windmill in the <WikiLink>Blighted Village</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Spiderstep Boots',
    location: (
      <div>
        Found in a heavy chest in the Arachnomancer's lab within the <WikiLink>Whispering Depths</WikiLink>{' '}
        <span>X: -514 Y: -411</span>.
      </div>
    ),
  },
  {
    name: 'Spurred Band',
    location: (
      <div>
        Found on a skeleton in the <WikiLink>Whispering Depths</WikiLink> (X:-495, Y:-365).
      </div>
    ),
  },
  {
    name: "Poisoner's Robe",
    location: (
      <div>
        This robe is dropped by the <WikiLink>Phase Spider Matriarch</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Wood Woad Shield',
    location: (
      <div>
        Can be looted from <WikiLink>Wood Woads</WikiLink> in the <WikiLink>Sunlit Wetlands</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Sparkle Hands',
    location: (
      <div>
        Found in a wooden chest in the <WikiLink>Sunlit Wetlands</WikiLink> <span>X: 95 Y: 210</span>.
      </div>
    ),
  },
  {
    name: "Gandrel's Aspiration",
    location: (
      <div>
        <WikiLink>Sunlit Wetlands</WikiLink>. Looted by <WikiLink>Gandrel</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Staff of Crones',
    location: (
      <div>
        Looted from the ground in the treasure room of the <WikiLink>Ancient Abode</WikiLink> (the Hag's lair) beneath{' '}
        <WikiLink>Auntie Ethel's Teahouse</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Ever-Seeing Eye',
    location: (
      <div>
        Located in the treasure room in the Hag's Lair underneath the <WikiLink>Gnarled Teahouse</WikiLink>.
      </div>
    ),
  },
  {
    name: "Smuggler's Ring",
    location: (
      <div>
        Looted from a Skeleton, hidden in a bush on the lower path following the river, near the broken bridge section
        at <WikiLink>The Risen Road</WikiLink> (X:57, Y:514).
      </div>
    ),
  },
  {
    name: 'Sword of Justice',
    location: (
      <div>
        Looted from <WikiLink>Anders</WikiLink> in the <WikiLink>Risen Road Toll House</WikiLink>{' '}
        <span>X: 110 Y: 560</span> or rewarded by him for killing <WikiLink>Karlach</WikiLink> in{' '}
        <WikiLink>Hunt the Devil</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Gloves of Heroism',
    location: (
      <div>
        Found inside a wooden chest <span>X: -674 Y: -401</span> at the back of the hidden room in the cellar of the
        Toll House, <WikiLink>The Risen Road</WikiLink>. The room can be opened by sitting on the two thrones{' '}
        <span>X: -664 Y: -407</span>, <span>X: -664 Y: -400</span> simultaneously (or by placing objects on each
        throne).
      </div>
    ),
  },
  {
    name: 'Shattered Flail',
    location: (
      <div>
        Dropped by the <WikiLink>Flind</WikiLink>, 'leader' of the group of <WikiLink>Gnoll</WikiLink>s attacking the
        Zhentarim caravan on <WikiLink>The Risen Road</WikiLink>.
      </div>
    ),
  },
  {
    name: "Reason's Grasp",
    location: (
      <div>
        Found in a locked chest in the cave where survivors of the attacked caravan are fending off a pack of gnolls on{' '}
        <WikiLink>The Risen Road</WikiLink> <span>X: 37 Y: 644</span>. The chest is behind the survivors, against the
        cave wall.
      </div>
    ),
  },
  {
    name: 'The Jolty Vest',
    location: (
      <div>
        Sold by <WikiLink>Brem</WikiLink> in the <WikiLink>Zhentarim Hideout</WikiLink> after completing{' '}
        <WikiLink>Find the Missing Shipment</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Giantbreaker',
    location: (
      <div>
        This weapon can be bought from <WikiLink>Brem</WikiLink> in the <WikiLink>Zhentarim Hideout</WikiLink> after
        completing <WikiLink>Find the Missing Shipment</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Titanstring Bow',
    location: (
      <>
        <div>This weapon can be purchased from the following traders:</div>
        <ul>
          <li>
            <WikiLink>Brem</WikiLink> in the <WikiLink>Zhentarim Hideout</WikiLink> after completing{' '}
            <WikiLink>Find the Missing Shipment</WikiLink>.
          </li>
          <li>
            <WikiLink>Lann Tarv</WikiLink> in the <WikiLink>Main Floor</WikiLink> of{' '}
            <WikiLink>Moonrise Towers</WikiLink>.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'Gloves of Hail of Thorns',
    location: (
      <>
        <div>This item can appear in the inventory of the following traders:</div>
        <ul>
          <li>
            <WikiLink>Brem</WikiLink> in the <WikiLink>Zhentarim Hideout</WikiLink> after completing{' '}
            <WikiLink>Find the Missing Shipment</WikiLink>.
          </li>
          <li>
            <WikiLink>Derryth Bonecloak</WikiLink> in the <WikiLink>Ebonlake Grotto</WikiLink>.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'Gloves of Thievery',
    location: (
      <div>
        This item can be bought from <WikiLink>Brem</WikiLink> in the <WikiLink>Zhentarim Hideout</WikiLink> after
        completing <WikiLink>Find the Missing Shipment</WikiLink> in the Zhentarim's favor.
      </div>
    ),
  },
  {
    name: 'Rupturing Blade',
    location: (
      <div>
        <WikiLink>Brem</WikiLink> in the <WikiLink>Zhentarim Hideout</WikiLink> after completing{' '}
        <WikiLink>Find the Missing Shipment</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Doom Hammer',
    location: (
      <div>
        <WikiLink>Grat the Trader</WikiLink> in the <WikiLink>Goblin Camp</WikiLink>
      </div>
    ),
  },
  {
    name: 'Hamarhraft',
    location: (
      <div>
        Found in a gilded chest in one of the burning rooms on the second story of the inn at{' '}
        <WikiLink>Waukeen's Rest</WikiLink> <span>X: -85 Y: 631</span>. This chest can be difficult to get to before the
        room becomes completely engulfed in flames, so it's recommended to approach in{' '}
        <WikiLink>turn-based mode</WikiLink>. One could also wait the fire out by completing a{' '}
        <WikiLink>long rest</WikiLink> or travelling to a different zone. Be cautious however, as waiting it out will
        complete the area's timed event and render many local NPCs and quests unavailable.
      </div>
    ),
  },
  {
    name: 'The Sparky Points',
    location: (
      <div>
        Reward for rescuing <WikiLink>Counsellor Florrick</WikiLink> from the burning inn of{' '}
        <WikiLink>Waukeen's Rest</WikiLink> during the quest <WikiLink>Rescue the Grand Duke</WikiLink>. One of three
        possible rewards for this quest, the other two being <WikiLink>The Joltshooter</WikiLink> and{' '}
        <WikiLink>The Spellsparkler</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Spellsparkler',
    location: (
      <div>
        Reward for rescuing <WikiLink>Counsellor Florrick</WikiLink> from the burning inn of{' '}
        <WikiLink>Waukeen's Rest</WikiLink> during the quest <WikiLink>Rescue the Grand Duke</WikiLink>. One of three
        possible rewards for this quest, the other two being <WikiLink>The Sparky Points</WikiLink> and{' '}
        <WikiLink>The Joltshooter</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Joltshooter',
    location: (
      <div>
        Reward for rescuing <WikiLink>Counsellor Florrick</WikiLink> from the burning inn of{' '}
        <WikiLink>Waukeen's Rest</WikiLink> during the quest <WikiLink>Rescue the Grand Duke</WikiLink>. One of three
        possible rewards for this quest, the other two being <WikiLink>The Sparky Points</WikiLink> and{' '}
        <WikiLink>The Spellsparkler</WikiLink>.
      </div>
    ),
  },
  {
    name: "Svartlebee's Woundseeker",
    location: (
      <div>
        <ul>
          <li>
            Looted from <WikiLink>Gauntlet Yeva</WikiLink> in <WikiLink>Waukeen's Rest</WikiLink> X: -66 Y: 609 in Act
            1. Has to be acquired before the first zone travel (including teleporting to your camp) after coming to
            Waukeen's Rest for the first time. If you come to the area after travelling to a different zone, Yeva will
            be gone.
          </li>
          <li>
            Can also be obtained from <WikiLink>Gauntlet Yeva</WikiLink> in the Tadpoling Centre within the{' '}
            <WikiLink>Mind Flayer Colony</WikiLink> in Act 2. One method to keep her non-hostile is to use a{' '}
            <WikiLink>Disarming</WikiLink> action on her during the fight where she appears. As long as you do not kill
            her, she will remain an ally.
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Abyss Beckoners',
    location: (
      <div>
        Inside a locked chest in a cell, roughly <span>X: 306 Y: -170</span> the <WikiLink>Zhentarim Basement</WikiLink>
        , <WikiLink>The Risen Road</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Swiresy Shoes',
    location: (
      <div>
        Sold by <WikiLink>Grat the Trader</WikiLink> in the <WikiLink>Goblin Camp</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Gloves of Archery',
    location: (
      <div>
        Sold by <WikiLink>Grat the Trader</WikiLink> in the <WikiLink>Goblin Camp</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Boots of Aid and Comfort',
    location: (
      <div>
        Sold by <WikiLink>Grat the Trader</WikiLink> in the <WikiLink>Goblin Camp</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Returning Pike',
    location: (
      <div>
        Sold by <WikiLink>Grat the Trader</WikiLink> in the <WikiLink>Goblin Camp</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Glowing Shield',
    location: (
      <div>
        Found in a locked chest on a ridge behind the <WikiLink>Goblin Camp</WikiLink> <span>X: -53 Y: 461</span>.
      </div>
    ),
  },
  {
    name: "Crusher's Ring",
    location: (
      <div>
        Worn by <WikiLink>Crusher</WikiLink> in the <WikiLink>Goblin Camp</WikiLink>. You can slip the ring off his toe
        when he demands you kiss his feet, or kill Crusher to take it off his body.
      </div>
    ),
  },
  {
    name: 'Jagged Spear',
    location: (
      <div>
        On the ground near Torturer Spike in the <WikiLink>Shattered Sanctum</WikiLink> X: 334 Y: -37.
      </div>
    ),
  },
  {
    name: 'Ritual Axe',
    location: (
      <div>
        Looted from the table next to <WikiLink>Abdirak</WikiLink> in the <WikiLink>Shattered Sanctum</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Ritual Dagger',
    location: (
      <div>
        Looted from the table next to <WikiLink>Abdirak</WikiLink> in the <WikiLink>Shattered Sanctum</WikiLink>.
      </div>
    ),
  },
  {
    name: "Loviatar's Scourge",
    location: (
      <div>
        Carried by <WikiLink>Abdirak</WikiLink> in the <WikiLink>Shattered Sanctum</WikiLink>.
      </div>
    ),
  },
  {
    name: "Assassin's Touch",
    location: (
      <div>
        Reward for completing the quest <WikiLink>Save the Goblin Sazza</WikiLink> by escorting{' '}
        <WikiLink>Sazza</WikiLink> to the <WikiLink>Goblin Camp</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Blazer of Benevolence',
    location: (
      <div>
        Reward for rescuing <WikiLink>Volo</WikiLink> from the <WikiLink>Goblin Camp</WikiLink> during{' '}
        <WikiLink>Rescue Volo</WikiLink>.
      </div>
    ),
  },
  {
    name: "Beastmaster's Chain",
    location: (
      <div>
        Found in a chest in the <WikiLink>Worg Pens</WikiLink> area of the <WikiLink>Shattered Sanctum</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Linebreaker Boots',
    location: (
      <div>
        Dropped by <WikiLink>Beastmaster Zurk</WikiLink> in the <WikiLink>Worg Pens</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Worgfang',
    location: (
      <div>
        Worgfang can be looted from a pile of bones in one of the cells within the <WikiLink>Worg Pens</WikiLink> area
        of the <WikiLink>Goblin Camp</WikiLink> <span>X: 386 Y: -17</span>.
      </div>
    ),
  },
  {
    name: 'Blooded Greataxe',
    location: (
      <div>
        This weapon can be bought from the following traders:
        <ul>
          <li>
            <WikiLink>Grat the Trader</WikiLink> in the <WikiLink>Goblin Camp</WikiLink>
          </li>
          <li>
            <WikiLink>Roah Moonglow</WikiLink> in the <WikiLink>Shattered Sanctum</WikiLink>
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Monster Slayer Glaive',
    location: (
      <div>
        This weapon can be bought from these traders:
        <ul>
          <li>
            <WikiLink>Roah Moonglow</WikiLink> in the <WikiLink>Shattered Sanctum</WikiLink>
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Gold Wyrmling Staff',
    location: (
      <div>
        This weapon can be bought from these traders:
        <ul>
          <li>
            <WikiLink>Roah Moonglow</WikiLink> in the <WikiLink>Shattered Sanctum</WikiLink>
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Amulet of Elemental Torment',
    location: (
      <div>
        Drops from <WikiLink>Hope</WikiLink> in <WikiLink>House of Hope</WikiLink> (once she is freed and the zone boss
        is defeated).
      </div>
    ),
  },
  {
    name: 'Bow of Awareness',
    location: (
      <div>
        This weapon can be bought from these traders:
        <ul>
          <li>
            <WikiLink>Roah Moonglow</WikiLink> in the <WikiLink>Shattered Sanctum</WikiLink>
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: "Hunter's Dagger",
    location: (
      <div>
        This weapon can be bought from <WikiLink>Roah Moonglow</WikiLink> in the <WikiLink>Shattered Sanctum</WikiLink>.{' '}
      </div>
    ),
  },
  {
    name: "Wapira's Crown",
    location: (
      <div>
        This helmet is given to you by <WikiLink>Zevlor</WikiLink> as thanks for helping the tiefling refugees during{' '}
        <WikiLink>Save the Refugees</WikiLink>, provided you accept the monetary reward. The helmet is inside the{' '}
        <WikiLink>Patched-Together Sack</WikiLink> in your inventory.
      </div>
    ),
  },
  {
    name: "Absolute's Warboard",
    location: (
      <div>
        Dropped by Priestess <WikiLink>Gut</WikiLink> in the <WikiLink>Shattered Sanctum</WikiLink> portion of the{' '}
        <WikiLink>Goblin Camp</WikiLink>.
      </div>
    ),
  },
  {
    name: "Absolute's Talisman",
    location: (
      <div>
        Worn by <WikiLink>Priestess Gut</WikiLink>. Can be obtained as loot during the{' '}
        <WikiLink>Defeat the Goblins</WikiLink> questline.
      </div>
    ),
  },
  {
    name: 'Amulet of Misty Step',
    location: (
      <div>
        In a gilded chest behind the ogre <WikiLink>Polma</WikiLink> in the <WikiLink>Defiled Temple</WikiLink> within
        the <WikiLink>Goblin Camp</WikiLink> <span>X: 386 Y: 8</span>.
      </div>
    ),
  },
  {
    name: 'Faithbreaker',
    location: (
      <div>
        Dropped by <WikiLink>Dror Ragzlin</WikiLink> in the <WikiLink>Shattered Sanctum</WikiLink>{' '}
        <span>X: 297 Y: 40</span>.
      </div>
    ),
  },
  {
    name: "Amulet of Selûne's Chosen",
    location: (
      <div>
        Found in <WikiLink>Dror Ragzlin</WikiLink>'s treasure pile in the <WikiLink>Shattered Sanctum</WikiLink>{' '}
        <span>X: 296 Y: 71</span>.
      </div>
    ),
  },
  {
    name: 'Gloves of the Growling Underdog',
    location: (
      <div>
        Found Inside <WikiLink>Dror Ragzlin</WikiLink>'s Treasure Crates in the <WikiLink>Shattered Sanctum</WikiLink>{' '}
        <span>X: 298 Y: 66</span>.
      </div>
    ),
  },
  {
    name: 'Springstep Boots',
    location: (
      <div>
        Located in the treasure room behind <WikiLink>Dror Ragzlin</WikiLink>'s throne in the{' '}
        <WikiLink>Shattered Sanctum</WikiLink> <span>X: 296 Y: 71</span>
      </div>
    ),
  },
  {
    name: 'Spidersilk Armour',
    location: (
      <div>
        Worn by <WikiLink>Minthara</WikiLink> when recruited or dropped by her in the{' '}
        <WikiLink>Shattered Sanctum</WikiLink>
      </div>
    ),
  },
  {
    name: 'Boots of Striding',
    location: (
      <div>
        Dropped by <WikiLink>Minthara</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Xyanyde',
    location: (
      <div>
        Dropped by <WikiLink>Minthara</WikiLink> in the <WikiLink>Shattered Sanctum</WikiLink> (X:332, Y:43). Does not
        have it on her after Act 1
      </div>
    ),
  },
  {
    name: 'The Watersparkers',
    location: (
      <div>
        Found in a chest in <WikiLink>Minthara</WikiLink>'s area of the <WikiLink>Shattered Sanctum</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Ring of Poison Resistance',
    location: (
      <div>
        Found on a skeleton inside a sarcophagus just before the <WikiLink>Worg Pens</WikiLink> area of the{' '}
        <WikiLink>Shattered Sanctum</WikiLink> X: 338 Y: 14
      </div>
    ),
  },
  {
    name: 'Sorrow',
    location: (
      <div>
        Found in the <WikiLink>Hidden Vault</WikiLink> by solving the <WikiLink> Enclave Library Puzzle</WikiLink> in
        the <WikiLink>Druid Grove</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Robe of Summer',
    location: (
      <div>
        Found inside a crate sitting in the Hidden Vault within the <WikiLink>Druid Grove</WikiLink>. You will need the{' '}
        <WikiLink>Rune of the Wolf</WikiLink> carried by <WikiLink>Rath</WikiLink> to access the vault; which you can
        obtain by talking to Rath after rescuing <WikiLink>Halsin</WikiLink>, pickpocketing him, or killing him.
      </div>
    ),
  },
  {
    name: 'Helmet of Smiting',
    location: (
      <div>
        This helmet can be found inside a locked gilded chest in the <WikiLink>Sel&#xfb;nite Outpost</WikiLink>{' '}
        <span>X: 163 Y: -248</span>.
      </div>
    ),
  },
  {
    name: 'The Spectator Eyes',
    location: (
      <div>
        Looted from the <WikiLink>Spectator</WikiLink> located in the <WikiLink>Underdark</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Blast Pendant',
    location: (
      <div>
        This amulet is worn by <WikiLink>Dhourn</WikiLink>, one of the petrified drow to the west of the{' '}
        <WikiLink>Sel&#xfb;nite Outpost</WikiLink> (X:121, Y:-245).
      </div>
    ),
  },
  {
    name: 'Bloodguzzler Garb',
    location: (
      <div>
        Dropped by the <WikiLink>Bulette</WikiLink> in the <WikiLink>Underdark</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Drow Studded Leather Armour',
    location: (
      <div>
        Inside a Heavy Chest at Lolth's Cultist's cache (X:71 Y:-220), climbing up a high spot near the entrance of{' '}
        <WikiLink>The Festering Cove</WikiLink>
      </div>
    ),
  },
  {
    name: 'Helmet of Autonomy',
    location: (
      <div>
        Found on a skeleton at the entrance to <WikiLink>The Festering Cove</WikiLink> <span>X: 82 Y: -241</span>.
      </div>
    ),
  },
  {
    name: 'Sickle of BOOOAL',
    location: (
      <ul>
        <li>
          Dropped or pickpocketed from <WikiLink>Pooldripp the Zealous</WikiLink> in{' '}
          <WikiLink>The Festering Cove</WikiLink>.
        </li>
        <li>
          Given to the player by <WikiLink>BOOOAL</WikiLink> in <WikiLink>The Festering Cove</WikiLink> if the correct
          dialog options are chosen to cause his power to falter and then agree to be his Chosen.
        </li>
        <li>
          Choosing other dialog options during the cutscene allows you to kill <WikiLink>BOOOAL</WikiLink> without the{' '}
          <WikiLink>Kuo-toa</WikiLink> attacking. Once accomplished, you can purchase the weapon from{' '}
          <WikiLink>Pooldripp the Zealous</WikiLink>.
        </li>
      </ul>
    ),
  },
  {
    name: 'Slippery Chain Shirt',
    location: (
      <div>
        Found in a chest hidden on a cliff in <WikiLink>The Festering Cove</WikiLink> (X:-400, Y:329).
      </div>
    ),
  },
  {
    name: 'Skybreaker',
    location: (
      <div>
        In a locked chest in front of the <WikiLink>Arcane Tower</WikiLink> in the <WikiLink>Underdark</WikiLink> (X:27,
        Y:-298).
      </div>
    ),
  },
  {
    name: "Mystra's Grace",
    location: (
      <div>
        These boots can be found in the Chest of the Mundane on the northern balcony of the{' '}
        <WikiLink>Arcane Tower</WikiLink>'s third floor, the same level as the arcane turrets <span>X: -36 Y: 265</span>
        . In order to see the contents of the chest for what they are, you will need to either take them out of the
        chest or place the chest within the antimagic field of a <WikiLink>Sussur Bloom</WikiLink>.
      </div>
    ),
  },
  {
    name: "Mage's Friend",
    location: (
      <div>
        This ring can be found in a chest at the foot of the bed on the 4th floor of the{' '}
        <WikiLink>Arcane Tower</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Guiding Light',
    location: (
      <div>
        This ring can be obtained in the <WikiLink>Arcane Tower</WikiLink> by telling <WikiLink>Bernard</WikiLink> the
        appropriate play line. Alternatively, it can be looted from <WikiLink>Bernard</WikiLink> after defeating it.
      </div>
    ),
  },
  {
    name: 'Club of Hill Giant Strength',
    location: (
      <div>
        Found by breaking the <WikiLink>Stool of Hill Giant Strength</WikiLink> on the highest floor of{' '}
        <WikiLink>Arcane Tower</WikiLink>, with <WikiLink>Bernard</WikiLink>. The stool is underneath the thatched roof
        section and is knocked over on its side. Coordinates X:-30, Y: -272
      </div>
    ),
  },
  {
    name: 'Light of Creation',
    location: (
      <div>
        Looted from <WikiLink>Bernard</WikiLink> at the top floor of the <WikiLink>Arcane Tower</WikiLink> in the{' '}
        <WikiLink>Underdark</WikiLink> <span>X: -38 Y: -284</span>.
      </div>
    ),
  },
  {
    name: 'Staff of Arcane Blessing',
    location: (
      <ul>
        <li>
          This staff is found leaning up against a table in the basement of the <WikiLink>Arcane Tower</WikiLink>. To
          reach the basement, the player must either convince <WikiLink>Bernard</WikiLink> on the top floor to leave{' '}
          <WikiLink>Guiding Light</WikiLink> on a table, or defeat Bernard and take it. The ring can be used to activate
          a secret button on the tower's teleporter pad to reach the basement.
        </li>
        <li>
          Another way to reach the basement of the <WikiLink>Arcane Tower</WikiLink> is to go up the stairs behind the
          generator, use <WikiLink>Feather Fall</WikiLink>, and jump down to the gap between the wall and the wooden
          staircase.
        </li>
        <li>
          If the party has a character capable of casting <WikiLink>Mage Hand</WikiLink>, they can also cast it under
          the stairs through the same gap, and direct it to operate the switch which will open a hidden door in the
          wall.
        </li>
      </ul>
    ),
  },
  {
    name: 'The Sparkswall',
    location: (
      <div>
        This ring can be found in a gilded chest in the <WikiLink>Arcane Tower's</WikiLink> basement.{' '}
        <WikiLink>Guiding Light</WikiLink> is required to access the basement.
      </div>
    ),
  },
  {
    name: 'Uncovered Mysteries',
    location: (
      <div>
        This amulet can be found inside a small gilded chest on the <WikiLink>Arcane Tower</WikiLink>{' '}
        <span>X: -48 Y: -282</span> basement floor's mezzanine, right next to the elevator exit.
      </div>
    ),
  },
  {
    name: 'Phalar Aluve',
    location: (
      <>
        <div>
          This weapon can be found stabbed into a rock in the <WikiLink>Underdark</WikiLink> (X:116, Y:-192) and can be
          freed by passing either a:
        </div>
        <ul>
          <li>
            DC 15 <WikiLink>Strength</WikiLink> check to yank it from the stone.
          </li>
          <li>
            DC 15 <WikiLink>Religion</WikiLink> check to learn how to release the magic holding it in place.
          </li>
          <li>
            Paladin: DC 10 <WikiLink>Religion</WikiLink> check (with advantage) to consider what the appropriate ritual
            for releasing the sword. If successful, a Paladin can perform the ritual or use your oath to prove your work
            (DC 10 <WikiLink>Charisma</WikiLink> check).
          </li>
        </ul>
        <div>Alternately, a Cleric of Eilistraee can release the sword without needing an ability check.</div>
      </>
    ),
  },
  {
    name: 'Amulet of the Unworthy',
    location: (
      <div>
        Carried by a Minotaur wandering the <WikiLink>Underdark</WikiLink> <span>X: 160 Y: -147</span>.
      </div>
    ),
  },
  {
    name: 'Ring of Mind-Shielding',
    location: (
      <div>
        Offered by <WikiLink>Omeluum</WikiLink> at the end of <WikiLink>Help Omeluum Investigate the Parasite</WikiLink>
        . You can purchase it either with gold, or by trading a story or information about the{' '}
        <WikiLink>Nautiloid</WikiLink>.
      </div>
    ),
  },
  {
    name: "Creation's Echo",
    location: (
      <div>
        Sold by <WikiLink>Omeluum</WikiLink> in the <WikiLink>Myconid Colony</WikiLink> after completing his quest{' '}
        <WikiLink>Help Omeluum investigate the parasite</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Pearl of Power Amulet',
    location: (
      <div>
        Sold by <WikiLink>Omeluum</WikiLink> in the <WikiLink>Ebonlake Grotto</WikiLink> after completing{' '}
        <WikiLink>Help Omeluum investigate the parasite</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Boots of Stormy Clamour',
    location: (
      <div>
        Sold by <WikiLink>Omeluum</WikiLink> in the <WikiLink>Ebonlake Grotto</WikiLink> after completing{' '}
        <WikiLink>Help Omeluum investigate the parasite</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Ring of Salving',
    location: (
      <div>
        Sold by <WikiLink>Omeluum</WikiLink> in the <WikiLink>Myconid Colony</WikiLink> after completing his quest{' '}
        <WikiLink>Help Omeluum investigate the parasite</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Shadespell Circlet',
    location: (
      <div>
        Sold by <WikiLink>Omeluum</WikiLink> in the <WikiLink>Myconid Colony</WikiLink> after completing his quest{' '}
        <WikiLink>Help Omeluum investigate the parasite</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Boots of Genial Striding',
    location: (
      <div>
        Sold by <WikiLink>Blurg</WikiLink> in the <WikiLink>Myconid Colony</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Circlet of Blasting',
    location: (
      <div>
        Sold by <WikiLink>Blurg</WikiLink> in the <WikiLink>Myconid Colony</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Baneful',
    location: (
      <div>
        Sold by <WikiLink>Blurg</WikiLink> in the <WikiLink>Myconid Colony</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Psychic Spark',
    location: (
      <div>
        Sold by <WikiLink>Blurg</WikiLink> in the <WikiLink>Myconid Colony</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Cinder Shoes',
    location: (
      <div>
        Sold by <WikiLink>Blurg</WikiLink> in the <WikiLink>Myconid Colony</WikiLink>.
      </div>
    ),
  },
  {
    name: "Sunwalker's Gift",
    location: (
      <div>
        Sold by <WikiLink>Blurg</WikiLink> in the <WikiLink>Myconid Colony</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Lifebringer',
    location: (
      <div>
        Sold by <WikiLink>Blurg</WikiLink> in the <WikiLink>Myconid Colony</WikiLink>.
      </div>
    ),
  },
  {
    name: "Melf's First Staff",
    location: (
      <div>
        Sold by <WikiLink>Blurg</WikiLink> in the <WikiLink>Myconid Colony</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Amulet of Restoration',
    location: (
      <ul>
        <li>
          Bought from <WikiLink>Derryth Bonecloak</WikiLink> in the <WikiLink>Myconid Colony</WikiLink> in the{' '}
          <WikiLink>Underdark</WikiLink>.
        </li>
        <li>
          A second one can be found in a chest titled 'Private Stash' <span>X: -85 Y: -185</span> in{' '}
          <WikiLink>The Counting House</WikiLink>, in the eastern room down the very first flight of stairs.
        </li>
      </ul>
    ),
  },
  {
    name: 'Corrosive Flail',
    location: (
      <div>
        <WikiLink>Derryth Bonecloak</WikiLink> in the <WikiLink>Ebonlake Grotto</WikiLink> in the{' '}
        <WikiLink>Underdark</WikiLink>.
      </div>
    ),
  },
  {
    name: "Herbalist's Gloves",
    location: (
      <div>
        Sold by <WikiLink>Derryth Bonecloak</WikiLink> in the <WikiLink>Myconid Colony</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Ring of Jumping',
    location: (
      <div>
        <WikiLink>Derryth Bonecloak</WikiLink> in the <WikiLink>Myconid Colony</WikiLink> in the{' '}
        <WikiLink>Underdark</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Caustic Band',
    location: (
      <div>
        Bought from <WikiLink>Derryth Bonecloak</WikiLink> in the <WikiLink>Myconid Colony</WikiLink> in the{' '}
        <WikiLink>Underdark</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Gloves of Uninhibited Kushigo',
    location: (
      <div>
        Given to you by <WikiLink>Derryth Bonecloak</WikiLink> in the <WikiLink>Myconid Colony</WikiLink> as reward for
        saving <WikiLink>Baelen Bonecloak</WikiLink> during <WikiLink>Find the Mushroom Picker</WikiLink>.
      </div>
    ),
  },
  {
    name: "Explorer's Ring",
    location: (
      <div>
        Explorer's Ring can be found on a skeleton on a ledge above the <WikiLink>Bibberbang</WikiLink> in the{' '}
        <WikiLink>Bibberbang Grotto</WikiLink> section of <WikiLink>Dread Hollow</WikiLink> in the{' '}
        <WikiLink>Underdark</WikiLink> <span>X: -12 Y: -50</span>. It can be reached by jumping from a series of rock
        ledges or by teleporting up to the location.
      </div>
    ),
  },
  {
    name: 'Sussur Greatsword',
    location: (
      <div>
        This weapon is obtained as part of the quest <WikiLink>Finish the Masterwork Weapon</WikiLink> in the{' '}
        <WikiLink>Blighted Village</WikiLink> by combining the <WikiLink>Greatsword</WikiLink> with{' '}
        <WikiLink>Sussur Tree Bark</WikiLink> in the <WikiLink>Blacksmith's Forge</WikiLink> found in one of the
        buildings in the village.
      </div>
    ),
  },
  {
    name: 'Sussur Dagger',
    location: (
      <div>
        This weapon is obtained as part of the quest <WikiLink>Finish the Masterwork Weapon</WikiLink> in the{' '}
        <WikiLink>Blighted Village</WikiLink> by combining a <WikiLink>Dagger</WikiLink> with{' '}
        <WikiLink>Sussur Tree Bark</WikiLink> in the Blacksmith's Forge found in one of the buildings in the village.
      </div>
    ),
  },
  {
    name: 'Sussur Sickle',
    location: (
      <div>
        This weapon is obtained as part of the quest <WikiLink>Finish the Masterwork Weapon</WikiLink> in the{' '}
        <WikiLink>Blighted Village</WikiLink> by combining a <WikiLink>Sickle</WikiLink> with{' '}
        <WikiLink>Sussur Tree Bark</WikiLink> in the Blacksmith's Forge found in one of the buildings in the village.
      </div>
    ),
  },
  {
    name: 'Shortsword of First Blood',
    location: (
      <div>
        Found on the corpse of an executed Deep Gnome in the <WikiLink>Underdark</WikiLink> at (X:73, Y:-187), at the
        entrance of the <WikiLink>Decrepit Village</WikiLink> (if approaching from the Myconid Colony).
      </div>
    ),
  },
  {
    name: "Exterminator's Axe",
    location: (
      <div>
        Looted from <WikiLink>Gekh Coal</WikiLink> in <WikiLink>Decrepit Village</WikiLink>,{' '}
        <WikiLink>Underdark</WikiLink> <span>X: 14 Y: -196</span>.
      </div>
    ),
  },
  {
    name: 'Boots of Speed',
    location: (
      <div>
        Worn by <WikiLink>Thulla</WikiLink> in the <WikiLink>Myconid Colony</WikiLink>. She gives them to you as thanks
        for curing her of the duergar poison in <WikiLink>Cure the Poisoned Gnome</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Mourning Frost',
    location: (
      <>
        <div>
          Created by combining the components carried by the three Drow mages competing to discover the Adamantine
          Forge. They are found at various locations within the <WikiLink>Underdark</WikiLink>.{' '}
        </div>
        <ul>
          <li>
            <WikiLink>Icy Helve</WikiLink> - carried by <WikiLink>Dhourn</WikiLink>, west of the{' '}
            <WikiLink>Sel&#xfb;nite Outpost</WikiLink>.
          </li>
          <li>
            <WikiLink>Icy Metal</WikiLink> - looted from the Pale Corpse within the <WikiLink>Myconid Colony</WikiLink>,
            in the secret area unlocked by completing the quest <WikiLink>Defeat the Duergar Intruders</WikiLink> (X:50,
            Y:75) or by casting <WikiLink>Knock</WikiLink>.
          </li>
          <li>
            <WikiLink>Icy Crystal</WikiLink> - carried by <WikiLink>Filro the Forgotten</WikiLink> near the Sussur Tree.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'Shadow of Menzoberranzan',
    location: (
      <div>
        Looted from the Pale Corpse in the <WikiLink>Myconid Colony</WikiLink>, in the secret area unlocked by
        completing the quest <WikiLink>Defeat the Duergar Intruders</WikiLink> <span>X: 50 Y: 75</span>.
      </div>
    ),
  },
  {
    name: 'Intransigent Warhammer',
    location: (
      <div>
        Can be found inside a Watertight Chest on a Duergar skiff during your first voyage to{' '}
        <WikiLink>Grymforge</WikiLink> from the <WikiLink>Decrepit Village</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Wondrous Gloves',
    location: (
      <div>
        Dropped by a mimic disguised as a chest in <WikiLink>Grymforge</WikiLink> <span>X: -691 Y: 374</span>.
      </div>
    ),
  },
  {
    name: "Jorgoral's Greatsword",
    location: (
      <div>
        Looted from <WikiLink>Corsair Greymon</WikiLink> on <WikiLink>Ebonlake</WikiLink>,{' '}
        <WikiLink>Grymforge</WikiLink>. If not engaged on the lake, he can sell this item at his trader spot in
        Grymforge <span>X: -632 Y: 326</span>.
      </div>
    ),
  },
  {
    name: 'Bow of the Banshee',
    location: (
      <div>
        Can be looted from or sold by <WikiLink>Corsair Greymon</WikiLink>. Greymon is first encountered when taking the
        boat found in the <WikiLink>Decrepit Village</WikiLink> to <WikiLink>Grymforge</WikiLink>. If he survives the
        journey, Greymon will be in <WikiLink>Grymforge</WikiLink> among the other Duergar.
      </div>
    ),
  },
  {
    name: 'Shining Staver-of-Skulls',
    location: (
      <div>
        Can be looted from or sold by <WikiLink>Corsair Greymon</WikiLink>, a duergar on the{' '}
        <WikiLink>Ebon Lake</WikiLink> boat to <WikiLink>Grymforge</WikiLink>. Greymon can be found in the main chamber,
        if not killed on the boat.
      </div>
    ),
  },
  {
    name: 'The Protecty Sparkswall',
    location: (
      <div>
        Looted from a Gilded Chest at the end of the trapped bridge in <WikiLink>Grymforge</WikiLink>{' '}
        <span>X: -645 Y: 360</span>.
      </div>
    ),
  },
  {
    name: 'Fetish of Callarduran Smoothhands',
    location: (
      <>
        <div>
          Found on one of the dead deep gnomes that a pair of duergar are throwing into the lake in{' '}
          <WikiLink>Grymforge</WikiLink>
          <span>X: -610 Y: 408</span>.
        </div>
        <div>
          If you talk to the <WikiLink>Duergar</WikiLink> you need to succeed a <WikiLink>Perception</WikiLink> and{' '}
          <WikiLink>Deception</WikiLink> or <WikiLink>Sleight of Hand</WikiLink> check before this item can be looted.
          Alternatively, you can murder the Duergar and loot it directly from one of the corpses.
        </div>
      </>
    ),
  },
  {
    name: 'Sharran Crossbow',
    location: (
      <div>
        Found in a locked chest in <WikiLink>Grymforge</WikiLink> (X:-677, Y:398)
      </div>
    ),
  },
  {
    name: 'The Real Sparky Sparkswall',
    location: (
      <div>
        Obtained from a locked and trapped chest in <WikiLink>Grymforge</WikiLink> <span>X: -695 Y: 420</span>.
      </div>
    ),
  },
  {
    name: 'Dark Justiciar Helm',
    location: (
      <ul>
        <li>
          The skeletal remains of Dark Justiciars in <WikiLink>Grymforge</WikiLink>, north of the Underdark - Grymforge{' '}
          <WikiLink>Ancient Rune Circle</WikiLink>.
        </li>
        <li>
          Found laying on the ground next to a skeleton in <WikiLink>Nightsong's Prison</WikiLink>{' '}
          <span>X: -544 Y: -1447</span>.
        </li>
      </ul>
    ),
  },
  {
    name: 'Dark Justiciar Mail',
    location: (
      <ul>
        <li>
          Looted from a skeleton north of the Underdark - Grymforge <WikiLink>Ancient Rune Circle</WikiLink> in{' '}
          <WikiLink>Grymforge</WikiLink> <span>X: -655 Y: 424</span>.
        </li>
        <li>
          Looted from a skeleton south of the Ancient Forge <WikiLink>Ancient Rune Circle</WikiLink> in{' '}
          <WikiLink>Grymforge</WikiLink> <span>X: -609 Y: 246</span>.
        </li>
      </ul>
    ),
  },
  {
    name: 'Merregon Halberd',
    location: (
      <ul>
        <li>
          Looted from a <WikiLink>Merregon Legionnaire</WikiLink> in the hallway with the{' '}
          <WikiLink>Hellsboars</WikiLink> in <WikiLink>Grymforge</WikiLink> <span>X: 575 Y: 377</span>.
        </li>
        <li>
          Looted from Merregons accompanying <WikiLink>Yurgir</WikiLink> in the <WikiLink>Gauntlet of Shar</WikiLink>{' '}
          <span>X: -658 Y: 753</span>.
        </li>
        <li>
          Two halberds can be found laying around the edge of the lava lake in <WikiLink>Grymforge</WikiLink>{' '}
          <span>X: -643 Y: 215</span> &amp; <span>X: -601 Y: 199</span>.
        </li>
      </ul>
    ),
  },
  {
    name: 'Firestoker',
    location: (
      <div>
        Found in an Opulent Chest in <WikiLink>Grymforge</WikiLink> in the hallway with the{' '}
        <WikiLink>Hellsboars</WikiLink> (X:-574, Y:382).
      </div>
    ),
  },
  {
    name: 'Bracing Band',
    location: (
      <div>
        Given to you by <WikiLink>Thrinn</WikiLink> after you <WikiLink>return her boots to her</WikiLink>. One of two
        possible rewards for this quest.
      </div>
    ),
  },
  {
    name: 'Armour of Uninhibited Kushigo',
    location: (
      <div>
        <WikiLink>Find the Missing Boots</WikiLink> optional quest reward by Sergeant Thrinn in{' '}
        <WikiLink>Grymforge</WikiLink> after giving her
        <WikiLink>Boots of Speed</WikiLink>. The other quest reward option is
        <WikiLink>Bracing Band</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Deep Delver',
    location: (
      <div>
        Dropped by <WikiLink>Elder Brithvar</WikiLink> in <WikiLink>Grymforge</WikiLink> (X:-631, Y:326).
      </div>
    ),
  },
  {
    name: 'Sword of Screams',
    location: (
      <div>
        Dropped by <WikiLink>Nere</WikiLink> in <WikiLink>Grymforge</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Disintegrating Night Walkers',
    location: (
      <div>
        Worn by <WikiLink>Nere</WikiLink>. Can be obtained after clearing the cave-in at <WikiLink>Grymforge</WikiLink>,
        as a part of the <WikiLink>Free True Soul Nere</WikiLink> questline.
      </div>
    ),
  },
  {
    name: 'Ring of Absolute Force',
    location: (
      <div>
        Dropped by <WikiLink>Sergeant Thrinn</WikiLink> in <WikiLink>Grymforge</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Cap of Wrath',
    location: (
      <div>
        Dropped by <WikiLink>Thudd</WikiLink> in <WikiLink>Grymforge</WikiLink>.
      </div>
    ),
  },
  {
    name: "Envoy's Amulet",
    location: (
      <>
        <div>
          Reward for delivering <WikiLink>Nere's Head</WikiLink> to <WikiLink>Spaw</WikiLink> during the quest{' '}
          <WikiLink>Deliver Nere's Head</WikiLink>. The head can be delivered to either <WikiLink>Glut</WikiLink> or{' '}
          <WikiLink>Spaw</WikiLink>, depending on which one of them is installed as Sovereign of the{' '}
          <WikiLink>Myconid Colony</WikiLink>.
        </div>
        <div>
          The alternative reward, for delivering the head to <WikiLink>Glut</WikiLink>, is{' '}
          <WikiLink>Champion's Chain</WikiLink>.
        </div>
      </>
    ),
  },
  {
    name: 'Dark Justiciar Mask',
    location: (
      <div>
        Looted from a skeleton in <WikiLink>Grymforge</WikiLink> near the Ancient Forge <WikiLink>Waypoint</WikiLink>{' '}
        <span>X: -606 Y: 282</span>.
      </div>
    ),
  },
  {
    name: 'Sentient Amulet (Rare)',
    location: (
      <div>
        In a locked <WikiLink>Adamantine Chest</WikiLink> <span>X: -624 Y: 224</span> on the island with the broken
        structure near the <WikiLink>Lava Elemental</WikiLink> in <WikiLink>Grymforge</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Sentient Amulet (Very Rare)',
    location: (
      <div>
        Obtained upon completing the <WikiLink>Help the Cursed Monk</WikiLink> quest (if the player refuses to take on
        the monk's madness and fights him).
      </div>
    ),
  },
  {
    name: 'Adamantine Splint Armour',
    location: (
      <div>
        One of the items that can be forged in <WikiLink>The Adamantine Forge</WikiLink>. Forging this armor requires
        the <WikiLink>Splint Mould</WikiLink> and one <WikiLink>Mithral Ore</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Adamantine Scale Mail',
    location: (
      <div>
        Adamantine Scale Mail can be forged in <WikiLink>The Adamantine Forge</WikiLink>. Forging this armor requires
        the <WikiLink>Scale Mail Mould</WikiLink> and one <WikiLink>Mithral Ore</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Adamantine Shield',
    location: (
      <div>
        The Adamantine Shield can be forged in <WikiLink>The Adamantine Forge</WikiLink> with a{' '}
        <WikiLink>Shield Mould</WikiLink> and <WikiLink>Mithral Ore</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Adamantine Mace',
    location: (
      <div>
        The Adamantine Mace can be forged in <WikiLink>The Adamantine Forge</WikiLink> with a{' '}
        <WikiLink>Mace Mould</WikiLink> and <WikiLink>Mithral Ore</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Adamantine Scimitar',
    location: (
      <div>
        The Adamantine Scimitar can be forged in <WikiLink>The Adamantine Forge</WikiLink> with a{' '}
        <WikiLink>Scimitar Mould</WikiLink> and <WikiLink>Mithral Ore</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Adamantine Longsword',
    location: (
      <div>
        The Adamantine Longsword can be forged in <WikiLink>The Adamantine Forge</WikiLink> with a
        <WikiLink>Longsword Mould</WikiLink> and
        <WikiLink>Mithral Ore</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Grymskull Helm',
    location: (
      <div>
        Dropped by <WikiLink>Grym</WikiLink> in <WikiLink>The Adamantine Forge</WikiLink>.
      </div>
    ),
  },
  {
    name: "Winter's Clutches",
    location: (
      <ul>
        <li>
          Quest reward for the <WikiLink>Avenge Glut's Circle</WikiLink> quest. Given by <WikiLink>Glut</WikiLink> once
          sovereign <WikiLink>Spaw</WikiLink> has been killed.
        </li>
        <li>
          Sold by <WikiLink>Lady Esther</WikiLink> at <WikiLink>Rosymorn Monastery Trail</WikiLink>.
        </li>
        <li>
          Found on a counter behind a <WikiLink>Lava Elemental</WikiLink> and <WikiLink>Water Elemental</WikiLink> near
          the entrance to <WikiLink>Sorcerous Sundries</WikiLink>, alongside a <WikiLink>Coldbrim Hat</WikiLink>,{' '}
          <WikiLink>Gold Wyrmling Staff</WikiLink>, and various scrolls.
        </li>
      </ul>
    ),
  },
  {
    name: 'Gloves of Cinder and Sizzle',
    location: (
      <div>
        Sold by <WikiLink>Lady Esther</WikiLink> at <WikiLink>Rosymorn Monastery Trail</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Graceful Cloth',
    location: (
      <>
        <div>Found in some merchant shops:</div>
        <ul>
          <li>
            Sold by <WikiLink>Lady Esther</WikiLink> at the <WikiLink>Rosymorn Monastery Trail</WikiLink>, just after
            taking the Mountain Path.
          </li>
          <li>
            Sold by <WikiLink>Araj Oblodra</WikiLink> at <WikiLink>Moonrise Towers</WikiLink>.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'Cacophony',
    location: (
      <div>
        Sold by <WikiLink>Lady Esther</WikiLink> at the Rosymorn Monastery Trail, after taking the Mountain Path
      </div>
    ),
  },
  {
    name: 'Gloves of Baneful Striking',
    location: (
      <div>
        Sold by <WikiLink>Lady Esther</WikiLink> at <WikiLink>Rosymorn Monastery Trail</WikiLink>.
      </div>
    ),
  },
  {
    name: "Winter's Clutches",
    location: (
      <ul>
        <li>
          Quest reward for the <WikiLink>Avenge Glut's Circle</WikiLink> quest. Given by <WikiLink>Glut</WikiLink> once
          sovereign <WikiLink>Spaw</WikiLink> has been killed.
        </li>
        <li>
          Sold by <WikiLink>Lady Esther</WikiLink> at <WikiLink>Rosymorn Monastery Trail</WikiLink>.
        </li>
        <li>
          Found on a counter behind a <WikiLink>Lava Elemental</WikiLink> and <WikiLink>Water Elemental</WikiLink> near
          the entrance to <WikiLink>Sorcerous Sundries</WikiLink>, alongside a <WikiLink>Coldbrim Hat</WikiLink>,{' '}
          <WikiLink>Gold Wyrmling Staff</WikiLink>, and various scrolls.
        </li>
      </ul>
    ),
  },
  {
    name: 'Boots of Elemental Momentum',
    location: (
      <div>
        Sold by <WikiLink>Lady Esther</WikiLink> at <WikiLink>Rosymorn Monastery Trail</WikiLink>
      </div>
    ),
  },
  {
    name: 'Hoppy',
    location: (
      <div>
        Sold by <WikiLink>Lady Esther</WikiLink> at <WikiLink>Rosymorn Monastery Trail</WikiLink>
      </div>
    ),
  },
  {
    name: 'Ceremonial Battleaxe',
    location: (
      <div>
        Found in the one of the dormitories in the <WikiLink>Rosymorn Monastery</WikiLink> guarded by a{' '}
        <WikiLink>Guardian of Faith</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Ceremonial Warhammer',
    location: (
      <div>
        <WikiLink>Rosymorn Monastery</WikiLink> in the <WikiLink>Giant Eagle's</WikiLink> nest <span>X: 80 Y: 44</span>
      </div>
    ),
  },
  {
    name: 'Holy Lance Helm',
    location: (
      <div>
        Found in a painted chest in <WikiLink>Rosymorn Monastery</WikiLink> <span>X: 120 Y: 35</span>, accessible from
        the top level.
      </div>
    ),
  },
  {
    name: 'Ceremonial Mace',
    location: (
      <div>
        On a random kobold in the <WikiLink>Rosymorn Monastery</WikiLink> Firewine storage room.
      </div>
    ),
  },
  {
    name: "Dawnmaster's Crest",
    location: (
      <div>
        Appears once the <WikiLink>Ceremonial Sword</WikiLink>, <WikiLink>Ceremonial Mace</WikiLink>,{' '}
        <WikiLink>Ceremonial Warhammer</WikiLink> and <WikiLink>Ceremonial Battleaxe</WikiLink> all sit on their
        respective altars.
      </div>
    ),
  },
  {
    name: 'Witchbreaker',
    location: (
      <div>
        Sold by <WikiLink>A'jak'nir Jeera</WikiLink> at <WikiLink>Cr&#xe8;che Y'llek</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Unseen Menace',
    location: (
      <div>
        Sold by <WikiLink>A'jak'nir Jeera</WikiLink> at <WikiLink>Cr&#xe8;che Y'llek</WikiLink>
      </div>
    ),
  },
  {
    name: 'Gloves of Dexterity',
    location: (
      <div>
        Sold by <WikiLink>A'jak'nir Jeera</WikiLink> at <WikiLink>Cr&#xe8;che Y'llek</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Knife of the Undermountain King',
    location: (
      <div>
        Sold by <WikiLink>A'jak'nir Jeera</WikiLink> in <WikiLink>Cr&#xe8;che Y'llek</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Daredevil Gloves',
    location: (
      <div>
        Sold by <WikiLink>A'jak'nir Jeera</WikiLink> at <WikiLink>Cr&#xe8;che Y'llek</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Vital Conduit Boots',
    location: (
      <div>
        Sold by <WikiLink>A'jak'nir Jeera</WikiLink> in <WikiLink>Cr&#xe8;che Y'llek</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Defender Flail',
    location: (
      <div>
        Sold by <WikiLink>A'jak'nir Jeera</WikiLink> in <WikiLink>Cr&#xe8;che Y'llek</WikiLink>
      </div>
    ),
  },
  {
    name: "Larethian's Wrath",
    location: (
      <div>
        Sold by <WikiLink>A'jak'nir Jeera</WikiLink> at <WikiLink>Cr&#xe8;che Y'llek</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Amulet of Branding',
    location: (
      <div>
        Can be looted from <WikiLink>A'jak'nir Jeera</WikiLink> <span>X: 1383 Y: -812</span> in{' '}
        <WikiLink>Cr&#xe8;che Y'llek</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Crossbow of Arcane Force',
    location: (
      <div>
        Carried by Raider G'r'ath in <WikiLink>Cr&#xe8;che Y'llek</WikiLink>
      </div>
    ),
  },
  {
    name: 'Ring of Arcane Synergy',
    location: (
      <div>
        Can be looted from Gish Far'Aag in <WikiLink>Cr&#xe8;che Y'llek</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Ring of Elemental Infusion',
    location: (
      <div>
        Looted from Gish Umr'a'ac in <WikiLink>Infirmary</WikiLink>, <WikiLink>Cr&#xe8;che Y'llek</WikiLink>.
      </div>
    ),
  },
  {
    name: "Aberration Hunters' Amulet",
    location: (
      <div>
        Dropped by <WikiLink>Ghustil Stornugoss</WikiLink> in <WikiLink>Cr&#xe8;che Y'llek</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Soulbreaker Greatsword',
    location: (
      <div>
        Looted from <WikiLink>Kith'rak Therezzyn</WikiLink> in <WikiLink>Captain's Quarters</WikiLink>,{' '}
        <WikiLink>Cr&#xe8;che Y'llek</WikiLink> <span>X: 1408 Y: -763</span>.
      </div>
    ),
  },
  {
    name: "Varsh Ko'kuu's Boots",
    location: (
      <div>
        Acquired from <WikiLink>Varsh Ko'kuu</WikiLink> in the <WikiLink>Hatchery</WikiLink> of{' '}
        <WikiLink>Cr&#xe8;che Y'llek</WikiLink>. The player must either kill him, or persuade him to hand over the egg,
        by promising to take responsibility for it.
      </div>
    ),
  },
  {
    name: 'Gloves of Belligerent Skies',
    location: (
      <div>
        Inside an elegant chest in the <WikiLink>Inquisitor's Chamber</WikiLink> of{' '}
        <WikiLink>Cr&#xe8;che Y'llek</WikiLink>, along the southern wall of the room, on the eastern side.
      </div>
    ),
  },
  {
    name: 'Circlet of Psionic Revenge',
    location: (
      <div>
        Inside a chest in <WikiLink>Inquisitor's Chamber</WikiLink>, <WikiLink>Cr&#xe8;che Y'llek</WikiLink>
      </div>
    ),
  },
  {
    name: 'Diadem of Arcane Synergy',
    location: (
      <div>
        Looted from <WikiLink>Ardent Jhe'rezath</WikiLink> in <WikiLink>Inquisitor's Chamber</WikiLink>,{' '}
        <WikiLink>Cr&#xe8;che Y'llek</WikiLink>
      </div>
    ),
  },
  {
    name: 'The Skinburster',
    location: (
      <div>
        Can be found leaning against a display case in <WikiLink>Inquisitor's Chamber</WikiLink>,{' '}
        <WikiLink>Cr&#xe8;che Y'llek</WikiLink> <span>X: 1383 Y: -659</span>.
      </div>
    ),
  },
  {
    name: 'Necklace of Elemental Augmentation',
    location: (
      <ul>
        <li>
          Inside a display case in <WikiLink>Inquisitor's chamber</WikiLink> at <span>X: 1379 Y: -662</span>,{' '}
          <WikiLink>Cr&#xe8;che Y'llek</WikiLink>.
        </li>
        <li>
          Inside a Traveller's Chest on a shipwrecked ship Northwest of <WikiLink>South Span Checkpoint</WikiLink> at{' '}
          <span>X: -97 Y: 107</span> in <WikiLink>Wyrm's Crossing</WikiLink>.
        </li>
      </ul>
    ),
  },
  {
    name: 'Strange Conduit Ring',
    location: (
      <div>
        Inside a chest in <WikiLink>Inquisitor's Chamber</WikiLink>, <WikiLink>Cr&#xe8;che Y'llek</WikiLink>
      </div>
    ),
  },
  {
    name: 'Hoarfrost Boots',
    location: (
      <div>
        Inside a cabinet in <WikiLink>Inquisitor's Chamber</WikiLink>, <WikiLink>Cr&#xe8;che Y'llek</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Blood of Lathander',
    location: (
      <div>
        Found in <WikiLink>Cr&#xe8;che Y'llek</WikiLink>, unlocked by following the{' '}
        <WikiLink>Find the Blood of Lathander</WikiLink> quest.
      </div>
    ),
  },
  {
    name: 'Thermoarcanic Gloves',
    location: (
      <div>
        These gloves can be looted from <WikiLink>Kansif</WikiLink>. In the <WikiLink>Ruined Battlefield</WikiLink>{' '}
        <span>X: 4 Y: -28</span> while accompanying the Harpers from the <WikiLink>Last Light Inn</WikiLink> on an
        ambush.
      </div>
    ),
  },
  {
    name: 'Frost Prince',
    location: (
      <div>
        Looted from a Gilded Chest in the southeast portion of the <WikiLink>Ruined Battlefield</WikiLink>{' '}
        <span>X: 80 Y: -96</span>, near an ambush of <WikiLink>Shadow-Cursed Needle Blights</WikiLink> and{' '}
        <WikiLink>Shadow-Cursed Vine Blights</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Hat of Fire Acuity',
    location: (
      <div>
        Carried by the <WikiLink>Strange Ox</WikiLink> in <WikiLink>Dammon</WikiLink>'s blacksmith in the{' '}
        <WikiLink>Last Light Inn</WikiLink>.
        <div>
          Note: This item can only looted from the <WikiLink>Strange Ox</WikiLink> at the{' '}
          <WikiLink>Last Light Inn</WikiLink> or at <WikiLink>Rivington</WikiLink>. If it is defeated at the{' '}
          <WikiLink>Druid Grove</WikiLink> it will not have the item.
        </div>
      </div>
    ),
  },
  {
    name: "Shapeshifter's Boon Ring",
    location: (
      <ul>
        <li>
          Can be looted from the <WikiLink>Strange Ox</WikiLink> in the <WikiLink>Druid Grove</WikiLink>, or later at{' '}
          <WikiLink>Dammon</WikiLink>'s blacksmith in the <WikiLink>Last Light Inn</WikiLink>.
        </li>
        <li>
          Given as a reward for completing <WikiLink>Help the Devilish Ox</WikiLink>.
        </li>
      </ul>
    ),
  },
  {
    name: 'Ring of Shadows',
    location: (
      <div>
        Hide and Seek quest reward by <WikiLink>Oliver</WikiLink>, House with Flowers in{' '}
        <WikiLink>Shadow-Cursed Lands</WikiLink>. Can also be obtained by knocking him out or through pick-pocketing at
        the exact moment the encounter becomes a tactical turn based encounter and before he vanishes or if you can see
        invisible creatures. Pick-pocketing him does not seem to change how he interacts with the player.
      </div>
    ),
  },
  {
    name: 'Ring of Mental Inhibition',
    location: (
      <div>
        Can be found inside a locked chest in the <WikiLink>Ruined Battlefield</WikiLink> <span>X: 76 Y: 40</span>, of
        the <WikiLink>Shadow-Cursed Lands</WikiLink>, just east of the Shadowed Battlefield{' '}
        <WikiLink>Waypoint</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Hammergrim Mist Amulet',
    location: (
      <div>
        Located in a locked chest tucked away in ruined house in the <WikiLink>Shadow-Cursed Lands</WikiLink>, just east
        of the tollhouse. (X: -12 Y: -7)
      </div>
    ),
  },
  {
    name: 'Shadow-Cloaked Ring',
    location: (
      <div>
        Can be looted from the <WikiLink>Shadow Mastiff Alpha</WikiLink> in the <WikiLink>Ruined Battlefield</WikiLink>{' '}
        <span>X: -49 Y: 36</span>. The nearby everburning torches must be destroyed before the Mastiff will appear.
      </div>
    ),
  },
  {
    name: 'Luminous Gloves',
    location: (
      <div>
        The Luminous Gloves are found inside the Potter's Chest in the <WikiLink>Ruined Battlefield</WikiLink>{' '}
        accessible by jumping. <span>X: -52 Y: 11</span>.
      </div>
    ),
  },
  {
    name: 'Ring of Twilight',
    location: (
      <div>
        The Ring of Twilight is found inside a Traveller's Chest hidden behind some pots inside a ruined tower in the{' '}
        <WikiLink>Ruined Battlefield</WikiLink> <span>X: -34 Y: -12</span>.
      </div>
    ),
  },
  {
    name: 'Ironwood Club',
    location: (
      <div>
        Dropped by the Shadow-Cursed Shambling Mound <span>X: 40 Y: 60</span> in the{' '}
        <WikiLink>Ruined Battlefield</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Ring of Self Immolation',
    location: (
      <div>
        Can be looted from a locked Wooden Chest in the <WikiLink>Ruined Battlefield</WikiLink> <span>X: 29 Y: 63</span>
        . If needed, the key is nearby on a skeleton, alongside a note.
      </div>
    ),
  },
  {
    name: 'Family Ring',
    location: (
      <div>
        The ring can be found in a hole among rocks by following blood tracks, behind a camp in{' '}
        <WikiLink>Ruined Battlefield</WikiLink> X:108 Y:128
      </div>
    ),
  },
  {
    name: 'Penumbral Armour',
    location: (
      <div>
        Found in a locked chest in the abandoned house by the river just east of the <WikiLink>Last Light Inn</WikiLink>{' '}
        at X:33, Y:145
      </div>
    ),
  },
  {
    name: 'Incandescent Staff',
    location: (
      <div>
        Sold by <WikiLink>Quartermaster Talli</WikiLink> in <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Defender Greataxe',
    location: (
      <div>
        Sold by <WikiLink>Quartermaster Talli</WikiLink> in <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Shield of Devotion',
    location: (
      <div>
        Bought from <WikiLink>Quartermaster Talli</WikiLink> at the <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Hat of Uninhibited Kushigo',
    location: (
      <div>
        Sold by <WikiLink>Quartermaster Talli</WikiLink> in <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Obsidian Laced Robe',
    location: (
      <div>
        Sold by <WikiLink>Quartermaster Talli</WikiLink> in <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Mighty Cloth',
    location: (
      <div>
        Sold by <WikiLink>Quartermaster Talli</WikiLink> in <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Yuan-Ti Scale Mail',
    location: (
      <div>
        Sold by <WikiLink>Quartermaster Talli</WikiLink> in <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Shadeclinger Armour',
    location: (
      <div>
        Sold by <WikiLink>Quartermaster Talli</WikiLink> in <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Barkskin Armour',
    location: (
      <div>
        Sold by <WikiLink>Quartermaster Talli</WikiLink> in <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Cindersnap Gloves',
    location: (
      <div>
        Sold by <WikiLink>Quartermaster Talli</WikiLink> in <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Gloves of the Balanced Hands',
    location: (
      <div>
        Sold by <WikiLink>Quartermaster Talli</WikiLink> in <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Amulet of the Harpers',
    location: (
      <div>
        Sold by <WikiLink>Quartermaster Talli</WikiLink> in <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Cloak of Protection',
    location: (
      <div>
        Sold by <WikiLink>Quartermaster Talli</WikiLink> in <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Sword of Life Stealing',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> at the <WikiLink>Last Light Inn</WikiLink> in{' '}
        <WikiLink>Chapter Two</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Harmonium Halberd',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> at the <WikiLink>Last Light Inn</WikiLink> in{' '}
        <WikiLink>Chapter Two</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Thermodynamo Axe',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> at the <WikiLink>Last Light Inn</WikiLink> in{' '}
        <WikiLink>Chapter Two</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Thorn Blade',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> at the <WikiLink>Last Light Inn</WikiLink> in{' '}
        <WikiLink>Chapter Two</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Sword of Clutching Umbra',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> at the <WikiLink>Last Light Inn</WikiLink> in{' '}
        <WikiLink>Chapter Two</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Darkfire Shortbow',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> at the <WikiLink>Last Light Inn</WikiLink> in{' '}
        <WikiLink>Chapter Two</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Charge-Bound Warhammer',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> at the <WikiLink>Last Light Inn</WikiLink> in{' '}
        <WikiLink>Chapter Two</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Swordmaster Gloves',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> at the <WikiLink>Last Light Inn</WikiLink> in{' '}
        <WikiLink>Chapter Two</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Flawed Helldusk Helmet',
    location: (
      <div>
        This item is obtained by giving <WikiLink>Dammon</WikiLink> in the <WikiLink>Last Light Inn</WikiLink> a piece
        of <WikiLink>Infernal Iron</WikiLink>. He will craft this item.
      </div>
    ),
  },
  {
    name: 'Flawed Helldusk Armour',
    location: (
      <div>
        This item is obtained by giving <WikiLink>Dammon</WikiLink> in the <WikiLink>Last Light Inn</WikiLink> a piece
        of <WikiLink>Infernal Iron</WikiLink>. He will craft this item.
      </div>
    ),
  },
  {
    name: 'Flawed Helldusk Gloves',
    location: (
      <div>
        This item is obtained by giving <WikiLink>Dammon</WikiLink> in the <WikiLink>Last Light Inn</WikiLink> a piece
        of <WikiLink>Infernal Iron</WikiLink>. He will craft this item.
      </div>
    ),
  },
  {
    name: 'Snowburst Ring',
    location: (
      <div>
        Found tucked away inside a loose plank (<WikiLink>Perception</WikiLink> check required to spot), in the inn of
        the <WikiLink>Last Light Inn</WikiLink> <span>X: -80 Y: 158</span>.
      </div>
    ),
  },
  {
    name: 'Rippling Force Mail',
    location: (
      <div>
        Can be found in a locked Rustic Chest on the second floor of <WikiLink>Dammon</WikiLink>'s blacksmith in the{' '}
        <WikiLink>Last Light Inn</WikiLink> <span>X: -20 Y: 179</span>.
      </div>
    ),
  },
  {
    name: 'Covert Cowl',
    location: (
      <div>
        Carried by a Meenlock creature in the <WikiLink>Cellar</WikiLink> of <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Coruscation Ring',
    location: (
      <div>
        Found in a trapped Heavy Chest in the cellar <span>X: 47 Y: -738</span> of <WikiLink>Last Light Inn</WikiLink>.
        This chest is in a secret area. It is reached by going through a set of Double Oak Doors that are blocked by a
        destructible spiderweb and a pile of crates. The room beyond has a Cracked Wall, which, when broken, will grant
        access to the secret area containing the chest.
      </div>
    ),
  },
  {
    name: 'Shield of Scorching Reprisal',
    location: (
      <div>
        Looted from a Flaming Fist's corpse <span>X: -3 Y: 215</span> directly east of the 'Open Graves' beyond the
        northern bridge near the <WikiLink>Last Light Inn</WikiLink>. Successful <WikiLink>Perception</WikiLink> check
        needed to detect some rubble. <WikiLink>Strength</WikiLink> check is then needed to smash the rubble to find the
        body.
      </div>
    ),
  },
  {
    name: 'Sylvan Scimitar',
    location: (
      <div>
        This weapon is held by <WikiLink>Jaheira</WikiLink>. It can be obtained by killing and looting her, or
        recruiting her.
      </div>
    ),
  },
  {
    name: 'Shifting Corpus Ring',
    location: (
      <div>
        Dropped by <WikiLink>Flaming Fist Marcus</WikiLink> at the <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Cruel Sting',
    location: (
      <div>
        Looted from <WikiLink>Kar'niss</WikiLink> in <WikiLink>Shadow-Cursed Lands</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Gloomstrand Shield',
    location: (
      <div>
        Found in a locked chest south of the Tollhouse at <span>X: -60 Y: -114</span> in the{' '}
        <WikiLink>Ruined Battlefield</WikiLink>
      </div>
    ),
  },
  {
    name: 'Twist of Fortune',
    location: (
      <div>
        Twist of Fortune is obtained by defeating and looting <WikiLink>Gerringothe Thorm</WikiLink> in the{' '}
        <WikiLink>Reithwin Tollhouse</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Ironvine Shield',
    location: (
      <div>
        Looted from a chest in <WikiLink>Reithwin Tollhouse</WikiLink> <span>X: -127 Y: -95</span>.
      </div>
    ),
  },
  {
    name: "Gloves of Battlemage's Power",
    location: (
      <div>
        Found in an Opulent Chest in the <WikiLink>Reithwin Tollhouse</WikiLink> <span>X: -84 Y: -88</span> on the
        second floor in the room with two locked doors.
      </div>
    ),
  },
  {
    name: 'Fireheart',
    location: (
      <div>
        Located inside a Heavy Chest inside the <WikiLink>Reithwin Tollhouse</WikiLink> <span>X: -127 Y: -78</span>. The
        player must break a vine or jump from the outside through a window to enter in this hidden room.
      </div>
    ),
  },
  {
    name: 'Browbeaten Circlet',
    location: (
      <div>
        Looted from <WikiLink>Moonrise Towers Prison</WikiLink>
      </div>
    ),
  },
  {
    name: 'Spellcrux Amulet',
    location: (
      <div>
        Looted from <WikiLink>The Warden</WikiLink> in <WikiLink>Moonrise Towers Prison</WikiLink>{' '}
        <span>X: 569 Y: -650</span>.
      </div>
    ),
  },
  {
    name: "Wulbren's Hammer",
    location: (
      <div>
        On a table up the ladder in the <WikiLink>Moonrise Towers</WikiLink> Prison Warden's room (X:575, Y:-647).
      </div>
    ),
  },
  {
    name: 'Sharpened Snare Cuirass',
    location: (
      <div>
        Sold by <WikiLink>Roah Moonglow</WikiLink> in <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Gloves of Crushing',
    location: (
      <div>
        Sold by <WikiLink>Roah Moonglow</WikiLink> in <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Armour of Devotion',
    location: (
      <div>
        Sold by <WikiLink>Roah Moonglow</WikiLink> in <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Drakethroat Glaive',
    location: (
      <div>
        Sold by <WikiLink>Roah Moonglow</WikiLink> in <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: "Ne'er Misser",
    location: (
      <div>
        Sold by <WikiLink>Roah Moonglow</WikiLink> in <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Marksmanship Hat',
    location: (
      <div>
        Sold by <WikiLink>Roah Moonglow</WikiLink> in <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: "Poisoner's Ring",
    location: (
      <div>
        Sold by <WikiLink>Roah Moonglow</WikiLink> in <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Ring of Spiteful Thunder',
    location: (
      <div>
        Sold by <WikiLink>Roah Moonglow</WikiLink> in <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Render of Mind and Body',
    location: (
      <div>
        Sold by <WikiLink>Lann Tarv</WikiLink> in the <WikiLink>Main Floor</WikiLink> of{' '}
        <WikiLink>Moonrise Towers</WikiLink> if you convince Disciple Z'rell to give you additional aid in finding
        Ketheric's relic.
      </div>
    ),
  },
  {
    name: 'Gauntlets of Surging Accuracy',
    location: (
      <div>
        Sold by <WikiLink>Lann Tarv</WikiLink> in the <WikiLink>Main Floor</WikiLink> of{' '}
        <WikiLink>Moonrise Towers</WikiLink> if you convince Disciple Z'rell to give you additional aid in finding
        Ketheric's relic.
      </div>
    ),
  },
  {
    name: 'Dwarven Splintmail',
    location: (
      <div>
        Sold by <WikiLink>Lann Tarv</WikiLink> in the <WikiLink>Main Floor</WikiLink> of{' '}
        <WikiLink>Moonrise Towers</WikiLink> if you convince Disciple Z'rell to give you additional aid in finding
        Ketheric's relic.
      </div>
    ),
  },
  {
    name: "Bigboy's Chew Toy",
    location: (
      <div>
        Sold by <WikiLink>Lann Tarv</WikiLink> in the <WikiLink>Main Floor</WikiLink> of{' '}
        <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Halberd of Vigilance',
    location: (
      <div>
        <WikiLink>Lann Tarv</WikiLink> on the ground floor of <WikiLink>Moonrise Towers</WikiLink>{' '}
        <span>X: -164 Y: -167</span>
      </div>
    ),
  },
  {
    name: 'Gloves of The Duellist',
    location: (
      <div>
        Sold by <WikiLink>Lann Tarv</WikiLink> in the <WikiLink>Main Floor</WikiLink> of{' '}
        <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Sentinel Shield',
    location: (
      <div>
        Sold by <WikiLink>Lann Tarv</WikiLink> in the <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Enraging Heart Garb',
    location: (
      <div>
        Sold by <WikiLink>Lann Tarv</WikiLink> in the <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Fistbreaker Helm',
    location: (
      <div>
        Sold by <WikiLink>Lann Tarv</WikiLink> in the <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Slicing Shortsword',
    location: (
      <div>
        Sold by <WikiLink>Lann Tarv</WikiLink> in the <WikiLink>Main Floor</WikiLink> of{' '}
        <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Derivation Cloak',
    location: (
      <div>
        Can be looted from a Heavy Chest <span>X: -132 Y: -175</span> in <WikiLink>Balthazar</WikiLink>'s chambers on
        the <WikiLink>First Floor</WikiLink> of <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Cloak of Elemental Absorption',
    location: (
      <div>
        Can be looted from an Opulent Chest <span>X: -170 Y: -171</span> in <WikiLink>Ketheric Thorm</WikiLink>'s
        chambers on the <WikiLink>First Floor</WikiLink> of <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Coldbrim Hat',
    location: (
      <ul>
        <li>
          Found in a locked chest in a hidden room behind a bookcase in Balthazar's Chambers inside the{' '}
          <WikiLink>First Floor</WikiLink> of <WikiLink>Moonrise Towers</WikiLink>.
        </li>
        <li>
          Found on a table by the <WikiLink>Lava Elemental</WikiLink> in <WikiLink>Sorcerous Sundries</WikiLink>.
        </li>
      </ul>
    ),
  },
  {
    name: 'Ichorous Gloves',
    location: (
      <div>
        Found inside a metal chest in the storeroom at the back of <WikiLink>The Waning Moon</WikiLink>{' '}
        <span>X: -253 Y: -71</span>.
      </div>
    ),
  },
  {
    name: 'Rat Bat',
    location: (
      <div>
        The Rat Bat can be found leaning against a wall in <WikiLink>The Waning Moon</WikiLink>{' '}
        <span>X: -224 Y: -78</span>.
      </div>
    ),
  },
  {
    name: 'Punch-Drunk Bastard',
    location: (
      <div>
        Can be looted from a chest in the back storage room of <WikiLink>The Waning Moon</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Raven Gloves',
    location: (
      <div>
        Given by <WikiLink>He Who Was</WikiLink> for completing <WikiLink>Punish the Wicked</WikiLink>
      </div>
    ),
  },
  {
    name: 'Ritual Dagger of Shar',
    location: (
      <div>
        On an altar <span>X: 249 Y: -847</span> in the <WikiLink>Sharran Sanctuary</WikiLink> inside{' '}
        <WikiLink>Reithwin Town</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Helmet of Arcane Acuity',
    location: (
      <div>
        Can be found in a locked and trapped Gilded Chest in a secret area of the Reithwin{' '}
        <WikiLink>Mason's Guild Basement</WikiLink> <span>X: 107 Y: -758</span>. The basement is accessed through a
        trapdoor in the Mason's Guild, and the secret area can be opened by lockpicking or using the
        <WikiLink>Tower-Shaped Key</WikiLink> on the Keyholed Herald <span>X: 123 Y: -688</span>.
      </div>
    ),
  },
  {
    name: "True Love's Caress",
    location: (
      <div>
        This ring can be found on a skeleton leaning up against a large tree in the{' '}
        <WikiLink>Shadow-Cursed Lands</WikiLink> <span>X: -147 Y: 43</span>.
      </div>
    ),
  },
  {
    name: 'Boots of Apparent Death',
    location: (
      <div>
        Boots of Apparent Death are found inside a sarcophagus in the <WikiLink>Shadow-Cursed Lands</WikiLink>,{' '}
        <span>X: -165 Y: 45</span>.
      </div>
    ),
  },
  {
    name: 'Icebite Robe',
    location: (
      <div>
        Icebite Robe is found inside a sarcophagus in the <WikiLink>Shadow-Cursed Lands</WikiLink>,{' '}
        <span>X: -158 Y: 73</span>.
      </div>
    ),
  },
  {
    name: "Hr'a'cknir Bracers",
    location: (
      <div>
        Looted from <WikiLink>Ch'r'ai Tska'an</WikiLink> in <WikiLink>Reithwin Town</WikiLink> near the bridge leading
        to the To Baldur's Gate <WikiLink>waypoint</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Psionic Ward Armour',
    location: (
      <div>
        Looted from <WikiLink>Ch'r'ai Tska'an</WikiLink> in <WikiLink>Reithwin Town</WikiLink> near the bridge leading
        to the To Baldur's Gate <WikiLink>waypoint</WikiLink>.
      </div>
    ),
  },
  {
    name: "Watcher's Shield",
    location: (
      <div>
        Found on one of a pair of skeletons along the cliffs west of the <WikiLink>House of Healing</WikiLink>{' '}
        <span>X: -250 Y: 36</span>. The other skeleton has the
        <WikiLink>Assassin's Shortsword</WikiLink>.
      </div>
    ),
  },
  {
    name: "Assassin's Shortsword",
    location: (
      <div>
        Found on one of a pair of skeletons along the cliffs west of the <WikiLink>House of Healing</WikiLink> (X:-252,
        Y:36). The other skeleton has the
        <WikiLink>Watcher's Shield</WikiLink>.
      </div>
    ),
  },
  {
    name: "Shar's Temptation",
    location: (
      <div>
        This amulet is inside a crate with a note on top, inside the <WikiLink>House of Healing</WikiLink>{' '}
        <span>X: -193 Y: 9</span>.
      </div>
    ),
  },
  {
    name: "True Love's Embrace",
    location: (
      <div>
        Can be found on a skeleton laying on a mattress on the ground on the <WikiLink>House of Healing</WikiLink>{' '}
        <span>X: -212 Y: 0</span>.
      </div>
    ),
  },
  {
    name: "Poisoner's Gloves",
    location: (
      <div>
        Found inside a chest at the back end of the <WikiLink>House of Healing</WikiLink> <span>X: -199 Y: 78</span>.
      </div>
    ),
  },
  {
    name: "Surgeon's Subjugation Amulet",
    location: (
      <div>
        Worn by <WikiLink>Malus Thorm</WikiLink> at the <WikiLink>House of Healing</WikiLink>.
      </div>
    ),
  },
  {
    name: "Firzu's Ring of Trading",
    location: (
      <div>
        On a charred corpse <span>X: 82 Y: -1006</span> in the hidden room immediately south of the entrance hall of the{' '}
        <WikiLink>House of Healing Morgue</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Eversight Ring',
    location: (
      <div>
        Looted from Opulent Chest in the <WikiLink>House of Healing Morgue</WikiLink> at (X: 9, Y: -981).
      </div>
    ),
  },
  {
    name: 'Strange Tendril Amulet',
    location: (
      <div>
        Looted from a Wooden Chest <span>X: 85 Y: -1007</span> inside a hidden room near the main entrance of the{' '}
        <WikiLink>House of Healing Morgue</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Bided Time',
    location: (
      <div>
        Found in a chest in <WikiLink>House of Healing Morgue</WikiLink>
      </div>
    ),
  },
  {
    name: 'Lightning Jabber',
    location: (
      <div>
        Looted from the Kuo-Toa chief in the <WikiLink>Kuo-Toa</WikiLink> ambush North East of the{' '}
        <WikiLink>Grand Mausoleum</WikiLink> entrance.
      </div>
    ),
  },
  {
    name: 'Fleshmelter Cloak',
    location: (
      <div>
        Looted from a Gilded Chest in the <WikiLink>House of Healing Morgue</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Vivacious Cloak',
    location: (
      <div>
        Can be looted from a chest <span>X: -257 Y: -886</span> in the <WikiLink>Grand Mausoleum</WikiLink> in the{' '}
        <WikiLink>Shadow-Cursed Lands</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Least Expected',
    location: (
      <div>
        Looted from a Gilded Chest in the <WikiLink>Gauntlet of Shar</WikiLink> <span>X: -730 Y: -800</span>.
      </div>
    ),
  },
  {
    name: 'Dark Justiciar Gauntlets (Uncommon)',
    location: (
      <div>
        Found laying on a pile of boxes in the <WikiLink>Gauntlet of Shar</WikiLink> <span>X: -660 Y: -760</span>, near{' '}
        <WikiLink>Yurgir</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Hellfire Hand Crossbow',
    location: (
      <div>
        Can be looted from <WikiLink>Yurgir</WikiLink> in the <WikiLink>Gauntlet of Shar</WikiLink>{' '}
        <span>X: -653 Y: -764</span>.
      </div>
    ),
  },
  {
    name: 'Boots of Brilliance',
    location: (
      <div>
        Looted from a Heavy Chest in the room just north of <WikiLink>Yurgir</WikiLink> in the{' '}
        <WikiLink>Gauntlet of Shar</WikiLink> <span>X: -632 Y: -723</span>.
      </div>
    ),
  },
  {
    name: "Justiciar's Scimitar",
    location: (
      <div>
        Looted from <WikiLink>Lyrthindor</WikiLink> in the <WikiLink>Gauntlet of Shar</WikiLink>.{' '}
        <WikiLink>Lyrthindor</WikiLink> is involved in the quest <WikiLink>Break Yurgir's Contract</WikiLink>. He can be
        found at the foot of the large statue of Shar <span>X: -713 Y: -732</span>, though you must first speak with and
        follow the rats to this location in order to find him.
      </div>
    ),
  },
  {
    name: "Justiciar's Greatshield",
    location: (
      <div>
        Looted from <WikiLink>Lyrthindor</WikiLink> in the <WikiLink>Gauntlet of Shar</WikiLink>.{' '}
        <WikiLink>Lyrthindor</WikiLink> is involved in the quest <WikiLink>Break Yurgir's Contract</WikiLink>. He can be
        found at the foot of the large statue of Shar <span>X: -713 Y: -732</span>, though you must first speak with and
        follow the rats to this location in order to find him.
      </div>
    ),
  },
  {
    name: 'Circle of Bones',
    location: (
      <div>
        Can be looted from <WikiLink>Balthazar</WikiLink> in the <WikiLink>Gauntlet of Shar</WikiLink>{' '}
        <span>X: -845 Y: -793</span>.
      </div>
    ),
  },
  {
    name: 'Callous Glow Ring',
    location: (
      <div>
        Contained inside an Opulent Chest in the vault room near <WikiLink>Balthazar</WikiLink>, inside the{' '}
        <WikiLink>Gauntlet of Shar</WikiLink>, <span>X: -821 Y: -752</span>
      </div>
    ),
  },
  {
    name: "Killer's Sweetheart",
    location: (
      <div>
        Found lying on the ground at the top of the stone structure in the <WikiLink>Self-Same Trial</WikiLink> inside
        the <WikiLink>Gauntlet of Shar</WikiLink> <span>X: -833 Y: -729</span>.
      </div>
    ),
  },
  {
    name: 'Spear of Night',
    location: (
      <div>
        Found resting on a shine in the <WikiLink>Silent Library</WikiLink>, inside the{' '}
        <WikiLink>Gauntlet of Shar</WikiLink> <span>X: -820 Y: -756</span>.
      </div>
    ),
  },
  {
    name: 'Dark Justiciar Helmet',
    location: (
      <div>
        Found inside a Gilded Chest in the <WikiLink>Gauntlet of Shar</WikiLink> <span>X: -822 Y: -753</span>.
      </div>
    ),
  },
  {
    name: 'Dark Justiciar Half-Plate (Rare)',
    location: (
      <div>
        Found laying on the ground next to the altar where the <WikiLink>Spear of Night</WikiLink> rests, in the{' '}
        <WikiLink>Gauntlet of Shar</WikiLink> <span>X: -818 Y: -755</span>.
      </div>
    ),
  },
  {
    name: 'Dark Justiciar Half-Plate (Very Rare)',
    location: (
      <div>
        Rewarded for killing the <WikiLink>Nightsong</WikiLink> in <WikiLink>Shadowfell</WikiLink> during{' '}
        <WikiLink>Act Two</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Moonlight Glaive',
    location: (
      <div>
        This item is a quest reward for freeing the Nightsong from the Shadowfell during the quest{' '}
        <WikiLink>Find the Nightsong</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Dark Justiciar Boots',
    location: (
      <div>
        Rewarded for killing the <WikiLink>Nightsong</WikiLink> in <WikiLink>Nightsong's Prison</WikiLink> during{' '}
        <WikiLink>Act Two</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Dark Justiciar Gauntlets (Rare)',
    location: (
      <div>
        Reward for killing the <WikiLink>Nightsong</WikiLink> in <WikiLink>Nightsong's Prison</WikiLink> during{' '}
        <WikiLink>Act Two</WikiLink>.
      </div>
    ),
  },
  {
    name: "Shar's Spear of Evening",
    location: (
      <div>
        Reward for the quest <WikiLink>The Chosen of Shar</WikiLink>, for convincing <WikiLink>Shadowheart</WikiLink> to
        kill the <WikiLink>Nightsong</WikiLink> in the <WikiLink>Shadowfell</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Moon Devotion Robe',
    location: (
      <div>
        Looted from <WikiLink>Isobel</WikiLink> at the <WikiLink>Last Light Inn</WikiLink>.
      </div>
    ),
  },
  {
    name: "Jhannyl's Gloves",
    location: (
      <div>
        Can be looted from <WikiLink>Isobel</WikiLink> at the <WikiLink>Last Light Inn</WikiLink> or at the{' '}
        <WikiLink>Mind Flayer Colony</WikiLink> if she is kidnapped.
      </div>
    ),
  },
  {
    name: "Absolute's Protector",
    location: (
      <div>
        Dropped by <WikiLink>Z'rell</WikiLink> in <WikiLink>Moonrise Towers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Myrkulite Scourge',
    location: (
      <>
        <div>Can be looted from the following:</div>
        <ul>
          <li>
            <WikiLink>Radija</WikiLink> on the <WikiLink>First Floor</WikiLink> of <WikiLink>Moonrise Towers</WikiLink>.
          </li>
          <li>
            <WikiLink>Susdera</WikiLink> on the <WikiLink>Moonrise Towers Rooftop</WikiLink>.
          </li>
          <li>
            <WikiLink>Kressa Bonedaughter</WikiLink> in the <WikiLink>Mind Flayer Colony</WikiLink>{' '}
            <WikiLink>Barracks</WikiLink>.
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'Ring of Exalted Marrow',
    location: (
      <div>
        Can be looted from a Heavy Chest on the <WikiLink>Moonrise Towers Rooftop</WikiLink>{' '}
        <span>X: -153 Y: -170</span>.
      </div>
    ),
  },
  {
    name: 'Blade of Oppressed Souls',
    location: (
      <div>
        Looted from area unlocked by the Necrotic Laboratory puzzle in the <WikiLink>Mind Flayer Colony</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Circlet of Mental Anguish',
    location: (
      <div>
        Can be looted from a skeleton in the <WikiLink>Necrotic Labratory</WikiLink> of the{' '}
        <WikiLink>Mind Flayer Colony</WikiLink> <span>X: 748 Y: -141</span>.
      </div>
    ),
  },
  {
    name: 'Braindrain Gloves',
    location: (
      <div>
        Can be looted from a skeleton in the <WikiLink>Necrotic Labratory</WikiLink> of the{' '}
        <WikiLink>Mind Flayer Colony</WikiLink> next to the
        <WikiLink>Blade of Oppressed Souls</WikiLink>
        <span>X: 748 Y: -141</span>.
      </div>
    ),
  },
  {
    name: "Ketheric's Warhammer",
    location: (
      <div>
        Looted from <WikiLink>Ketheric Thorm</WikiLink> during <WikiLink>Chapter Two</WikiLink>.
      </div>
    ),
  },
  {
    name: "Reaper's Embrace",
    location: (
      <div>
        Can be looted from <WikiLink>Ketheric Thorm</WikiLink>.
      </div>
    ),
  },
  {
    name: "Ketheric's Shield",
    location: (
      <div>
        Can be looted from <WikiLink>Ketheric Thorm</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Boots of Uninhibited Kushigo',
    location: (
      <div>
        Dropped by <WikiLink>Prelate Lir'i'c</WikiLink>, as you enter <WikiLink>Act Three</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Nymph Cloak',
    location: (
      <ul>
        <li>
          Looted from the High Security Vault no 1 in <WikiLink>The Counting House</WikiLink> in the{' '}
          <WikiLink>Lower City</WikiLink> of <WikiLink>Baldur's Gate</WikiLink>.
        </li>
        <li>
          Sold by <WikiLink>Ferg Drogher</WikiLink> in <WikiLink>Rivington</WikiLink>. Special wares.
        </li>
      </ul>
    ),
  },
  {
    name: 'Robe of Supreme Defences',
    location: (
      <div>
        Purchased from <WikiLink>Ferg Drogher</WikiLink> near <WikiLink>Requisitioned Barn</WikiLink> in{' '}
        <WikiLink>Rivington</WikiLink> during <WikiLink>Act Three</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Sethan',
    location: (
      <div>
        <WikiLink>Ferg Drogher</WikiLink> (special wares) in <WikiLink>Rivington</WikiLink> <span>X: 44 Y: 100</span>
      </div>
    ),
  },
  {
    name: 'Dwarven Thrower',
    location: (
      <div>
        Sold by <WikiLink>Ferg Drogher</WikiLink> in <WikiLink>Rivington</WikiLink>
      </div>
    ),
  },
  {
    name: 'Cold Snap',
    location: (
      <div>
        Can be purchased from <WikiLink>Ferg Drogher</WikiLink> in <WikiLink>Rivington</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Hellrider Longbow',
    location: (
      <div>
        Sold by <WikiLink>Ferg Drogher</WikiLink> in <WikiLink>Rivington</WikiLink>
      </div>
    ),
  },
  {
    name: 'Djinni Ring',
    location: (
      <div>
        Can be looted, pickpocketed, or obtained through trading from <WikiLink>Akabi</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Band of the Mystic Scoundrel',
    location: (
      <div>
        Looted from a backpack <span>X: -1566 Y: -1522</span> in the <WikiLink>Jungle</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Nyrulna',
    location: (
      <div>
        Win the jackpot from <WikiLink>Akabi</WikiLink>, found in the <WikiLink>Circus of the Last Days</WikiLink> in{' '}
        <WikiLink>Rivington</WikiLink>, by first pickpocketing (or trading through the Trade option) his{' '}
        <WikiLink>Djinni Ring</WikiLink>. Nyrdivna is found in a DC 20 locked Painted Chest in the{' '}
        <WikiLink>Jungle</WikiLink> <span>X: -1511 Y: -1522</span> he teleports you to, right next to the exit portal.
        It is also possible to win the jackpot by passing a DC15 <WikiLink>Performance</WikiLink> check after noticing
        that <WikiLink>Akabi</WikiLink> is cheating.
      </div>
    ),
  },
  {
    name: 'Clown Hammer',
    location: (
      <div>
        Looted from <WikiLink>Dribbles</WikiLink> in <WikiLink>Rivington</WikiLink> during{' '}
        <WikiLink>Chapter Three</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Pointy Hat',
    location: (
      <div>
        In a chest behind <WikiLink>Lucretious</WikiLink> in the <WikiLink>Circus of the Last Days</WikiLink>
      </div>
    ),
  },
  {
    name: 'Dark Displacement Gloves',
    location: (
      <div>
        Can be bought, pickpocketed, or looted from <WikiLink>Popper</WikiLink> in the{' '}
        <WikiLink>Circus of the Last Days</WikiLink> in <WikiLink>Rivington</WikiLink>.
      </div>
    ),
  },
  {
    name: "Hollow's Staff",
    location: (
      <div>
        Can be looted from <WikiLink>Lucretious</WikiLink> at the Circus of The Last Days in{' '}
        <WikiLink>Rivington</WikiLink>
      </div>
    ),
  },
  {
    name: 'Seraphic Pugilist Gloves',
    location: (
      <div>
        Can be found in the northern most locked chest at the foot of the beds at the west end of the{' '}
        <WikiLink>Open Hand Temple</WikiLink>. Location: [X:-90, Y:-7]
      </div>
    ),
  },
  {
    name: 'Stillmaker',
    location: (
      <div>
        Found in a hole <span>X: 67 Y: -1018</span> in the area underneath the <WikiLink>Open Hand Temple</WikiLink>. A
        successful DC5 Perception check is needed to spot it. The hole is just at the top of the cragged rock and can be
        easy to miss. There is blood right next to the hole.
      </div>
    ),
  },
  {
    name: "Devotee's Mace",
    location: (
      <div>
        Rewarded from the <WikiLink>Arm Thy Servant</WikiLink> variant of <WikiLink>Divine Intervention</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Ring of Truthfulness',
    location: (
      <div>
        Dropped by <WikiLink>Mind Flayer</WikiLink> hiding in the <WikiLink>Windmill Basement</WikiLink> of the
        Abandoned Windmill <span>X: 44 Y: -38</span> in <WikiLink>Rivington</WikiLink>.
      </div>
    ),
  },
  {
    name: "Swires' Sledboard",
    location: (
      <div>
        Sold by <WikiLink>Exxvikyap</WikiLink> in <WikiLink>Rivington General</WikiLink> in{' '}
        <WikiLink>Rivington</WikiLink> during <WikiLink>Act Three</WikiLink>
      </div>
    ),
  },
  {
    name: 'Bonespike Garb',
    location: (
      <div>
        Purchased from <WikiLink>Exxvikyap</WikiLink> at <WikiLink>Rivington General</WikiLink> in{' '}
        <WikiLink>Rivington</WikiLink> during <WikiLink>Act Three</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Dancing Breeze',
    location: (
      <div>
        Vendor <WikiLink>Exxvikyap</WikiLink> in <WikiLink>Rivington General</WikiLink> in{' '}
        <WikiLink>Rivington</WikiLink>
      </div>
    ),
  },
  {
    name: 'Stalker Gloves',
    location: (
      <div>
        Purchased from <WikiLink>Exxvikyap</WikiLink> in <WikiLink>Rivington General</WikiLink>
      </div>
    ),
  },
  {
    name: 'Elven Chain',
    location: (
      <div>
        Sold by <WikiLink>Exxvikyap</WikiLink> at the <WikiLink>Rivington General</WikiLink> during{' '}
        <WikiLink>Act Three</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Ambusher',
    location: (
      <div>
        Sold by <WikiLink>Exxvikyap</WikiLink> in <WikiLink>The Rivington General</WikiLink> in{' '}
        <WikiLink>Rivington</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Amulet of the Drunkard',
    location: (
      <div>
        Sold by <WikiLink>Hoots Hooligan</WikiLink> in <WikiLink>Sharess' Caress</WikiLink>, found in{' '}
        <WikiLink>Wyrm's Crossing</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Gauntlets of the Warmaster',
    location: (
      <div>
        Sold by the trader <WikiLink>Entharl Danthelon</WikiLink> in <WikiLink>Danthelon's Dancing Axe</WikiLink> in{' '}
        <WikiLink>Wyrm's Crossing</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Horns of the Berserker',
    location: (
      <div>
        Sold by <WikiLink>Entharl Danthelon</WikiLink> in <WikiLink>Wyrm's Crossing</WikiLink> in{' '}
        <WikiLink>Act Three</WikiLink>
      </div>
    ),
  },
  {
    name: 'Blightbringer',
    location: (
      <div>
        Sold by <WikiLink>Entharl Danthelon</WikiLink> at <WikiLink>Danthelon's Dancing Axe</WikiLink> in{' '}
        <WikiLink>Wyrm's Crossing</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Snow-Dusted Monastery Gloves',
    location: (
      <div>
        Sold by the trader <WikiLink>Entharl Danthelon</WikiLink> in <WikiLink>Danthelon's Dancing Axe</WikiLink> in{' '}
        <WikiLink>Wyrm's Crossing</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Cloak of Displacement',
    location: (
      <div>
        Sold by the trader <WikiLink>Entharl Danthelon</WikiLink> in <WikiLink>Danthelon's Dancing Axe</WikiLink> in{' '}
        <WikiLink>Wyrm's Crossing</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Garb of the Land and Sky',
    location: (
      <div>
        Sold by the trader <WikiLink>Entharl Danthelon</WikiLink> in <WikiLink>Danthelon's Dancing Axe</WikiLink> in{' '}
        <WikiLink>Wyrm's Crossing</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Harmonic Dueller',
    location: (
      <div>
        Sold by <WikiLink>Entharl Danthelon</WikiLink> at <WikiLink>Danthelon's Dancing Axe</WikiLink> in{' '}
        <WikiLink>Wyrm's Crossing</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Corpsegrinder',
    location: (
      <div>
        Looted from <WikiLink>Cairos</WikiLink> at the docks west of <WikiLink>Rivington</WikiLink>{' '}
        <span>X: -210 Y: 99</span>.
      </div>
    ),
  },
  {
    name: 'Gleamdance Dagger',
    location: (
      <div>
        Looted from <WikiLink>Farlin</WikiLink> at the docks <span>X: -210 Y: 99</span> west of{' '}
        <WikiLink>Rivington</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Bonespike Boots',
    location: (
      <div>
        Looted from a trapped Wooden Chest <span>X: -1340 Y: -857</span> in a secluded <WikiLink>Passageway</WikiLink>{' '}
        <span>X: -233 Y: 84</span> at the far end of the western trail leading away from the{' '}
        <WikiLink>South Span Checkpoint</WikiLink> in <WikiLink>Rivington</WikiLink>.
      </div>
    ),
  },
  {
    name: "Voss' Silver Sword",
    location: (
      <div>
        Carried by <WikiLink>Kith'rak Voss</WikiLink>, can be confronted late into Act 1 or during Act 2. Can be
        purchased from Voss when engaging in conversation with him in Act 3.
      </div>
    ),
  },
  {
    name: 'Flame Enamelled Armour',
    location: (
      <div>
        Can be found in a chest at <WikiLink>Wyrm's Rock Fortress</WikiLink> at <span>X: -28 Y: 184</span>
      </div>
    ),
  },
  {
    name: "Balduran's Giantslayer",
    location: (
      <div>
        Looted from <WikiLink>Ansur</WikiLink> in the <WikiLink>The Dragon's Sanctum</WikiLink>,{' '}
        <WikiLink>Wyrmway</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Helm of Balduran',
    location: (
      <div>
        Found on an altar <span>X: 636 Y: -964</span> next to <WikiLink>Ansur</WikiLink> in the{' '}
        <WikiLink>The Dragon's Sanctum</WikiLink> during <WikiLink>Act Three</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Reviving Hands',
    location: (
      <div>
        Bought from <WikiLink>Vicar Humbletoes</WikiLink> in <WikiLink>Stormshore Tabernacle</WikiLink>,{' '}
        <WikiLink>Lower City</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Mantle of the Holy Warrior',
    location: (
      <div>
        Sold by <WikiLink>Vicar Humbletoes</WikiLink> in <WikiLink>Stormshore Tabernacle</WikiLink>
      </div>
    ),
  },
  {
    name: 'The Sacred Star',
    location: (
      <div>
        Sold by <WikiLink>Vicar Humbletoes</WikiLink> in <WikiLink>Stormshore Tabernacle</WikiLink>
      </div>
    ),
  },
  {
    name: 'Amulet of the Devout',
    location: (
      <div>
        Looted from the main Offering Chest in the basement of <WikiLink>Stormshore Tabernacle</WikiLink>. Enter the
        Ornate Wooden Hatch at <span>X: 105 Y: -26</span>.
      </div>
    ),
  },
  {
    name: 'Shield of Shielding',
    location: (
      <div>
        Looted from the Offerings to Helm Chest in the basement of <WikiLink>Stormshore Tabernacle</WikiLink> in{' '}
        <WikiLink>Lower City</WikiLink>. The basement can be reached by entering the secret hatch in the corner of the
        tabernacle.
      </div>
    ),
  },
  {
    name: 'Hammer of the Just',
    location: (
      <div>
        Looted from the Offerings to Tyr Chest in the basement of <WikiLink>Stormshore Tabernacle</WikiLink> in{' '}
        <WikiLink>Lower City</WikiLink>. The basement can be reached by entering the secret hatch in the corner of the
        tabernacle.
      </div>
    ),
  },
  {
    name: 'Keepsake Ring',
    location: (
      <div>
        Can be found on the floor of the <WikiLink>Elfsong Tavern Basement</WikiLink> <span>X: -859 Y: 531</span>.
      </div>
    ),
  },
  {
    name: 'Boots of Psionic Movement',
    location: (
      <div>
        Looted from <WikiLink>Ch'r'ai Har'rak</WikiLink> (Githyanki Paladin of Vlaakith) in{' '}
        <WikiLink>Knights of the Shield Hideout</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Sword of the Emperor',
    location: (
      <div>
        Found during the quest <WikiLink>Visit the Emperor's Old Hideout</WikiLink> under the{' '}
        <WikiLink>Elfsong Tavern</WikiLink> during <WikiLink>Act 3</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Cerebral Citadel Armour',
    location: (
      <div>
        Located inside the <WikiLink>Hidden Room</WikiLink> in the <WikiLink>Elfsong Tavern Basement</WikiLink>{' '}
        <span>X: 728 Y: 588</span>, during the quest <WikiLink>Visit the Emperor's Old Hideout</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Cerebral Citadel Gloves',
    location: (
      <div>
        Located inside the <WikiLink>Hidden Room</WikiLink> in the <WikiLink>Elfsong Tavern Basement</WikiLink>{' '}
        <span>X: 728 Y: 588</span>, during the quest <WikiLink>Visit the Emperor's Old Hideout</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Drunken Cloth',
    location: (
      <div>
        Purchased from <WikiLink>Severn</WikiLink> in the <WikiLink>Guildhall Bar</WikiLink> of the{' '}
        <WikiLink>Guildhall</WikiLink>, found in the <WikiLink>Lower City Sewers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Shade-Slayer Cloak',
    location: (
      <div>
        Sold by <WikiLink>Sticky Dondo</WikiLink> <span>X: -17 Y: 755</span> in the <WikiLink>Guildhall</WikiLink>,
        found in the <WikiLink>Lower City Sewers</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Silver Sword of the Astral Plane',
    location: (
      <ul>
        <li>
          Rewarded for showing the <WikiLink>Orphic Hammer</WikiLink> to (or killing) <WikiLink>Kith'rak Voss</WikiLink>{' '}
          in <WikiLink>Act Three</WikiLink>.
        </li>
        <li>
          This sword can alternatively be obtained in <WikiLink>Act One</WikiLink> by disarming Voss via{' '}
          <WikiLink>Command (Drop)</WikiLink>, <WikiLink>Disarming Attack (Ranged)</WikiLink>, or{' '}
          <WikiLink>Disarming Attack (Melee)</WikiLink> during the githyanki patrol encounter before entering the{' '}
          <WikiLink>Mountain Pass</WikiLink> <span>X: -139 Y: 561</span>. Voss must be disarmed before beginning combat,
          as he immediately flies away when any hostile action is taken. Due to his high stats and{' '}
          <WikiLink>Supreme Githyanki Parry</WikiLink>, the chance of failing the disarm attempt against him is very
          high, so this method may require multiple reloads. He might sometimes only drop a{' '}
          <WikiLink>Githyanki Crossbow</WikiLink> on disarm. The trigger to that is currently not known.
        </li>
      </ul>
    ),
  },
  {
    name: 'Bonespike Helmet',
    location: (
      <div>
        Sold by <WikiLink>Voiceless Penitent Bareki</WikiLink> <span>X: -157 Y: 939</span> in the{' '}
        <WikiLink>Undercity Ruins</WikiLink> of the <WikiLink>Lower City</WikiLink> sewers. Bareki is next to the
        Undercity Ruins <WikiLink>Ancient Rune Circle</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Armour of Moonbasking',
    location: (
      <div>
        Sold by <WikiLink>Voiceless Penitent Bareki</WikiLink> <span>X: -157 Y: 939</span> in the{' '}
        <WikiLink>Undercity Ruins</WikiLink> of the <WikiLink>Lower City</WikiLink> sewers. Bareki is next to the
        Undercity Ruins <WikiLink>Ancient Rune Circle</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Cindermoth Cloak',
    location: (
      <div>
        Can be looted from <WikiLink>Aelis Siryasius</WikiLink> in the <WikiLink>Lower City Sewers</WikiLink>{' '}
        <span>X: -123 Y: 834</span>.
      </div>
    ),
  },
  {
    name: 'Magic Amulet',
    location: (
      <div>
        Given by <WikiLink>Sarin</WikiLink> in the <WikiLink>Lower City Sewers</WikiLink> after you return their skull
      </div>
    ),
  },
  {
    name: 'Breaching Pikestaff',
    location: (
      <div>
        Found in the <WikiLink>Ancient Lair</WikiLink> within the <WikiLink>Lower City Sewers</WikiLink> (X -1393, Y 56)
        during <WikiLink>Chapter Three</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Torch of Revocation',
    location: (
      <div>
        Dropped by <WikiLink>Mystic Carrion</WikiLink>, given as a potential reward for{' '}
        <WikiLink>Find Mystic Carrion's Servant</WikiLink>, or sold by him through dialogue for 3000 gold. Can also be
        stolen from the locked chest behind him.
      </div>
    ),
  },
  {
    name: 'Veil of the Morning',
    location: (
      <div>
        Can be bought or looted from <WikiLink>Mystic Carrion</WikiLink> in <WikiLink>Philgrave's Mansion</WikiLink>{' '}
        inside the <WikiLink>Lower City</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Armour of the Sporekeeper',
    location: (
      <div>
        Can be bought or looted from <WikiLink>Mystic Carrion</WikiLink> in <WikiLink>Philgrave's Mansion</WikiLink>{' '}
        inside the <WikiLink>Lower City</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Hood of the Weave',
    location: (
      <div>
        Sold by <WikiLink>Mystic Carrion</WikiLink> in <WikiLink>Philgrave's Mansion</WikiLink> during{' '}
        <WikiLink>Act Three</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Staff of Cherished Necromancy',
    location: (
      <div>
        Can be looted from <WikiLink>Mystic Carrion</WikiLink> in <WikiLink>Philgrave's Mansion</WikiLink> inside the{' '}
        <WikiLink>Lower City</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Dead Shot',
    location: (
      <div>
        Sold by <WikiLink>Fytz the Firecracker</WikiLink> at the <WikiLink>Stormshore Armoury</WikiLink> in{' '}
        <WikiLink>Lower City</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Flail of Ages',
    location: (
      <div>
        Sold by <WikiLink>Fytz the Firecracker</WikiLink> at <WikiLink>Stormshore Armoury</WikiLink>
      </div>
    ),
  },
  {
    name: 'Armour of Agility',
    location: (
      <div>
        Sold by <WikiLink>Gloomy Fentonson</WikiLink> at <WikiLink>Stormshore Armoury</WikiLink> during{' '}
        <WikiLink>Act Three</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Quickspell Gloves',
    location: (
      <ul>
        <li>
          If <WikiLink>Rolan</WikiLink> is dead: Sold by <WikiLink>Lorroakan's Projection</WikiLink> in{' '}
          <WikiLink>Sorcerous Sundries</WikiLink>
        </li>
        <li>
          If <WikiLink>Rolan</WikiLink> and <WikiLink>Lorroakan</WikiLink> are both alive: Sold by{' '}
          <WikiLink>Rolan</WikiLink> in <WikiLink>Sorcerous Sundries</WikiLink>
        </li>
        <li>
          If <WikiLink>Rolan</WikiLink> is alive but <WikiLink>Lorroakan</WikiLink> is dead: Can be pickpocketed from{' '}
          <WikiLink>Rolan</WikiLink> in <WikiLink>Ramazith's Tower</WikiLink>
        </li>
      </ul>
    ),
  },
  {
    name: 'Ring of Regeneration',
    location: (
      <ul>
        <li>
          If <WikiLink>Rolan</WikiLink> is dead: Sold by <WikiLink>Lorroakan's Projection</WikiLink> in{' '}
          <WikiLink>Sorcerous Sundries</WikiLink>
        </li>
        <li>
          If <WikiLink>Rolan</WikiLink> and <WikiLink>Lorroakan</WikiLink> are both alive: Sold by{' '}
          <WikiLink>Rolan</WikiLink> in <WikiLink>Sorcerous Sundries</WikiLink>
        </li>
        <li>
          If <WikiLink>Rolan</WikiLink> is alive but <WikiLink>Lorroakan</WikiLink> is dead: Can be pickpocketed from{' '}
          <WikiLink>Rolan</WikiLink> in <WikiLink>Ramazith's Tower</WikiLink>
        </li>
      </ul>
    ),
  },
  {
    name: 'Vest of Soul Rejuvenation',
    location: (
      <ul>
        <li>
          If <WikiLink>Rolan</WikiLink> is dead: Sold by <WikiLink>Lorroakan's Projection</WikiLink> in{' '}
          <WikiLink>Sorcerous Sundries</WikiLink>
        </li>
        <li>
          If <WikiLink>Rolan</WikiLink> and <WikiLink>Lorroakan</WikiLink> are both alive: Sold by{' '}
          <WikiLink>Rolan</WikiLink> in <WikiLink>Sorcerous Sundries</WikiLink>
        </li>
        <li>
          If <WikiLink>Rolan</WikiLink> is alive but <WikiLink>Lorroakan</WikiLink> is dead: Can be pickpocketed from{' '}
          <WikiLink>Rolan</WikiLink> in <WikiLink>Ramazith's Tower</WikiLink>
        </li>
      </ul>
    ),
  },
  {
    name: 'Armour of Landfall',
    location: (
      <ul>
        <li>
          If <WikiLink>Rolan</WikiLink> is dead: Sold by <WikiLink>Lorroakan's Projection</WikiLink> in{' '}
          <WikiLink>Sorcerous Sundries</WikiLink>
        </li>
        <li>
          If <WikiLink>Rolan</WikiLink> and <WikiLink>Lorroakan</WikiLink> are both alive: Sold by{' '}
          <WikiLink>Rolan</WikiLink> in <WikiLink>Sorcerous Sundries</WikiLink>
        </li>
        <li>
          If <WikiLink>Rolan</WikiLink> is alive but <WikiLink>Lorroakan</WikiLink> is dead: Can be pickpocketed from{' '}
          <WikiLink>Rolan</WikiLink> in <WikiLink>Ramazith's Tower</WikiLink>
        </li>
      </ul>
    ),
  },
  {
    name: 'Birthright',
    location: (
      <ul>
        <li>
          If <WikiLink>Rolan</WikiLink> is dead: Sold by <WikiLink>Lorroakan's Projection</WikiLink> in{' '}
          <WikiLink>Sorcerous Sundries</WikiLink>
        </li>
        <li>
          If <WikiLink>Rolan</WikiLink> and <WikiLink>Lorroakan</WikiLink> are both alive: Sold by{' '}
          <WikiLink>Rolan</WikiLink> in <WikiLink>Sorcerous Sundries</WikiLink>
        </li>
        <li>
          If <WikiLink>Rolan</WikiLink> is alive but <WikiLink>Lorroakan</WikiLink> is dead: Can be pickpocketed from{' '}
          <WikiLink>Rolan</WikiLink> in <WikiLink>Ramazith's Tower</WikiLink>
        </li>
      </ul>
    ),
  },
  {
    name: 'Harper Sacredstriker',
    location: (
      <ul>
        <li>
          If <WikiLink>Rolan</WikiLink> is dead: Sold by <WikiLink>Lorroakan's Projection</WikiLink> in{' '}
          <WikiLink>Sorcerous Sundries</WikiLink>
        </li>
        <li>
          If <WikiLink>Rolan</WikiLink> and <WikiLink>Lorroakan</WikiLink> are both alive: Sold by{' '}
          <WikiLink>Rolan</WikiLink> in <WikiLink>Sorcerous Sundries</WikiLink>
        </li>
        <li>
          If <WikiLink>Rolan</WikiLink> is alive but <WikiLink>Lorroakan</WikiLink> is dead: Can be pickpocketed from{' '}
          <WikiLink>Rolan</WikiLink> in <WikiLink>Ramazith's Tower</WikiLink>
        </li>
      </ul>
    ),
  },
  {
    name: 'Foebreaker',
    location: (
      <div>
        Can be found in a hidden chest in the Karsus section of <WikiLink>Sorcerous Vadivt</WikiLink>,{' '}
        <WikiLink>Sorcerous Sundries</WikiLink>. Once in the vault, upon finding the named doors, go through Silverhand
        -&gt; Abjuration -&gt; Silver to find a lever to unlock the Karsus vault door. Then go through Demon to return
        to the starting room and proceed through the opened Karsus door. The chest is invisible and will require{' '}
        <WikiLink>See Invisibility</WikiLink> or <WikiLink>Faerie Fire</WikiLink> to reveal it.
      </div>
    ),
  },
  {
    name: 'Pyroquickness Hat',
    location: (
      <div>
        Can be found in the <WikiLink>Sorcerous Vault</WikiLink> inside <WikiLink>Sorcerous Sundries</WikiLink>, in the
        vault of Elminster. It is inside an invisible chest. <WikiLink>See Invisibility</WikiLink> or{' '}
        <WikiLink>Faerie Fire</WikiLink> can be used to see the chest.
      </div>
    ),
  },
  {
    name: 'Hellfire Greataxe',
    location: (
      <div>
        Can be found in a chest in the Illusion section of <WikiLink>Sorcerous Vault</WikiLink>,{' '}
        <WikiLink>Sorcerous Sundries</WikiLink>. Once in the vault, upon finding the named doors, go through the
        'Silverhand' door and in the next area destroy the door labeled 'Illusion' (trying to enter the door normally
        will not work). Through the door is the room with the chest <span>X: 366 Y: 941</span>.
      </div>
    ),
  },
  {
    name: 'Markoheshkir',
    location: (
      <div>
        Located inside an <WikiLink>Globe of Invulnerability</WikiLink> in <WikiLink>Ramazith's Tower</WikiLink> during{' '}
        <WikiLink>Act Three</WikiLink>. (Use <WikiLink>See Invisibility</WikiLink> to see the lever and disable the
        globe)
      </div>
    ),
  },
  {
    name: 'Robe of the Weave',
    location: (
      <div>
        Located inside an <WikiLink>Globe of Invulnerability</WikiLink> in <WikiLink>Ramazith's Tower</WikiLink> during{' '}
        <WikiLink>Act Three</WikiLink>. (Use <WikiLink>See Invisibility</WikiLink> to see the lever and disable the
        globe)
      </div>
    ),
  },
  {
    name: 'Despair of Athkatla',
    location: (
      <div>
        Looted from <WikiLink>Lorroakan</WikiLink> in <WikiLink>Ramazith's Tower</WikiLink> during{' '}
        <WikiLink>Act Three</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Shelter of Athkatla',
    location: (
      <div>
        Looted from <WikiLink>Lorroakan</WikiLink> in <WikiLink>Ramazith's Tower</WikiLink> during{' '}
        <WikiLink>Act Three</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Tarnished Charm',
    location: (
      <>
        <div>
          Looted from <WikiLink>Auntie Ethel</WikiLink>, who can be found in multiple locations:
        </div>
        <ul>
          <li>
            In the <WikiLink>Druid Grove</WikiLink> (X:194, Y:547)
          </li>
          <li>
            At the border of the <WikiLink>Sunlit Wetlands</WikiLink>, speaking with <WikiLink>Johl</WikiLink> and{' '}
            <WikiLink>Demir</WikiLink> (X:48, Y:305)
          </li>
          <li>
            Inside her hut (the <WikiLink>Riverside Teahouse</WikiLink>) in the <WikiLink>Sunlit Wetlands</WikiLink>{' '}
            (X:-58, Y:263)
          </li>
          <li>
            In the depths of her lair, the <WikiLink>Ancient Abode</WikiLink>
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'Ring of Feywild Sparks',
    location: (
      <div>
        Looted from <WikiLink>Auntie Ethel</WikiLink> in the basement of <WikiLink>The Blushing Mermaid</WikiLink>,{' '}
        <WikiLink>Lower City</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Amulet of Windrider',
    location: (
      <div>
        Reward of the quest <WikiLink>Save Vanra</WikiLink>.
      </div>
    ),
  },
  {
    name: "Duellist's Prerogative",
    location: (
      <div>
        Reward for completing the quest <WikiLink>Save Vanra</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Fey Semblance Amulet',
    location: (
      <div>
        Rewarded for completing <WikiLink>Avenge the Hag Survivors</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Spellmight Gloves',
    location: (
      <div>
        Rewarded by <WikiLink>Lucretious</WikiLink> at the end of the <WikiLink>Find Dribbles the Clown</WikiLink>{' '}
        questline. Alternatively, can be pickpocketed or looted from Lucretious.
      </div>
    ),
  },
  {
    name: 'Spell Savant Amulet',
    location: (
      <div>
        Looted from High Security Vault no 1 in <WikiLink>The Counting House</WikiLink>.
      </div>
    ),
  },
  {
    name: "Jannath's Hat",
    location: (
      <div>
        Looted from High Security Vault no 2 in <WikiLink>The Counting House</WikiLink>
      </div>
    ),
  },
  {
    name: 'The Long Arm of the Gur',
    location: (
      <div>
        Looted from High Security Vault no 3 in <WikiLink>The Counting House</WikiLink>
      </div>
    ),
  },
  {
    name: 'Trident of the Waves',
    location: (
      <div>
        Looted from High Security Vault no 4 in <WikiLink>The Counting House</WikiLink>
      </div>
    ),
  },
  {
    name: "Ravengard's Scourger",
    location: (
      <div>
        Looted from High Security Vault no 5 in <WikiLink>The Counting House</WikiLink>
      </div>
    ),
  },
  {
    name: 'Knock Knuckle Gloves',
    location: (
      <div>
        Looted from High Security Vault no 7 in <WikiLink>The Counting House</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Elegant Studded Leather',
    location: (
      <div>
        Looted from High Security Vault no 9 (inside the big vault at the back of the room) in{' '}
        <WikiLink>The Counting House</WikiLink> of the <WikiLink>Lower City</WikiLink>. A key for this vault can be
        obtained by completing <WikiLink>Return Rakath's Gold</WikiLink>.
      </div>
    ),
  },
  {
    name: "Wavemother's Sickle",
    location: (
      <div>
        Looted from <WikiLink>Allandra Grey</WikiLink>
      </div>
    ),
  },
  {
    name: "Wavemother's Robe",
    location: (
      <div>
        Finish the quest given to you by the Wavemother in the Water Queen's House during <WikiLink>Act Three</WikiLink>
        .
      </div>
    ),
  },
  {
    name: 'Hellfire Engine Crossbow',
    location: (
      <div>
        Crafted by combining three components found on the main floor of the <WikiLink>Steel Watch Foundry</WikiLink> at
        the table <span>X: -325 Y: -134</span> in the Security Office.
        <ul>
          <li>
            Watcher Crossbow Blueprint found on a table <span>X: -330 Y: -157</span> in the Security Office.
          </li>
          <li>
            Targeting Module found on a table <span>X: -307 Y: -157</span> on the main floor next to the plaque labeled
            'Watcher Targeting Module'.
          </li>
          <li>
            Steel Watcher Arm found on a table <span>X: -280 Y: -165</span> on the main floor next to the plaque labeled
            'Steel Watcher Arm Unit'.
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Gontr Mael',
    location: (
      <div>
        Looted from the <WikiLink>Steel Watcher Titan</WikiLink> in <WikiLink>Steel Watch Foundry</WikiLink>
      </div>
    ),
  },
  {
    name: "Abdel's Trusted Shield",
    location: (
      <div>
        Rewarded from <WikiLink>Golbraith</WikiLink> in the upper level of his home <span>X: -148 Y: -60</span> in the{' '}
        <WikiLink>Lower City</WikiLink>, after convincing him of your courage against Mind Flayers.
      </div>
    ),
  },
  {
    name: 'Dolor Amarus',
    location: (
      <ul>
        <li>
          Dropped by <WikiLink>Dolor</WikiLink> in <WikiLink>Lower City</WikiLink>.
        </li>
        <li>
          Also sold by <WikiLink>Echo of Abazigal</WikiLink> in the <WikiLink>Murder Tribunal</WikiLink> after the
          player character accepts Bhaal and becomes an Unholy Assassin.
        </li>
      </ul>
    ),
  },
  {
    name: 'Spaceshunt Boots',
    location: (
      <div>
        Can be looted from <WikiLink>Dolor</WikiLink> the assassin, found at the <WikiLink>Wine Festival</WikiLink>{' '}
        <span>X: 18 Y: -36</span> in the <WikiLink>Lower City</WikiLink> of <WikiLink>Baldur's Gate</WikiLink>.
      </div>
    ),
  },
  {
    name: "Blackguard's Greaves",
    location: (
      <div>
        Looted from the undead guardian, <WikiLink>That Which Lurks</WikiLink>, in the{' '}
        <WikiLink>Murder Tribunal</WikiLink>.
      </div>
    ),
  },
  {
    name: "Blackguard's Gauntlets",
    location: (
      <div>
        Looted from the undead guardian, <WikiLink>That Which Watches</WikiLink>, in the{' '}
        <WikiLink>Murder Tribunal</WikiLink>.
      </div>
    ),
  },
  {
    name: "Blackguard's Sword",
    location: (
      <div>
        Looted from the undead guardian, <WikiLink>That Which Guards</WikiLink>, in the{' '}
        <WikiLink>Murder Tribunal</WikiLink>.
      </div>
    ),
  },
  {
    name: "Blackguard's Plate",
    location: (
      <div>
        Looted from the undead guardian, <WikiLink>That Which Guards</WikiLink>, in the{' '}
        <WikiLink>Murder Tribunal</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Shield of the Undevout',
    location: (
      <div>
        Looted from the undead guardian, <WikiLink>That Which Guards</WikiLink>, in the{' '}
        <WikiLink>Murder Tribunal</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Sword of Chaos',
    location: (
      <div>
        Looted from <WikiLink>Sarevok</WikiLink> in the <WikiLink>Murder Tribunal</WikiLink>.
      </div>
    ),
  },
  {
    name: "Sarevok's Horned Helmet",
    location: (
      <div>
        Looted from <WikiLink>Sarevok</WikiLink> during <WikiLink>Act Three</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Amulet of Bhaal',
    location: (
      <div>
        Looted from <WikiLink>Sarevok</WikiLink> during <WikiLink>Chapter Three</WikiLink> or given by him upon becoming
        an <WikiLink>Unholy Assassin</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Fabricated Arbalest',
    location: (
      <div>
        Can be looted from <WikiLink>Enver Gortash</WikiLink>, who can be found in{' '}
        <WikiLink>Wyrm's Rock Fortress</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Cloth of Authority',
    location: (
      <div>
        Can be looted from <WikiLink>Enver Gortash</WikiLink> in <WikiLink>Wyrm's Rock</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Tyrannical Jackboots',
    location: (
      <div>
        Can be looted from <WikiLink>Enver Gortash</WikiLink> in <WikiLink>Wyrm's Rock</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Netherstone-Studded Gauntlet',
    location: (
      <div>
        This item is only available to <WikiLink>Enver Gortash</WikiLink>. When looted from him it breaks into{' '}
        <WikiLink>Gauntlet of the Tyrant</WikiLink> and
        <WikiLink>Gortash's Netherstone</WikiLink>
      </div>
    ),
  },
  {
    name: 'Servitor of the Black Hand Gloves',
    location: (
      <div>
        Found in an Opdivent Chest <span>X: -32 Y: 198</span> on the top floor of{' '}
        <WikiLink>Wyrm's Rock Fortress</WikiLink> in <WikiLink>Wyrm's Crossing</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Helldusk Boots',
    location: (
      <div>
        Found in a locked Gilded Chest <span>X: -32 Y: 219</span> on the top floor of{' '}
        <WikiLink>Wyrm's Rock Fortress</WikiLink> in <WikiLink>Wyrm's Crossing</WikiLink>. Taking this item after{' '}
        <WikiLink>Gortash</WikiLink>'s coronation makes Gortash and all Steel Watchers on this floor permanently
        hostile. Taking this item before the coronation does not turn anyone hostile
      </div>
    ),
  },
  {
    name: 'Staff of the Ram',
    location: (
      <div>
        Found in an Opulent Chest ( X: -1572 Y: 976 ) in <WikiLink>Jaheira's Hideout Basement</WikiLink> under{' '}
        <WikiLink>Elerrathin's Home</WikiLink> in the <WikiLink>Lower City</WikiLink>. The chest is in a room behind a
        DC18 locked bookcase ( X: -1562 Y: 980 ).
      </div>
    ),
  },
  {
    name: 'Belm',
    location: (
      <div>
        Found in an Opulent Chest <span>X: -1572 Y: 976</span> in <WikiLink>Jaheira's Basement</WikiLink> under{' '}
        <WikiLink>Elerrathin's Home</WikiLink> in the <WikiLink>Lower City</WikiLink>. The chest is in a room behind a
        DC18 locked bookcase <span>X: -1562 Y: 980</span>.
      </div>
    ),
  },
  {
    name: "Khalid's Gift",
    location: (
      <div>
        In a display case in <WikiLink>Jaheira's Basement</WikiLink>.
      </div>
    ),
  },
  {
    name: "Viconia's Walking Fortress",
    location: (
      <div>
        Looted from <WikiLink>Viconia DeVir</WikiLink> during the quest <WikiLink>Daughter of Darkness</WikiLink> in{' '}
        <WikiLink>Act Three</WikiLink>.
      </div>
    ),
  },
  {
    name: "Viconia's Priestess Robe",
    location: (
      <div>
        Worn by <WikiLink>Viconia DeVir</WikiLink>, Mother Superior of the <WikiLink>Shar</WikiLink> Enclave under the{' '}
        <WikiLink>House of Grief</WikiLink> in the <WikiLink>Lower City</WikiLink>.
      </div>
    ),
  },
  {
    name: "Handmaiden's Mace",
    location: (
      <div>
        Dropped by <WikiLink>Viconia DeVir</WikiLink> <span>X: -400 Y: -1651</span> in the{' '}
        <WikiLink>Cloister of Sombre Embrace</WikiLink> beneath the <WikiLink>House of Grief</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Boots of Persistence',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> at the <WikiLink>Forge of the Nine</WikiLink> in the{' '}
        <WikiLink>Lower City</WikiLink> of <WikiLink>Baldur's Gate</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Armour of Persistence',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> at the <WikiLink>Forge of the Nine</WikiLink>, in the{' '}
        <WikiLink>Lower City</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Legacy of the Masters',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> at the <WikiLink>Forge of the Nine</WikiLink>, in the{' '}
        <WikiLink>Lower City</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Unwanted Masterwork Scalemail',
    location: (
      <div>
        Sold by <WikiLink>Dammon</WikiLink> at the <WikiLink>Forge of the Nine</WikiLink>, in the{' '}
        <WikiLink>Lower City</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Helmet of Grit',
    location: (
      <div>
        Looted from chest in cursed room of <WikiLink>Szarr Palace</WikiLink> <span>X: -1298 Y: 965</span>.
      </div>
    ),
  },
  {
    name: 'Pelorsun Blade',
    location: (
      <div>
        Found in <WikiLink>Cazador's Dungeon</WikiLink>. From the waypoint, take the second open door on the right.
        There is a door on the floor below. Teleport or jump down and enter the door. The item is found in this room
        inside a DC15 trapped Rosewood Casket <span>X: -1928 Y: 852</span>.
      </div>
    ),
  },
  {
    name: 'Rhapsody',
    location: (
      <div>
        Reward for defeating <WikiLink>Cazador Szarr</WikiLink> during <WikiLink>The Pale Elf</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Woe',
    location: (
      <div>
        Reward for defeating <WikiLink>Cazador Szarr</WikiLink> during <WikiLink>The Pale Elf</WikiLink>.
      </div>
    ),
  },
  {
    name: 'The Undead Bane',
    location: (
      <div>
        Carried by <WikiLink>Ulma</WikiLink> in the <WikiLink>Gur Camp</WikiLink>, <WikiLink>Rivington</WikiLink>{' '}
        <span>X: 100 Y: -17</span>.
      </div>
    ),
  },
  {
    name: 'Gemini Gloves',
    location: (
      <div>
        Bought from <WikiLink>Helsik</WikiLink> in <WikiLink>Devil's Fee</WikiLink>, <WikiLink>Lower City</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Cloak of the Weave',
    location: (
      <div>
        Sold by <WikiLink>Helsik</WikiLink> at the <WikiLink>Devil's Fee</WikiLink> once her special stock is unlocked.
      </div>
    ),
  },
  {
    name: 'Shapeshifter Hat',
    location: (
      <div>
        Sold by <WikiLink>Helsik</WikiLink> at the <WikiLink>Devil's Fee</WikiLink> once her special stock is unlocked.
      </div>
    ),
  },
  {
    name: 'Spellseeking Gloves',
    location: (
      <div>
        Sold by <WikiLink>Helsik</WikiLink> at the <WikiLink>Devil's Fee</WikiLink> in <WikiLink>Act Three</WikiLink>
      </div>
    ),
  },
  {
    name: 'Gibus of the Worshipful Servant',
    location: (
      <div>
        Sold by <WikiLink>Helsik</WikiLink> at the <WikiLink>Devil's Fee</WikiLink> once her special stock is unlocked.
      </div>
    ),
  },
  {
    name: 'Hellbeard Halberd',
    location: (
      <div>
        <WikiLink>Helsik</WikiLink> at the <WikiLink>Devil's Fee</WikiLink>, once her special stock is unlocked
      </div>
    ),
  },
  {
    name: 'Caitiff Staff',
    location: (
      <div>
        Purchased from <WikiLink>Helsik</WikiLink> in the <WikiLink>Devil's Fee</WikiLink>
      </div>
    ),
  },
  {
    name: 'Mask of Soul Perception',
    location: (
      <div>
        Found in a DC20 locked Gilded Chest <span>X: -33 Y: 20</span> in Helsik's Room upstairs at the{' '}
        <WikiLink>Devil's Fee</WikiLink> in the <WikiLink>Lower City</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Unwanted Masterwork Gauntlets',
    location: (
      <div>
        Looted from a chest in the basement of the <WikiLink>Forge of the Nine</WikiLink> <span>X: 393 Y: 763</span>
      </div>
    ),
  },
  {
    name: 'Unwanted Masterwork Greaves',
    location: (
      <div>
        Looted from a chest in the basement of the <WikiLink>Forge of the Nine</WikiLink> <span>X: 393 Y: 763</span>
      </div>
    ),
  },
  {
    name: 'Burnished Ring',
    location: (
      <div>
        Dropped by a <WikiLink>Spectator</WikiLink> in <WikiLink>Hope's Prison</WikiLink> in the{' '}
        <WikiLink>House of Hope</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Helldusk Helmet',
    location: (
      <div>
        Found in the <WikiLink>House of Hope</WikiLink> in a vault across from the entrance to the Boudoir. The player
        will need to pass a DC10 Wisdom check to activate the Inert Infernal Gem and then a DC20 Arcana check to use the
        Infernal Control Gem to open the door. The helmet will be located in the treasure pile{' '}
        <span>X: -6482 Y: 2939</span>.
      </div>
    ),
  },
  {
    name: 'Staff of Spellpower',
    location: (
      <div>
        Found in the <WikiLink>House of Hope</WikiLink> in a vault across from the entrance to the Boudoir. The player
        will need to pass a DC10 Wisdom check to activate the Inert Infernal Gem and then a DC20 Arcana check to use the
        Infernal Control Gem to open the door. The staff will be located on a stone pedestal to the right{' '}
        <span>X: -6486 Y: 2939</span>.
      </div>
    ),
  },
  {
    name: 'Helldusk Gloves',
    location: (
      <div>
        Dropped by <WikiLink>Haarlep</WikiLink> in the <WikiLink>House of Hope</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Orphic Hammer',
    location: (
      <div>
        Can be obtained by making a deal with <WikiLink>Raphael</WikiLink> as part of the quest{' '}
        <WikiLink>Deal with the Devil</WikiLink>. If a deal was not made with <WikiLink>Raphael</WikiLink>, the hammer
        can instead be stolen from the Archive within the <WikiLink>House of Hope</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Amulet of Greater Health',
    location: (
      <div>
        Stolen from a trapped pedestal <span>X: -6548 Y: -2901</span> in the Archive of the{' '}
        <WikiLink>House of Hope</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Gauntlets of Hill Giant Strength',
    location: (
      <div>
        Stolen from a pedestal <span>X: -6549 Y: 2940</span> in the Archive of the <WikiLink>House of Hope</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Gloves of Soul Catching',
    location: (
      <div>
        Reward for <WikiLink>Save Hope</WikiLink>
      </div>
    ),
  },
  {
    name: 'Helldusk Armour',
    location: (
      <div>
        Looted from <WikiLink>Raphael</WikiLink> in <WikiLink>Chapter Three</WikiLink> in the{' '}
        <WikiLink>House of Hope</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Bloodthirst',
    location: (
      <div>
        Reward for defeating <WikiLink>Orin</WikiLink> during <WikiLink>Get Orin's Netherstone</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Crimson Mischief',
    location: (
      <div>
        Dropped by <WikiLink>Orin</WikiLink> during <WikiLink>Get Orin's Netherstone</WikiLink> in{' '}
        <WikiLink>Act Three</WikiLink>.
      </div>
    ),
  },
  {
    name: 'Orphic Ring',
    location: (
      <div>
        Carried by <WikiLink>Orpheus</WikiLink>.
      </div>
    ),
  },
];
