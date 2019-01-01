//https://itnext.io/building-a-dynamic-controlled-form-in-react-together-794a44ee552c

//'rcc and tab' gives you basic class
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Col, FormGroup, Input, Label, Form } from 'reactstrap';

 class CatsForm extends Component {
 constructor(props){
     super(props);
     this.state={
        cats: [{name: '', age: ''}],
        owner: '',
        description: ''
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }
    
onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
}

 /* handleSubmit = (e) => {
     e.preventDefault();

     const postCats = {
         cats : this.state.cats.name
     }
    
 } */

  //functions:
  handleChange = (e) => {
      if(['name', 'age'].includes(e.target.className) ){
          let cats = [...this.state.cats]
          cats[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
          // cats[0][name] = whatever-was-typed
          this.setState({ cats }, () => console.log(this.state.cats))
      } else {
          this.setState({ [e.target.name] : e.target.value.toUpperCase() })
      }
  }

  addCat = (e) => {
      this.setState((prevState) => ({
          cats: [...prevState.cats, {name: '', age: ''}],  
      }));
  }

  //just for test perpose:
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Your input value is: ' + this.state.owner)
    console.log('Your input value is: ' + this.state.description)
    //let strLoc = JSON.parse(this.state.cats); //parse it back to json/object
   // console.log('Your input value is: ' + strLoc.name);
   console.log('Your input value is: ' + this.state.cats.name) // shows undefined
   console.log('Your input value is: ' + this.state.cats.age) // shows undefined
}


  render() {
     // let cats = this.state.cats
     let {owner, description, cats} = this.state
    return (
    <div className='wrapper'>
        <h1>CREATE CATS</h1>
        <Form  onSubmit={this.handleSubmit} onChange={this.handleChange} >
            <Col md={8} className="mx-auto">
                <Col>
                    <FormGroup>
                    <Label htmlFor='owner'>Owner</Label>
                    <Input 
                       type='text' 
                       name='owner' 
                       id='owner' 
                       value= {owner}
                       placeholder='owner name'/>
                    </FormGroup>
                </Col>
                
                <Col>
                <FormGroup>
                    <Label  htmlFor='description'>Description</Label>
                    <Input 
                       type='text' 
                       name='description'  
                       id='description'
                       value= {description}   //if I dont give this line then error will say: 'description' is assigned a value but never used
                       placeholder='description'/>
                </FormGroup>
                </Col>
                    
                <Button 
                  variant="contained" 
                  color="primary" 
                  type="submit"
                  onClick={this.addCat}
                  >
                    Add new Cats
                </Button> 
                {
                    cats.map((val, idx) => {
                        let catId = `cat-${idx}`, ageId=`age-${idx}`
                       // let strLoc = JSON.stringify(cats); // stringify it

                        return(
                            <div key={idx}>
                            <Label htmlFor= {catId}>{`Cat # ${idx + 1}`}</Label>
                            <Input 
                               type='text' 
                               name={catId} 
                               data-id= {idx}
                               id={catId} 
                               //value={cats[idx].name} //this line disable me from writing into the text  input field ????
                               value={cats.name}
                               className= "name"
                               placeholder="cat's name"
                              // onChange= {this.onChange}
                               />
    
                            <Label htmlFor= {ageId}>Age</Label>
                            <Input 
                               type='text' 
                               name= {ageId} 
                               data-id= {idx} 
                               id={ageId}
                               value={cats[idx].age}
                              // value= {cats.age}  // not working ??????
                               className= 'age'
                               placeholder='age'
                               />
                        </div>
                        )
                        
                    })
                    
                }
                <br/>
                <br/>
                <input type='submit' value='Submit' onClick={this.handleSubmit}/>
            </Col>
        </Form>
      </div>
    )
  }
}

export default CatsForm;
