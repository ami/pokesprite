/**
 * Copyright (C) 2014-2015, Michiel Sikma <michiel@sikma.org>
 * MIT License
 * 
 * src/generate.js - main generator code flow.
 */

import {settings, pokedex} from './data';
import iconSet, {setList} from './icon-set';

async function generateSprite() {
  let iconSetList;
  iconSetList = await setList();
  iconSetList = iconSetList.map(set => iconSet(set));
  Promise.all(iconSetList).then(result => {
    console.log(result);
  });
}

generateSprite();
