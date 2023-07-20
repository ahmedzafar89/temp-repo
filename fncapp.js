const { HttpClient } = require('@azure/functions');

module.exports = async function (context, req) {
    const logicAppEndpoint = 'YOUR_LOGIC_APP_ENDPOINT';

    const httpClient = new HttpClient();
    const requestBody = {
        // Your request body data, if required by the Logic App.
    };

    try {
        const response = await httpClient.post(logicAppEndpoint, {
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Process the response from the Logic App if needed.
        const responseBody = await response.text();

        context.log('Azure Logic App responded:', responseBody);

        // Your function logic here...

        // Return an HTTP response from your function if required.
        return {
            status: 200,
            body: 'Azure Logic App called successfully.'
        };
    } catch (error) {
        context.log.error('Error calling Azure Logic App:', error);
        // Handle error and return an appropriate response if needed.
        return {
            status: 500,
            body: 'Error calling Azure Logic App.'
        };
    }
};

    Deploy your Azure Function App to Azure.

    Once your function is deployed, it will be able to call the Azure Logic App endpoint specified in the logicAppEndpoint variable.

Please make sure that your Azure Function App and Azure Logic App are in the same Azure subscription or have the necessary permissions to communicate with each other.
