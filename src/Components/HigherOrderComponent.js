
import React, { Component } from 'react'



export default class HigherOrderFunctions extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

     
    renderItems = (data) => {
        
        const mapRows = data.map((item) => (
            <div className='aaa'>
                
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                   
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                    <br></br>
                    </div>
            
           
        ));
        return mapRows;
    };
    
    renderdata(title, data){
        return (
            // instead of a parent div tag, we can also use React.Fragment
              <React.Fragment>
                <h1>{title}</h1>
                <div className="display-box">
                <ul>{data}</ul>
                </div>
              </React.Fragment>
              )
    }

    renderUser_type(userType){
        let render = this.state.userData.filter((e)=>
            e.user_type === userType);
            return this.renderItems(render);
        }

        renderLetter(letter){
            let render = this.state.userData.filter((e)=>
                e.name[0] === letter);
                return this.renderItems(render);
            }
            renderAge(){
                let render = this.state.userData.filter((e)=>
                    e.age >28 && e.age<=50);
                    return this.renderItems(render);
                }

                renderSumOfExperience(userType){
                    let render = this.state.userData.filter((e)=>
                    e.user_type === userType
                    ).reduce((sum,e)=>{
                        return sum + e.years;
                    },0)
                    return "Total Years of experience: "+render;
                }

    render(){
        return(
            <div>
                {this.renderdata("Display all items", this.renderItems(this.state.userData))}
                {this.renderdata("Display based on User type", this.renderUser_type("Designer"))}
                {this.renderdata("Filter all data starting with 'J'", this.renderLetter("J"))}
                {this.renderdata("Filter all data based on age greatr than 28 and age less than or equal to 50", this.renderAge())}
                {this.renderdata("Find the total years of the designer", this.renderSumOfExperience("Designer"))}
                


            </div>
        )
    }
}
