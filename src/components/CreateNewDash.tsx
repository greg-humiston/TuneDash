import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

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
    maxDownVotesAllowed: 1,
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
		navigate({ to: `../home` });
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

    const handleFormSubmit = () => {
        
    }

    return (
        <div className="create-dash-wrapper">
            <div className="create-dash-container">
                <div className="create-dash-header">
                    <span>Create New Dash</span>
                </div>
                <div className="create-dash-body">
                    <div className="create-dash-form-item">
                        <div>
                            <span>Dash Title:</span>
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
                            <span>Dash Description:</span>
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
                            <span>Dash Art:</span>
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
                            <span>Number of Songs Per Round:</span>
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
                            <span>Number of Votes Per Player:</span>
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
                            <span>Enable Downvotes:</span>
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
                                        <span>Max Downvotes Allowed:</span>
                                    </div>
                                    <div>
                                        <input 
                                            id="maxDownVotesAllowed" 
                                            value={newDashState?.maxDownVotesAllowed} 
                                            onChange={handleFormChange}
                                            type="number"
                                            min={1}
                                        />
                                    </div>
                                </div>
                            )
                            : <></>
                    }
                </div>
                <div className="create-dash-footer">
                    <div className="create-dash-footer-button">
                        <button onClick={handleFormSubmit}>
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
            <div style={{maxWidth: '500px', overflowY: 'scroll', position: 'absolute', left: 0}}>
                {JSON.stringify(newDashState)}
            </div>
            
        </div>
    );
};