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
        const array_length = 200;
        const array=[];
        for(let i=0;i<array_length;i++){
            array.push(randomInt(5,1000));
        }
        this.setState({array: array});
    }
    
    MergeSort(){
        // console.log("h");
        console.log(this.state.array);
        const animationArray = GetAnimationArray(this.state.array);
        // console.log(animationArray);
        const arrayBars = document.getElementsByClassName('array-bar');
        for(let i=0;i<animationArray.length;i++){
            
            const [barone,bartwo] = animationArray[i];
            const height_of_barone = arrayBars[barone].style.height;
            const height_of_bartwo = arrayBars[bartwo].style.height;
            // const actual_array_bar_height_one = this.state.array[barone];
            // const actual_array_bar_height_two = this.state.array[bartwo];
            const baronestyle =arrayBars[barone].style;
            const bartwostyle =arrayBars[bartwo].style;
            if(i%2==0){
                setTimeout(() => {
                    baronestyle.backgroundColor = 'red';
                    bartwostyle.backgroundColor = 'red';
                }, i*5);
            }
            else{
                setTimeout(() => {
                    baronestyle.backgroundColor = 'blue';
                    bartwostyle.backgroundColor = 'blue';
                }, i*5);
                if(height_of_barone > height_of_bartwo){
                    console.log("j",baronestyle.height,`${height_of_bartwo}px`,bartwostyle.height,`${height_of_barone}px`);
                    baronestyle.height = height_of_bartwo;
                    bartwostyle.height = height_of_barone;
                    // this.state.array[barone] = actual_array_bar_height_two;
                    // this.state.array[bartwo] = actual_array_bar_height_one;
                }
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
            <div className="array-container">
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