import { reactive } from 'vue';
import axios from 'axios';
export const store = reactive ({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0',
    cardList: [],

    getCards: function(archetypeFilter = null) {
        const url = (archetypeFilter !== null) ? `${this.apiUrl}&archetype=${archetypeFilter}` : this.apiUrl;
        axios.get(url)
        .then((response) => {
            // handle success
            this.cardList = response.data.data;
        })
        .catch(function (error) {
            // handle error
            console.error(error);
        })
    }
});