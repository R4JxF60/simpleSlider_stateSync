import Display from './components/Display/Display.js';
import SlideBar from './components/SlideBar/SlideBar.js';
import {default as STORE} from './components/Store/Store.js';
import sideBarReducer from './components/SlideBar/SlideBarReducer.js';
import {default as slideBarActionCreators} from './components/SlideBar/ActionCreators.js';
const slidebarDiv = document.getElementById('slidebar__div');
const displayDiv = document.getElementById('display__div');

// sample index.js  code for selected example 

// need to find a proper solution for rendering the dom element
function domCreator(component) {
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(component.render(), 'text/html');
    return doc.body.firstChild;
}

let display = new Display({ value: 0 });
console.log(display);
let displayElement = domCreator(display);
display.setRefs('display', displayElement);
displayDiv.appendChild(displayElement);
display.setSubscriber('dis1', display.listner);

display = new Display({ value: 0 });
console.log(display);
displayElement = domCreator(display);
display.setRefs('display', displayElement);
displayDiv.appendChild(displayElement);
display.setSubscriber('dis2', display.listner);

display = new Display({ value: 0 });
console.log(display);
displayElement = domCreator(display);
display.setRefs('display', displayElement);
displayDiv.appendChild(displayElement);
display.setSubscriber('dis3', display.listner);

display = new Display({ value: 0 });
console.log(display);
displayElement = domCreator(display);
display.setRefs('display', displayElement);
displayDiv.appendChild(displayElement);
display.setSubscriber('dis4', display.listner);

display = new Display({ value: 0 });
console.log(display);
displayElement = domCreator(display);
display.setRefs('display', displayElement);
displayDiv.appendChild(displayElement);
display.setSubscriber('dis5', display.listner);

const slidebar = new SlideBar({ min: 0, max: 100, value: 0});
const slideBaElement = domCreator(slidebar);
slidebar.setReducer('SlideBar', sideBarReducer);
slideBaElement.addEventListener('input', (event) => {
    STORE.dispatch(slideBarActionCreators(event.target.value));
});

slidebarDiv.appendChild(slideBaElement);
