import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionPreview from './QuestionPreview';

class QuestionList extends Component {
    render () {
        const {questions} = this.props;
        return (
            <ul>
                {
                    questions.map((question) => (
                        <QuestionPreview key={question.id} question={question} />
                    ))
                }
            </ul>
        );
    }
}

function mapStateToProps({authedUser}, {questions}) {
    return {
        authedUser,
        questions
    }
}
export default connect(mapStateToProps)(QuestionList);