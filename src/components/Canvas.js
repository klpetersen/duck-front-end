import React, { Component } from 'react';
import duck from '../duckie.png';
import sushi from '../sushi.png';
import tuna from '../tuna.png'
export default class Canvas extends Component {


    state = {
        duck: {x:0, y:0},
        width:0,
        height:0
    }

    componentDidMount(){
        this.initiateCanvas();
        document.addEventListener('keydown', this.moveDuck)
    }

    // componentDidUpdate(){

    // }

    initiateCanvas = () => {
        const canvas = this.refs.canvas;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 90;
        const c = canvas.getContext('2d');
        const duckImage = this.refs.duckImg;
        const sushiImage = this.refs.sushiImg;
        const tunaImage = this.refs.tunaImg;
        c.font = "30px Arial";

        function Sushi(x,y,velocity,dist,imgSize, props){
            this.x = x;
            this.y = y;
            this.dy = velocity;
            this.dist = dist

            this.draw = (image) => {
                c.drawImage(image, x, y, 100, imgSize);
            }
        
            this.update = (duck, type, image) => {

                if(y > canvas.height){
                    y = this.dist * canvas.height * Math.random();
                    x = Math.abs(Math.random() * canvas.width - 200);
                }
                y += this.dy;
                this.draw(image);   

                if(this.getDistance(x, y, duck.x, duck.y) < 60){
                    // console.log('touched');
                    y = this.dist * canvas.height * Math.random();
                    x = Math.abs(Math.random() * canvas.width - 200);
                    this.addEaten(type);
                    // console.log(num);
                }
            }

            this.getDistance = (x1, y1, x2, y2) => {
                let xDistance = x2 - x1;
                let yDistance = y2 - y1;
                return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
            }

            this.addEaten = (type) => {
                if(type === 'ikura'){
                    ikuraNum += 1;
                    props.addNum(ikuraNum, 'ikura');
                }else if(type === 'tuna'){
                    tunaNum += 5;
                    props.addNum(tunaNum, 'tuna');
                }
            }
        }


        let ikuraNum = this.props.ikuraNum;
        let sushis=[];
        for(let i=0; i< 20; i++){
            let x = Math.abs(Math.random() * canvas.width - 200);
            let y = -1 * canvas.height * Math.random(); // randomize this to be a smallish negative number.
            // it'll appear to take longer to appear on the screen 
            sushis.push(new Sushi(x,y,3,-2,100,this.props))
        } 

        let tunaNum = this.props.tunaNum;
        let tunaSushis = [];
        for(let i=0; i< 5; i++){
            let x = Math.abs(Math.random() * canvas.width - 200);
            let y = -5 * canvas.height * Math.random(); 
            tunaSushis.push(new Sushi(x,y,6,-5,75,this.props))
        }

        this.setState({
            duck: {x:canvas.width*0.5, y:canvas.height-300},
            width: canvas.width,
            height: canvas.height
        })

        duckImage.onload = () => {
            c.drawImage(duckImage, this.state.duck.x, this.state.duck.y, 100, 100);
        }

        let animate = () => {
            let totalScore = ikuraNum + tunaNum
            if(this.props.gameOver){
            //    alert('game over!') 
                  c.clearRect(0, 0, canvas.width, canvas.height); 
                  canvas.setAttribute('style', 'background:black');
                  c.fillStyle = 'white';
                  this.props.totalScore(totalScore);
                  c.fillText('Game Over', this.state.width*0.43, this.state.height*0.4);
                  c.fillText('Total Score: '+ totalScore, this.state.width*0.43, this.state.height*0.6);
            }else{
                requestAnimationFrame(animate);
                c.clearRect(0, 0, canvas.width, canvas.height);        
                c.drawImage(duckImage, this.state.duck.x, this.state.duck.y, 100, 100);
                // let totalScore = ikuraNum + tunaNum
                c.fillText('Score: '+ totalScore, 50,50);
                for(let i=0;i<sushis.length;i++){
                        sushis[i].update(this.state.duck, 'ikura', sushiImage);
                }
                for(let i=0;i<tunaSushis.length;i++){
                    tunaSushis[i].update(this.state.duck, 'tuna', tunaImage);
                }  
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
                        duck: {x: x-50, y: y}
                    })
                }
                break;
            case 'ArrowRight':
                if(x<this.state.width-100){
                    this.setState({
                        duck: {x: x+50, y: y}
                    })
                }
                break;
            case 'ArrowUp':
                if(y>0){
                    this.setState({
                        duck: {x: x, y: y-50}
                    })
                }
                break;
            case 'ArrowDown':
                if(y<this.state.height-100){
                    this.setState({
                        duck: {x: x, y: y+50}
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
                <img ref='tunaImg' src={tuna} className="hidden" alt="tuna sushi" />
                <img ref='duckImg' src={duck} className="hidden" alt="duck" />
                <img ref='sushiImg' src={sushi} className="hidden" alt="ikura roll" />
                <canvas ref="canvas" id='canvas'></canvas>   
            </div>
        )
    }

   

}