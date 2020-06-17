/**
 * @supported 设备 ID
 */

let headerCookie = $request.headers["Cookie"];

if (headerCookie) {
  if ($prefs.valueForKey("xtuCookie") != undefined) {
    if ($prefs.valueForKey("xtuCookie") != headerCookie) {
      var cookie = $prefs.setValueForKey(headerCookie, "xtuCookie");
      if (!cookie) {
        $notify("更新xtunnelCookie失败！", "", "");
      } else {
        $notify("更新xtunnelCookie成功！", "", "");
      }
    }
  } else {
    let cookie = $prefs.setValueForKey(headerCookie, "xtuCookie");
    if (!cookie) {
      $notify("首次写入xtunnelCookie失败！", "", "");
    } else {
      $notify("首次写入xtunnelCookie成功！", "", "");
    }
  }
}
$done({});
