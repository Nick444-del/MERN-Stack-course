// const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
// const params = {
//     included_tags: ['raiden-shogun', 'ass'],
//     height: '>=2000'
// };

// const queryParams = new URLSearchParams();

// for (const key in params) {
//     if (Array.isArray(params[key])) {
//         params[key].forEach(value => {
//             queryParams.append(key, value);
//         });
//     } else {
//         queryParams.set(key, params[key]);
//     }
// }
// const requestUrl = `${apiUrl}?${queryParams.toString()}`;

// fetch(requestUrl)
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('Request failed with status code: ' + response.status);
//         }
//     })
//     .then(data => {
//         // Process the response data as needed
//         console.log(data);
//         document.querySelector('#image').src = data.images[0].url;
//     })
//     .catch(error => {
//         console.error('An error occurred:', error.message);
//     });

// const url = 'https://api.waifu.im/search';
// const parameters = {
//     include_tags: ['oral'],
//     height: '>=2000'
// }

// const queryParms = new URLSearchParams();

// for (const key in parameters) {
//     if (Array.isArray(parameters[key])) {
//         parameters[key].forEach(value => {
//             queryParms.append(key, value);
//         });
//     }else {
//         queryParms.set(key, parameters[key]);
//     }
// }
// const requestUrl = `${url}?${queryParms.toString()}`;

// const getPost = async () => {
//     const response = await fetch(requestUrl);
//     const data = await response.json();
//     console.log(data);
//     document.querySelector('#image').src = data.images[0].url;
// }

// getPost();

const apiUrl = 'https://api.waifu.im/tags';

fetch(apiUrl)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Request failed with status code: ' + response.status);
        }
    })
    .then(data => {
        // Process the response data as needed
        console.log(data);
    })
    .catch(error => {
        console.error('An error occurred:', error.message);
    });
