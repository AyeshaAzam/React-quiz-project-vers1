//https://itnext.io/building-a-dynamic-controlled-form-in-react-together-794a44ee552c

//'rcc and tab' gives you basic class
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Col, FormGroup, Input, Label, Form } from 'reactstrap';

 class CatsForm extends Component {
    state={
        cats: [{name: '', age: ''}], // when state is an array of objects
        owner: '',
        description: '',
        bio: '',
        roll: '',
        
    };
    
 onChangeBioInput = (e) => {
    // this.setState({[e.target.name]: e.target.value});
    this.setState({
        bio:e.target.value
    })
}

onChange = e =>{
    this.setState({[e.target.name]: e.target.value});
    //object[key] : object[value]
    //object[owner/description] :  object[value]

}

  //functions:
  /* handleChange = (e) => {
      if(['name', 'age'].includes(e.target.className) ){
          let cats = [...this.state.cats]
          cats[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
          // cats[0][name] = whatever-was-typed
          this.setState({ cats }, () => console.log(this.state.cats))
      } else {
          this.setState({ [e.target.name] : e.target.value.toUpperCase() })
      }
  } */

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleCatsNameAndAge = e => {
     console.log(e.target.dataset.index)
     const cats = [...this.state.cats]
     cats[e.target.dataset.index][e.target.dataset.input] = e.target.value
     this.setState({cats})
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
    this.state.cats.map(cat => {
      console.log('Your input value is: ' +  cat.name) // now showing the inputs value
      console.log('Your input value is: ' + cat.age) // 
    });
}

onSubmit = (e) => {
    e.preventDefault();
    console.log('you typed : ' + this.state.bio)
}


  render() {
     // let cats = this.state.cats
     let {owner, description, cats, bio, roll} = this.state
    return (
    <div className='wrapper'>
        <h1>CREATE CATS</h1>
        <Form  onSubmit={this.handleSubmit} >
            <Col md={8} className="mx-auto">
                <Col>
                    <FormGroup>
                    <Label htmlFor='owner'>Owner</Label>
                    <Input 
                       type='text' 
                       name='owner' 
                       id='owner' 
                       value= {owner}
                       placeholder='owner name'
                       onChange={this.handleChange}
                       />
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
                       placeholder='description'
                       onChange={this.handleChange}/>
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
                               data-index= {idx}
                               id={catId} 
                               data-input='name'
                               //value={cats[idx].name} //this line disable me from writing into the text  input field ????
                               value={cats.name}
                               className= "name"
                               placeholder="cat's name"
                               onChange= {this.handleCatsNameAndAge}
                               />
    
                            <Label htmlFor= {ageId}>Age</Label>
                            <Input 
                               type='text' 
                               name= {ageId} 
                               data-index={idx} 
                               id={ageId}
                               data-input='age'
                               value={cats[idx].age}
                            //   value= {cats.age}  // not working ??????
                               className= 'age'
                               placeholder='age'
                               onChange={this.handleCatsNameAndAge}
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

        <br />
        <h1>----------------------------</h1>
        <h1>Just for testing the input</h1>
        <hr />
        <form  onSubmit={this.onSubmit}>
          <label>Bio data</label>
          <input
          type="text"
          name="bio"
          placeholder="bio"
          id='bio'
          value= {bio}
          onChange={this.onChangeBioInput}
          />
          <input type="submit" value="Submit" />
        </form>

        <div>{`You typed: ${this.state.bio}`}</div>

      </div>
    )
  }
}

export default CatsForm;
