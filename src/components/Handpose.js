import React, { useEffect, useState} from "react";
import * as p5 from "p5";
import * as ml5 from "ml5";
import "./Handpose.css";
import {ChromePicker} from 'react-color';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Sketch';


const Handpose = (props) => {

  //default set to line drawing
  let [brushSelected, setBrushSelected] = useState(1);
  let [outlineColorSelected, setOutlineColorSelected] = useState(1);
  let [colorSelected, setColorSelected] = useState([0, 0, 0, 1]);

  let colorPicker = [0, 0, 0, 1];

  //onClick update brush selector
  const brushSelectorFunction = (i) => {
    setBrushSelected(i);
    // brushSelector = i;
  }; //brushSelectorFunction

  //onChange update colour selector
  const colourSelectorFunction = (color) => {
    colorPicker[0] = color.rgb.r;
    colorPicker[1] = color.rgb.g;
    colorPicker[2] = color.rgb.b;
    colorPicker[3] = color.rgb.a;
  }; //colorSelectorFunction

  // // if pressed '1-6', update to brush style
  // if (p5.keyIsPressed == true) {
  //   if (p5.key === '1') {
  //     setBrushSelected(0);
  //     console.log('brushSelected-keypress', brushSelected);
  //   } //line
  //   else if (p5.key === 2){
  //     setBrushSelected(1);
  //     console.log('brushSelected-keypress', brushSelected);
  //   }//circle
  //   else if (p5.key === '3'){
  //     setBrushSelected(2);
  //   }//area
  //   else if (p5.key === '4'){
  //     setBrushSelected(3);
  //   }//circle
  //   else if (p5.key === '5'){
  //     setBrushSelected(4);
  //   }//area
  //   else if (p5.key === '6'){
  //     setBrushSelected(5);
  //   }//circle
  //   if (p5.key === 's') {
  //     onSaveClick();
  //   } //save 's' shortcut
  // }; //if

  //function to save Canvas - activated by keyPress 's' and button click
  const onSaveClick = () => {
    p5.saveCanvas();
  };//onSaveClick

  return(
     <>
     <div id="handpose-component">
       <header className="header">
         <h1 className="logo">sketchion.</h1>
         <div id="handpose-controls">
           <p id="info"><span className="logo">sketchion</span> tracks your hand , and translates movement into a visual representation.</p>
           <hr />
           <div className="detailed-instructions">
           <p>Simply enable access to your webcam, hold down <code>SHIFT</code> and start creating.</p>
             <p>Hit <code>DOWN ARROW</code> to reset the canvas, & <code>s</code> to download canvas.</p><br />
             <p>Select a brush (<code>1</code> - <code>6</code>):</p>
             <div className = "grid-swatches">
               <img onClick={() => brushSelectorFunction(0)}src="dots.png" />
               <img onClick={() => brushSelectorFunction(1)}src="line.png" />
               <img onClick={() => brushSelectorFunction(2)}src="hash.png" />
               <img onClick={() => brushSelectorFunction(3)}src="hash.png" />
               <img onClick={() => brushSelectorFunction(4)}src="line.png" />
            </div>

            <ChromePicker
                onChange={(color) => colourSelectorFunction(color) }
            />
          </div>
          <p id='footer'>&copy; <span className="logo">sketchion</span> -- stacey lewis 2021</p>
        </div>
       </header>
      <div id="handpose-canvas">
        <P5Wrapper sketch={sketch} brushselected={brushSelected} />
      </div>
      <div id="handpose-video-component">
        {/* WEBCAM HERE LATER ??? */}
      </div>
    </div>
    </>
   ); //return

}; //Canvas

export default Handpose;
