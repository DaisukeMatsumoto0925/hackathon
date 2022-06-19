("use strict");
const { KintoneRestAPIClient } = require("@kintone/rest-api-client");

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const client = new KintoneRestAPIClient({
    baseUrl: "*********************************",
    auth: {
      apiToken: "*********************************",
    },
  });

  const record_id = body.record_id;

  // リクエストパラメータの設定
  const APP_ID = 5; // '5'固定
  const RECORD_ID = record_id; // obnizごとに指定
  const now = new Date();
  const params = {
    app: APP_ID,
    id: RECORD_ID,
    record: {
      trap_status: {
        value: "捕獲",
      },
      caught_at: {
        value: now,
      },
    },
  };

  // レコードの取得
  let code;
  client.record
    .updateRecord(params)
    .then((resp) => {
      code = 200;
      console.log("resp");
      console.log(resp.record);
    })
    .catch((err) => {
      code = 500;
      console.log("err");
      console.log(err);
    });
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
    statusCode: code,
    body: "internal error",
  };
};

