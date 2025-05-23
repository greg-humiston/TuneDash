import { useState } from "react";
import { RoundsData } from "../views/dash_home/overviewMockData";

const DEFAULT_DASH_DATA = {
    title: '',
    description: '',
    dashMode: '',
    isDownVotingEnabled: false,
    dashArt: '',
    isListed: false,
    totalRounds: 1,
    songsPerRound: 3,
    numberOfPlayers: 2, // 2 players needed by default
    maxNumberOfPlayers: 2,
    maxVotesAllowed: 3,
    maxDownVotesAllowed: 0,
    userList: [],
    rounds: []
}

export type Round = {
	roundId: string;
	roundTitle: string;
	roundDescription: string;
};

type NewRound = {
    roundTitle: string;
    roundDescription: string;
    roundArt: string;
};

type NewDash = {
  title: string;
  description: string;
  dashMode: 'Accelerated' | string;
  isDownVotingEnabled?: boolean;
  dashArt: string;
  isListed: boolean;
  totalRounds: number;
  songsPerRound: number;
  numberOfPlayers: number;
  maxNumberOfPlayers: number;
  maxVotesAllowed: number;
  maxDownVotesAllowed: number;
  hasVotesBeenSubmitted: boolean;
  userList: string[];
  rounds: NewRound[];
};

type CreateNewDashProps = {

};

export const CreateNewDash = (props: CreateNewDashProps) => {
    const [newDashState, setNewDashState] = useState({});
    const [enableDownvotes, setEnableDownvotes] = useState(false);

    const handleFormChange = (data = {}) => {
        setNewDashState({
            ...newDashState,
            ...data
        });
    };  

    return (
        <div>
        <div className="create-dash-container">
            <div className="create-dash-header">
                <label>Create New Dash</label>
            </div>
            <div className="create-dash-body">
                <div className="create-dash-form-item">
                    <div>
                        <label>Dash Title:</label>
                    </div>
                    <div>
                        <input id="title" value="" onChange={handleFormChange}/>
                    </div>
                </div>
                <div className="create-dash-form-item">
                    <div>
                        <label>Dash Description:</label>
                    </div>
                    <div>
                        <input id="description" value="" onChange={handleFormChange}/>
                    </div>
                </div>
                <div className="create-dash-form-item">
                    <div>
                        <label>Dash Art:</label>
                    </div>
                    <div>
                        <input id="art" value="" onChange={handleFormChange}/>
                    </div>
                </div>
                <div className="create-dash-form-item">
                    <div>
                        <label>Number of Songs Per Round:</label>
                    </div>
                    <div>
                        <input id="numberOfSongs" value="" onChange={handleFormChange}/>
                    </div>
                </div>
                <div className="create-dash-form-item">
                    <div>
                        <label>Number of Votes Per Player:</label>
                    </div>
                    <div>
                        <input id="maxVotesAllowed" value="" onChange={handleFormChange}/>
                    </div>
                </div>
                <div className="create-dash-form-item-checkbox">
                    <div>
                        <label>Enable Downvotes:</label>
                    </div>
                    <div className="create-dash-form-checkbox">
                        <input
                            type="checkbox" 
                            onChange={() => { setEnableDownvotes(!enableDownvotes) }}
                            checked={enableDownvotes}
                        />
                    </div>
                </div>
                {
                    enableDownvotes
                        ?   (
                            <div className="create-dash-form-item">
                                <div>
                                    <label>Max Downvotes Allowed:</label>
                                </div>
                                <div>
                                    <input id="maxDownVotesAllowed" value="" onChange={handleFormChange}/>
                                </div>
                            </div>
                        )
                        : <></>
                }
                <div className="create-dash-form-item">
                    <div>
                        <label>Number of Votes Per Player:</label>
                    </div>
                    <div>
                        <input id="maxVotesAllowed" value="" onChange={handleFormChange}/>
                    </div>
                </div>
            </div>
            <div className="create-dash-footer">
                <div className="create-dash-footer-button">
                    <button>
                        Submit
                    </button>
                </div>
                <div className="create-dash-footer-button">
                    <button>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};