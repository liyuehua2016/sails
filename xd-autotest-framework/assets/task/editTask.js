/**
 * Created by xiaodou_chenxiaoxiang on 16/8/12.
 */

/**
 * 删除所有用例
 */
function deleteAllCases() {
  $.main.refreshMain("/TaskManager/deleteAllCase");
}


function selectedCaseWithName(caseName) {
  $.post("/TaskManager/addCaseToTask", {casename:caseName}, function (result) {
    //获得搜索结果后展示
  })
}

function addCaseToTask(item) {
  console.log(JSON.stringify(item.item, null, 4));
  console.log('-----'+item);
  // console.log(item);
  $.post("/TaskManager/addCaseToTask", {item:item}, function (result) {
    //根据result判断是否更新成功
  })
}

function updateOrderForCases(caseName) {

}
