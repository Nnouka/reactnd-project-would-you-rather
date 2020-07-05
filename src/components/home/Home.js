import React, { Component } from 'react';
import  requireAuth from '../guest/Authenticator';
import { connect } from 'react-redux';

import QuestionList from './QuestionList';

class Home extends Component {
    ANSWERED = 'ANSWERED';
    UNANSWERED = 'UNANSWERED';
    state = {
        active: this.UNANSWERED,
        questions: []
    }
    componentDidMount() {
        this.filterQuestions(this.UNANSWERED);
    }
    
    filterQuestion(question, active = this.UNANSWERED){
        const {authedUser} = this.props;
        if(active === this.ANSWERED) {
            return question.optionOne.votes.findIndex(uid => uid === authedUser) > -1 
                || question.optionTwo.votes.findIndex(uid => uid === authedUser) > -1;
        }
        if(active === this.UNANSWERED) {
            return question.optionOne.votes.findIndex(uid => uid === authedUser) < 0 
                && question.optionTwo.votes.findIndex(uid => uid === authedUser) < 0;
        }
    }
    filterQuestions(active) {
        const {questions} = this.props;
        let filtered = Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
            .map(questionId => questions[questionId]).filter((f) => this.filterQuestion(f, active));
        this.setState((prevState) => ({
            ...prevState,
            questions: filtered
        }) );
    }
    handleActiveStateChange(active) {
        this.setState((prevState) => ({
            ...prevState,
            active
        }));
        this.filterQuestions(active);
    }
    render() {
        const {active, questions} = this.state;
        return (
            <div className='card'>
            <div className='card-header-sm center logo-bg'>
                <ul className='nav nav-tabs'>
                    <li 
                    className={active === this.UNANSWERED ? 'active' : ''}
                    onClick={() => this.handleActiveStateChange(this.UNANSWERED)}
                    >
                        Unaswered Questions
                    </li>
                    <li 
                    className={active === this.ANSWERED ? 'active' : ''}
                    onClick={() => this.handleActiveStateChange(this.ANSWERED)}
                    >
                        Answered Questions
                    </li>
                </ul>
            </div>
            <div className='card-content'>
                <QuestionList questions={questions} />
            </div>
        </div>
        )
    }
}
function mapStateToProps({authedUser, questions, users}) {
    return {
        authedUser,
        questions,
        users
    }
}
export default requireAuth(connect(mapStateToProps)(Home), '/home')
