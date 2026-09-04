const fs = require('fs');
const path = require('path');

function saveFile(relPath, content) {
  const absPath = path.resolve(relPath);
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content.trim() + '\n', 'utf8');
  conspole = console.log('Generated: ' + relPath);
}

