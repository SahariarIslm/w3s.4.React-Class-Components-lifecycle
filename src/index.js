import React from 'react';
import ReactDOM from 'react-dom/client';
// The three phases are: Mounting, Updating, and Unmounting.

// ###Mounting
// React has four built-in methods that gets called, in this order, when mounting a component:
// constructor()
// getDerivedStateFromProps()
// render()
// componentDidMount()
// The render() method is required and will always be called, the others are optional and will be called if you define them.

// 1.Mounting.constructor 
// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             favoritecolor:"red"
//         }
//     }
//     render(){
//         return(
//             <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         );
//     }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header/>);

// 2.Mounting.getDrivedStateProps
// class Header2 extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {favoritecolor:"green"};
//     }
//     static getDerivedStateFromProps(props,state){
//         return {favoritecolor: props.favcol};
//     }
//     render(){
//         return(
//             <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         )
//     }
// } 
// const root2 = ReactDOM.createRoot(document.getElementById('root'));
// root2.render(<Header2 favcol="black"/>);

// 3.Mounting.render()
// The render() method is required, and is the method that actually outputs the HTML to the DOM.

// class Header3 extends React.Component{
//     render(){
//         return(
//             <h1>this is the contentof the Header component</h1>
//         );
//     }
// }
// const root3 = ReactDOM.createRoot(document.getElementById('root'));
// root3.render(<Header3/>)

// 4. componentDidMount()
// The componentDidMount() method is called after the component is rendered.
// This is where you run statements that requires that the component is already placed in the DOM.

// class Header4 extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {favoritecolor:"red"};
//     }
//     componentDidMount(){
//         setTimeout(()=>{
//             this.setState({favoritecolor:"yellow"})
//         },3000);
//     }
//     render(){
//         return (
//             <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         );
//     }
// }
// const root4 = ReactDOM.createRoot(document.getElementById('root'));
// root4.render(<Header4/>)


// ###Updating
// A component is updated whenever there is a change in the component's state or props.
// React has five built-in methods that gets called, in this order, when a component is updated:

// getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()
// The render() method is required and will always be called, the others are optional and will be called if you define them.

// getDerivedStateFromProps()

// class Header5 extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {favoritecolor:"red"};
//     }
//     static getDerivedStateFromProps(props,state){
//         return {favoritecolor:props.favcol};
//     }
//     changeColor = () => {
//         this.setState({favoritecolor:"blue"});
//     }
//     render(){
//         return(
//             <div>
//                 <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//                 <button type='button' onClick={this.changeColor}>Clink Me</button>
//             </div>
//         )
//     }
// }
// const root5 = ReactDOM.createRoot(document.getElementById('root'));
// root5.render(<Header5 favcol="green"/>);

// #shouldComponentUpdate()
// In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

// The default value is true.

// class Header6 extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {favoritecolor:'red'};
//     }
//     shouldComponentUpdate(){
//         return true;
//     }
//     changeColor = () =>{
//         this.setState({favoritecolor:"blue"});
//     };
//     render(){
//         return(
//             <div>
//                 <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//                 <button type='button' onClick={this.changeColor}>Update me</button>
//             </div>
//         )
//     }
// }
// const root6 = ReactDOM.createRoot(document.getElementById('root'));
// root6.render(<Header6/>);

//#getSnapshotBeforeUpdate()
//In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

// If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.

// class Header7 extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {favoriteColor:"RED"}
//     }
//     componentDidMount(){
//         setTimeout(()=>{
//             this.setState({favoriteColor:"YELLOW"});
//         },3000)
//     }
//     getSnapshotBeforeUpdate(prevProps,prevState){
//         document.getElementById("div1").innerHTML ="Before the update, the favorite was " + prevState.favoriteColor;
//     }

//     componentDidUpdate(){
//         document.getElementById("div2").innerHTML  ="The updated favorite is " + this.state.favoriteColor;
//     }

//     render(){
//         return(
//             <div>
//                 <h1>My favorite Color is {this.state.favoriteColor}</h1>
//                 <div id='div1'></div>
//                 <div id='div2'></div>
//             </div>
//         );
//     }
// }
// const root7 = ReactDOM.createRoot(document.getElementById('root'));
// root7.render(<Header7/>);

//#componentDidUpdate()
//The componentDidUpdate method is called after the component is updated in the DOM.

// class Header8 extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {favoriteColor:"PINK"};
//     }

//     componentDidMount(){
//         setTimeout(()=>{
//             this.setState({favoriteColor:"PURPLE"})
//         },3000);
//     }

//     componentDidUpdate(){
//         document.getElementById('mydiv').innerHTML = "the updated favorite color is " + this.state.favoriteColor;
//     }
    
//     render(){
//         return (
//             <div>
//                 <h1>My Favorite color is {this.state.favoriteColor}</h1>
//                 <div id='mydiv'></div>
//             </div>
//         )
//     }
// }
// const root8 = ReactDOM.createRoot(document.getElementById('root'));
// root8.render(<Header8/>);

// Unmounting
// The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

// React has only one built-in method that gets called when a component is unmounted:


class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {show:true};
    }
    delHeader=()=>{
        this.setState({show:false})
    }
    render(){
        
        let myheader;
        if(this.state.show){
            myheader = <Child/>
        }
        return(
            <div>
                {myheader}
                <button type='button' onClick={this.delHeader}>
                    Del Header
                </button>
            </div>
        )
    }
}

class Child extends React.Component{
    componentWillUnmount(){
        alert("The component named Header is about to be unmounted.");
    }
    render(){
        return(
            <h1>Hello World</h1>
        )
    }
}

const root9 = ReactDOM.createRoot(document.getElementById('root')).render(<Container/>);