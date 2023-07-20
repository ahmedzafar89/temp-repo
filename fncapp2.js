const { BlobServiceClient } = require('@azure/storage-blob');
const axios = require('axios');

module.exports = async function (context, myBlob) {
    context.log('Blob trigger function processed blob:', context.bindingData.blobTrigger);

    // Replace with your Logic App endpoint URL
    const logicAppEndpoint = 'YOUR_LOGIC_APP_ENDPOINT';

    // Call the Logic App using an HTTP POST request
    try {
        const response = await axios.post(logicAppEndpoint, myBlob, {
            headers: {
                'Content-Type': 'application/octet-stream'
            }
        });

        context.log('Logic App triggered successfully.');
        context.log('Logic App response:', response.data);

        context.done();
    } catch (error) {
        context.log.error('Error triggering Logic App:', error.message);

        context.done(error);
    }
};