import { callToApi } from '../../services/api';

export const getResult = async( input ) => {
    return callToApi( input );
};