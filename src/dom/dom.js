/**
 * The web is much more than just canvas and the DOM functionality makes it easy to interact
 * with other HTML5 objects, including text, hyperlink, image, input, video,
 * audio, and webcam.
 * There is a set of creation methods, DOM manipulation methods, and
 * an extended <a href="#/p5.Element">p5.Element</a> that supports a range of HTML elements. See the
 * <a href='https://github.com/processing/p5.js/wiki/Beyond-the-canvas'>
 * beyond the canvas tutorial</a> for a full overview of how this addon works.
 *
 * See <a href='https://github.com/processing/p5.js/wiki/Beyond-the-canvas'>tutorial: beyond the canvas</a>
 * for more info on how to use this library.</a>
 *
 * @module DOM
 * @submodule DOM
 * @for p5
 * @requires p5
 */

import p5 from '../core/main';

/**
 * Searches the page for the first element that matches the given
 * <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#different_types_of_selectors" target="_blank">CSS selector string</a>.
 * The string can be an ID, class, tag name, or a combination. `select()`
 * returns a <a href="#/p5.Element">p5.Element</a> object if it finds a match
 * and `null` otherwise.
 *
 * The second parameter, `container`, is optional. It specifies a container to
 * search within. container can be CSS selector string, a
 * <a href="#/p5.Element">p5.Element</a> object, or an
 * <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTMLElement</a> object.
 *
 * @method select
 * @param  {String} selectors CSS selector string of element to search for.
 * @param  {String|p5.Element|HTMLElement} [container] CSS selector string, <a href="#/p5.Element">p5.Element</a>, or
 *                                             <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTMLElement</a> to search within.
 * @return {p5.Element|null} <a href="#/p5.Element">p5.Element</a> containing the element.
 * @example
 * <div>
 * <code>
 * function setup() {
 *   createCanvas(100, 100);
 *   background(200);
 *
 *   // Select the canvas by its tag.
 *   let cnv = select('canvas');
 *   cnv.style('border', '5px deeppink dashed');
 *
 *   describe('A gray square with a dashed pink border.');
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * function setup() {
 *   let cnv = createCanvas(100, 100);
 *   // Add a class attribute to the canvas.
 *   cnv.class('pinkborder');
 *
 *   background(200);
 *
 *   // Select the canvas by its class.
 *   cnv = select('.pinkborder');
 *   // Style its border.
 *   cnv.style('border', '5px deeppink dashed');
 *
 *   describe('A gray square with a dashed pink border.');
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * function setup() {
 *   let cnv = createCanvas(100, 100);
 *   // Set the canvas ID.
 *   cnv.id('mycanvas');
 *
 *   background(200);
 *
 *   // Select the canvas by its ID.
 *   cnv = select('#mycanvas');
 *   // Style its border.
 *   cnv.style('border', '5px deeppink dashed');
 *
 *   describe('A gray square with a dashed pink border.');
 * }
 * </code>
 * </div>
 */
p5.prototype.select = function (e, p) {
  p5._validateParameters('select', arguments);
  const container = this._getContainer(p);
  const res = container.querySelector(e);
  if (res) {
    return this._wrapElement(res);
  } else {
    return null;
  }
};

/**
 * Searches the page for all elements that matches the given
 * <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#different_types_of_selectors" target="_blank">CSS selector string</a>.
 * The string can be an ID, class, tag name, or a combination. `selectAll()`
 * returns an array of <a href="#/p5.Element">p5.Element</a> objects if it
 * finds any matches and an empty array otherwise.
 *
 * The second parameter, `container`, is optional. It specifies a container to
 * search within. container can be CSS selector string, a
 * <a href="#/p5.Element">p5.Element</a> object, or an
 * <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTMLElement</a> object.
 *
 * @method selectAll
 * @param  {String} selectors CSS selector string of element to search for.
 * @param  {String|p5.Element|HTMLElement} [container] CSS selector string, <a href="#/p5.Element">p5.Element</a>, or
 *                                             <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTMLElement</a> to search within.
 * @return {p5.Element[]} array of <a href="#/p5.Element">p5.Element</a>s containing any elements found.
 * @example
 * <div>
 * <code>
 * function setup() {
 *   // Create three buttons.
 *   createButton('1');
 *   createButton('2');
 *   createButton('3');
 *
 *   // Select the buttons by their tag.
 *   let buttons = selectAll('button');
 *
 *   // Position the buttons.
 *   for (let i = 0; i < 3; i += 1) {
 *     buttons[i].position(0, i * 30);
 *   }
 *
 *   describe('Three buttons stacked vertically. The buttons are labeled, "1", "2", and "3".');
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * function setup() {
 *   // Create three buttons and position them.
 *   let b1 = createButton('1');
 *   b1.position(0, 0);
 *   let b2 = createButton('2');
 *   b2.position(0, 30);
 *   let b3 = createButton('3');
 *   b3.position(0, 60);
 *
 *   // Add a class attribute to each button.
 *   b1.class('btn');
 *   b2.class('btn btn-pink');
 *   b3.class('btn');
 *
 *   // Select the buttons by their class.
 *   let buttons = selectAll('.btn');
 *   let pinkButtons = selectAll('.btn-pink');
 *
 *   // Style the selected buttons.
 *   buttons.forEach(btn => {
 *     btn.style('font-family', 'Comic Sans MS');
 *   });
 *
 *   pinkButtons.forEach(btn => {
 *     btn.style('background', 'deeppink');
 *     btn.style('color', 'white');
 *   });
 *
 *   describe('Three buttons stacked vertically. The buttons are labeled, "1", "2", and "3". Buttons "1" and "3" are gray. Button "2" is pink.');
 * }
 * </code>
 * </div>
 */
p5.prototype.selectAll = function (e, p) {
  p5._validateParameters('selectAll', arguments);
  const arr = [];
  const container = this._getContainer(p);
  const res = container.querySelectorAll(e);
  if (res) {
    for (let j = 0; j < res.length; j++) {
      const obj = this._wrapElement(res[j]);
      arr.push(obj);
    }
  }
  return arr;
};

/**
 * Helper function for select and selectAll
 */
p5.prototype._getContainer = function (p) {
  let container = document;
  if (typeof p === 'string') {
    container = document.querySelector(p) || document;
  } else if (p instanceof p5.Element) {
    container = p.elt;
  } else if (p instanceof HTMLElement) {
    container = p;
  }
  return container;
};

/**
 * Helper function for getElement and getElements.
 */
p5.prototype._wrapElement = function (elt) {
  const children = Array.prototype.slice.call(elt.children);
  if (elt.tagName === 'INPUT' && elt.type === 'checkbox') {
    let converted = new p5.Element(elt, this);
    converted.checked = function(...args) {
      if (args.length === 0) {
        return this.elt.checked;
      } else if (args[0]) {
        this.elt.checked = true;
      } else {
        this.elt.checked = false;
      }
      return this;
    };
    return converted;
  } else if (elt.tagName === 'VIDEO' || elt.tagName === 'AUDIO') {
    return new p5.MediaElement(elt, this);
  } else if (elt.tagName === 'SELECT') {
    return this.createSelect(new p5.Element(elt, this));
  } else if (
    children.length > 0 &&
    children.every(function (c) {
      return c.tagName === 'INPUT' || c.tagName === 'LABEL';
    })
  ) {
    return this.createRadio(new p5.Element(elt, this));
  } else {
    return new p5.Element(elt, this);
  }
};

/**
 * Removes all elements created by p5.js, including any event handlers.
 * There are two exceptions:
 * canvas elements created by <a href="#/p5/createCanvas">createCanvas</a>
 * and <a href="#/p5.Renderer">p5.Render</a> objects created by
 * <a href="#/p5/createGraphics">createGraphics</a>.
 *
 * @method removeElements
 * @example
 * <div>
 * <code>
 * function setup() {
 *   createCanvas(100, 100);
 *   background(200);
 *
 *   // Create a paragraph element and place
 *   // it in the middle of the canvas.
 *   let p = createP('p5*js');
 *   p.position(25, 25);
 *
 *   describe('A gray square with the text "p5*js" written in its center. The text disappears when the mouse is pressed.');
 * }
 *
 * function mousePressed() {
 *   removeElements();
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let slider;
 *
 * function setup() {
 *   createCanvas(100, 100);
 *
 *   // Create a paragraph element and place
 *   // it at the top of the canvas.
 *   let p = createP('p5*js');
 *   p.position(25, 25);
 *
 *   // Create a slider element and place it
 *   // beneath the canvas.
 *   slider = createSlider(0, 255, 200);
 *   slider.position(0, 100);
 *
 *   describe('A gray square with the text "p5*js" written in its center and a range slider beneath it. The square changes color when the slider is moved. The text and slider disappear when the square is double-clicked.');
 * }
 *
 * function draw() {
 *   // Use the slider value to change the background color.
 *   let g = slider.value();
 *   background(g);
 * }
 *
 * function doubleClicked() {
 *   removeElements();
 * }
 * </code>
 * </div>
 */
p5.prototype.removeElements = function (e) {
  p5._validateParameters('removeElements', arguments);
  // el.remove splices from this._elements, so don't mix iteration with it
  const isNotCanvasElement = el => !(el.elt instanceof HTMLCanvasElement);
  const removeableElements = this._elements.filter(isNotCanvasElement);
  removeableElements.map(el => el.remove());
};

/**
 * `myElement.changed()` sets a function to call when the value of the
 * <a href="#/p5.Element">p5.Element</a> object changes. Calling
 * `myElement.changed(false)` disables the function.
 *
 * @method changed
 * @param  {Function|Boolean} fxn function to call when the element changes.
 *                                `false` disables the function.
 * @chainable
 * @example
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   // Create a dropdown menu and add a few color options.
 *   let drop = createSelect();
 *   drop.position(0, 0);
 *   drop.option('red');
 *   drop.option('green');
 *   drop.option('blue');
 *
 *   // When the color option changes, paint the background with
 *   // that color.
 *   drop.changed(() => {
 *     let c = drop.value();
 *     background(c);
 *   });
 *
 *   describe('A gray square with a dropdown menu at the top. The square changes color when an option is selected.');
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   // Create a checkbox and place it beneath the canvas.
 *   let checkbox = createCheckbox(' circle');
 *   checkbox.position(0, 100);
 *
 *   // When the checkbox changes, paint the background gray
 *   // and determine whether to draw a circle.
 *   checkbox.changed(() => {
 *     background(200);
 *     if (checkbox.checked() === true) {
 *       circle(50, 50, 30);
 *     }
 *   });
 *
 *   describe('A gray square with a checkbox underneath it that says "circle". A white circle appears when the box is checked and disappears otherwise.');
 * }
 * </code>
 * </div>
 */
p5.Element.prototype.changed = function (fxn) {
  p5.Element._adjustListener('change', fxn, this);
  return this;
};

/**
 * `myElement.input()` sets a function to call when input is detected within
 * the <a href="#/p5.Element">p5.Element</a> object. It's often used to with
 * text inputs and sliders. Calling `myElement.input(false)` disables the
 * function.
 *
 * @method input
 * @param  {Function|Boolean} fxn function to call when input is detected within
 *                                the element.
 *                                `false` disables the function.
 * @chainable
 * @example
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   // Create a slider and place it beneath the canvas.
 *   let slider = createSlider(0, 255, 200);
 *   slider.position(0, 100);
 *
 *   // When the slider changes, use its value to paint
 *   // the background.
 *   slider.input(() => {
 *     let g = slider.value();
 *     background(g);
 *   });
 *
 *   describe('A gray square with a range slider underneath it. The background changes shades of gray when the slider is moved.');
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   // Create an input and place it beneath the canvas.
 *   let inp = createInput('');
 *   inp.position(0, 100);
 *
 *   // When input is detected, paint the background gray
 *   // and display the text.
 *   inp.input(() => {
 *     background(200);
 *     let msg = inp.value();
 *     text(msg, 5, 50);
 *   });
 *
 *   describe('A gray square with a text input bar beneath it. Any text written in the input appears in the middle of the square.');
 * }
 * </code>
 * </div>
 */
p5.Element.prototype.input = function (fxn) {
  p5.Element._adjustListener('input', fxn, this);
  return this;
};

/**
 * Helpers for create methods.
 */
function addElement(elt, pInst, media) {
  const node = pInst._userNode ? pInst._userNode : document.body;
  node.appendChild(elt);
  const c = media
    ? new p5.MediaElement(elt, pInst)
    : new p5.Element(elt, pInst);
  pInst._elements.push(c);
  return c;
}

/**
 * Creates a `&lt;div&gt;&lt;/div&gt;` element. It's commonly used as a
 * container for other elements.
 *
 * The parameter `html` is optional. It accepts a string that sets the
 * inner HTML of the new `&lt;div&gt;&lt;/div&gt;`.
 *
 * @method createDiv
 * @param  {String} [html] inner HTML for the new `&lt;div&gt;&lt;/div&gt;` element.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   let div = createDiv('p5*js');
 *   div.position(25, 35);
 *
 *   describe('A gray square with the text "p5*js" written in its center.');
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   // Create an h3 element within the div.
 *   let div = createDiv('<h3>p5*js</h3>');
 *   div.position(20, 5);
 *
 *   describe('A gray square with the text "p5*js" written in its center.');
 * }
 * </code>
 * </div>
 */
p5.prototype.createDiv = function (html = '') {
  let elt = document.createElement('div');
  elt.innerHTML = html;
  return addElement(elt, this);
};

/**
 * Creates a `&lt;p&gt;&lt;/p&gt;` element. It's commonly used for
 * paragraph-length text.
 *
 * The parameter `html` is optional. It accepts a string that sets the
 * inner HTML of the new `&lt;p&gt;&lt;/p&gt;`.
 *
 * @method createP
 * @param  {String} [html] inner HTML for the new `&lt;p&gt;&lt;/p&gt;` element.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   let p = createP('Tell me a story.');
 *   p.position(5, 0);
 *
 *   describe('A gray square displaying the text "Tell me a story." written in black.');
 * }
 * </code>
 * </div>
 */
p5.prototype.createP = function (html = '') {
  let elt = document.createElement('p');
  elt.innerHTML = html;
  return addElement(elt, this);
};

/**
 * Creates a `&lt;span&gt;&lt;/span&gt;` element. It's commonly used as a
 * container for inline elements. For example, a `&lt;span&gt;&lt;/span&gt;`
 * can hold part of a sentence that's a
 * <span style="color: deeppink;">different</span> style.
 *
 * The parameter `html` is optional. It accepts a string that sets the
 * inner HTML of the new `&lt;span&gt;&lt;/span&gt;`.
 *
 * @method createSpan
 * @param  {String} [html] inner HTML for the new `&lt;span&gt;&lt;/span&gt;` element.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   // Create a span element.
 *   let span = createSpan('p5*js');
 *   span.position(25, 35);
 *
 *   describe('A gray square with the text "p5*js" written in its center.');
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   // Create a div element as
 *   // a container.
 *   let div = createDiv();
 *   // Place the div at the
 *   // center.
 *   div.position(25, 35);
 *
 *   // Create a span element.
 *   let s1 = createSpan('p5');
 *   // Create a second span element.
 *   let s2 = createSpan('*');
 *   // Set the span's font color.
 *   s2.style('color', 'deeppink');
 *   // Create a third span element.
 *   let s3 = createSpan('js');
 *
 *   // Add all the spans to the
 *   // container div.
 *   s1.parent(div);
 *   s2.parent(div);
 *   s3.parent(div);
 *
 *   describe('A gray square with the text "p5*js" written in black at its center. The asterisk is pink.');
 * }
 * </code>
 * </div>
 */
