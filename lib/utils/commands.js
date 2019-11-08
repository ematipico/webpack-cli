const { commands } = require('./cli-flags');

/**
 * @type {string[]}
 */
const names = commands
    .map(({ alias, name }) => {
        if (alias) {
            return [name, alias];
        }
        return [name];
    })
    .reduce((arr, val) => arr.concat(val), []);

module.exports.names = names;
module.exports.info = commands;
