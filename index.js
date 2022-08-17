const file = process.argv[2];

function fix(file) {
    const fs = require('fs');

    const data = fs.readFileSync(file, 'utf-8').split('\n').map(line => {
        if (line.indexOf(';') > -1) {
            return line;
        }
        if (line.indexOf('{') > -1) {
            return line;
        }
        if (line.indexOf('//') > -1) {
            return line;
        }
        if (line.trim().length === 0) {
            return line;
        }
        if (line.trim().endsWith(')')) {
            if (line.trim().endsWith('){')) {
                return line;
            }
            return line + ';';
        }
        if (line.trim().startsWith('}')) {
            return line;
        }
        if (line.trim().endsWith(',')) {
            return line;
        }
        return line + ';';
    }).join('\n');

    fs.writeFileSync(file, data);
}

// this is a module, so when the user types semicolonize <file> it will run the fix function
if (require.main === module) {
    fix(file);
}
module.exports = fix;