p5.prototype.createSpan = function (html = '') {
  let elt = document.createElement('span');
  elt.innerHTML = html;
  return addElement(elt, this);
};

/**
 * Creates an `&lt;img&gt;` element that can appear outside of the canvas.
 *
 * The first parameter, `src`, is a string with the path to the image file.
 * `src` should be a relative path, as in `'assets/image.png'`, or a URL, as
 * in `'https://example.com/image.png'`.
 *
 * The second parameter, `alt`, is a string with the
 * <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt#usage_notes" target="_blank">alternate text</a>
 * for the image. An empty string `''` can be used for images that aren't displayed.
 *
 * The third parameter, `crossOrigin`, is optional. It's a string that sets the
 * <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes" target="_blank">crossOrigin property</a>
 * of the image. Use `'anonymous'` or `'use-credentials'` to fetch the image
 * with cross-origin access.
 *
 * The fourth parameter, `callback`, is also optional. It sets a function to
 * call after the image loads. The new image is passed to the callback
 * function as a <a href="#/p5.Element">p5.Element</a> object.
 *
 * @method createImg
 * @param  {String} src relative path or URL for the image.
 * @param  {String} alt alternate text for the image.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   let img = createImg(
 *     'https://p5js.org/assets/img/asterisk-01.png',
 *     'The p5.js magenta asterisk.'
 *   );
 *   img.position(0, -10);
 *
 *   describe('A gray square with a magenta asterisk in its center.');
 * }
 * </code>
 * </div>
 */
/**
 * @method createImg
 * @param  {String} src
 * @param  {String} alt
 * @param  {String} [crossOrigin] crossOrigin property to use when fetching the image.
 * @param  {Function} [successCallback] function to call once the image loads. The new image will be passed
 *                                      to the function as a <a href="#/p5.Element">p5.Element</a> object.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 */
p5.prototype.createImg = function () {
  p5._validateParameters('createImg', arguments);
  const elt = document.createElement('img');
  const args = arguments;
  let self;
  if (args.length > 1 && typeof args[1] === 'string') {
    elt.alt = args[1];
  }
  if (args.length > 2 && typeof args[2] === 'string') {
    elt.crossOrigin = args[2];
  }
  elt.src = args[0];
  self = addElement(elt, this);
  elt.addEventListener('load', function () {
    self.width = elt.offsetWidth || elt.width;
    self.height = elt.offsetHeight || elt.height;
    const last = args[args.length - 1];
    if (typeof last === 'function') last(self);
  });
  return self;
};

/**
 * Creates an `&lt;a&gt;&lt;/a&gt;` element that links to another web page.
 *
 * The first parmeter, `href`, is a string that sets the URL of the linked
 * page.
 *
 * The second parameter, `html`, is a string that sets the inner HTML of the
 * link. It's common to use text, images, or buttons as links.
 *
 * The third parameter, `target`, is optional. It's a string that tells the
 * web browser where to open the link. By default, links open in the current
 * browser tab. Passing `'_blank'` will cause the link to open in a new
 * browser tab. MDN describes a few
 * <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target" target="_blank">other options</a>.
 *
 * @method createA
 * @param  {String} href       URL of linked page.
 * @param  {String} html       inner HTML of link element to display.
 * @param  {String} [target]   target where the new link should open,
 *                             either `'_blank'`, `'_self'`, `'_parent'`, or `'_top'`.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   // Create an anchor element that links to p5js.org.
 *   let a = createA('http://p5js.org/', 'p5*js');
 *   a.position(25, 35);
 *
 *   describe('The text "p5*js" written at the center of a gray square.');
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   // Create an anchor element that links to p5js.org.
 *   // Open the link in a new tab.
 *   let a = createA('http://p5js.org/', 'p5*js', '_blank');
 *   a.position(25, 35);
 *
 *   describe('The text "p5*js" written at the center of a gray square.');
 * }
 * </code>
 * </div>
 */
p5.prototype.createA = function (href, html, target) {
  p5._validateParameters('createA', arguments);
  const elt = document.createElement('a');
  elt.href = href;
  elt.innerHTML = html;
  if (target) elt.target = target;
  return addElement(elt, this);
};

/** INPUT **/

/**
 * Creates a slider `&lt;input&gt;&lt;/input&gt;` element. Range sliders are
 * useful for quickly selecting numbers from a given range.
 *
 * The first two parameters, `min` and `max`, are numbers that set the
 * slider's minimum and maximum.
 *
 * The third parameter, `value`, is optional. It's a number that sets the
 * slider's default value.
 *
 * The fourth parameter, `step`, is also optional. It's a number that sets the
 * spacing between each value in the slider's range. Setting `step` to 0
 * allows the slider to move smoothly from `min` to `max`.
 *
 * @method createSlider
 * @param  {Number} min minimum value of the slider.
 * @param  {Number} max maximum value of the slider.
 * @param  {Number} [value] default value of the slider.
 * @param  {Number} [step] size for each step in the slider's range.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * let slider;
 *
 * function setup() {
 *   // Create a slider and place it at the top of the canvas.
 *   slider = createSlider(0, 255);
 *   slider.position(10, 10);
 *   slider.size(80);
 *
 *   describe('A dark gray square with a range slider at the top. The square changes color when the slider is moved.');
 * }
 *
 * function draw() {
 *   // Use the slider as a grayscale value.
 *   let g = slider.value();
 *   background(g);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let slider;
 *
 * function setup() {
 *   // Create a slider and place it at the top of the canvas.
 *   // Set its default value to 0.
 *   slider = createSlider(0, 255, 0);
 *   slider.position(10, 10);
 *   slider.size(80);
 *
 *   describe('A black square with a range slider at the top. The square changes color when the slider is moved.');
 * }
 *
 * function draw() {
 *   // Use the slider as a grayscale value.
 *   let g = slider.value();
 *   background(g);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let slider;
 *
 * function setup() {
 *   // Create a slider and place it at the top of the canvas.
 *   // Set its default value to 0.
 *   // Set its step size to 50.
 *   slider = createSlider(0, 255, 0, 50);
 *   slider.position(10, 10);
 *   slider.size(80);
 *
 *   describe('A black square with a range slider at the top. The square changes color when the slider is moved.');
 * }
 *
 * function draw() {
 *   // Use the slider as a grayscale value.
 *   let g = slider.value();
 *   background(g);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let slider;
 *
 * function setup() {
 *   // Create a slider and place it at the top of the canvas.
 *   // Set its default value to 0.
 *   // Set its step size to 0 so that it moves smoothly.
 *   slider = createSlider(0, 255, 0, 0);
 *   slider.position(10, 10);
 *   slider.size(80);
 *
 *   describe('A black square with a range slider at the top. The square changes color when the slider is moved.');
 * }
 *
 * function draw() {
 *   // Use the slider as a grayscale value.
 *   let g = slider.value();
 *   background(g);
 * }
 * </code>
 * </div>
 */
p5.prototype.createSlider = function (min, max, value, step) {
  p5._validateParameters('createSlider', arguments);
  const elt = document.createElement('input');
  elt.type = 'range';
  elt.min = min;
  elt.max = max;
  if (step === 0) {
    elt.step = 0.000000000000000001; // smallest valid step
  } else if (step) {
    elt.step = step;
  }
  if (typeof value === 'number') elt.value = value;
  return addElement(elt, this);
};

/**
 * Creates a `&lt;button&gt;&lt;/button&gt;` element.
 *
 * The first parameter, `label`, is a string that sets the label displayed on
 * the button.
 *
 * The second parameter, `value`, is optional. It's a string that sets the
 * button's value. See
 * <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#value" target="_blank">MDN</a>
 * for more details.
 *
 * @method createButton
 * @param  {String} label label displayed on the button.
 * @param  {String} [value] value of the button.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   // Create a button and place it beneath the canvas.
 *   let button = createButton('click me');
 *   button.position(0, 100);
 *
 *   // Use the button to change the background color.
 *   button.mousePressed(() => {
 *     let g = random(255);
 *     background(g);
 *   });
 *
 *   describe('A gray square with a button that says "click me" beneath it. The square changes color when the button is clicked.');
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let button;
 *
 * function setup() {
 *   // Create a button and set its value to 0.
 *   // Place the button beneath the canvas.
 *   button = createButton('click me', 'red');
 *   button.position(0, 100);
 *
 *   // Change the button's value when the mouse
 *   // is pressed.
 *   button.mousePressed(() => {
 *     let c = random(['red', 'green', 'blue', 'yellow']);
 *     button.value(c);
 *   });
 *
 *   describe('A red square with a button that says "click me" beneath it. The square changes color when the button is clicked.');
 * }
 *
 * function draw() {
 *   // Use the button's value to set the background color.
 *   let c = button.value();
 *   background(c);
 * }
 * </code>
 * </div>
 */
p5.prototype.createButton = function (label, value) {
  p5._validateParameters('createButton', arguments);
  const elt = document.createElement('button');
  elt.innerHTML = label;
  if (value) elt.value = value;
  return addElement(elt, this);
};

/**
 * Creates a checkbox `&lt;input&gt;&lt;/input&gt;` element. Checkboxes extend
 * the <a href="#/p5.Element">p5.Element</a> class with a `checked()` method.
 * Calling `myBox.checked()` returns `true` if it the box is checked and
 * `false` otherwise.
 *
 * The first parameter, `label`, is optional. It's a string that sets the label
 * to display next to the checkbox.
 *
 * The second parameter, `value`, is also optional. It's a boolean that sets the
 * checkbox's value.
 *
 * @method createCheckbox
 * @param  {String} [label] label displayed after the checkbox.
 * @param  {boolean} [value] value of the checkbox. Checked is `true` and unchecked is `false`.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * let checkbox;
 *
 * function setup() {
 *   // Create a checkbox and place it beneath the canvas.
 *   checkbox = createCheckbox();
 *   checkbox.position(0, 100);
 *
 *   describe('A black square with a checkbox beneath it. The square turns white when the box is checked.');
 * }
 *
 * function draw() {
 *   // Use the checkbox to set the background color.
 *   if (checkbox.checked()) {
 *     background(255);
 *   } else {
 *     background(0);
 *   }
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let checkbox;
 *
 * function setup() {
 *   // Create a checkbox and place it beneath the canvas.
 *   // Label the checkbox "white".
 *   checkbox = createCheckbox(' white');
 *   checkbox.position(0, 100);
 *
 *   describe('A black square with a checkbox labeled "white" beneath it. The square turns white when the box is checked.');
 * }
 *
 * function draw() {
 *   // Use the checkbox to set the background color.
 *   if (checkbox.checked()) {
 *     background(255);
 *   } else {
 *     background(0);
 *   }
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let checkbox;
 *
 * function setup() {
 *   // Create a checkbox and place it beneath the canvas.
 *   // Label the checkbox "white" and set its value to true.
 *   checkbox = createCheckbox(' white', true);
 *   checkbox.position(0, 100);
 *
 *   describe('A white square with a checkbox labeled "white" beneath it. The square turns black when the box is unchecked.');
 * }
 *
 * function draw() {
 *   // Use the checkbox to set the background color.
 *   if (checkbox.checked()) {
 *     background(255);
 *   } else {
 *     background(0);
 *   }
 * }
 * </code>
 * </div>
 */
p5.prototype.createCheckbox = function(...args) {
  p5._validateParameters('createCheckbox', args);

  // Create a container element
  const elt = document.createElement('div');

  // Create checkbox type input element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Create label element and wrap it around checkbox
  const label = document.createElement('label');
  label.appendChild(checkbox);

  // Append label element inside the container
  elt.appendChild(label);

  //checkbox must be wrapped in p5.Element before label so that label appears after
  const self = addElement(elt, this);

  self.checked = function(...args) {
    const cb = self.elt.firstElementChild.getElementsByTagName('input')[0];
    if (cb) {
      if (args.length === 0) {
        return cb.checked;
      } else if (args[0]) {
        cb.checked = true;
      } else {
        cb.checked = false;
      }
    }
    return self;
  };

  this.value = function (val) {
    self.value = val;
    return this;
  };

  // Set the span element innerHTML as the label value if passed
  if (args[0]) {
    self.value(args[0]);
    const span = document.createElement('span');
    span.innerHTML = args[0];
    label.appendChild(span);
  }

  // Set the checked value of checkbox if passed
  if (args[1]) {
    checkbox.checked = true;
  }

  return self;
};

/**
 * Creates a dropdown menu `&lt;select&gt;&lt;/select&gt;` element.
 *
 * The parameter is optional. If `true` is passed, as in
 * `let mySelect = createSelect(true)`, then the dropdown will support
 * multiple selections. If an existing `&lt;select&gt;&lt;/select&gt;` element
 * is passed, as in `let mySelect = createSelect(otherSelect)`, the existing
 * element will be wrapped in a new <a href="#/p5.Element">p5.Element</a>
 * object.
 *
 * Dropdowns extend the <a href="#/p5.Element">p5.Element</a> class with a few
 * helpful methods for managing options:
 * - `mySelect.option(name, [value])` adds an option to the menu. The first paremeter, `name`, is a string that sets the option's name and value. The second parameter, `value`, is optional. If provided, it sets the value that corresponds to the key `name`. If an option with `name` already exists, its value is changed to `value`.
 * - `mySelect.value()` returns the currently-selected option's value.
 * - `mySelect.selected()` returns the currently-selected option.
 * - `mySelect.selected(option)` selects the given option by default.
 * - `mySelect.disable()` marks the whole dropdown element as disabled.
 * - `mySelect.disable(option)` marks a given option as disabled.
 * - `mySelect.enable()` marks the whole dropdown element as enabled.
 * - `mySelect.enable(option)` marks a given option as enabled.
 *
 * @method createSelect
 * @param {boolean} [multiple] support multiple selections.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * let mySelect;
 *
 * function setup() {
 *   // Create a dropdown and place it beneath the canvas.
 *   mySelect = createSelect();
 *   mySelect.position(0, 100);
 *
 *   // Add color options.
 *   mySelect.option('red');
 *   mySelect.option('green');
 *   mySelect.option('blue');
 *   mySelect.option('yellow');
 *
 *   // Set the selected option to "red".
 *   mySelect.selected('red');
 *
 *   describe('A red square with a dropdown menu beneath it. The square changes color when a new color is selected.');
 * }
 *
 * function draw() {
 *   // Use the selected value to paint the background.
 *   let c = mySelect.selected();
 *   background(c);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let mySelect;
 *
 * function setup() {
 *   // Create a dropdown and place it beneath the canvas.
 *   mySelect = createSelect();
 *   mySelect.position(0, 100);
 *
 *   // Add color options.
 *   mySelect.option('red');
 *   mySelect.option('green');
 *   mySelect.option('blue');
 *   mySelect.option('yellow');
 *
 *   // Set the selected option to "red".
 *   mySelect.selected('red');
 *
 *   // Disable the "yellow" option.
 *   mySelect.disable('yellow');
 *
 *   describe('A red square with a dropdown menu beneath it. The square changes color when a new color is selected.');
 * }
 *
 * function draw() {
 *   // Use the selected value to paint the background.
 *   let c = mySelect.selected();
 *   background(c);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let mySelect;
 *
 * function setup() {
 *   // Create a dropdown and place it beneath the canvas.
 *   mySelect = createSelect();
 *   mySelect.position(0, 100);
 *
 *   // Add color options with names and values.
 *   mySelect.option('one', 'red');
 *   mySelect.option('two', 'green');
 *   mySelect.option('three', 'blue');
 *   mySelect.option('four', 'yellow');
 *
 *   // Set the selected option to "one".
 *   mySelect.selected('one');
 *
 *   describe('A red square with a dropdown menu beneath it. The square changes color when a new color is selected.');
 * }
 *
 * function draw() {
 *   // Use the selected value to paint the background.
 *   let c = mySelect.selected();
 *   background(c);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // Hold CTRL to select multiple options on Windows and Linux.
 * // Hold CMD to select multiple options on macOS.
 * let mySelect;
 *
 * function setup() {
 *   // Create a dropdown and allow multiple selections.
 *   // Place it beneath the canvas.
 *   mySelect = createSelect(true);
 *   mySelect.position(0, 100);
 *
 *   // Add color options.
 *   mySelect.option('red');
 *   mySelect.option('green');
 *   mySelect.option('blue');
 *   mySelect.option('yellow');
 *
 *   describe('A gray square with a dropdown menu beneath it. Colorful circles appear when their color is selected.');
 * }
 *
 * function draw() {
 *   background(200);
 *
 *   // Use the selected value(s) to draw circles.
 *   let colors = mySelect.selected();
 *   colors.forEach((c, index) => {
 *     let x = 10 + index * 20;
 *     fill(c);
 *     circle(x, 50, 20);
 *   });
 * }
 * </code>
 * </div>
 */
