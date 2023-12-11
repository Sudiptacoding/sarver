import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAllData = () => {
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            axios.get('https://api.punkapi.com/v2/beers')
                .then(res => {
                    return res.data
                })
    })
    return { isPending, error, data, refetch }
};

export default useAllData;