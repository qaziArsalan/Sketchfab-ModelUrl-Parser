const URL = require('url');

class SketchFabUrl {
    modelName;
    modelId;

    constructor(url) {
        try {
            new URL.URL(url); // for validation

            this.url = url;
            this.#setAttributes();

        } catch (error) {
            console.error(JSON.stringify({ error: error.message }))
        }

    }

    #setAttributes = () => {
        try {
            const parsed = URL.parse(this.url);
            const name_part = parsed.path.split('/').splice(-1)[0];
            this.modelId = name_part.split('-').slice(-1)[0]
            this.modelName = name_part.split('-').slice(0, -1).join('-');
        } catch (error) {
            console.error(error)
            throw error;
        }
    }
}


module.exports = SketchFabUrl;