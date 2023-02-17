# Sketchfab model url parser

```js

const Sketchfab = require('sketchfab-url-parser');

const sketchfabModelUrl = "https://sketchfab.com/search?date=month&features=downloadable&q=realityscan&type=models"
const skfb = new Sketchfab(sketchfabModelUrl);

console.log(skfb);

// Output:
    SketchFabUrl {
    modelName: 'sandy-beach-on-rugen-realityscan',
    modelId: '6994fc1f559045dab9e5455f27308ecd',
    url: 'https://sketchfab.com/3d-models/sandy-beach-on-rugen-realityscan-6994fc1f559045dab9e5455f27308ecd'
    }
```

