import React, { Component } from 'react';
import duck from '../duckie.png';
import sushi from '../sushi.png';

export default class Canvas extends Component {

    state = {
        duck: {x:0, y:0}
    }

    componentDidMount(){
        this.updateCanvas();
        document.addEventListener('keydown', this.moveDuck)
    }

    updateCanvas(){
        const canvas = this.refs.canvas;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const c = canvas.getContext('2d');
        // const duckImage = new Image(70,70);
        // duckImage.src='../duckie.png';
        const duckImage = this.refs.duckImg;
        const sushiImage = this.refs.sushiImg;

        duckImage.onload = () => {
            this.setState({
                duck: {x:canvas.width*0.5, y:canvas.height-300}
            })
            c.drawImage(duckImage, this.state.duck.x, this.state.duck.y, 100, 100);
        }


        function Sushi(x,y){
            this.x = x;
            this.y = y;
            
            this.draw = () => {
                console.log('!')
                sushiImage.onload = () => {
                    c.drawImage(sushiImage, x, y, 100, 100);
                }
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

        let sushi = new Sushi(100,100)
        console.log(sushi)
        sushi.draw();

        // function animate(){
        //     requestAnimationFrame(animate);
        //     c.clearRect(0, 0, canvas.width, canvas.height);
        //     for(let i=0;i<sushis.length;i++){
        //         sushis[i].update();
        //     }
        // }

        // animate();
    }

    moveDuck = (event) => {
        console.log(event.key)
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