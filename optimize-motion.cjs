const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace import { motion, ... } with import { m, ... }
  // We need to be careful. Sometimes it's `import { motion } from 'framer-motion'`
  // Sometimes `import { motion, AnimatePresence } from 'framer-motion'`
  content = content.replace(/import\s*\{\s*([^}]*)\s*\}\s*from\s*['"]framer-motion['"]/g, (match, p1) => {
    const parts = p1.split(',').map(s => s.trim());
    const newParts = parts.map(p => p === 'motion' ? 'm' : p);
    return `import { ${newParts.join(', ')} } from 'framer-motion'`;
  });

  // Replace <motion. to <m.
  content = content.replace(/<motion\./g, '<m.');
  
  // Replace </motion. to </m.
  content = content.replace(/<\/motion\./g, '</m.');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

function traverseDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath);
    }
  });
}

traverseDir(directoryPath);
console.log('Done optimizing framer-motion.');
