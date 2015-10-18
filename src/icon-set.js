/**
 * Copyright (C) 2014-2015, Michiel Sikma <michiel@sikma.org>
 * MIT License
 *
 * src/icon-set.js - collects icon files into sets.
 */

import Jimp from 'Jimp';
import glob from 'glob';
import path from 'path';
import {settings} from './data';

/**
 * Returns a list of available icon sets.
 *
 * @returns {Promise} List of sets
 */
async function setList() {
  return new Promise((resolve, reject) => {
    glob(`${argv.path_icons}/*`, (error, dirs) => {
        if (error) {
          reject(error);
        }
        // The basename of the directory is the proper name of the set.
        dirs = dirs.map(dir => path.basename(dir));
        // Filter out the 'pokemon' set, since it's our only special case.
        dirs = dirs.filter(dir => dir !== 'pokemon');

        resolve(dirs);
      }
    );
  });
}

/**
 * Loads and processes a set of images.
 *
 * @async
 * @param {String} setName Name of the set we're retrieving
 * @returns {Object} Icon set with loaded images
 */
async function iconSet(setName) {
  let icons;
  icons = await iconFileList(setName);
  icons = await iconLoad(icons);
  return icons;
}

/**
 * Reads a single icon into memory.
 *
 * @param {String} path Path to the icon
 * @returns {Promise} The loaded and processed icon image
 */
function readIcon(path) {
  return new Promise((resolve, reject) => {
    new Jimp(path, (error, image) => {
      error === null ? resolve(image) : reject(error)
    });
  });
}

/**
 * Loads a list of icons into memory.
 *
 * @param {Array} iconList List of paths to icons
 * @returns {Promise} List of loaded images
 */
function iconLoad(iconList) {
  const iconPromises = iconList.map(path => readIcon(path));
  return Promise.all(iconPromises);
}

/**
 * Finds all icons belonging to a specific set and resolves a Promise when done.
 * @returns {Promise} List of images for an icon set
 */
function iconFileList(setName) {
  return new Promise((resolve, reject) => {
    glob(
      `${argv.path_icons}/${setName}/**/*.{${argv.file_exts.join(',')},}`,
      (error, files) => error === null ? resolve(files) : reject(error)
    );
  });
}

export {setList};
export default iconSet;
