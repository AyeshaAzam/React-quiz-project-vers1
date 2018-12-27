
import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
//import Typography from '@material-ui/core/Typography';
import { Input } from 'reactstrap';
import { Card, Button, CardHeader, CardFooter, CardBody,
         FormGroup, Label 
       } from 'reactstrap';


 class Quizpage extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div>
        <Card className="card">
            <CardHeader>
              Question 1:  
            </CardHeader>
            <CardBody>
                <FormGroup>
                <Label for="answer">Question</Label>
                   <Input
                      placeholder="Enter quiz question"
                      //value={question}
                      onChange={e =>
                        this.props.setQuestionTitle(
                        this.props.index,
                        e.target.value
                        )
                       }
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
                 <FormGroup> 
                    <div className='d-flex'>
                    <Input 
                        type="text"
                        placeholder="Option 1"
                        />
                        <Button
                        color="danger"
                        size="sm"  
                        className="ml-2"
                        > X
                        </Button>
                    </div>
  
                    <div className='d-flex'>
                        <Input 
                            type="text"
                            placeholder="Option 2"
                        />
                        <Button
                            color="danger"
                            size="sm"  
                            className="ml-2"
                        > X
                        </Button>
                    </div>
                 </FormGroup>
            </CardBody>
        </Card>
        <CardFooter>
            <button 
            class="btn btn-success"
            > + 
            </button>
        </CardFooter>
        </div>
      </div>
    )
  }
}

export default Quizpage;