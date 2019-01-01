
import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
//import Typography from '@material-ui/core/Typography';
import { Input } from 'reactstrap';
import { Card, Button, CardHeader, CardFooter, CardBody,
         FormGroup, Label 
       } from 'reactstrap';
/**
 
       quiestions:[
           {
            questions: '',
            options: []    
        },
           {
            questions: '',
            options: []    
        },
           {
            questions: '',
            options: []    
        },
           {
            questions: '',
            options: []    
        },
       ]


 */


 class Quizpage extends Component {
     state = {
        options: ['', ''],
        questions: [{}],
     }

//functions:
createNewOption = () => {
 this.setState((prevState) => ({
   options: [
       
       ...prevState.options , ''
    ],
 }));
}

//https://www.youtube.com/watch?v=UmuLW78biBw&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=19
deleteNewOption = idx => {

   let options = [...this.state.options]

   options.splice(idx , 1)

   this.setState({
       options
   })
}

  setOptionText = e => {
      
      let options = [...this.state.options]
      options[e.target.dataset.optionid] = e.target.value
      this.setState({options})
  }

  render() {
    const {options, questions} = this.state
    return (
    <div>
        <Navbar />

        <div>
        <Card className="card">
        {questions.map((question, i) => 
             <CardHeader key= {i}>
              {`Question #${i + 1}`}
            </CardHeader>
        )}
            <CardBody>
                <FormGroup>
                <Label for="answer">Question</Label>
                   <Input
                      placeholder="Enter quiz question"
                      //value={question}
                    />
                    <Label for="answer">Answer</Label>
                    <Input
                    id="answer"
                    color="danger"
                    placeholder="Correct Answer"
                    />
                </FormGroup>

                <Label>Options</Label>
                {/* // want to create dynamically 
                //https://itnext.io/building-a-dynamic-controlled-form-in-react-together-794a44ee552c 
                */}
             
             {options.map((option, idx) => (
              <FormGroup key={idx}> 
                 {/* let optionId = `option-${idx + 1}` */}

                    <div className='d-flex' >
                        <Input 
                            key={idx}
                            type="text"
                            placeholder={`Option ${++idx}`}
                            value={option}
                            data-optionid={--idx}
                            onChange={this.setOptionText}
                            />
                        { this.state.options.length > 2 &&  <Button
                            color="danger"
                            size="sm"  
                            className="ml-2"
                            onClick={() => {this.deleteNewOption(idx)}} // not getting the id
                            > &times;
                         </Button>}
                    </div>

                   {/*  <div className='d-flex'>
                        <Input 
                            type="text"
                            placeholder={`Option ${++idx}`}
                        />
                        <Button
                            color="danger"
                            size="sm"  
                            className="ml-2"
                        > X
                        </Button>
                    </div> */}
           </FormGroup>
        ))}   
     
           <button 
                class="btn btn-success"
                onClick={this.createNewOption}
                > + 
            </button>
           </CardBody>
        </Card>
        <CardFooter>
            <button 
                class="btn btn-success"
                > New Question 
            </button>
        </CardFooter>
        </div>
    </div>
    )
  }
}

export default Quizpage;