/**
 * @method createSelect
 * @param {Object} existing select element to wrap, either as a <a href="#/p5.Element">p5.Element</a> or
 *                          a <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement" target="_blank">HTMLSelectElement</a>.
 * @return {p5.Element}
 */

p5.prototype.createSelect = function(...args) {
  p5._validateParameters('createSelect', args);
  let self;
  let arg = args[0];
  if (arg instanceof p5.Element && arg.elt instanceof HTMLSelectElement) {
    // If given argument is p5.Element of select type
    self = arg;
    this.elt = arg.elt;
  } else if (arg instanceof HTMLSelectElement) {
    self = addElement(arg, this);
    this.elt = arg;
  } else {
    const elt = document.createElement('select');
    if (arg && typeof arg === 'boolean') {
      elt.setAttribute('multiple', 'true');
    }
    self = addElement(elt, this);
    this.elt = elt;
  }
  self.option = function (name, value) {
    let index;

    // if no name is passed, return
    if (name === undefined) {
      return;
    }
    //see if there is already an option with this name
    for (let i = 0; i < this.elt.length; i += 1) {
      if (this.elt[i].textContent === name) {
        index = i;
        break;
      }
    }
    //if there is an option with this name we will modify it
    if (index !== undefined) {
      //if the user passed in false then delete that option
      if (value === false) {
        this.elt.remove(index);
      } else {
        // Update the option at index with the value
        this.elt[index].value = value;
      }
    } else {
      //if it doesn't exist create it
      const opt = document.createElement('option');
      opt.textContent = name;
      opt.value = value === undefined ? name : value;
      this.elt.appendChild(opt);
      this._pInst._elements.push(opt);
    }
  };

  self.selected = function (value) {
    // Update selected status of option
    if (value !== undefined) {
      for (let i = 0; i < this.elt.length; i += 1) {
        if (this.elt[i].value.toString() === value.toString()) {
          this.elt.selectedIndex = i;
        }
      }
      return this;
    } else {
      if (this.elt.getAttribute('multiple')) {
        let arr = [];
        for (const selectedOption of this.elt.selectedOptions) {
          arr.push(selectedOption.value);
        }
        return arr;
      } else {
        return this.elt.value;
      }
    }
  };

  self.disable = function (value) {
    if (typeof value === 'string') {
      for (let i = 0; i < this.elt.length; i++) {
        if (this.elt[i].value.toString() === value) {
          this.elt[i].disabled = true;
          this.elt[i].selected = false;
        }
      }
    } else {
      this.elt.disabled = true;
    }
    return this;
  };

  self.enable = function (value) {
    if (typeof value === 'string') {
      for (let i = 0; i < this.elt.length; i++) {
        if (this.elt[i].value.toString() === value) {
          this.elt[i].disabled = false;
          this.elt[i].selected = false;
        }
      }
    } else {
      this.elt.disabled = false;
      for (let i = 0; i < this.elt.length; i++) {
        this.elt[i].disabled = false;
        this.elt[i].selected = false;
      }
    }
    return this;
  };

  return self;
};

/**
 * Creates a radio button element.
 *
 * The parameter is optional. If a string is passed, as in
 * `let myRadio = createSelect('food')`, then each radio option will
 * have `"food"` as its `name` parameter: `&lt;input name="food"&gt;&lt;/input&gt;`.
 * If an existing `&lt;div&gt;&lt;/div&gt;` or `&lt;span&gt;&lt;/span&gt;`
 * element is passed, as in `let myRadio = createSelect(container)`, it will
 * become the radio button's parent element.
 *
 * Radio buttons extend the <a href="#/p5.Element">p5.Element</a> class with a few
 * helpful methods for managing options:
 * - `myRadio.option(value, [label])` adds an option to the menu. The first paremeter, `value`, is a string that sets the option's value and label. The second parameter, `label`, is optional. If provided, it sets the label displayed for the `value`. If an option with `value` already exists, its label is changed and its value is returned.
 * - `myRadio.value()` returns the currently-selected option's value.
 * - `myRadio.selected()` returns the currently-selected option.
 * - `myRadio.selected(value)` selects the given option and returns it as an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement" target="_blank">`HTMLInputElement`</a>.
 * - `myRadio.disable(shouldDisable)` enables the entire radio button if `true` is passed and disables it if `false` is passed.
 *
 * @method createRadio
 * @param  {Object} [containerElement] container HTML Element, either a `&lt;div&gt;&lt;/div&gt;`
 * or `&lt;span&gt;&lt;/span&gt;`.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * let myRadio;
 *
 * function setup() {
 *   // Create a radio button element and place it
 *   // in the top-left corner.
 *   myRadio = createRadio();
 *   myRadio.position(0, 0);
 *   myRadio.size(60);
 *
 *   // Add a few color options.
 *   myRadio.option('red');
 *   myRadio.option('yellow');
 *   myRadio.option('blue');
 *
 *   // Choose a default option.
 *   myRadio.selected('yellow');
 *
 *   describe('A yellow square with three color options listed, "red", "yellow", and "blue". The square changes color when the user selects a new option.');
 * }
 *
 * function draw() {
 *   // Set the background color using the radio button.
 *   let g = myRadio.value();
 *   background(g);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let myRadio;
 *
 * function setup() {
 *   // Create a radio button element and place it
 *   // in the top-left corner.
 *   myRadio = createRadio();
 *   myRadio.position(0, 0);
 *   myRadio.size(50);
 *
 *   // Add a few color options.
 *   // Color values are labeled with
 *   // emotions they evoke.
 *   myRadio.option('red', 'love');
 *   myRadio.option('yellow', 'joy');
 *   myRadio.option('blue', 'trust');
 *
 *   // Choose a default option.
 *   myRadio.selected('yellow');
 *
 *   describe('A yellow square with three options listed, "love", "joy", and "trust". The square changes color when the user selects a new option.');
 * }
 *
 * function draw() {
 *   // Set the background color using the radio button.
 *   let c = myRadio.value();
 *   background(c);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let myRadio;
 *
 * function setup() {
 *   // Create a radio button element and place it
 *   // in the top-left corner.
 *   myRadio = createRadio();
 *   myRadio.position(0, 0);
 *   myRadio.size(50);
 *
 *   // Add a few color options.
 *   myRadio.option('red');
 *   myRadio.option('yellow');
 *   myRadio.option('blue');
 *
 *   // Choose a default option.
 *   myRadio.selected('yellow');
 *
 *   // Create a button and place it beneath the canvas.
 *   let btn = createButton('disable');
 *   btn.position(0, 100);
 *
 *   // Use the button to disable the radio button.
 *   btn.mousePressed(() => {
 *     myRadio.disable(true);
 *   });
 *
 *   describe('A yellow square with three options listed, "red", "yellow", and "blue". The square changes color when the user selects a new option. A "disable" button beneath the canvas disables the color options when pressed.');
 * }
 *
 * function draw() {
 *   // Set the background color using the radio button.
 *   let c = myRadio.value();
 *   background(c);
 * }
 * </code>
 * </div>
 */
/**
 * @method createRadio
 * @param {String} [name] name parameter assigned to each option's `&lt;input&gt;&lt;/input&gt;` element.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 */
/**
 * @method createRadio
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 */
p5.prototype.createRadio = function(...args) {
  // Creates a div, adds each option as an individual input inside it.
  // If already given with a containerEl, will search for all input[radio]
  // it, create a p5.Element out of it, add options to it and return the p5.Element.

  let self;
  let radioElement;
  let name;
  const arg0 = args[0];
  if (
    arg0 instanceof p5.Element &&
    (arg0.elt instanceof HTMLDivElement || arg0.elt instanceof HTMLSpanElement)
  ) {
    // If given argument is p5.Element of div/span type
    self = arg0;
    this.elt = arg0.elt;
  } else if (
    // If existing radio Element is provided as argument 0
    arg0 instanceof HTMLDivElement ||
    arg0 instanceof HTMLSpanElement
  ) {
    self = addElement(arg0, this);
    this.elt = arg0;
    radioElement = arg0;
    if (typeof args[1] === 'string') name = args[1];
  } else {
    if (typeof arg0 === 'string') name = arg0;
    radioElement = document.createElement('div');
    self = addElement(radioElement, this);
    this.elt = radioElement;
  }
  self._name = name || 'radioOption';

  // setup member functions
  const isRadioInput = el =>
    el instanceof HTMLInputElement && el.type === 'radio';
  const isLabelElement = el => el instanceof HTMLLabelElement;
  const isSpanElement = el => el instanceof HTMLSpanElement;

  self._getOptionsArray = function () {
    return Array.from(this.elt.children)
      .filter(
        el =>
          isRadioInput(el) ||
          (isLabelElement(el) && isRadioInput(el.firstElementChild))
      )
      .map(el => (isRadioInput(el) ? el : el.firstElementChild));
  };

  self.option = function (value, label) {
    // return an option with this value, create if not exists.
    let optionEl;
    for (const option of self._getOptionsArray()) {
      if (option.value === value) {
        optionEl = option;
        break;
      }
    }

    // Create a new option, add it to radioElement and return it.
    if (optionEl === undefined) {
      optionEl = document.createElement('input');
      optionEl.setAttribute('type', 'radio');
      optionEl.setAttribute('value', value);
    }
    optionEl.setAttribute('name', self._name);

    // Check if label element exists, else create it
    let labelElement;
    if (!isLabelElement(optionEl.parentElement)) {
      labelElement = document.createElement('label');
      labelElement.insertAdjacentElement('afterbegin', optionEl);
    } else {
      labelElement = optionEl.parentElement;
    }

    // Check if span element exists, else create it
    let spanElement;
    if (!isSpanElement(labelElement.lastElementChild)) {
      spanElement = document.createElement('span');
      optionEl.insertAdjacentElement('afterend', spanElement);
    } else {
      spanElement = labelElement.lastElementChild;
    }

    // Set the innerHTML of span element as the label text
    spanElement.innerHTML = label === undefined ? value : label;

    // Append the label element, which includes option element and
    // span element to the radio container element
    this.elt.appendChild(labelElement);

    return optionEl;
  };

  self.remove = function (value) {
    for (const optionEl of self._getOptionsArray()) {
      if (optionEl.value === value) {
        if (isLabelElement(optionEl.parentElement)) {
          // Remove parent label which also removes children elements
          optionEl.parentElement.remove();
        } else {
          // Remove the option input if parent label does not exist
          optionEl.remove();
        }
        return;
      }
    }
  };

  self.value = function () {
    let result = '';
    for (const option of self._getOptionsArray()) {
      if (option.checked) {
        result = option.value;
        break;
      }
    }
    return result;
  };

  self.selected = function (value) {
    let result = null;
    if (value === undefined) {
      for (const option of self._getOptionsArray()) {
        if (option.checked) {
          result = option;
          break;
        }
      }
    } else {
      // forEach loop to uncheck all radio buttons before
      // setting any one as checked.
      self._getOptionsArray().forEach(option => {
        option.checked = false;
        option.removeAttribute('checked');
      });

      for (const option of self._getOptionsArray()) {
        if (option.value === value) {
          option.setAttribute('checked', true);
          option.checked = true;
          result = option;
        }
      }
    }
    return result;
  };

  self.disable = function (shouldDisable = true) {
    for (const radioInput of self._getOptionsArray()) {
      radioInput.setAttribute('disabled', shouldDisable);
    }
  };

  return self;
};

/**
 * Creates a color picker element.
 *
 * The parameter, `value`, is optional. If a color string or
 * <a href="#/p5.Color">p5.Color</a> object is passed, it will set the default
 * color.
 *
 * Color pickers extend the <a href="#/p5.Element">p5.Element</a> class with a
 * couple of helpful methods for managing colors:
 * - `myPicker.value()` returns the current color as a hex string in the format `'#rrggbb'`.
 * - `myPicker.color()` returns the current color as a <a href="#/p5.Color">p5.Color</a> object.
 *
 *
 * @method createColorPicker
 * @param {String|p5.Color} [value] default color as a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color" target="_blank">CSS color string</a>.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * let myPicker;
 *
 * function setup() {
 *   myPicker = createColorPicker('deeppink');
 *   myPicker.position(0, 100);
 *
 *   describe('A pink square with a color picker beneath it. The square changes color when the user picks a new color.');
 * }
 *
 * function draw() {
 *   // Use the color picker to paint the background.
 *   let c = myPicker.color();
 *   background(c);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let myPicker;
 *
 * function setup() {
 *   myPicker = createColorPicker('deeppink');
 *   myPicker.position(0, 100);
 *
 *   describe('A number with the format "#rrggbb" is displayed on a pink canvas. The background color and number change when the user picks a new color.');
 * }
 *
 * function draw() {
 *   // Use the color picker to paint the background.
 *   let c = myPicker.value();
 *   background(c);
 *
 *   // Display the current color as a hex string.
 *   text(c, 25, 55);
 * }
 * </code>
 * </div>
 */
p5.prototype.createColorPicker = function (value) {
  p5._validateParameters('createColorPicker', arguments);
  const elt = document.createElement('input');
  let self;
  elt.type = 'color';
  if (value) {
    if (value instanceof p5.Color) {
      elt.value = value.toString('#rrggbb');
    } else {
      p5.prototype._colorMode = 'rgb';
      p5.prototype._colorMaxes = {
        rgb: [255, 255, 255, 255],
        hsb: [360, 100, 100, 1],
        hsl: [360, 100, 100, 1]
      };
      elt.value = p5.prototype.color(value).toString('#rrggbb');
    }
  } else {
    elt.value = '#000000';
  }
  self = addElement(elt, this);
  // Method to return a p5.Color object for the given color.
  self.color = function () {
    if (value) {
      if (value.mode) {
        p5.prototype._colorMode = value.mode;
      }
      if (value.maxes) {
        p5.prototype._colorMaxes = value.maxes;
      }
    }
    return p5.prototype.color(this.elt.value);
  };
  return self;
};

