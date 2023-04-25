import React, { useEffect } from 'react';
//import styles from './JqueryDiamonds.module.css';

export default () => {
    useEffect(() => {
        //window.jQuery = require('../public/jquery-latest.min');
        window.interactiveImage = require('../../../node_modules/interactiveimagejs/dist/interactive-image.js');

        // window.jQuery("#demo").diamonds({
        //     size: 100, // Size of diamonds in pixels. Both width and height.
        //     gap: 5, // Pixels between each square.
        //     hideIncompleteRow: false, // Hide last row if there are not enough items to fill it completely.
        //     autoRedraw: true, // Auto redraw diamonds when it detects resizing.
        //     itemSelector: `.${styles.item}` // the css selector to use to select diamonds-items.
        // });
        var items = [
            {
              type: "text",
              title: "Text title",
              description: "<b>Text item</b> with description.",
              position: {
                left: 200,
                top: 50
              }
            },
            {
                type: "text",
                title: "Text title1",
                description: "<b>Text item</b> with description.",
                position: {
                  left: 300,
                  top: 100
                }
              },
            // {
            //   type: "provider",
            //   providerName: "youtube",
            //   parameters: {
            //     videoId: "iPRiQ6SBntQ"
            //   },
            //   position: {
            //     left: 300,
            //     top: 200
            //   },
            //   sticky: true
            // },
          ];
          
          var options = {
            allowHtml: true,
            shareBox: false
          };

        window.jQuery("#my-interactive-image").interactiveImage(items, options);

        // $(document).ready(function() {
        //     $("#my-interactive-image").interactiveImage(items, options);
        //   });
    }, []);

    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/interactiveimagejs@2.7.1/dist/interactive-image.min.css" rel="stylesheet"/>
            <div style={{backgroundImage : `url('https://raw.githubusercontent.com/jpchateau/Interactive-Image/master/docs/_static/background.jpg')`}}
            className="m-auto w-[800px] h-[800px]" id="my-interactive-image"></div>
        </div>
    );
};