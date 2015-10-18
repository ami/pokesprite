/**
 * Copyright (C) 2014-2015, Michiel Sikma <michiel@sikma.org>
 * MIT License
 *
 * src/utils/run-args.js - list of all argparse arguments the program supports.
 * ES5 code, since this runs before Babel is loaded.
 */

module.exports = {
  argPathIcons: {
    'nargs': 1,
    'defaultValue': 'resources/icons/',
    'required': false,
    'help': (
      'Path to the icon set base directory. Defaults to icons.'
    )
  },
  argPathData: {
    'nargs': 1,
    'defaultValue': 'resources/pokedex.json',
    'required': false,
    'help': (
      'Path to the Pokémon data file. Defaults to resources/pokedex.json.'
    )
  },
  argPathPngcrush: {
    'nargs': 1,
    'defaultValue': 'pngcrush',
    'required': false,
    'help': (
      'Path to pngcrush.'
    )
  },
  argTplJS: {
    'nargs': 1,
    'defaultValue': 'resources/pokesprite-tpl.js',
    'required': false,
    'help': (
      'Path to the JS template file. Defaults to resources/pokesprite-tpl.js.'
    )
  },
  argTplSCSS: {
    'nargs': 1,
    'defaultValue': 'resources/pokesprite-tpl.scss',
    'required': false,
    'help': (
      'Path to the SCSS template file. Defaults to resources/pokesprite-tpl.scss.'
    )
  },
  argOutputImg: {
    'nargs': 1,
    'defaultValue': 'build/pokesprite.png',
    'required': false,
    'help': (
      'Output path for the sprite image file. Defaults to build/pokesprite.png.'
    )
  },
  argOutputSCSS: {
    'nargs': 1,
    'defaultValue': 'build/pokesprite.scss',
    'required': false,
    'help': (
      'Output path for the SCSS file. Defaults to build/pokesprite.scss.'
    )
  },
  argOutputJS: {
    'nargs': 1,
    'defaultValue': 'build/pokesprite.js',
    'required': false,
    'help': (
      'Output path for the JS file. Defaults to build/pokesprite.js.'
    )
  },
  argOutputHTML: {
    'nargs': 1,
    'defaultValue': 'build/overview.html',
    'required': false,
    'help': (
      'Output path for the HTML overview file. Defaults to build/overview.html.'
    )
  },
  argOutputMD: {
    'nargs': 1,
    'defaultValue': 'build/overview.md',
    'required': false,
    'help': (
      'Output path for the Markdown overview file. Defaults to build/overview.md.'
    )
  },
  argFileExts: {
    'nargs': 1,
    'defaultValue': 'png',
    'required': false,
    'help': (
      'Comma-separated list of image file extensions to include. Defaults to just png.'
    )
  },
  argIconSets: {
    'nargs': 1,
    'defaultValue': '',
    'required': false,
    'help': (
      'Comma-separated list of icon sets to include in the image. If not passed or empty string, all known sets will be used.'
    )
  },
  argGenerateImg: {
    'nargs': 0,
    'action': 'storeTrue',
    'defaultValue': true,
    'required': false,
    'help': (
      'Generate an output image file.'
    )
  },
  argGenerateSCSS: {
    'nargs': 0,
    'action': 'storeTrue',
    'defaultValue': true,
    'required': false,
    'help': (
      'Generate an SCSS file.'
    )
  },
  argGenerateJS: {
    'nargs': 0,
    'action': 'storeTrue',
    'defaultValue': true,
    'required': false,
    'help': (
      'Generate a JS file.'
    )
  },
  argGenerateHTML: {
    'nargs': 0,
    'action': 'storeTrue',
    'defaultValue': true,
    'required': false,
    'help': (
      'Generate an HTML file with an overview of the icons.'
    )
  },
  argGenerateMD: {
    'nargs': 0,
    'action': 'storeTrue',
    'defaultValue': false,
    'required': false,
    'help': (
      'Generate a Markdown file.'
    )
  },
  argLang: {
    'type': 'string',
    'choices': ['eng', 'jpn', 'jpn_ro'],
    'defaultValue': 'eng',
    'required': false,
    'help': (
      'Set the language of Pokémon names to use for the output.'
    )
  },
  argPadding: {
    'type': 'int',
    'defaultValue': 1,
    'required': false,
    'help': (
      'Sets the padding around images in pixels (1 by default). This is to ensure correct rendering even when the icons are scaled.'
    )
  },
  argExcludePkmn: {
    'nargs': 0,
    'action': 'storeTrue',
    'defaultValue': false,
    'required': false,
    'help': (
      'Exclude Pokémon icons.'
    )
  },
  argExcludeRegular: {
    'nargs': 0,
    'action': 'storeTrue',
    'defaultValue': false,
    'required': false,
    'help': (
      'Exclude regular (non-shiny) icons.'
    )
  },
  argExcludeShiny: {
    'nargs': 0,
    'action': 'storeTrue',
    'defaultValue': false,
    'required': false,
    'help': (
      'Exclude shiny icons.'
    )
  },
  argExcludeForms: {
    'nargs': 0,
    'action': 'storeTrue',
    'defaultValue': false,
    'required': false,
    'help': (
      'Exclude alternate forms.'
    )
  },
  argExcludeIconSets: {
    'nargs': 0,
    'action': 'storeTrue',
    'defaultValue': false,
    'required': false,
    'help': (
      'Exclude icon sets (other than the Pokémon icons).'
    )
  },
  argIncludeRight: {
    'type': 'int',
    'choices': [0, 1, 2],
    'defaultValue': 1,
    'required': false,
    'help': (
      'Whether to include right-facing icons. If the argument is 0, none will be included. If no argument is given or the argument is 1, only Pokémon that have a unique right-facing icon are included (default). If the argument is 2, all Pokémon get a right-facing icon (and those that don\'t have one, have their regular icon flipped).'
    )
  },
  argSkipPngcrush: {
    'nargs': 0,
    'action': 'storeTrue',
    'defaultValue': false,
    'required': false,
    'help': (
      'Skip the pngcrush step.'
    )
  },
  argVerbose: {
    'nargs': 0,
    'action': 'storeTrue',
    'defaultValue': false,
    'required': false,
    'help': (
      'Display debugging information for every image added to the spritesheet.'
    )
  }
};
