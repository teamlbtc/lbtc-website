import React from 'react';

const ProfileCard = (props) => {
    const { person } = props

    return (
        <div>
            <div className="tem-bx">
                <div
                    className="tem-thmb"
                    style={{
                        backgroundImage:
                            "url(" + person.photo + ")"
                    }}
                >
                    <div className="tem-scl">
                        {person.linkedinlink &&
                            <a
                                className="facebook"
                                href={person.linkedinlink}
                                title="Linkedin"
                                itemprop="url"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <i className="fa fa-linkedin"></i>
                            </a>
                        }
                        {person.facebooklink &&
                            <a
                                className="pinterest"
                                href={person.facebooklink}
                                title="Instagram"
                                itemprop="url"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <i className="fa fa-instagram"></i>
                            </a>
                        }
                        {person.twitterlink &&
                            <a
                                className="twitter"
                                href={person.twitterlink}
                                title="Email"
                                itemprop="url"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <i className="fa fa-envelope"></i>
                            </a>
                        }
                    </div>
                </div>
                <div className="tem-inf">
                    <h4 itemprop="headline">

                        {person.name}

                    </h4>
                    <span>{person.designation}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;