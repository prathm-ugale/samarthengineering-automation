const fs = require('fs');
const path = require('path');

function save(relPath, content) {
  const f = path.resolve(relPath);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content.trim() + '\n', 'utf8');
  console.log('Saved: ' + relPath);
}

// =====================================================================
// STYLES
// =====================================================================
save('src/styles.scss', `£}
});
