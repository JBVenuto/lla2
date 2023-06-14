import lessonConstants from './lessonConstants';

const localStore = {
    savePlace: (newState) => {
        localStorage.setItem('llaState', JSON.stringify(newState));
    },
    getState: () => {
        const localState = JSON.parse(localStorage.getItem('llaState')) || lessonConstants;
        return localState;
    }
}

// let schema = {
//     currentLanguage: '<options are french, german, spanish, italian with most coming later> ',
//     french: {
//         lesson: '<mp3 file name>',
//         place: '<time format will depend on mp3 research>'
//     }
// }

export default localStore;