/**
 * Creates a text `&lt;input&gt;&lt;/input&gt;` element. Call `myInput.size()`
 * to set the length of the text box.
 *
 * The first parameter, `value`, is optional. It's a string that sets the
 * input's default value. The input is blank by default.
 *
 * The second parameter, `type`, is also optional. It's a string that
 * specifies the type of text being input. See MDN for a full
 * <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input" target="_blank">list of options</a>.
 * The default is `'text'`.
 *
 * @method createInput
 * @param {String} [value] default value of the input box. Defaults to an empty string `''`.
 * @param {String} [type] type of input. Defaults to `'text'`.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * let myInput;
 *
 * function setup() {
 *   // Create an input element and place it
 *   // beneath the canvas.
 *   myInput = createInput();
 *   myInput.position(0, 100);
 *
 *   describe('A gray square with a text box beneath it. The text in the square changes when the user types something new in the input bar.');
 * }
 *
 * function draw() {
 *   background(200);
 *
 *   // Use the input to display a message.
 *   let msg = myInput.value();
 *   text(msg, 25, 55);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let myInput;
 *
 * function setup() {
 *   // Create an input element and place it
 *   // beneath the canvas. Set its default
 *   // text to "hello!".
 *   myInput = createInput('hello!');
 *   myInput.position(0, 100);
 *
 *   describe('The text "hello!" written at the center of a gray square. A text box beneath the square also says "hello!". The text in the square changes when the user types something new in the input bar.');
 * }
 *
 * function draw() {
 *   background(200);
 *
 *   // Use the input to display a message.
 *   let msg = myInput.value();
 *   text(msg, 25, 55);
 * }
 * </code>
 * </div>
 */
/**
 * @method createInput
 * @param {String} [value]
 * @return {p5.Element}
 */
p5.prototype.createInput = function (value = '', type = 'text') {
  p5._validateParameters('createInput', arguments);
  let elt = document.createElement('input');
  elt.setAttribute('value', value);
  elt.setAttribute('type', type);
  return addElement(elt, this);
};

/**
 * Creates an `&lt;input&gt;&lt;/input&gt;` element of type `'file'`.
 * This allows users to select local files for use in a sketch.
 *
 * The first parameter, `callback`, is a function that's called when the file
 * loads. The callback function should have one parameter, `file`, that's a
 * <a href="#/p5.File">p5.File</a> object.
 *
 * The second parameter, `multiple`, is optional. It's a boolean value that
 * allows loading multiple files if set to `true`. If `true`, `callback`
 * will be called once per file.
 *
 * @method createFileInput
 * @param  {Function} callback function to call once the file loads.
 * @param  {Boolean} [multiple] allow multiple files to be selected.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * // Use the file input to select an image to
 * // load and display.
 * let input;
 * let img;
 *
 * function setup() {
 *   // Create a file input and place it beneath
 *   // the canvas.
 *   input = createFileInput(handleImage);
 *   input.position(0, 100);
 *
 *   describe('A gray square with a file input beneath it. If the user selects an image file to load, it is displayed on the square.');
 * }
 *
 * function draw() {
 *   background(200);
 *
 *   // Draw the image if loaded.
 *   if (img) {
 *     image(img, 0, 0, width, height);
 *   }
 * }
 *
 * // Create an image if the file is an image.
 * function handleImage(file) {
 *   if (file.type === 'image') {
 *     img = createImg(file.data, '');
 *     img.hide();
 *   } else {
 *     img = null;
 *   }
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * // Use the file input to select multiple images
 * // to load and display.
 * let input;
 * let images = [];
 *
 * function setup() {
 *   // Create a file input and place it beneath
 *   // the canvas. Allow it to load multiple files.
 *   input = createFileInput(handleImage, true);
 *   input.position(0, 100);
 * }
 *
 * function draw() {
 *   background(200);
 *
 *   // Draw the images if loaded. Each image
 *   // is drawn 20 pixels lower than the
 *   // previous image.
 *   images.forEach((img, index) => {
 *     let y = index * 20;
 *     image(img, 0, y, width, height);
 *   });
 *
 *   describe('A gray square with a file input beneath it. If the user selects multiple image files to load, they are displayed on the square.');
 * }
 *
 * // Create an image if the file is an image,
 * // then add it to the images array.
 * function handleImage(file) {
 *   if (file.type === 'image') {
 *     let img = createImg(file.data, '');
 *     img.hide();
 *     images.push(img);
 *   }
 * }
 * </code>
 * </div>
 */
p5.prototype.createFileInput = function (callback, multiple = false) {
  p5._validateParameters('createFileInput', arguments);

  const handleFileSelect = function (event) {
    for (const file of event.target.files) {
      p5.File._load(file, callback);
    }
  };

  // If File API's are not supported, throw Error
  if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
    console.log(
      'The File APIs are not fully supported in this browser. Cannot create element.'
    );
    return;
  }

  const fileInput = document.createElement('input');
  fileInput.setAttribute('type', 'file');
  if (multiple) fileInput.setAttribute('multiple', true);
  fileInput.addEventListener('change', handleFileSelect, false);
  return addElement(fileInput, this);
};

/** VIDEO STUFF **/

// Helps perform similar tasks for media element methods.
function createMedia(pInst, type, src, callback) {
  const elt = document.createElement(type);

  // Create source elements from given sources
  src = src || '';
  if (typeof src === 'string') {
    src = [src];
  }
  for (const mediaSource of src) {
    const sourceEl = document.createElement('source');
    sourceEl.setAttribute('src', mediaSource);
    elt.appendChild(sourceEl);
  }

  // If callback is provided, attach to element
  if (typeof callback === 'function') {
    const callbackHandler = () => {
      callback();
      elt.removeEventListener('canplaythrough', callbackHandler);
    };
    elt.addEventListener('canplaythrough', callbackHandler);
  }

  const mediaEl = addElement(elt, pInst, true);
  mediaEl.loadedmetadata = false;

  // set width and height onload metadata
  elt.addEventListener('loadedmetadata', () => {
    mediaEl.width = elt.videoWidth;
    mediaEl.height = elt.videoHeight;

    // set elt width and height if not set
    if (mediaEl.elt.width === 0) mediaEl.elt.width = elt.videoWidth;
    if (mediaEl.elt.height === 0) mediaEl.elt.height = elt.videoHeight;
    if (mediaEl.presetPlaybackRate) {
      mediaEl.elt.playbackRate = mediaEl.presetPlaybackRate;
      delete mediaEl.presetPlaybackRate;
    }
    mediaEl.loadedmetadata = true;
  });

  return mediaEl;
}

/**
 * Creates a `&lt;video&gt;` element for simple audio/video playback.
 * Returns a new <a href="#/p5.MediaElement">p5.MediaElement</a> object.
 *
 * Videos are shown by default. They can be hidden by calling `video.hide()`
 * and drawn to the canvas using <a href="#/p5/image">image()</a>.
 *
 * The first parameter, `src`, is the path the video. If a single string is
 * passed, as in `'assets/topsecret.mp4'`, a single video is loaded. An array
 * of strings can be used to load the same video in different formats. For
 * example, `['assets/topsecret.mp4', 'assets/topsecret.ogv', 'assets/topsecret.webm']`.
 * This is useful for ensuring that the video can play across different browsers with
 * different capabilities. See
 * <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats'>MDN</a>
 * for more information about supported formats.
 *
 * The second parameter, `callback`, is optional. It's a function to call once
 * the video is ready to play.
 *
 * @method createVideo
 * @param  {String|String[]} src path to a video file, or an array of paths for
 *                               supporting different browsers.
 * @param  {Function} [callback] function to call once the video is ready to play.
 * @return {p5.MediaElement}   new <a href="#/p5.MediaElement">p5.MediaElement</a> object.
 * @example
 * <div class='notest'>
 * <code>
 * function setup() {
 *   noCanvas();
 *
 *   // Load a video and add it to the page.
 *   // Note: this may not work in some browsers.
 *   let video = createVideo('assets/small.mp4');
 *   // Show the default video controls.
 *   video.showControls();
 *
 *   describe('A video of a toy robot with playback controls beneath it.');
 * }
 * </code>
 * </div>
 *
 * <div class='notest'>
 * <code>
 * function setup() {
 *   noCanvas();
 *
 *   // Load a video and add it to the page.
 *   // Provide an array options for different file formats.
 *   let video = createVideo(
 *     ['assets/small.mp4', 'assets/small.ogv', 'assets/small.webm']
 *   );
 *   // Show the default video controls.
 *   video.showControls();
 *
 *   describe('A video of a toy robot with playback controls beneath it.');
 * }
 * </code>
 * </div>
 *
 * <div class='notest'>
 * <code>
 * let video;
 *
 * function setup() {
 *   noCanvas();
 *
 *   // Load a video and add it to the page.
 *   // Provide an array options for different file formats.
 *   // Call mute() once the video loads.
 *   video = createVideo(
 *     ['assets/small.mp4', 'assets/small.ogv', 'assets/small.webm'],
 *     muteVideo
 *   );
 *   // Show the default video controls.
 *   video.showControls();
 *
 *   describe('A video of a toy robot with playback controls beneath it.');
 * }
 *
 * // Mute the video once it loads.
 * function muteVideo() {
 *   video.volume(0);
 * }
 * </code>
 * </div>
 */
p5.prototype.createVideo = function (src, callback) {
  p5._validateParameters('createVideo', arguments);
  return createMedia(this, 'video', src, callback);
};

/** AUDIO STUFF **/

/**
 * Creates a hidden `&lt;audio&gt;` element for simple audio playback.
 * Returns a new <a href="#/p5.MediaElement">p5.MediaElement</a> object.
 *
 * The first parameter, `src`, is the path the video. If a single string is
 * passed, as in `'assets/video.mp4'`, a single video is loaded. An array
 * of strings can be used to load the same video in different formats. For
 * example, `['assets/video.mp4', 'assets/video.ogv', 'assets/video.webm']`.
 * This is useful for ensuring that the video can play across different
 * browsers with different capabilities. See
 * <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats" target="_blank">MDN</a>
 * for more information about supported formats.
 *
 * The second parameter, `callback`, is optional. It's a function to call once
 * the audio is ready to play.
 *
 * @method createAudio
 * @param  {String|String[]} [src] path to an audio file, or an array of paths
 *                                 for supporting different browsers.
 * @param  {Function} [callback]   function to call once the audio is ready to play.
 * @return {p5.MediaElement}       new <a href="#/p5.MediaElement">p5.MediaElement</a> object.
 * @example
 * <div class='notest'>
 * <code>
 * function setup() {
 *   noCanvas();
 *
 *   // Load the audio.
 *   let beat = createAudio('assets/beat.mp3');
 *   // Show the default audio controls.
 *   beat.showControls();
 *
 *   describe('An audio  beat plays when the user double-clicks the square.');
 * }
 * </code>
 * </div>
 */
p5.prototype.createAudio = function (src, callback) {
  p5._validateParameters('createAudio', arguments);
  return createMedia(this, 'audio', src, callback);
};

/** CAMERA STUFF **/

p5.prototype.VIDEO = 'video';

p5.prototype.AUDIO = 'audio';

// from: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
// Older browsers might not implement mediaDevices at all, so we set an empty object first
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

// Some browsers partially implement mediaDevices. We can't just assign an object
// with getUserMedia as it would overwrite existing properties.
// Here, we will just add the getUserMedia property if it's missing.
if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function (constraints) {
    // First get ahold of the legacy getUserMedia, if present
    const getUserMedia =
      navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // Some browsers just don't implement it - return a rejected promise with an error
    // to keep a consistent interface
    if (!getUserMedia) {
      return Promise.reject(
        new Error('getUserMedia is not implemented in this browser')
      );
    }

    // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
    return new Promise(function (resolve, reject) {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  };
}

/**
 * Creates a `&lt;video&gt;` element that "captures" the audio/video stream from
 * the webcam and microphone. Returns a new
 * <a href="#/p5.Element">p5.Element</a> object.
 *
 * Videos are shown by default. They can be hidden by calling `capture.hide()`
 * and drawn to the canvas using <a href="#/p5/image">image()</a>.
 *
 * The first parameter, `type`, is optional. It sets the type of capture to
 * use. By default, `createCapture()` captures both audio and video. If `VIDEO`
 * is passed, as in `createCapture(VIDEO)`, only video will be captured.
 * If `AUDIO` is passed, as in `createCapture(AUDIO)`, only audio will be
 * captured. A constraints object can also be passed to customize the stream.
 * See the <a href="http://w3c.github.io/mediacapture-main/getusermedia.html#media-track-constraints" target="_blank">
 * W3C documentation</a> for possible properties. Different browsers support different
 * properties.
 *
 * The second parameter, `callback`, is optional. It's a function to call once
 * the capture is ready for use. The callback function should have one
 * parameter, `stream`, that's a
 * <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaStream" target="_blank">MediaStream</a> object.
 *
 * Note: `createCapture()` only works when running a sketch locally or using HTTPS. Learn more
 * <a href="http://stackoverflow.com/questions/34197653/getusermedia-in-chrome-47-without-using-https" target="_blank">here</a>
 * and <a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia" target="_blank">here</a>.
 *
 * @method createCapture
 * @param  {String|Constant|Object}  [type] type of capture, either AUDIO or VIDEO,
 *                                   or a constraints object. Both video and audio
 *                                   audio streams are captured by default.
 * @param  {Function}                [callback] function to call once the stream
 *                                   has loaded.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div class='notest'>
 * <code>
 * function setup() {
 *   noCanvas();
 *   createCapture(VIDEO);
 *
 *   describe('A video stream from the webcam.');
 * }
 * </code>
 * </div>
 *
 * <div class='notest'>
 * <code>
 * let capture;
 *
 * function setup() {
 *   // Create the video capture and hide the element.
 *   capture = createCapture(VIDEO);
 *   capture.hide();
 *
 *   describe('A video stream from the webcam with inverted colors.');
 * }
 *
 * function draw() {
 *   // Draw the video capture within the canvas.
 *   image(capture, 0, 0, width, width * capture.height / capture.width);
 *   // Invert the colors in the stream.
 *   filter(INVERT);
 * }
 * </code>
 * </div>
 *
 * <div class='notest norender'>
 * <code>
 * function setup() {
 *   createCanvas(480, 120);
 *
 *   // Create a constraints object.
 *   let constraints = {
 *     video: {
 *       mandatory: {
 *         minWidth: 1280,
 *         minHeight: 720
 *       },
 *       optional: [{ maxFrameRate: 10 }]
 *     },
 *     audio: false
 *   };
 *
 *   // Create the video capture.
 *   createCapture(constraints);
 *
 *   describe('A video stream from the webcam.');
 * }
 * </code>
 * </div>
 */
p5.prototype.createCapture = function(...args) {
  p5._validateParameters('createCapture', args);

  // return if getUserMedia is not supported by browser
  if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
    throw new DOMException('getUserMedia not supported in this browser');
  }

  let useVideo = true;
  let useAudio = true;
  let constraints;
  let callback;
  for (const arg of args) {
    if (arg === p5.prototype.VIDEO) useAudio = false;
    else if (arg === p5.prototype.AUDIO) useVideo = false;
    else if (typeof arg === 'object') constraints = arg;
    else if (typeof arg === 'function') callback = arg;
  }
  if (!constraints) constraints = { video: useVideo, audio: useAudio };

  const domElement = document.createElement('video');
  // required to work in iOS 11 & up:
  domElement.setAttribute('playsinline', '');

  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    try {
      if ('srcObject' in domElement) {
        domElement.srcObject = stream;
      } else {
        domElement.src = window.URL.createObjectURL(stream);
      }
    } catch (err) {
      domElement.src = stream;
    }
  }, console.log);

  const videoEl = addElement(domElement, this, true);
  videoEl.loadedmetadata = false;
  // set width and height onload metadata
  domElement.addEventListener('loadedmetadata', function () {
    domElement.play();
    if (domElement.width) {
      videoEl.width = domElement.width;
      videoEl.height = domElement.height;
    } else {
      videoEl.width = videoEl.elt.width = domElement.videoWidth;
      videoEl.height = videoEl.elt.height = domElement.videoHeight;
    }
    videoEl.loadedmetadata = true;

    if (callback) callback(domElement.srcObject);
  });
  return videoEl;
};

