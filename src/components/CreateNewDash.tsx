import { useState } from "react";
import { RoundsData } from "../views/dash_home/overviewMockData";
import { useNavigate } from "@tanstack/react-router";

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
  dashArt: string;
  isListed: boolean;
  totalRounds: number;
  songsPerRound: number;
  numberOfPlayers: number;
  maxNumberOfPlayers: number;
  maxVotesAllowed: number;
  maxDownVotesAllowed: number;
  userList: string[];
  rounds: NewRound[];
};

type CreateNewDashProps = {

};

const defaultDashState: NewDash = {
    title: '',
    description: '',
    dashMode: '',
    dashArt: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/SpongeBob_SquarePants_character.png',
    isListed: false,
    totalRounds: 1,
    songsPerRound: 3,
    numberOfPlayers: 2, // 2 players needed by default
    maxNumberOfPlayers: 2,
    maxVotesAllowed: 3,
    maxDownVotesAllowed: 0,
    userList: [],
    rounds: []
};

export const CreateNewDash = (props: CreateNewDashProps) => {
    const [newDashState, setNewDashState] = useState(defaultDashState);
    const [enableDownvotes, setEnableDownvotes] = useState(false);
    const navigate = useNavigate();

    const handleSubmitNewDash = () => {
        
    };

	const handleNavigateHome = () => {
		navigate({ to: `../../home` });
	};

    const handleFormChange = (data: React.ChangeEvent<HTMLInputElement>) => {
        const value = data.target.value;
        const key = data.target.id;
        // debugger;
        setNewDashState({
            ...newDashState,
            [key]: value
        });
    };  

    return (
        <div className="create-dash-wrapper">
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
                            <input 
                                id="title" 
                                value={newDashState?.title} onChange={handleFormChange}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="create-dash-form-item">
                        <div>
                            <label>Dash Description:</label>
                        </div>
                        <div>
                            <input 
                                id="description" 
                                value={newDashState?.description} 
                                onChange={handleFormChange}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="create-dash-form-item">
                        <div>
                            <label>Dash Art:</label>
                        </div>
                        <div>
                            <input 
                                id="dashArt" 
                                value={newDashState?.dashArt} 
                                onChange={handleFormChange}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="create-dash-form-item">
                        <div>
                            <label>Number of Songs Per Round:</label>
                        </div>
                        <div>
                            <input 
                                id="songsPerRound" 
                                value={newDashState?.songsPerRound} 
                                onChange={handleFormChange}
                                type="number"
                                min={1}
                            />
                        </div>
                    </div>
                    <div className="create-dash-form-item">
                        <div>
                            <label>Number of Votes Per Player:</label>
                        </div>
                        <div>
                            <input 
                                id="maxVotesAllowed" 
                                value={newDashState?.maxVotesAllowed} 
                                onChange={handleFormChange}
                                type="number"
                                min={newDashState?.songsPerRound}
                            />
                        </div>
                    </div>
                    <div className="create-dash-form-item-checkbox">
                        <div>
                            <label>Enable Downvotes:</label>
                        </div>
                        <div className="create-dash-form-checkbox">
                            <input
                                type="checkbox" 
                                id="isDownVotingEnabled"
                                onChange={() => { 
                                    setEnableDownvotes(!enableDownvotes); 
                                }}
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
                                        <input 
                                            id="maxDownVotesAllowed" 
                                            value={newDashState?.maxDownVotesAllowed} 
                                            onChange={handleFormChange}
                                            type="number"
                                            min={newDashState?.songsPerRound}
                                        />
                                    </div>
                                </div>
                            )
                            : <></>
                    }
                </div>
                <div className="create-dash-footer">
                    <div className="create-dash-footer-button">
                        <button onClick={}>
                            Submit
                        </button>
                    </div>
                    <div className="create-dash-footer-button">
                        <button onClick={handleNavigateHome}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            <div style={{maxWidth: '500px', overflowY: 'scroll'}}>
                {JSON.stringify(newDashState)}
            </div>
            
        </div>
    );
};