//2.定义行为

//action
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

//action creator
const ACTION_CREATOR_ADD_TODO = (text:string) => {
    return {type: ADD_TODO, payload: text}
};

const ACTION_CREATOR_DELETE_TODO = (text:string) => {
    return {type: DELETE_TODO, payload: text}
};

export function DISPATCH_ADD_TODO(dispatch: any) {
    return (text: string) => {
        dispatch(ACTION_CREATOR_ADD_TODO(text))
    }
}

export function DISPATCH_DELETE_TODO(dispatch: any) {
    return (text: string) => {
        dispatch(ACTION_CREATOR_DELETE_TODO(text))
    }
}