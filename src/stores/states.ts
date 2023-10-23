import {atom} from "recoil";

const pathState = atom({
    key: 'path',
    default: ''
});

export {pathState} ;