import '../profileCard/index.css';
import React from 'react';

type ProfileCardProps = {
    loginStatus: boolean;
    imageUrl: string;
    displayName: string;
    followers: string;
}

export default function ProfileCard({loginStatus, imageUrl, displayName, followers}: ProfileCardProps){
    return(
        <>
            {loginStatus ? (
                <div className="wrapper">

                    <div className='imageWrapper'>
                        <img src={imageUrl} alt="" className='profilePicCard'/>
                    </div>

                    <div className="info">

                        <div className="nameWrapper">
                            <h3 className='userName' data-testid="test-name">{displayName}</h3>
                        </div>
                        <div className="followerWrapper">
                            <h3 className='follower'data-testid="test-followers">Followers: {followers}</h3>
                        </div>
                        
                    </div>
                </div>
            ) : (
                <div className="wrapper">
                    <div className="header-container">
                            <h3>Not Logged In</h3>
                    </div>
                </div>
            )}

        </>
    )
}
