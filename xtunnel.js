/**
 * @supported 改为你的设备 ID
 * @Author: Jianxun
 * @Blog: https://lijianxun.top
 * @使用介绍：https://lijianxun.top/61.html
 */

let Cookie = $prefs.valueForKey("xtuCookie");

let Req = {
  url: "https://xtunnel.pro/user/checkin",
  method: "POST",
  headers: {
    Cookie: Cookie,
    Origin: "https://xtunnel.pro",
    Referer: "https://xtunnel.pro/user",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"
  }
};

$task.fetch(Req).then(response => {
  try {
    let doc = JSON.parse(response.body);
    if (doc["ret"] == 1) {
      $notify(
        "xtunnel",
        "成功",
        `${doc["msg"]}\n已使用流量${doc["trafficInfo"]["lastUsedTraffic"]}\n剩余流量${doc["trafficInfo"]["unUsedTraffic"]}`
      );
    } else {
      $notify("xtunnel", "成功", doc["msg"]);
    }
  } catch (error) {
    $notify("xtunnel", "失败", error);
  }
});
