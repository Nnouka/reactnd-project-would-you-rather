import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {handleVoteQuestion} from '../../actions/questions';

class Poll extends Component {
    state = {
        answer: 'optionOne'
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const {answer} = this.state;
        const {question, history, dispatch} = this.props;
        dispatch(handleVoteQuestion(question.id, answer));
        history.push(`/questions/${question.id}`);
    }
    handleClick = (e) => {
        const answer = e.target.value;
        console.log(answer);
        this.setState(() => ({answer}));
    }
    render() {
        const {question} = this.props;
        return (
            question === undefined ? <div></div> :
            <form onSubmit={this.handleSubmit}>
                <h3>Would You Rather...</h3>
                <div className='form-group'>
                    <input type='radio' name='answer' value='optionOne' id='answer-1' defaultChecked onClick={this.handleClick}/>
                    <label htmlFor='answer-1'>
                         {question.optionOne.text}
                    </label>
                    <br />
                    <input type='radio' name='answer' value='optionTwo' id='answer-2' onClick={this.handleClick} />
                    <label htmlFor='answer-2'>
                        {question.optionTwo.text}
                    </label>
                </div>
                <button type='submit' className='btn'>
                        Submit
                </button>
            </form>
        );
    }
}

export default withRouter(connect()(Poll));