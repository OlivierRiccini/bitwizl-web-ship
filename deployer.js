const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const recursive = require('recursive-fs');
const basePathConverter = require('base-path-converter');

const pinataApiKey = '1924fe5979d235dcbd38';
const pinataSecretApiKey = '22504ccceeafabe41c7e28f5ac24e801390541da5b2bee0106168a718d168057';
const appName = 'bitwizl-website';

const deploy = () => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const src = './dist/' + appName;
    
    //we gather the files from a local directory in this example, but a valid readStream is all that's needed for each file in the directory.
    recursive.readdirr(src, function (err, dirs, files) {
        let data = new FormData();
        files.forEach((file) => {
            //for each file stream, we need to include the correct relative file path
            data.append(`file`, fs.createReadStream(file), {
                filepath: basePathConverter(src, file)
            })
        });
    
        const metadata = JSON.stringify({
            name: appName
        });
        data.append('pinataMetadata', metadata);
    
        return axios.post(url,
            data,
            {
                maxContentLength: 'Infinity', //this is needed to prevent axios from erroring out with large directories
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                    'pinata_api_key': pinataApiKey,
                    'pinata_secret_api_key': pinataSecretApiKey
                }
            }
        ).then(function (response) {
            //handle response here
            unpinPrevious();
            console.log('MEGA INHO ', response.data);
        }).catch(function (error) {
            //handle error here
            console.log('MEGA ERROR ', error);
        });
    });
};

const removePinFromIPFS = (hashToUnpin) => {
    console.log('Unpining ' + hashToUnpin + ' ...');
    const url = `https://api.pinata.cloud/pinning/unpin/${hashToUnpin}`;
    return axios
        .delete(
            url,
            {
                headers: {
                    'pinata_api_key': pinataApiKey,
                    'pinata_secret_api_key': pinataSecretApiKey
                }
            }
        ).then(function (response) {
            console.log('Upined ' + hashToUnpin + ' !!!');
        })
        .catch(function (error) {
            //handle error here
            console.log('MEGA ERROR ', error);
        });
};

const unpinPrevious = () => {
    const url = `https://api.pinata.cloud/data/pinList`;
    return axios
        .get(url, {
            headers: {
                'pinata_api_key': pinataApiKey,
                'pinata_secret_api_key': pinataSecretApiKey
            }
        })
        .then(function (response) {
            //handle response here
            response.data.rows.forEach(pin => {
                // console.log('PIN ', pin);
                if (pin.id !== response.data.rows[0].id && !pin.date_unpinned && pin.metadata.name === appName) {
                    removePinFromIPFS(pin.ipfs_pin_hash);
                }
            })
        })
        .catch(function (error) {
            //handle error here
            console.log('error ', error);
        });
};

deploy();