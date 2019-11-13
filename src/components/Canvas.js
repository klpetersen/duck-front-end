import React, { Component } from 'react';
import duck from '../duckie.png';
import sushi from '../sushi.png';
export default class Canvas extends Component {


    state = {
        duck: {x:0, y:0},
        // sushis: [],
        width:0,
        height:0
    }

    componentDidMount(){
        this.initiateCanvas();
        document.addEventListener('keydown', this.moveDuck)
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
            this.dy = 3;

            this.draw = () => {
                c.drawImage(sushiImage, x, y, 100, 100);
            }
        
            this.update = (duck) => {

                if(y > canvas.height){
                    y = -2 * canvas.height * Math.random();
                    x = Math.random() * canvas.width;
                }
                y += this.dy;
                this.draw();   

                if(this.getDistance(x, y, duck.x, duck.y) < 60){
                    console.log('touched');
                    y = -2 * canvas.height * Math.random();
                    x = Math.random() * canvas.width;

                }
            }

            this.getDistance = (x1, y1, x2, y2) => {
                let xDistance = x2 - x1;
                let yDistance = y2 - y1;
                return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
            }
        }

        let sushis=[];
        for(let i=0; i< 5; i++){
            let x = Math.random() * canvas.width;
            let y = -1 * canvas.height * Math.random(); // randomize this to be a smallish negative number.
            // it'll appear to take longer to appear on the screen 
            sushis.push(new Sushi(x,y))
        } 

        this.setState({
            duck: {x:canvas.width*0.5, y:canvas.height-300},
            // sushis: sushis,
            width: canvas.width,
            height: canvas.height
        })

        duckImage.onload = () => {
            c.drawImage(duckImage, this.state.duck.x, this.state.duck.y, 100, 100);
        }

        let animate = () => {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);        
            c.drawImage(duckImage, this.state.duck.x, this.state.duck.y, 100, 100);
            for(let i=0;i<sushis.length;i++){
                    sushis[i].update(this.state.duck);
                    // console.log('distance===>', this.getDistance(sushis[i].x, sushis[i].y, this.state.duck.x, this.state.duck.y))
                    // console.log('duck===>', this.state.duck.x, this.state.duck.y)
                    // console.log('sushi==>', sushis[i].x, sushis[i].y)
                    // if(this.getDistance(sushis[i].x, sushis[i].y, this.state.duck.x, this.state.duck.y) < 60){
                    //     console.log('touched');
                    // }
            }
        }

        animate();
    }

    moveDuck = (event) => {
        let x = this.state.duck.x;
        let y = this.state.duck.y;

        switch(event.key){
            case 'ArrowLeft':
                if(x>0){
                    this.setState({
                        duck: {x: x-20, y: y}
                    })
                }
                break;
            case 'ArrowRight':
                if(x<this.state.width-100){
                    this.setState({
                        duck: {x: x+20, y: y}
                    })
                }
                break;
            case 'ArrowUp':
                if(y>0){
                    this.setState({
                        duck: {x: x, y: y-20}
                    })
                }
                break;
            case 'ArrowDown':
                if(y<this.state.height-100){
                    this.setState({
                        duck: {x: x, y: y+20}
                     })
                } 
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