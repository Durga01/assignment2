var aws = require('aws-sdk');
var ddb = new aws.DynamoDB({ apiVersion: '2012-10-08' });

exports.handler = async (event, context) => {
    console.log(event);

    let date = new Date();

    const tableName = process.env.TABLE_NAME;
    const region = process.env.REGION;

    console.log("table=" + tableName + " -- region=" + region);

    aws.config.update({ region: region });

    if (event.request.userAttributes.email) {

        let ddbParams = {
            Item: {
                'email': { S: event.request.userAttributes.email },
                'address': { S: event.request.userAttributes.address },
                'given_name': { S: event.request.userAttributes.given_name },
                'phone_number': { S: event.request.userAttributes.phone_number },
                'family_name': { S: event.request.userAttributes.family_name },
                'createdAt': { S: date.toISOString() },
            },
            TableName: tableName
        };

        try {
            await ddb.putItem(ddbParams).promise();
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        console.log("Error: Nothing was written to DDB or SQS");
        context.done(null, event);
    }
};

