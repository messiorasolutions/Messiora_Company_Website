const Vibrant = require('node-vibrant/node').default;
const path = 'C:\\Messiora_Company_Website\\frontend\\src\\assets\\logo.jpeg';

Vibrant.from(path).getPalette((err, palette) => {
    if (err) {
        console.error('Error extracting colors:', err);
        return;
    }
    console.log('Colors from logo:');
    for (const swatch in palette) {
        if (palette[swatch]) {
            console.log(`${swatch}: ${palette[swatch].hex}`);
        }
    }
});
