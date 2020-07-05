import React, { Component } from 'react';
import { connect } from 'react-redux';
import  requireAuth from '../guest/Authenticator';

import Board from './Board';

class LeaderBoard extends Component {
    render() {
        const {users} = this.props;
        const sorted = Object.keys(users).sort((a, b) => {
            const userA = users[a];
            const userB = users[b];
            const scoreA = Object.keys(userA.answers).length + userA.questions.length;
            const scoreB = Object.keys(userB.answers).length + userB.questions.length;
            return scoreB - scoreA;
        })
        return (
            <ul>
                {
                    sorted.map((uid, index) => <Board key={uid} user={users[uid]} rank={index + 1}/>)
                }
            </ul>
        );
    }
}

function mapStateToProps({users}){
    return {
        users
    }
}
export default requireAuth(connect(mapStateToProps)(LeaderBoard), '/leaderboard');