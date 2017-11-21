# PokéSprite – Image Sprite Generator

This simple script generates a *complete image sprite* of all Pokémon in the National Pokédex, along with the icons for every single in-game item. It also generates *SCSS and JS files* which can then be used to efficiently display the icons from the sprite on a website.

<p align="center">
  <img src="https://raw.github.com/msikma/pokesprite/master/resources/wiki/pokesprite-banner.png" alt="PokéSprite icon example" />
</p>

This is a fork of [msikma/pokesprite](https://github.com/msikma/pokesprite) with a few key differences:

- This is optimized just for the Pokémon sprites (not items) since that's only what [pokedextracker.com](https://github.com/pokedextracker/pokedextracker.com) needs
- The sprites are vertically centered so that when they are used, the alignment and padding for all sprites are visually consistent
- The sprites don't rely on any form of JS to run, and instead uses 100% CSS
- The CSS generation is written in ruby which I'm a bit more familiar with

## Usage

Displaying the sprites is a matter of adding an empty `<span>` or `<div>` element with the appropriate `class` attribute set. The base class is `pkicon`. Following the base class, you can add a number of classes that specify which icon is to be displayed.

Here are some examples:

```html
<span class="pkicon pkicon-025"></span>
<span class="pkicon pkicon-001 color-shiny"></span>
<span class="pkicon pkicon-386 form-defense"></span>
<span class="pkicon pkicon-500 color-shiny dir-right"></span>
<span class="pkicon pkicon-003 form-mega-y"></span>
<span class="pkicon pkicon-201 form-d"></span>
<span class="pkicon pkicon-521 gender-female"></span>
```

To clarify, the following classes can be used:

* <code>pkicon-<strong>number</strong></code> – Pokémon's National Dex number
* <code>color-shiny</code> – shiny icon
* <code>dir-right</code> – direction the icon faces if there is a special sprite for that direction
* <code>gender-female</code> – gender of the icon if there is a special sprite for that gender
* <code>form-<strong>name</strong></code> – form of the Pokémon (e.g. `defense` for Deoxys, `a` or `exclamation` for Unown, `orange` for Flabébé, etc.)

The only item icon that is supported is the Love Ball since that's the only item icon that is used on [pokedextracker.com](https://github.com/pokedextracker/pokedextracker.com)

## Compiling

To generate the spritesheet that is compressed, run the following command (assuming you have `pngcrush` installed):

```sh
./pokesprite.php --path-pngcrush=/usr/local/bin/pngcrush
```

This will generate a full sprite sheet with regular icons, shiny icons, right-facing icons (where a unique icon exists), and all other icon sets at `output/pokesprite.png`.

Then to generate the SCSS, run this command:

```sh
ruby pokesprite.rb > output/pokesprite.scss
```

## License

The source icons are (C) Nintendo/Creatures Inc./GAME FREAK Inc.

Everything else, and usage of the programming code, is governed by the [MIT license](http://opensource.org/licenses/MIT).