/**
 * Creates a new <a href="#/p5.Element">p5.Element</a> object.
 *
 * The first parameter, `tag`, is a string an HTML tag such as `'h5'`.
 *
 * The second parameter, `content`, is optional. It's a string that sets the
 * HTML content to insert into the new element. New elements have no content
 * by default.
 *
 * @method createElement
 * @param  {String} tag tag for the new element.
 * @param  {String} [content] HTML content to insert into the element.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   // Create an h5 element with nothing in it.
 *   createElement('h5');
 *
 *   describe('A gray square.');
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * function setup() {
 *   background(200);
 *
 *   // Create an h5 element with the content
 *   // "p5*js".
 *   let h5 = createElement('h5', 'p5*js');
 *   // Set the element's style and position.
 *   h5.style('color', 'deeppink');
 *   h5.position(30, 15);
 *
 *   describe('The text "p5*js" written in pink in the middle of a gray square.');
 * }
 * </code>
 * </div>
 */
p5.prototype.createElement = function (tag, content) {
  p5._validateParameters('createElement', arguments);
  const elt = document.createElement(tag);
  if (typeof content !== 'undefined') {
    elt.innerHTML = content;
  }
  return addElement(elt, this);
};

// =============================================================================
//                         p5.Element additions
// =============================================================================
/**
 *
 * Adds specified class to the element.
 *
 * @for p5.Element
 * @method addClass
 * @param  {String} class name of class to add
 * @chainable
 * @example
 * <div class='norender'><code>
 * let div = createDiv('div');
 * div.addClass('myClass');
 * </code></div>
 */
p5.Element.prototype.addClass = function (c) {
  if (this.elt.className) {
    if (!this.hasClass(c)) {
      this.elt.className = this.elt.className + ' ' + c;
    }
  } else {
    this.elt.className = c;
  }
  return this;
};

/**
 *
 * Removes specified class from the element.
 *
 * @method removeClass
 * @param  {String} class name of class to remove
 * @chainable
 * @example
 * <div class='norender'><code>
 * // In this example, a class is set when the div is created
 * // and removed when mouse is pressed. This could link up
 * // with a CSS style rule to toggle style properties.
 *
 * let div;
 *
 * function setup() {
 *   div = createDiv('div');
 *   div.addClass('myClass');
 * }
 *
 * function mousePressed() {
 *   div.removeClass('myClass');
 * }
 * </code></div>
 */
p5.Element.prototype.removeClass = function (c) {
  // Note: Removing a class that does not exist does NOT throw an error in classList.remove method
  this.elt.classList.remove(c);
  return this;
};

/**
 *
 * Checks if specified class is already applied to element.
 *
 * @method hasClass
 * @returns {boolean} a boolean value if element has specified class
 * @param c {String} class name of class to check
 * @example
 * <div class='norender'><code>
 * let div;
 *
 * function setup() {
 *   div = createDiv('div');
 *   div.addClass('show');
 * }
 *
 * function mousePressed() {
 *   if (div.hasClass('show')) {
 *     div.addClass('show');
 *   } else {
 *     div.removeClass('show');
 *   }
 * }
 * </code></div>
 */
p5.Element.prototype.hasClass = function (c) {
  return this.elt.classList.contains(c);
};

/**
 *
 * Toggles element class.
 *
 * @method toggleClass
 * @param c {String} class name to toggle
 * @chainable
 * @example
 * <div class='norender'><code>
 * let div;
 *
 * function setup() {
 *   div = createDiv('div');
 *   div.addClass('show');
 * }
 *
 * function mousePressed() {
 *   div.toggleClass('show');
 * }
 * </code></div>
 */
p5.Element.prototype.toggleClass = function (c) {
  // classList also has a toggle() method, but we cannot use that yet as support is unclear.
  // See https://github.com/processing/p5.js/issues/3631
  // this.elt.classList.toggle(c);
  if (this.elt.classList.contains(c)) {
    this.elt.classList.remove(c);
  } else {
    this.elt.classList.add(c);
  }
  return this;
};

/**
 *
 * Attaches the element  as a child to the parent specified.
 * Accepts either a string ID, DOM node, or <a href="#/p5.Element">p5.Element</a>.
 * If no argument is specified, an array of children DOM nodes is returned.
 *
 * @method child
 * @returns {Node[]} an array of child nodes
 * @example
 * <div class='norender'><code>
 * let div0 = createDiv('this is the parent');
 * let div1 = createDiv('this is the child');
 * div0.child(div1); // use p5.Element
 * </code></div>
 * <div class='norender'><code>
 * let div0 = createDiv('this is the parent');
 * let div1 = createDiv('this is the child');
 * div1.id('apples');
 * div0.child('apples'); // use id
 * </code></div>
 * <div class='norender notest'><code>
 * // this example assumes there is a div already on the page
 * // with id "myChildDiv"
 * let div0 = createDiv('this is the parent');
 * let elt = document.getElementById('myChildDiv');
 * div0.child(elt); // use element from page
 * </code></div>
 */
/**
 * @method child
 * @param  {String|p5.Element} [child] the ID, DOM node, or <a href="#/p5.Element">p5.Element</a>
 *                         to add to the current element
 * @chainable
 */
p5.Element.prototype.child = function (childNode) {
  if (typeof childNode === 'undefined') {
    return this.elt.childNodes;
  }
  if (typeof childNode === 'string') {
    if (childNode[0] === '#') {
      childNode = childNode.substring(1);
    }
    childNode = document.getElementById(childNode);
  } else if (childNode instanceof p5.Element) {
    childNode = childNode.elt;
  }

  if (childNode instanceof HTMLElement) {
    this.elt.appendChild(childNode);
  }
  return this;
};

/**
 * Centers a p5.Element either vertically, horizontally,
 * or both, relative to its parent or according to
 * the body if the p5.Element has no parent. If no argument is passed
 * the p5.Element is aligned both vertically and horizontally.
 *
 * @method center
 * @param  {String} [align]       passing 'vertical', 'horizontal' aligns element accordingly
 * @chainable
 *
 * @example
 * <div><code>
 * function setup() {
 *   let div = createDiv('').size(10, 10);
 *   div.style('background-color', 'orange');
 *   div.center();
 * }
 * </code></div>
 */
p5.Element.prototype.center = function (align) {
  const style = this.elt.style.display;
  const hidden = this.elt.style.display === 'none';
  const parentHidden = this.parent().style.display === 'none';
  const pos = { x: this.elt.offsetLeft, y: this.elt.offsetTop };

  if (hidden) this.show();
  if (parentHidden) this.parent().show();
  this.elt.style.display = 'block';

  this.position(0, 0);
  const wOffset = Math.abs(this.parent().offsetWidth - this.elt.offsetWidth);
  const hOffset = Math.abs(this.parent().offsetHeight - this.elt.offsetHeight);

  if (align === 'both' || align === undefined) {
    this.position(
      wOffset / 2 + this.parent().offsetLeft,
      hOffset / 2 + this.parent().offsetTop
    );
  } else if (align === 'horizontal') {
    this.position(wOffset / 2 + this.parent().offsetLeft, pos.y);
  } else if (align === 'vertical') {
    this.position(pos.x, hOffset / 2 + this.parent().offsetTop);
  }

  this.style('display', style);
  if (hidden) this.hide();
  if (parentHidden) this.parent().hide();

  return this;
};

/**
 *
 * If an argument is given, sets the inner HTML of the element,
 * replacing any existing HTML. If true is included as a second
 * argument, HTML is appended instead of replacing existing HTML.
 * If no arguments are given, returns
 * the inner HTML of the element.
 *
 * @for p5.Element
 * @method html
 * @returns {String} the inner HTML of the element
 * @example
 * <div class='norender'><code>
 * let div = createDiv('').size(100, 100);
 * div.html('hi');
 * </code></div>
 * <div class='norender'><code>
 * let div = createDiv('Hello ').size(100, 100);
 * div.html('World', true);
 * </code></div>
 */
/**
 * @method html
 * @param  {String} [html] the HTML to be placed inside the element
 * @param  {boolean} [append] whether to append HTML to existing
 * @chainable
 */
p5.Element.prototype.html = function(...args) {
  if (args.length === 0) {
    return this.elt.innerHTML;
  } else if (args[1]) {
    this.elt.insertAdjacentHTML('beforeend', args[0]);
    return this;
  } else {
    this.elt.innerHTML = args[0];
    return this;
  }
};

/**
 *
 * Sets the position of the element. If no position type argument is given, the
 * position will be relative to (0, 0) of the window.
 * Essentially, this sets position:absolute and left and top
 * properties of style. If an optional third argument specifying position type is given,
 * the x and y-coordinates will be interpreted based on the <a target="_blank"
 * href="https://developer.mozilla.org/en-US/docs/Web/CSS/position">positioning scheme</a>.
 * If no arguments given, the function returns the x and y position of the element.
 *
 * found documentation on how to be more specific with object type
 * https://stackoverflow.com/questions/14714314/how-do-i-comment-object-literals-in-yuidoc
 *
 * @method position
 * @returns {Object} object of form { x: 0, y: 0 } containing the position of the element in an object
 * @example
 * <div><code class='norender'>
 * function setup() {
 *   let cnv = createCanvas(100, 100);
 *   // positions canvas 50px to the right and 100px
 *   // below upper left corner of the window
 *   cnv.position(50, 100);
 * }
 * </code></div>
 * <div><code class='norender'>
 * function setup() {
 *   let cnv = createCanvas(100, 100);
 *   // positions canvas at upper left corner of the window
 *   // with a 'fixed' position type
 *   cnv.position(0, 0, 'fixed');
 * }
 * </code></div>
 */
/**
 * @method position
 * @param  {Number} [x] x-position relative to upper left of window (optional)
 * @param  {Number} [y] y-position relative to upper left of window (optional)
 * @param  {String} [positionType] it can be static, fixed, relative, sticky, initial or inherit (optional)
 * @chainable
 */
p5.Element.prototype.position = function(...args) {
  if (args.length === 0) {
    return { x: this.elt.offsetLeft, y: this.elt.offsetTop };
  } else {
    let positionType = 'absolute';
    if (
      args[2] === 'static' ||
      args[2] === 'fixed' ||
      args[2] === 'relative' ||
      args[2] === 'sticky' ||
      args[2] === 'initial' ||
      args[2] === 'inherit'
    ) {
      positionType = args[2];
    }
    this.elt.style.position = positionType;
    this.elt.style.left = args[0] + 'px';
    this.elt.style.top = args[1] + 'px';
    this.x = args[0];
    this.y = args[1];
    return this;
  }
};

/* Helper method called by p5.Element.style() */
p5.Element.prototype._translate = function(...args) {
  this.elt.style.position = 'absolute';
  // save out initial non-translate transform styling
  let transform = '';
  if (this.elt.style.transform) {
    transform = this.elt.style.transform.replace(/translate3d\(.*\)/g, '');
    transform = transform.replace(/translate[X-Z]?\(.*\)/g, '');
  }
  if (args.length === 2) {
    this.elt.style.transform =
      'translate(' + args[0] + 'px, ' + args[1] + 'px)';
  } else if (args.length > 2) {
    this.elt.style.transform =
      'translate3d(' +
      args[0] +
      'px,' +
      args[1] +
      'px,' +
      args[2] +
      'px)';
    if (args.length === 3) {
      this.elt.parentElement.style.perspective = '1000px';
    } else {
      this.elt.parentElement.style.perspective = args[3] + 'px';
    }
  }
  // add any extra transform styling back on end
  this.elt.style.transform += transform;
  return this;
};

/* Helper method called by p5.Element.style() */
p5.Element.prototype._rotate = function(...args) {
  // save out initial non-rotate transform styling
  let transform = '';
  if (this.elt.style.transform) {
    transform = this.elt.style.transform.replace(/rotate3d\(.*\)/g, '');
    transform = transform.replace(/rotate[X-Z]?\(.*\)/g, '');
  }

  if (args.length === 1) {
    this.elt.style.transform = 'rotate(' + args[0] + 'deg)';
  } else if (args.length === 2) {
    this.elt.style.transform =
      'rotate(' + args[0] + 'deg, ' + args[1] + 'deg)';
  } else if (args.length === 3) {
    this.elt.style.transform = 'rotateX(' + args[0] + 'deg)';
    this.elt.style.transform += 'rotateY(' + args[1] + 'deg)';
    this.elt.style.transform += 'rotateZ(' + args[2] + 'deg)';
  }
  // add remaining transform back on
  this.elt.style.transform += transform;
  return this;
};

/**
 * Sets the given style (CSS) property (1st arg) of the element with the
 * given value (2nd arg). If a single argument is given, .style()
 * returns the value of the given property; however, if a single argument
 * is given in CSS syntax ('text-align:center'), .style() sets the CSS
 * appropriately.
 *
 * @method style
 * @param  {String} property   property to be set
 * @returns {String} value of property
 * @example
 * <div><code class='norender'>
 * let myDiv = createDiv('I like pandas.');
 * myDiv.style('font-size', '18px');
 * myDiv.style('color', '#ff0000');
 * myDiv.position(0, 0);
 * </code></div>
 * <div><code class='norender'>
 * let col = color(25, 23, 200, 50);
 * let button = createButton('button');
 * button.style('background-color', col);
 * button.position(0, 0);
 * </code></div>
 * <div><code class='norender'>
 * let myDiv, fontSize;
 * function setup() {
 *   background(200);
 *   myDiv = createDiv('I like gray.');
 *   myDiv.position(0, 0);
 *   myDiv.style('z-index', 10);
 * }
 *
 * function draw() {
 *   fontSize = min(mouseX, 90);
 *   myDiv.style('font-size', fontSize + 'px');
 * }
 * </code></div>
 */
/**
 * @method style
 * @param  {String} property
 * @param  {String|p5.Color} value     value to assign to property
 * @return {String} current value of property, if no value is given as second argument
 * @chainable
 */
