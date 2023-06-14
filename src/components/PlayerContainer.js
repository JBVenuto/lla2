import React from 'react';
import lessonConstants from '../utils/lessonConstants'
import localStore from '../utils/localStore';

function PlayerContainer(props) {
    const [playState, setPlayState] = React.useState(props.playState);
    const [language, setLanguage] = React.useState(props.playState.progress.path);
    const [section, setSection] = React.useState(props.playState.progress.section);
    const [lesson, setLesson] = React.useState(props.playState.progress.lesson);
    const [time, setTime] = React.useState(props.playState.progress.time);

    React.useEffect(() => {
        setPlayState(props.playState)
        setLanguage(props.playState.progress.path);
        setSection(props.playState.progress.section);
        setLesson(props.playState.progress.lesson);
        setTime(props.playState.progress.time);
    }, [props.playState])

    const timeUpdate = e => {
        const tempPlayState = playState;
        tempPlayState.progress.time = Math.floor(e.target.currentTime);
        tempPlayState.languages[language][section][lesson].time = Math.floor(e.target.currentTime);
        props.saveLocalState(playState)
    }

    return (
        <div className="player-container">
            <h2>{lesson}</h2>
            <audio
                src={`${playState.languages[language][section][lesson].locationSrc}#t=${time}`}
                onTimeUpdate={timeUpdate}
                controls
            >
            </audio>
        </div>
    );
}

export default PlayerContainer;