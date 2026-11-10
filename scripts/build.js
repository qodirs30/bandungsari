const fs = require('fs');
const path = require('path');

function copyDirSync(src, dest) {
    if (!fs.existsSync(src)) {
        console.warn(`[build.js] Source directory "${src}" does not exist. Skipping copy.`);
        return;
    }
    fs.mkdirSync(dest, { recursive: true });
    let entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDirSync(srcPath, destPath);
        } else {
            // Only copy JS files
            if (entry.name.endsWith('.js')) {
                fs.copyFileSync(srcPath, destPath);
            }
        }
    }
}

// Copy JS files
try {
    copyDirSync('src/js', 'public/assets/js');
    console.log('[build.js] JS files copied to public/assets/js successfully.');
} catch (err) {
    console.error('[build.js] Error copying JS:', err);
}
