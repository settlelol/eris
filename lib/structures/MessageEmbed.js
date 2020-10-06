'use strict';

class MessageEmbed {
    constructor() {
        const embedObject = { };
        return embedObject;
    }
        setTitle(text) {
            if (!text) throw new Error('You didn\'t provide any text for the title');
            embedObject.title = text; 
        }
    
        setColor(hex) {
            if (!hex) throw new Error("You didn't provide a color.");
            embedObject.color = hex;
        }
    
        setURL(url) {
            if (!url) throw new Error("You didn't provide a url.");
            embedObject.url = url;
        }
    
        setAuthor(text, url) {
            if (!text) throw new Error('Author can\'t be empty.');
            embedObject.author.name = text;
            if (url) {
                embedObject.author.icon_url = url
            }
        }
}
