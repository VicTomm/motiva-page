import database from '../firebase/firebase';

// SET_SECRETARIAS
export const setSecretarias = (secretarias) => ({
    type: 'SET_SECRETARIAS',
    secretarias
});

export const startSetSecretarias = () => {
    return (dispatch, getState) => {
        return database.ref(`pages/secretarias`).once('value').then((snapshot) => {
            const secretarias = [];

            snapshot.forEach((childSnapshot) => {
                secretarias.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setSecretarias(secretarias));
        });
    };
};
