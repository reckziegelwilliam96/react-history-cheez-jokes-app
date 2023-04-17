import React from "react";

function VoteButtons({ upVote, downVote }){
    return (
        <div className="VoteButtons">
            <button onClick={upVote}>
                <i className="fas fa-thumbs-up" />
            </button>
            <button onClick={downVote}>
                <i  className="fas fa-thumbs-down" />
            </button>
        </div>
    );
}

export default VoteButtons;