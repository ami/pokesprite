/**
 * Copyright (C) 2014-2015, Michiel Sikma <michiel@sikma.org>
 * MIT License
 *
 * src/utils/run-parser.js - argparse wrapper for the script. The passed
 * command-line arguments are validated and processed here.
 * ES5 code, since this runs before Babel is loaded.
 */

var ArgumentParser = require('argparse').ArgumentParser;
var ArrFormatter = require('./arr-formatter');
var path = require('path');

// Data from our package, where we keep app-specific configuration.
var packageData = require('../../package.json');
var appVersion = packageData.name + ' (' + packageData.version + ')';
var appArgs = require('./run-args');

// Set up the arguments parser to accept command-line arguments.
var rootParser = new ArgumentParser({
  'version': appVersion,
  'addHelp': true,
  'customFormatter': ArrFormatter,
  'description': ['(C) 2014-2015 Michiel Sikma <michiel@sikma.org> and contributors', '(C) 1995-2015 Nintendo/Creatures Inc./GAME FREAK Inc.', 'Generates a complete image sprite of all Pokémon in the National Pokédex (along with several other types of icons), and the SCSS file to make them usable. This sprite can then be used to efficiently display these icons inside a web page. Pokémon icons are arranged sequentially, and a growing packer algorithm is used to arrange other images inside the sprite.', 'For more information, see <https://github.com/msikma/pokesprite>.'],
  'epilog': 'See <http://github.com/msikma/pokesprite> for more information.'
});
rootParser.addArgument(['--path-icons'], appArgs.argPathIcons);
rootParser.addArgument(['--path-data'], appArgs.argPathData);
rootParser.addArgument(['--path-pngcrush'], appArgs.argPathPngcrush);
rootParser.addArgument(['--tpl-js'], appArgs.argTplJS);
rootParser.addArgument(['--tpl-scss'], appArgs.argTplSCSS);
rootParser.addArgument(['--output-img'], appArgs.argOutputImg);
rootParser.addArgument(['--output-scss'], appArgs.argOutputSCSS);
rootParser.addArgument(['--output-js'], appArgs.argOutputJS);
rootParser.addArgument(['--output-html'], appArgs.argOutputHTML);
rootParser.addArgument(['--output-md'], appArgs.argOutputMD);
rootParser.addArgument(['--file-exts'], appArgs.argFileExts);
rootParser.addArgument(['--icon-sets'], appArgs.argIconSets);
rootParser.addArgument(['--generate-img'], appArgs.argGenerateImg);
rootParser.addArgument(['--generate-scss'], appArgs.argGenerateSCSS);
rootParser.addArgument(['--generate-js'], appArgs.argGenerateJS);
rootParser.addArgument(['--generate-html'], appArgs.argGenerateHTML);
rootParser.addArgument(['--generate-md'], appArgs.argGenerateMD);
rootParser.addArgument(['--lang'], appArgs.argLang);
rootParser.addArgument(['--padding'], appArgs.argPadding);
rootParser.addArgument(['--exclude-pkmn'], appArgs.argExcludePkmn);
rootParser.addArgument(['--exclude-regular'], appArgs.argExcludeRegular);
rootParser.addArgument(['--exclude-shiny'], appArgs.argExcludeShiny);
rootParser.addArgument(['--exclude-forms'], appArgs.argExcludeForms);
rootParser.addArgument(['--exclude-icon-sets'], appArgs.argExcludeIconSets);
rootParser.addArgument(['--include-right'], appArgs.argIncludeRight);
rootParser.addArgument(['--skip-pngcrush'], appArgs.argSkipPngcrush);
rootParser.addArgument(['--verbose'], appArgs.argVerbose);

// Arguments that will contain paths.
var paths = ['path_icons', 'path_data', 'path_pngcrush', 'tpl_js', 'tpl_scss',
  'output_img', 'output_scss', 'output_js', 'output_html', 'output_md'];

// Comma-separated arguments to be split into arrays.
var csv = ['file_exts', 'icon_sets'];

/**
 * Returns the parsed arguments after resolving all paths.
 * This wraps ArgumentParser.parseArgs() and will exit the program with an
 * error message if the user's passed command-line arguments were invalid.
 *
 * @returns {Object} The parsed command-line arguments
 */
function getParsedArgs() {
  var args = rootParser.parseArgs();
  for (item in args) {
    if (!args.hasOwnProperty(item)) {
      continue;
    }

    // Split comma-separated values.
    if (csv.indexOf(item) > -1) {
      args[item] = args[item].split(',');
    }
    // Resolve paths.
    if (paths.indexOf(item) > -1) {
      args[item] = path.resolve(args[item]);
    }
  }
  return args;
}

module.exports = {
  'parser': rootParser,
  'getParsedArgs': getParsedArgs,
  'packageData': packageData,
  'appVersion': appVersion
};
