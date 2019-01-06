import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Button from '@material-ui/core/Button';
import { Col, FormGroup, Input, Label, Form } from 'reactstrap';
//import Quizpage from './Quizpage';




class CreateQuiz extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            quizQuestions: [
                {
                   question: "", 
                   options: ['', ''],
                   answer: ''
                },
                {
                    question: "", 
                    options: ['', ''],
                    answer: ''
                 }
            ],
            user_answers: [],
            step: 0
          };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        
        //what we want to submit
        const post = {
            title: this.state.title,
            description: this.state.description
        }

        fetch('https://quiz-app-api-demo.herokuapp.com/api/quiz', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            description: JSON.stringify(post)
        })
        //we need to get the response in json format/data
        .then(res => res.json())
        .then(data => console.log(data));
    }
  
  //api:
  //https://jsonplaceholder.typicode.com/posts
  // https://quiz-app-api-demo.herokuapp.com/api/quiz
  componentDidMount() {
    fetch('https://quiz-app-api-demo.herokuapp.com/api/quiz')  
     .then(res => res.json())
     .then(data => console.log(data));
    }

    render(){
        return(
            <div>
                <Navbar />
                <h1>CREATE QUIZ</h1>
                <Form onSubmit={this.onSubmit}  className="form">
                <Col md={8} className="mx-auto">
                    <Col>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="title"
                            onChange = {this.onChange}
                            value={this.state.title}
                        />
                    </FormGroup>
                        <br />
                    </Col>
                   
                    <Col>
                        <FormGroup>
                        <Label for="desc">Description</Label>    {/* https://www.w3schools.com/bootstrap/bootstrap_forms_inputs.asp   */}
                        <Input
                            tag="textarea"
                            name="description"
                            id="desc"
                            placeholder="Description"
                            onChange = {this.onChange}
                            value={this.state.description}
                        />
                        </FormGroup>
                    </Col>
                    <h3>CREATE QUESTIONS </h3>
                    <Button variant="contained" color="secondary" type="submit">
                        Submit
                     </Button>
                </Col>
                
                   
                </Form>
            </div>
        )
    }
}

export default CreateQuiz;