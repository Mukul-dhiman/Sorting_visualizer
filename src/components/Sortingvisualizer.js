import React from 'react';
import './Sortingvisualizer.css';
import GetAnimationArray from './algorithms/MergeSortAlgo.js';

class Sortingvisualizer extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            array: []
        };
    }

    componentDidMount(){
        this.resetArray();
    }


    resetArray(){
        const array_length = 500;
        const array=[];
        for(let i=0;i<array_length;i++){
            array.push(randomInt(5,1000));
        }
        this.setState({array: array});
    }
    
    MergeSort(){
        // console.log("h");
        const height_of_bar = (window.innerHeight)/1100;

        console.log(this.state.array);
        const animationArray = GetAnimationArray(this.state.array);
        // console.log(animationArray);
        const arrayBars = document.getElementsByClassName('array-bar');
        for(let i=0;i<animationArray.length;i++){
            
            const [barone,bartwo] = animationArray[i];
            
            if(i%3==0){
                setTimeout(() => {
                    arrayBars[barone].style.backgroundColor = 'red';
                    arrayBars[bartwo].style.backgroundColor = 'red';
                }, i*1);
            }
            else if(i%3==1){
                setTimeout(() => {
                    arrayBars[barone].style.backgroundColor = 'blue';
                    arrayBars[bartwo].style.backgroundColor = 'blue';
                }, i*1);
            }
            else{
                setTimeout(() => {
                    arrayBars[barone].style.height = `${bartwo*height_of_bar}px`;
                }, i*1);    // console.log("j",typeof(baronestyle.height),typeof(height_of_bartwo),bartwostyle.height,`${height_of_barone}`);
                
                    // console.log("j");
                    // this.state.array[barone] = actual_array_bar_height_two;
                    // this.state.array[bartwo] = actual_array_bar_height_one;
                
            }
        }
        console.log(this.state.array);
    }
    QuickSort(){}
    HeapSort(){}
    BubbleSort(){}   

    render() {
        const {array}=this.state;
        const array_length = array.length;
        const width_of_bar = ((window.innerWidth-120)/array_length)-2;
        const height_of_bar = (window.innerHeight)/1100; 

        return (
            <div className="array-container" style={
                {minHeight: `${window.innerHeight}px`}
            }>
                {array.map((value,idx) => (
                    <div className="array-bar" key={idx} style={
                        {width:`${width_of_bar}px`,height:`${value*height_of_bar}px`}
                    }></div>
                ))}
                <button onClick={() => (this.resetArray())}>Reset Array</button>
                <button onClick={() => (this.MergeSort())}>merge sort</button>
                <button onClick={() => (this.QuickSort())}>quick sort</button>
                <button onClick={() => (this.HeapSort())}>heap sort</button>
                <button onClick={() => (this.BubbleSort())}>bubble sort</button>
            </div>
        );
    }

}

function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


export default Sortingvisualizer;