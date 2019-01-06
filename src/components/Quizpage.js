
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
            options: [],
            answer: ''    
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
        questions: [''],
        options: ['', ''],
        answers: ''
     } 
 
     /* state = {
        questions: [
          { 
            question: '', 
            options: ['', ''], 
            answer: '' 
          },
          { 
             question: '',
             options: ['', ''], 
             answer: '' 
          },
        ],
     } */

//functions:
createNewOption = () => {
 this.setState((prevState) => ({
   options: [
       ...prevState.options , ''  // need to have empty string, to fill with new data
    ],
 }));
}

//https://www.youtube.com/watch?v=UmuLW78biBw&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=19
deleteNewOption = idx => {

   let options = [...this.state.options]

   options.splice(idx , 1)  

   this.setState({
       options      // is same as 'options: options' if key and value has same name.
   })
}

  setOptionText = e => {
      let options = [...this.state.options]
      options[e.target.dataset.optionid] = e.target.value
      this.setState({options})
  }



  createNewQuestion = () => {

  }

  submitQuiz = (e) => {
    console.log(this.state.questions)
    let questions = [...this.state.questions]
    questions[e.target.value] = e.target.value
    this.setState({questions})
}

onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
 }
   



handleChange = (e) => {
   /*  if(['question', 'answer'].includes(e.target.name) ){
        let quizQues = [...this.state.questions]
        let quizAns = [...this.state.answers] */
        this.setState({[e.target.name]: e.target.value})
}
  

  render() {
    const {options, questions, answers} = this.state
    return (
    <React.Fragment>
        <Navbar />

        <div>
            <Card className="card">
            {questions.map((question, i) => 
                <CardHeader key= {i}>
                {`Question #${i + 1}`}
                <button class="btn btn-danger btn-sm d-inline-block float-right"
                > &times; 
                </button>
                </CardHeader>
            )}
                <CardBody>
                    <FormGroup>
                    <Label for="answer">Question</Label>
                    <Input
                        type='text'
                        name='question'
                        id='question'
                        placeholder="Enter quiz question"
                        value={questions}
                        onChange={this.handleChange}
                        />

                    <Label for="answer">Answer</Label>
                    <Input
                        type='text'
                        name='answer'
                        id="answer"
                        color="danger"
                        placeholder="Correct Answer"
                        value={answers}
                        onChange={this.handleChange}
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
                                onClick={() => {this.deleteNewOption(idx)}} 
                                > &times;        {/* this bring the cross sign */}
                            </Button>}
                        </div>
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
                 class='btn btn-success mr-3'
                 onClick={this.createNewQuestion}
                > New Question 
                </button>
              
                <button  
                  class='btn btn-danger ' 
                  type="submit"
                  onClick={this.submitQuiz}
                  >
                 Save Quiz
                </button>
            </CardFooter>
        </div>
    </React.Fragment>
    )
  }
}

export default Quizpage;