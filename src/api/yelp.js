import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer jFWg2yTwUE-owthhb47jgLvUdJAd-h6_rjs5zbOV3r0IW5zak24wWycCceE-tdQh9CLKKvJxiO2Z2wqW8XXXpaNm-a6YoZRx_eYntM_gp_MF7fqtKgvOwsYzqN0hYnYx'
    }
});