p5.Element.prototype.style = function (prop, val) {
  const self = this;

  if (val instanceof p5.Color) {
    val =
      'rgba(' +
      val.levels[0] +
      ',' +
      val.levels[1] +
      ',' +
      val.levels[2] +
      ',' +
      val.levels[3] / 255 +
      ')';
  }

  if (typeof val === 'undefined') {
    if (prop.indexOf(':') === -1) {
      // no value set, so assume requesting a value
      let styles = window.getComputedStyle(self.elt);
      let style = styles.getPropertyValue(prop);
      return style;
    } else {
      // value set using `:` in a single line string
      const attrs = prop.split(';');
      for (let i = 0; i < attrs.length; i++) {
        const parts = attrs[i].split(':');
        if (parts[0] && parts[1]) {
          this.elt.style[parts[0].trim()] = parts[1].trim();
        }
      }
    }
  } else {
    // input provided as key,val pair
    this.elt.style[prop] = val;
    if (
      prop === 'width' ||
      prop === 'height' ||
      prop === 'left' ||
      prop === 'top'
    ) {
      let styles = window.getComputedStyle(self.elt);
      let styleVal = styles.getPropertyValue(prop);
      let numVal = styleVal.replace(/[^\d.]/g, '');
      this[prop] = Math.round(parseFloat(numVal, 10));
    }
  }
  return this;
};

/**
 *
 * Adds a new attribute or changes the value of an existing attribute
 * on the specified element. If no value is specified, returns the
 * value of the given attribute, or null if the attribute is not set.
 *
 * @method attribute
 * @return {String} value of attribute
 *
 * @example
 * <div class='norender'><code>
 * let myDiv = createDiv('I like pandas.');
 * myDiv.attribute('align', 'center');
 * </code></div>
 */
/**
 * @method attribute
 * @param  {String} attr       attribute to set
 * @param  {String} value      value to assign to attribute
 * @chainable
 */
p5.Element.prototype.attribute = function (attr, value) {
  //handling for checkboxes and radios to ensure options get
  //attributes not divs
  if (
    this.elt.firstChild != null &&
    (this.elt.firstChild.type === 'checkbox' ||
      this.elt.firstChild.type === 'radio')
  ) {
    if (typeof value === 'undefined') {
      return this.elt.firstChild.getAttribute(attr);
    } else {
      for (let i = 0; i < this.elt.childNodes.length; i++) {
        this.elt.childNodes[i].setAttribute(attr, value);
      }
    }
  } else if (typeof value === 'undefined') {
    return this.elt.getAttribute(attr);
  } else {
    this.elt.setAttribute(attr, value);
    return this;
  }
};

/**
 *
 * Removes an attribute on the specified element.
 *
 * @method removeAttribute
 * @param  {String} attr       attribute to remove
 * @chainable
 *
 * @example
 * <div><code>
 * let button;
 * let checkbox;
 *
 * function setup() {
 *   checkbox = createCheckbox('enable', true);
 *   checkbox.changed(enableButton);
 *   button = createButton('button');
 *   button.position(10, 10);
 * }
 *
 * function enableButton() {
 *   if (this.checked()) {
 *     // Re-enable the button
 *     button.removeAttribute('disabled');
 *   } else {
 *     // Disable the button
 *     button.attribute('disabled', '');
 *   }
 * }
 * </code></div>
 */
p5.Element.prototype.removeAttribute = function (attr) {
  if (
    this.elt.firstChild != null &&
    (this.elt.firstChild.type === 'checkbox' ||
      this.elt.firstChild.type === 'radio')
  ) {
    for (let i = 0; i < this.elt.childNodes.length; i++) {
      this.elt.childNodes[i].removeAttribute(attr);
    }
  }
  this.elt.removeAttribute(attr);
  return this;
};

/**
 * Either returns the value of the element if no arguments
 * given, or sets the value of the element.
 *
 * @method value
 * @return {String|Number} value of the element
 * @example
 * <div class='norender'><code>
 * // gets the value
 * let inp;
 * function setup() {
 *   inp = createInput('');
 * }
 *
 * function mousePressed() {
 *   print(inp.value());
 * }
 * </code></div>
 * <div class='norender'><code>
 * // sets the value
 * let inp;
 * function setup() {
 *   inp = createInput('myValue');
 * }
 *
 * function mousePressed() {
 *   inp.value('myValue');
 * }
 * </code></div>
 */
/**
 * @method value
 * @param  {String|Number}     value
 * @chainable
 */
p5.Element.prototype.value = function(...args) {
  if (args.length > 0) {
    this.elt.value = args[0];
    return this;
  } else {
    if (this.elt.type === 'range') {
      return parseFloat(this.elt.value);
    } else return this.elt.value;
  }
};

/**
 *
 * Shows the current element. Essentially, setting display:block for the style.
 *
 * @method show
 * @chainable
 * @example
 * <div class='norender'><code>
 * let div = createDiv('div');
 * div.style('display', 'none');
 * div.show(); // turns display to block
 * </code></div>
 */
p5.Element.prototype.show = function () {
  this.elt.style.display = 'block';
  return this;
};

/**
 * Hides the current element. Essentially, setting display:none for the style.
 *
 * @method hide
 * @chainable
 * @example
 * <div class='norender'><code>
 * let div = createDiv('this is a div');
 * div.hide();
 * </code></div>
 */
p5.Element.prototype.hide = function () {
  this.elt.style.display = 'none';
  return this;
};

/**
 *
 * Sets the width and height of the element. AUTO can be used to
 * only adjust one dimension at a time. If no arguments are given, it
 * returns the width and height of the element in an Object. In the case of
 * elements that need to be loaded, such as images, it is recommended
 * to call the function after the element has finished loading.
 *
 * @method size
 * @return {Object} the width and height of the element in an object
 * @example
 * <div class='norender'><code>
 * let div = createDiv('this is a div');
 * div.size(100, 100);
 * let img = createImg(
 *   'assets/rockies.jpg',
 *   'A tall mountain with a small forest and field in front of it on a sunny day',
 *   '',
 *   () => {
 *     img.size(10, AUTO);
 *   }
 * );
 * </code></div>
 */
/**
 * @method size
 * @param  {Number|Constant} w    width of the element, either AUTO, or a number
 * @param  {Number|Constant} [h] height of the element, either AUTO, or a number
 * @chainable
 */
p5.Element.prototype.size = function (w, h) {
  if (arguments.length === 0) {
    return { width: this.elt.offsetWidth, height: this.elt.offsetHeight };
  } else {
    let aW = w;
    let aH = h;
    const AUTO = p5.prototype.AUTO;
    if (aW !== AUTO || aH !== AUTO) {
      if (aW === AUTO) {
        aW = h * this.width / this.height;
      } else if (aH === AUTO) {
        aH = w * this.height / this.width;
      }
      // set diff for cnv vs normal div
      if (this.elt instanceof HTMLCanvasElement) {
        const j = {};
        const k = this.elt.getContext('2d');
        let prop;
        for (prop in k) {
          j[prop] = k[prop];
        }
        this.elt.setAttribute('width', aW * this._pInst._pixelDensity);
        this.elt.setAttribute('height', aH * this._pInst._pixelDensity);
        this.elt.style.width = aW + 'px';
        this.elt.style.height = aH + 'px';
        this._pInst.scale(this._pInst._pixelDensity, this._pInst._pixelDensity);
        for (prop in j) {
          this.elt.getContext('2d')[prop] = j[prop];
        }
      } else {
        this.elt.style.width = aW + 'px';
        this.elt.style.height = aH + 'px';
        this.elt.width = aW;
        this.elt.height = aH;
      }

      this.width = this.elt.offsetWidth;
      this.height = this.elt.offsetHeight;

      if (this._pInst && this._pInst._curElement) {
        // main canvas associated with p5 instance
        if (this._pInst._curElement.elt === this.elt) {
          this._pInst._setProperty('width', this.elt.offsetWidth);
          this._pInst._setProperty('height', this.elt.offsetHeight);
        }
      }
    }
    return this;
  }
};

/**
 * Removes the element, stops all media streams, and deregisters all listeners.
 * @method remove
 * @example
 * <div class='norender'><code>
 * let myDiv = createDiv('this is some text');
 * myDiv.remove();
 * </code></div>
 */
p5.Element.prototype.remove = function () {
  // stop all audios/videos and detach all devices like microphone/camera etc
  // used as input/output for audios/videos.
  if (this instanceof p5.MediaElement) {
    this.stop();
    const sources = this.elt.srcObject;
    if (sources !== null) {
      const tracks = sources.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
    }
  }

  // delete the reference in this._pInst._elements
  const index = this._pInst._elements.indexOf(this);
  if (index !== -1) {
    this._pInst._elements.splice(index, 1);
  }

  // deregister events
  for (let ev in this._events) {
    this.elt.removeEventListener(ev, this._events[ev]);
  }
  if (this.elt && this.elt.parentNode) {
    this.elt.parentNode.removeChild(this.elt);
  }
};

/**
 * Registers a callback that gets called every time a file that is
 * dropped on the element has been loaded.
 * p5 will load every dropped file into memory and pass it as a p5.File object to the callback.
 * Multiple files dropped at the same time will result in multiple calls to the callback.
 *
 * You can optionally pass a second callback which will be registered to the raw
 * <a href="https://developer.mozilla.org/en-US/docs/Web/Events/drop">drop</a> event.
 * The callback will thus be provided the original
 * <a href="https://developer.mozilla.org/en-US/docs/Web/API/DragEvent">DragEvent</a>.
 * Dropping multiple files at the same time will trigger the second callback once per drop,
 * whereas the first callback will trigger for each loaded file.
 *
 * @method drop
 * @param  {Function} callback  callback to receive loaded file, called for each file dropped.
 * @param  {Function} [fxn]     callback triggered once when files are dropped with the drop event.
 * @chainable
 * @example
 * <div><code>
 * function setup() {
 *   let c = createCanvas(100, 100);
 *   background(200);
 *   textAlign(CENTER);
 *   text('drop file', width / 2, height / 2);
 *   c.drop(gotFile);
 * }
 *
 * function gotFile(file) {
 *   background(200);
 *   text('received file:', width / 2, height / 2);
 *   text(file.name, width / 2, height / 2 + 50);
 * }
 * </code></div>
 *
 * <div><code>
 * let img;
 *
 * function setup() {
 *   let c = createCanvas(100, 100);
 *   background(200);
 *   textAlign(CENTER);
 *   text('drop image', width / 2, height / 2);
 *   c.drop(gotFile);
 * }
 *
 * function draw() {
 *   if (img) {
 *     image(img, 0, 0, width, height);
 *   }
 * }
 *
 * function gotFile(file) {
 *   img = createImg(file.data, '').hide();
 * }
 * </code></div>
 *
 * @alt
 * Canvas turns into whatever image is dragged/dropped onto it.
 */
p5.Element.prototype.drop = function (callback, fxn) {
  // Is the file stuff supported?
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    if (!this._dragDisabled) {
      this._dragDisabled = true;

      const preventDefault = function (evt) {
        evt.preventDefault();
      };

      // If you want to be able to drop you've got to turn off
      // a lot of default behavior.
      // avoid `attachListener` here, since it overrides other handlers.
      this.elt.addEventListener('dragover', preventDefault);

      // If this is a drag area we need to turn off the default behavior
      this.elt.addEventListener('dragleave', preventDefault);
    }

    // Deal with the files
    p5.Element._attachListener(
      'drop',
      function (evt) {
        evt.preventDefault();
        // Call the second argument as a callback that receives the raw drop event
        if (typeof fxn === 'function') {
          fxn.call(this, evt);
        }
        // A FileList
        const files = evt.dataTransfer.files;

        // Load each one and trigger the callback
        for (const f of files) {
          p5.File._load(f, callback);
        }
      },
      this
    );
  } else {
    console.log('The File APIs are not fully supported in this browser.');
  }

  return this;
};

/*** SCHEDULE EVENTS ***/

// Cue inspired by JavaScript setTimeout, and the
// Tone.js Transport Timeline Event, MIT License Yotam Mann 2015 tonejs.org
// eslint-disable-next-line no-unused-vars
class Cue {
  constructor(callback, time, id, val) {
    this.callback = callback;
    this.time = time;
    this.id = id;
    this.val = val;
  }
}

// =============================================================================
//                         p5.MediaElement additions
// =============================================================================

/**
 * Extends <a href="#/p5.Element">p5.Element</a> to handle audio and video. In addition to the methods
 * of <a href="#/p5.Element">p5.Element</a>, it also contains methods for controlling media. It is not
 * called directly, but <a href="#/p5.MediaElement">p5.MediaElement</a>s are created by calling <a href="#/p5/createVideo">createVideo</a>,
 * <a href="#/p5/createAudio">createAudio</a>, and <a href="#/p5/createCapture">createCapture</a>.
 *
 * @class p5.MediaElement
 * @constructor
 * @param {String} elt DOM node that is wrapped
 * @extends p5.Element
 */
class MediaElement extends p5.Element {
  constructor(elt, pInst) {
    super(elt, pInst);

    const self = this;
    this.elt.crossOrigin = 'anonymous';

    this._prevTime = 0;
    this._cueIDCounter = 0;
    this._cues = [];
    this.pixels = [];
    this._pixelsState = this;
    this._pixelDensity = 1;
    this._modified = false;

    // Media has an internal canvas that is used when drawing it to the main
    // canvas. It will need to be updated each frame as the video itself plays.
    // We don't want to update it every time we draw, however, in case the user
    // has used load/updatePixels. To handle this, we record the frame drawn to
    // the internal canvas so we only update it if the frame has changed.
    this._frameOnCanvas = -1;

    /**
     * Path to the media element source.
     *
     * @property src
     * @return {String} src
     * @example
     * <div><code>
     * let ele;
     *
     * function setup() {
     *   background(250);
     *
     *   //p5.MediaElement objects are usually created
     *   //by calling the createAudio(), createVideo(),
     *   //and createCapture() functions.
     *
     *   //In this example we create
     *   //a new p5.MediaElement via createAudio().
     *   ele = createAudio('assets/beat.mp3');
     *
     *   //We'll set up our example so that
     *   //when you click on the text,
     *   //an alert box displays the MediaElement's
     *   //src field.
     *   textAlign(CENTER);
     *   text('Click Me!', width / 2, height / 2);
     * }
     *
     * function mouseClicked() {
     *   //here we test if the mouse is over the
     *   //canvas element when it's clicked
     *   if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
     *     //Show our p5.MediaElement's src field
     *     alert(ele.src);
     *   }
     * }
     * </code></div>
     */
    Object.defineProperty(self, 'src', {
      get() {
        const firstChildSrc = self.elt.children[0].src;
        const srcVal = self.elt.src === window.location.href ? '' : self.elt.src;
        const ret =
          firstChildSrc === window.location.href ? srcVal : firstChildSrc;
        return ret;
      },
      set(newValue) {
        for (let i = 0; i < self.elt.children.length; i++) {
          self.elt.removeChild(self.elt.children[i]);
        }
        const source = document.createElement('source');
        source.src = newValue;
        elt.appendChild(source);
        self.elt.src = newValue;
        self.modified = true;
      }
    });

    // private _onended callback, set by the method: onended(callback)
    self._onended = function () { };
    self.elt.onended = function () {
      self._onended(self);
    };
  }


