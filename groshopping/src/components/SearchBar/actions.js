import { callToApi } from '../../services/api';

export const getSearchResult = async( searchInput ) => {
    return callToApi( searchInput );
};