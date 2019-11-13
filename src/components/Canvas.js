import React, { Component } from 'react';
import duck from '../duckie.png';
import sushi from '../sushi.png';
export default class Canvas extends Component {
   state = {
       duck: {x:0, y:0},
       sushis: []
   }
   componentDidMount(){
       this.initiateCanvas();
       document.addEventListener('keydown', this.moveDuck)
   }
   componentDidUpdate(){
       // console.log('changed')
       console.log(this.state)
       const canvas = this.refs.canvas;
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
       const c = canvas.getContext('2d');
       const duckImage = this.refs.duckImg;
       let sushis = this.state.sushis;
       let x = this.state.duck.x;
       let y = this.state.duck.y;
       function animate(){
           requestAnimationFrame(animate);
           c.clearRect(0, 0, canvas.width, canvas.height);
           c.drawImage(duckImage, x, y, 100, 100);
           for(let i=0;i<sushis.length;i++){
               sushis[i].update();
           }
       }
       animate();
   }
   initiateCanvas = () => {
       const canvas = this.refs.canvas;
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
       const c = canvas.getContext('2d');
       const duckImage = this.refs.duckImg;
       const sushiImage = this.refs.sushiImg;
       function Sushi(x,y){
           this.x = x;
           this.y = y;
           this.draw = () => {
               c.drawImage(sushiImage, x, y, 100, 100);
           }
           this.update = function(){
               if(y > canvas.height){
                   y = -2 * canvas.height * Math.random();
                   x = Math.random() * canvas.width;
               }
               y += 3;
               this.draw();
           }
       }
       let sushis=[];
       for(let i=0; i< 5; i++){
           let x = Math.random() * canvas.width;
           let y = -2 * canvas.height * Math.random(); // randomize this to be a smallish negative number.
           // it'll appear to take longer to appear on the screen
           sushis.push(new Sushi(x,y))
       }
       this.setState({
           duck: {x:canvas.width*0.5, y:canvas.height-300},
           sushis: sushis
       })
       duckImage.onload = () => {
           c.drawImage(duckImage, this.state.duck.x, this.state.duck.y, 100, 100);
       }
   }
   moveDuck = (event) => {
       let x = this.state.duck.x;
       let y = this.state.duck.y;
       switch(event.key){
           case 'ArrowLeft':
               this.setState({
                   duck: {x: x-10, y: y}
               })
               break;
           case 'ArrowRight':
               this.setState({
                   duck: {x: x+10, y: y}
               })
               break;
           case 'ArrowUp':
               this.setState({
                       duck: {x: x, y: y-10}
                   })
               break;
           case 'ArrowDown':
                   this.setState({
                       duck: {x: x, y: y+10}
                    })
                   break;
           default:
               return this.state.duck;
       }
   }
   render() {
       return (
           <div>
               <img ref='duckImg' src={duck} className="hidden" alt="duck" />
               <img ref='sushiImg' src={sushi} className="hidden" alt="sushi" />
               <canvas ref="canvas" id='canvas'></canvas>
           </div>
       )
   }
}