  /**
   * Play an HTML5 media element.
   *
   * @method play
   * @chainable
   * @example
   * <div><code>
   * let ele;
   *
   * function setup() {
   *   //p5.MediaElement objects are usually created
   *   //by calling the createAudio(), createVideo(),
   *   //and createCapture() functions.
   *
   *   //In this example we create
   *   //a new p5.MediaElement via createAudio().
   *   ele = createAudio('assets/beat.mp3');
   *
   *   background(250);
   *   textAlign(CENTER);
   *   text('Click to Play!', width / 2, height / 2);
   * }
   *
   * function mouseClicked() {
   *   //here we test if the mouse is over the
   *   //canvas element when it's clicked
   *   if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
   *     //Here we call the play() function on
   *     //the p5.MediaElement we created above.
   *     //This will start the audio sample.
   *     ele.play();
   *
   *     background(200);
   *     text('You clicked Play!', width / 2, height / 2);
   *   }
   * }
   * </code></div>
   */
  play() {
    if (this.elt.currentTime === this.elt.duration) {
      this.elt.currentTime = 0;
    }
    let promise;
    if (this.elt.readyState > 1) {
      promise = this.elt.play();
    } else {
      // in Chrome, playback cannot resume after being stopped and must reload
      this.elt.load();
      promise = this.elt.play();
    }
    if (promise && promise.catch) {
      promise.catch(e => {
        // if it's an autoplay failure error
        if (e.name === 'NotAllowedError') {
          if (typeof IS_MINIFIED === 'undefined') {
            p5._friendlyAutoplayError(this.src);
          } else {
            console.error(e);
          }
        } else {
          // any other kind of error
          console.error('Media play method encountered an unexpected error', e);
        }
      });
    }
    return this;
  }

  /**
   * Stops an HTML5 media element (sets current time to zero).
   *
   * @method stop
   * @chainable
   * @example
   * <div><code>
   * //This example both starts
   * //and stops a sound sample
   * //when the user clicks the canvas
   *
   * //We will store the p5.MediaElement
   * //object in here
   * let ele;
   *
   * //while our audio is playing,
   * //this will be set to true
   * let sampleIsPlaying = false;
   *
   * function setup() {
   *   //Here we create a p5.MediaElement object
   *   //using the createAudio() function.
   *   ele = createAudio('assets/beat.mp3');
   *   background(200);
   *   textAlign(CENTER);
   *   text('Click to play!', width / 2, height / 2);
   * }
   *
   * function mouseClicked() {
   *   //here we test if the mouse is over the
   *   //canvas element when it's clicked
   *   if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
   *     background(200);
   *
   *     if (sampleIsPlaying) {
   *       //if the sample is currently playing
   *       //calling the stop() function on
   *       //our p5.MediaElement will stop
   *       //it and reset its current
   *       //time to 0 (i.e. it will start
   *       //at the beginning the next time
   *       //you play it)
   *       ele.stop();
   *
   *       sampleIsPlaying = false;
   *       text('Click to play!', width / 2, height / 2);
   *     } else {
   *       //loop our sound element until we
   *       //call ele.stop() on it.
   *       ele.loop();
   *
   *       sampleIsPlaying = true;
   *       text('Click to stop!', width / 2, height / 2);
   *     }
   *   }
   * }
   * </code></div>
   */
  stop() {
    this.elt.pause();
    this.elt.currentTime = 0;
    return this;
  }

  /**
   * Pauses an HTML5 media element.
   *
   * @method pause
   * @chainable
   * @example
   * <div><code>
   * //This example both starts
   * //and pauses a sound sample
   * //when the user clicks the canvas
   *
   * //We will store the p5.MediaElement
   * //object in here
   * let ele;
   *
   * //while our audio is playing,
   * //this will be set to true
   * let sampleIsPlaying = false;
   *
   * function setup() {
   *   //Here we create a p5.MediaElement object
   *   //using the createAudio() function.
   *   ele = createAudio('assets/lucky_dragons.mp3');
   *   background(200);
   *   textAlign(CENTER);
   *   text('Click to play!', width / 2, height / 2);
   * }
   *
   * function mouseClicked() {
   *   //here we test if the mouse is over the
   *   //canvas element when it's clicked
   *   if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
   *     background(200);
   *
   *     if (sampleIsPlaying) {
   *       //Calling pause() on our
   *       //p5.MediaElement will stop it
   *       //playing, but when we call the
   *       //loop() or play() functions
   *       //the sample will start from
   *       //where we paused it.
   *       ele.pause();
   *
   *       sampleIsPlaying = false;
   *       text('Click to resume!', width / 2, height / 2);
   *     } else {
   *       //loop our sound element until we
   *       //call ele.pause() on it.
   *       ele.loop();
   *
   *       sampleIsPlaying = true;
   *       text('Click to pause!', width / 2, height / 2);
   *     }
   *   }
   * }
   * </code></div>
   */
  pause() {
    this.elt.pause();
    return this;
  }

  /**
   * Set 'loop' to true for an HTML5 media element, and starts playing.
   *
   * @method loop
   * @chainable
   * @example
   * <div><code>
   * //Clicking the canvas will loop
   * //the audio sample until the user
   * //clicks again to stop it
   *
   * //We will store the p5.MediaElement
   * //object in here
   * let ele;
   *
   * //while our audio is playing,
   * //this will be set to true
   * let sampleIsLooping = false;
   *
   * function setup() {
   *   //Here we create a p5.MediaElement object
   *   //using the createAudio() function.
   *   ele = createAudio('assets/lucky_dragons.mp3');
   *   background(200);
   *   textAlign(CENTER);
   *   text('Click to loop!', width / 2, height / 2);
   * }
   *
   * function mouseClicked() {
   *   //here we test if the mouse is over the
   *   //canvas element when it's clicked
   *   if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
   *     background(200);
   *
   *     if (!sampleIsLooping) {
   *       //loop our sound element until we
   *       //call ele.stop() on it.
   *       ele.loop();
   *
   *       sampleIsLooping = true;
   *       text('Click to stop!', width / 2, height / 2);
   *     } else {
   *       ele.stop();
   *
   *       sampleIsLooping = false;
   *       text('Click to loop!', width / 2, height / 2);
   *     }
   *   }
   * }
   * </code></div>
   */
  loop() {
    this.elt.setAttribute('loop', true);
    this.play();
    return this;
  }
  /**
   * Set 'loop' to false for an HTML5 media element. Element will stop
   * when it reaches the end.
   *
   * @method noLoop
   * @chainable
   * @example
   * <div><code>
   * //This example both starts
   * //and stops loop of sound sample
   * //when the user clicks the canvas
   *
   * //We will store the p5.MediaElement
   * //object in here
   * let ele;
   * //while our audio is playing,
   * //this will be set to true
   * let sampleIsPlaying = false;
   *
   * function setup() {
   *   //Here we create a p5.MediaElement object
   *   //using the createAudio() function.
   *   ele = createAudio('assets/beat.mp3');
   *   background(200);
   *   textAlign(CENTER);
   *   text('Click to play!', width / 2, height / 2);
   * }
   *
   * function mouseClicked() {
   *   //here we test if the mouse is over the
   *   //canvas element when it's clicked
   *   if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
   *     background(200);
   *
   *     if (sampleIsPlaying) {
   *       ele.noLoop();
   *       sampleIsPlaying = false;
   *       text('No more Loops!', width / 2, height / 2);
   *     } else {
   *       ele.loop();
   *       sampleIsPlaying = true;
   *       text('Click to stop looping!', width / 2, height / 2);
   *     }
   *   }
   * }
   * </code></div>
   */
  noLoop() {
    this.elt.removeAttribute('loop');
    return this;
  }

  /**
   * Sets up logic to check that autoplay succeeded.
   *
   * @method setupAutoplayFailDetection
   * @private
   */
  _setupAutoplayFailDetection() {
    const timeout = setTimeout(() => {
      if (typeof IS_MINIFIED === 'undefined') {
        p5._friendlyAutoplayError(this.src);
      } else {
        console.error(e);
      }
    }, 500);
    this.elt.addEventListener('play', () => clearTimeout(timeout), {
      passive: true,
      once: true
    });
  }

  /**
   * Set HTML5 media element to autoplay or not. If no argument is specified, by
   * default it will autoplay.
   *
   * @method autoplay
   * @param {Boolean} shouldAutoplay whether the element should autoplay
   * @chainable
   * @example
   * <div><code>
   * let videoElement;
   * function setup() {
   *   noCanvas();
   *   videoElement = createVideo(['assets/small.mp4'], onVideoLoad);
   * }
   * function onVideoLoad() {
   *   // The media will play as soon as it is loaded.
   *   videoElement.autoplay();
   *   videoElement.volume(0);
   *   videoElement.size(100, 100);
   * }
   * </code></div>
   *
   * <div><code>
   * let videoElement;
   * function setup() {
   *   noCanvas();
   *   videoElement = createVideo(['assets/small.mp4'], onVideoLoad);
   * }
   * function onVideoLoad() {
   *   // The media will not play until some explicitly triggered.
   *   videoElement.autoplay(false);
   *   videoElement.volume(0);
   *   videoElement.size(100, 100);
   * }
   *
   * function mouseClicked() {
   *   videoElement.play();
   * }
   * </code></div>
   *
   * @alt
   * An example of a video element which autoplays after it is loaded.
   * An example of a video element which waits for a trigger for playing.
   */

  autoplay(val) {
    const oldVal = this.elt.getAttribute('autoplay');
    this.elt.setAttribute('autoplay', val);
    // if we turned on autoplay
    if (val && !oldVal) {
      // bind method to this scope
      const setupAutoplayFailDetection =
        () => this._setupAutoplayFailDetection();
      // if media is ready to play, schedule check now
      if (this.elt.readyState === 4) {
        setupAutoplayFailDetection();
      } else {
        // otherwise, schedule check whenever it is ready
        this.elt.addEventListener('canplay', setupAutoplayFailDetection, {
          passive: true,
          once: true
        });
      }
    }

    return this;
  }

  /**
   * Sets volume for this HTML5 media element. If no argument is given,
   * returns the current volume.
   *
   * @method volume
   * @return {Number} current volume
   *
   * @example
   * <div><code>
   * let ele;
   * function setup() {
   *   // p5.MediaElement objects are usually created
   *   // by calling the createAudio(), createVideo(),
   *   // and createCapture() functions.
   *   // In this example we create
   *   // a new p5.MediaElement via createAudio().
   *   ele = createAudio('assets/lucky_dragons.mp3');
   *   background(250);
   *   textAlign(CENTER);
   *   text('Click to Play!', width / 2, height / 2);
   * }
   * function mouseClicked() {
   *   // Here we call the volume() function
   *   // on the sound element to set its volume
   *   // Volume must be between 0.0 and 1.0
   *   ele.volume(0.2);
   *   ele.play();
   *   background(200);
   *   text('You clicked Play!', width / 2, height / 2);
   * }
   * </code></div>
   * <div><code>
   * let audio;
   * let counter = 0;
   *
   * function loaded() {
   *   audio.play();
   * }
   *
   * function setup() {
   *   audio = createAudio('assets/lucky_dragons.mp3', loaded);
   *   textAlign(CENTER);
   * }
   *
   * function draw() {
   *   if (counter === 0) {
   *     background(0, 255, 0);
   *     text('volume(0.9)', width / 2, height / 2);
   *   } else if (counter === 1) {
   *     background(255, 255, 0);
   *     text('volume(0.5)', width / 2, height / 2);
   *   } else if (counter === 2) {
   *     background(255, 0, 0);
   *     text('volume(0.1)', width / 2, height / 2);
   *   }
   * }
   *
   * function mousePressed() {
   *   counter++;
   *   if (counter === 0) {
   *     audio.volume(0.9);
   *   } else if (counter === 1) {
   *     audio.volume(0.5);
   *   } else if (counter === 2) {
   *     audio.volume(0.1);
   *   } else {
   *     counter = 0;
   *     audio.volume(0.9);
   *   }
   * }
   * </code>
   * </div>
   */
  /**
   * @method volume
   * @param {Number}            val volume between 0.0 and 1.0
   * @chainable
   */
  volume(val) {
    if (typeof val === 'undefined') {
      return this.elt.volume;
    } else {
      this.elt.volume = val;
    }
  }

  /**
   * If no arguments are given, returns the current playback speed of the
   * element. The speed parameter sets the speed where 2.0 will play the
   * element twice as fast, 0.5 will play at half the speed, and -1 will play
   * the element in normal speed in reverse.(Note that not all browsers support
   * backward playback and even if they do, playback might not be smooth.)
   *
   * @method speed
   * @return {Number} current playback speed of the element
   *
   * @example
   * <div class='norender notest'><code>
   * //Clicking the canvas will loop
   * //the audio sample until the user
   * //clicks again to stop it
   *
   * //We will store the p5.MediaElement
   * //object in here
   * let ele;
   * let button;
   *
   * function setup() {
   *   createCanvas(710, 400);
   *   //Here we create a p5.MediaElement object
   *   //using the createAudio() function.
   *   ele = createAudio('assets/beat.mp3');
   *   ele.loop();
   *   background(200);
   *
   *   button = createButton('2x speed');
   *   button.position(100, 68);
   *   button.mousePressed(twice_speed);
   *
   *   button = createButton('half speed');
   *   button.position(200, 68);
   *   button.mousePressed(half_speed);
   *
   *   button = createButton('reverse play');
   *   button.position(300, 68);
   *   button.mousePressed(reverse_speed);
   *
   *   button = createButton('STOP');
   *   button.position(400, 68);
   *   button.mousePressed(stop_song);
   *
   *   button = createButton('PLAY!');
   *   button.position(500, 68);
   *   button.mousePressed(play_speed);
   * }
   *
   * function twice_speed() {
   *   ele.speed(2);
   * }
   *
   * function half_speed() {
   *   ele.speed(0.5);
   * }
   *
   * function reverse_speed() {
   *   ele.speed(-1);
   * }
   *
   * function stop_song() {
   *   ele.stop();
   * }
   *
   * function play_speed() {
   *   ele.play();
   * }
   * </code></div>
   */

  /**
   * @method speed
   * @param {Number} speed  speed multiplier for element playback
   * @chainable
   */
  speed(val) {
    if (typeof val === 'undefined') {
      return this.presetPlaybackRate || this.elt.playbackRate;
    } else {
      if (this.loadedmetadata) {
        this.elt.playbackRate = val;
      } else {
        this.presetPlaybackRate = val;
      }
    }
  }

  /**
   * If no arguments are given, returns the current time of the element.
   * If an argument is given the current time of the element is set to it.
   *
   * @method time
   * @return {Number} current time (in seconds)
   *
   * @example
   * <div><code>
   * let ele;
   * let beginning = true;
   * function setup() {
   *   //p5.MediaElement objects are usually created
   *   //by calling the createAudio(), createVideo(),
   *   //and createCapture() functions.
   *
   *   //In this example we create
   *   //a new p5.MediaElement via createAudio().
   *   ele = createAudio('assets/lucky_dragons.mp3');
   *   background(250);
   *   textAlign(CENTER);
   *   text('start at beginning', width / 2, height / 2);
   * }
   *
   * // this function fires with click anywhere
   * function mousePressed() {
   *   if (beginning === true) {
   *     // here we start the sound at the beginning
   *     // time(0) is not necessary here
   *     // as this produces the same result as
   *     // play()
   *     ele.play().time(0);
   *     background(200);
   *     text('jump 2 sec in', width / 2, height / 2);
   *     beginning = false;
   *   } else {
   *     // here we jump 2 seconds into the sound
   *     ele.play().time(2);
   *     background(250);
   *     text('start at beginning', width / 2, height / 2);
   *     beginning = true;
   *   }
   * }
   * </code></div>
   */
  /**
   * @method time
   * @param {Number} time time to jump to (in seconds)
   * @chainable
   */
  time(val) {
    if (typeof val === 'undefined') {
      return this.elt.currentTime;
    } else {
      this.elt.currentTime = val;
      return this;
    }
  }

