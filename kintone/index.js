("use strict");
const { KintoneRestAPIClient } = require("@kintone/rest-api-client");

exports.handler = async (event) => {
  // クライアントの作成
  const client = new KintoneRestAPIClient({
    baseUrl: "*********************************",
    auth: {
      apiToken: "*********************************",
    },
  });

  console.log("start kintone api");

  let code;
  let resp;
  // レコードの取得
  await client.record
    .getRecords({ app: "*" })
    .then((data) => {
      console.log(data.records);
      code = 200;
      resp = { huntings: data.records };
    })
    .catch((err) => {
      console.log(err);
      code = 500;
    });
  console.log(code);
  console.log(resp);
  if (code == 200) {
    return {
      statusCode: code,
      body: JSON.stringify(resp),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  }
  return {
    statusCode: 500,
    body: "internal error",
  };
};
