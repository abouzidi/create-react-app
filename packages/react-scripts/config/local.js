// @remove-on-eject-begin
// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

// @remove-on-eject-end
'use strict';

const fs = require('fs');
const path = require('path');
const paths = require('./paths');

const configPath =
  process.env.CONFIG || path.join(paths.appPath, 'react-scripts.config.js');
const loadedConfig = fs.existsSync(configPath) ? require(configPath) : {};

const localConfig = Object.assign(
  {
    devPort: 3000,
    openBrowser: true,
    babel: {
      // @remove-on-eject-begin
      babelrc: false,
      presets: [require.resolve('babel-preset-react-app')],
      // @remove-on-eject-end
    },
  },
  loadedConfig
);

module.exports = localConfig;