  /**
   * Returns the duration of the HTML5 media element.
   *
   * @method duration
   * @return {Number} duration
   *
   * @example
   * <div><code>
   * let ele;
   * function setup() {
   *   //p5.MediaElement objects are usually created
   *   //by calling the createAudio(), createVideo(),
   *   //and createCapture() functions.
   *   //In this example we create
   *   //a new p5.MediaElement via createAudio().
   *   ele = createAudio('assets/doorbell.mp3');
   *   background(250);
   *   textAlign(CENTER);
   *   text('Click to know the duration!', 10, 25, 70, 80);
   * }
   * function mouseClicked() {
   *   ele.play();
   *   background(200);
   *   //ele.duration dislpays the duration
   *   text(ele.duration() + ' seconds', width / 2, height / 2);
   * }
   * </code></div>
   */
  duration() {
    return this.elt.duration;
  }

  _ensureCanvas() {
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.drawingContext = this.canvas.getContext('2d');
      this.setModified(true);
    }

    // Don't update the canvas again if we have already updated the canvas with
    // the current frame
    const needsRedraw = this._frameOnCanvas !== this._pInst.frameCount;
    if (this.loadedmetadata && needsRedraw) {
      // wait for metadata for w/h
      if (this.canvas.width !== this.elt.width) {
        this.canvas.width = this.elt.width;
        this.canvas.height = this.elt.height;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
      }

      this.drawingContext.clearRect(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.drawingContext.drawImage(
        this.elt,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.setModified(true);
      this._frameOnCanvas = this._pInst.frameCount;
    }
  }
  loadPixels(...args) {
    this._ensureCanvas();
    return p5.Renderer2D.prototype.loadPixels.apply(this, args);
  }
  updatePixels(x, y, w, h) {
    if (this.loadedmetadata) {
      // wait for metadata
      this._ensureCanvas();
      p5.Renderer2D.prototype.updatePixels.call(this, x, y, w, h);
    }
    this.setModified(true);
    return this;
  }
  get(...args) {
    this._ensureCanvas();
    return p5.Renderer2D.prototype.get.apply(this, args);
  }
  _getPixel(...args) {
    this.loadPixels();
    return p5.Renderer2D.prototype._getPixel.apply(this, args);
  }

  set(x, y, imgOrCol) {
    if (this.loadedmetadata) {
      // wait for metadata
      this._ensureCanvas();
      p5.Renderer2D.prototype.set.call(this, x, y, imgOrCol);
      this.setModified(true);
    }
  }
  copy(...args) {
    this._ensureCanvas();
    p5.prototype.copy.apply(this, args);
  }
  mask(...args) {
    this.loadPixels();
    this.setModified(true);
    p5.Image.prototype.mask.apply(this, args);
  }
  /**
   * helper method for web GL mode to figure out if the element
   * has been modified and might need to be re-uploaded to texture
   * memory between frames.
   * @method isModified
   * @private
   * @return {boolean} a boolean indicating whether or not the
   * image has been updated or modified since last texture upload.
   */
  isModified() {
    return this._modified;
  }
  /**
   * helper method for web GL mode to indicate that an element has been
   * changed or unchanged since last upload. gl texture upload will
   * set this value to false after uploading the texture; or might set
   * it to true if metadata has become available but there is no actual
   * texture data available yet..
   * @method setModified
   * @param {boolean} val sets whether or not the element has been
   * modified.
   * @private
   */
  setModified(value) {
    this._modified = value;
  }
  /**
   * Schedule an event to be called when the audio or video
   * element reaches the end. If the element is looping,
   * this will not be called. The element is passed in
   * as the argument to the onended callback.
   *
   * @method  onended
   * @param  {Function} callback function to call when the
   *                             soundfile has ended. The
   *                             media element will be passed
   *                             in as the argument to the
   *                             callback.
   * @chainable
   * @example
   * <div><code>
   * function setup() {
   *   let audioEl = createAudio('assets/beat.mp3');
   *   audioEl.showControls();
   *   audioEl.onended(sayDone);
   * }
   *
   * function sayDone(elt) {
   *   alert('done playing ' + elt.src);
   * }
   * </code></div>
   */
  onended(callback) {
    this._onended = callback;
    return this;
  }

  /*** CONNECT TO WEB AUDIO API / p5.sound.js ***/

  /**
   * Send the audio output of this element to a specified audioNode or
   * p5.sound object. If no element is provided, connects to p5's main
   * output. That connection is established when this method is first called.
   * All connections are removed by the .disconnect() method.
   *
   * This method is meant to be used with the p5.sound.js addon library.
   *
   * @method  connect
   * @param  {AudioNode|Object} audioNode AudioNode from the Web Audio API,
   * or an object from the p5.sound library
   */
  connect(obj) {
    let audioContext, mainOutput;

    // if p5.sound exists, same audio context
    if (typeof p5.prototype.getAudioContext === 'function') {
      audioContext = p5.prototype.getAudioContext();
      mainOutput = p5.soundOut.input;
    } else {
      try {
        audioContext = obj.context;
        mainOutput = audioContext.destination;
      } catch (e) {
        throw 'connect() is meant to be used with Web Audio API or p5.sound.js';
      }
    }

    // create a Web Audio MediaElementAudioSourceNode if none already exists
    if (!this.audioSourceNode) {
      this.audioSourceNode = audioContext.createMediaElementSource(this.elt);

      // connect to main output when this method is first called
      this.audioSourceNode.connect(mainOutput);
    }

    // connect to object if provided
    if (obj) {
      if (obj.input) {
        this.audioSourceNode.connect(obj.input);
      } else {
        this.audioSourceNode.connect(obj);
      }
    } else {
      // otherwise connect to main output of p5.sound / AudioContext
      this.audioSourceNode.connect(mainOutput);
    }
  }

  /**
   * Disconnect all Web Audio routing, including to main output.
   * This is useful if you want to re-route the output through
   * audio effects, for example.
   *
   * @method  disconnect
   */
  disconnect() {
    if (this.audioSourceNode) {
      this.audioSourceNode.disconnect();
    } else {
      throw 'nothing to disconnect';
    }
  }

  /*** SHOW / HIDE CONTROLS ***/

  /**
   * Show the default MediaElement controls, as determined by the web browser.
   *
   * @method  showControls
   * @example
   * <div><code>
   * let ele;
   * function setup() {
   *   //p5.MediaElement objects are usually created
   *   //by calling the createAudio(), createVideo(),
   *   //and createCapture() functions.
   *   //In this example we create
   *   //a new p5.MediaElement via createAudio()
   *   ele = createAudio('assets/lucky_dragons.mp3');
   *   background(200);
   *   textAlign(CENTER);
   *   text('Click to Show Controls!', 10, 25, 70, 80);
   * }
   * function mousePressed() {
   *   ele.showControls();
   *   background(200);
   *   text('Controls Shown', width / 2, height / 2);
   * }
   * </code></div>
   */
  showControls() {
    // must set style for the element to show on the page
    this.elt.style['text-align'] = 'inherit';
    this.elt.controls = true;
  }

  /**
   * Hide the default mediaElement controls.
   * @method hideControls
   * @example
   * <div><code>
   * let ele;
   * function setup() {
   *   //p5.MediaElement objects are usually created
   *   //by calling the createAudio(), createVideo(),
   *   //and createCapture() functions.
   *   //In this example we create
   *   //a new p5.MediaElement via createAudio()
   *   ele = createAudio('assets/lucky_dragons.mp3');
   *   ele.showControls();
   *   background(200);
   *   textAlign(CENTER);
   *   text('Click to hide Controls!', 10, 25, 70, 80);
   * }
   * function mousePressed() {
   *   ele.hideControls();
   *   background(200);
   *   text('Controls hidden', width / 2, height / 2);
   * }
   * </code></div>
   */
  hideControls() {
    this.elt.controls = false;
  }

  /**
 * Schedule events to trigger every time a MediaElement
 * (audio/video) reaches a playback cue point.
 *
 * Accepts a callback function, a time (in seconds) at which to trigger
 * the callback, and an optional parameter for the callback.
 *
 * Time will be passed as the first parameter to the callback function,
 * and param will be the second parameter.
 *
 * @method  addCue
 * @param {Number}   time     Time in seconds, relative to this media
 *                             element's playback. For example, to trigger
 *                             an event every time playback reaches two
 *                             seconds, pass in the number 2. This will be
 *                             passed as the first parameter to
 *                             the callback function.
 * @param {Function} callback Name of a function that will be
 *                             called at the given time. The callback will
 *                             receive time and (optionally) param as its
 *                             two parameters.
 * @param {Object} [value]    An object to be passed as the
 *                             second parameter to the
 *                             callback function.
 * @return {Number} id ID of this cue,
 *                     useful for removeCue(id)
 * @example
 * <div><code>
 * //
 * //
 * function setup() {
 *   createCanvas(200, 200);
 *
 *   let audioEl = createAudio('assets/beat.mp3');
 *   audioEl.showControls();
 *
 *   // schedule three calls to changeBackground
 *   audioEl.addCue(0.5, changeBackground, color(255, 0, 0));
 *   audioEl.addCue(1.0, changeBackground, color(0, 255, 0));
 *   audioEl.addCue(2.5, changeBackground, color(0, 0, 255));
 *   audioEl.addCue(3.0, changeBackground, color(0, 255, 255));
 *   audioEl.addCue(4.2, changeBackground, color(255, 255, 0));
 *   audioEl.addCue(5.0, changeBackground, color(255, 255, 0));
 * }
 *
 * function changeBackground(val) {
 *   background(val);
 * }
 * </code></div>
 */
  addCue(time, callback, val) {
    const id = this._cueIDCounter++;

    const cue = new Cue(callback, time, id, val);
    this._cues.push(cue);

    if (!this.elt.ontimeupdate) {
      this.elt.ontimeupdate = this._onTimeUpdate.bind(this);
    }

    return id;
  }

  /**
 * Remove a callback based on its ID. The ID is returned by the
 * addCue method.
 * @method removeCue
 * @param  {Number} id ID of the cue, as returned by addCue
 * @example
 * <div><code>
 * let audioEl, id1, id2;
 * function setup() {
 *   background(255, 255, 255);
 *   audioEl = createAudio('assets/beat.mp3');
 *   audioEl.showControls();
 *   // schedule five calls to changeBackground
 *   id1 = audioEl.addCue(0.5, changeBackground, color(255, 0, 0));
 *   audioEl.addCue(1.0, changeBackground, color(0, 255, 0));
 *   audioEl.addCue(2.5, changeBackground, color(0, 0, 255));
 *   audioEl.addCue(3.0, changeBackground, color(0, 255, 255));
 *   id2 = audioEl.addCue(4.2, changeBackground, color(255, 255, 0));
 *   text('Click to remove first and last Cue!', 10, 25, 70, 80);
 * }
 * function mousePressed() {
 *   audioEl.removeCue(id1);
 *   audioEl.removeCue(id2);
 * }
 * function changeBackground(val) {
 *   background(val);
 * }
 * </code></div>
 */
  removeCue(id) {
    for (let i = 0; i < this._cues.length; i++) {
      if (this._cues[i].id === id) {
        console.log(id);
        this._cues.splice(i, 1);
      }
    }

    if (this._cues.length === 0) {
      this.elt.ontimeupdate = null;
    }
  }

  /**
 * Remove all of the callbacks that had originally been scheduled
 * via the addCue method.
 * @method  clearCues
 * @param  {Number} id ID of the cue, as returned by addCue
 * @example
 * <div><code>
 * let audioEl;
 * function setup() {
 *   background(255, 255, 255);
 *   audioEl = createAudio('assets/beat.mp3');
 *   //Show the default MediaElement controls, as determined by the web browser
 *   audioEl.showControls();
 *   // schedule calls to changeBackground
 *   background(200);
 *   text('Click to change Cue!', 10, 25, 70, 80);
 *   audioEl.addCue(0.5, changeBackground, color(255, 0, 0));
 *   audioEl.addCue(1.0, changeBackground, color(0, 255, 0));
 *   audioEl.addCue(2.5, changeBackground, color(0, 0, 255));
 *   audioEl.addCue(3.0, changeBackground, color(0, 255, 255));
 *   audioEl.addCue(4.2, changeBackground, color(255, 255, 0));
 * }
 * function mousePressed() {
 *   // here we clear the scheduled callbacks
 *   audioEl.clearCues();
 *   // then we add some more callbacks
 *   audioEl.addCue(1, changeBackground, color(2, 2, 2));
 *   audioEl.addCue(3, changeBackground, color(255, 255, 0));
 * }
 * function changeBackground(val) {
 *   background(val);
 * }
 * </code></div>
 */
  clearCues() {
    this._cues = [];
    this.elt.ontimeupdate = null;
  }

  // private method that checks for cues to be fired if events
  // have been scheduled using addCue(callback, time).
  _onTimeUpdate() {
    const playbackTime = this.time();

    for (let i = 0; i < this._cues.length; i++) {
      const callbackTime = this._cues[i].time;
      const val = this._cues[i].val;

      if (this._prevTime < callbackTime && callbackTime <= playbackTime) {
        // pass the scheduled callbackTime as parameter to the callback
        this._cues[i].callback(val);
      }
    }

    this._prevTime = playbackTime;
  }
}

p5.MediaElement = MediaElement;

/**
 * Base class for a file.
 * Used for Element.drop and createFileInput.
 *
 * @class p5.File
 * @constructor
 * @param {File} file File that is wrapped
 */
class File {
  constructor(file, pInst) {
    /**
     * Underlying File object. All normal File methods can be called on this.
     *
     * @property file
     */
    this.file = file;

    this._pInst = pInst;

    // Splitting out the file type into two components
    // This makes determining if image or text etc simpler
    const typeList = file.type.split('/');
    /**
     * File type (image, text, etc.)
     *
     * @property type
     */
    this.type = typeList[0];
    /**
     * File subtype (usually the file extension jpg, png, xml, etc.)
     *
     * @property subtype
     */
    this.subtype = typeList[1];
    /**
     * File name
     *
     * @property name
     */
    this.name = file.name;
    /**
     * File size
     *
     * @property size
     */
    this.size = file.size;

    /**
     * URL string containing either image data, the text contents of the file or
     * a parsed object if file is JSON and p5.XML if XML
     *
     * @property data
     */
    this.data = undefined;
  }


  static _createLoader(theFile, callback) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const p5file = new p5.File(theFile);
      if (p5file.file.type === 'application/json') {
        // Parse JSON and store the result in data
        p5file.data = JSON.parse(e.target.result);
      } else if (p5file.file.type === 'text/xml') {
        // Parse XML, wrap it in p5.XML and store the result in data
        const parser = new DOMParser();
        const xml = parser.parseFromString(e.target.result, 'text/xml');
        p5file.data = new p5.XML(xml.documentElement);
      } else {
        p5file.data = e.target.result;
      }
      callback(p5file);
    };
    return reader;
  }

  static _load(f, callback) {
    // Text or data?
    // This should likely be improved
    if (/^text\//.test(f.type) || f.type === 'application/json') {
      p5.File._createLoader(f, callback).readAsText(f);
    } else if (!/^(video|audio)\//.test(f.type)) {
      p5.File._createLoader(f, callback).readAsDataURL(f);
    } else {
      const file = new p5.File(f);
      file.data = URL.createObjectURL(f);
      callback(file);
    }
  }
}


p5.File = File;

export default p5;
