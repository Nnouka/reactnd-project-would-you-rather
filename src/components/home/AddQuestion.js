import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {handleAddQuestion} from '../../actions/questions';
import  requireAuth from '../guest/Authenticator';


class AddQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: ''
    }
    handleOptionOneTextInput = (e) => {
        const optionOneText = e.target.value;
        this.setState((prevState) => ({
            ...prevState,
            optionOneText
        }));
    }

    handleOptionTwoTextInput = (e) => {
        const optionTwoText = e.target.value;
        this.setState((prevState) => ({
            ...prevState,
            optionTwoText
        }));
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {optionOneText, optionTwoText} = this.state;
        const {dispatch, authedUser, history} = this.props;

        dispatch(handleAddQuestion({optionOneText, optionTwoText, author: authedUser}));

        this.setState(() => ({optionOneText: '', optionTwoText: ''}));
        setTimeout(() => history.push('/home'), 1500);
    }
    render() {
        const {optionOneText, optionTwoText} = this.state;
        return (
            <div className='card shadow'>
                <div className='card-header logo-bg'>
                    <h3>Create New Question</h3>
                </div>
                <div className='card-content'>
                    <h5>Complete the question: </h5>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Would You Rather...</h3>
                        <div className='form-group-sm'>
                            <input type='text' 
                                placeholder='Enter Option One Text Here' 
                                value={optionOneText}
                                onChange={this.handleOptionOneTextInput}
                            />
                        </div>
                        <div className='center'>
                            <h3>OR</h3>   
                        </div>
                        <div className='form-group-sm'>
                            <input type='text' 
                                placeholder='Enter Option Two Text Here' 
                                value={optionTwoText}
                                onChange={this.handleOptionTwoTextInput}
                            />
                        </div>
                        <div className='form-group-sm'>
                            <button 
                                type='submit' 
                                className='btn'
                                disabled={optionOneText === '' || optionTwoText === ''}
                                >
                                    Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}

export default requireAuth(withRouter(connect(mapStateToProps)(AddQuestion)), '/add');