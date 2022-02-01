$(".verify_user_btn").click(function () {
  var user_id_v = $(this).data("userId");
  var button = this;
  $(button).attr("disabled", true);

  $.ajax({
    url: "php/admin_ajax.php?verify_user",
    method: "post",
    dataType: "json",
    data: { user_id: user_id_v },
    success: function (response) {
      console.log(response);
      if (response.status) {
        $(button).text("Verified");
      } else {
        $(button).attr("disabled", false);
        alert("something is wrong,try again after some time");
      }
    },
  });
});

$(".block_user_btn").click(function () {
  var user_id_v = $(this).data("userId");
  var button = this;
  $(button).attr("disabled", true);

  $.ajax({
    url: "php/admin_ajax.php?block_user",
    method: "post",
    dataType: "json",
    data: { user_id: user_id_v },
    success: function (response) {
      console.log(response);
      if (response.status) {
        $(button).hide();
        $(button).siblings(".unblock_user_btn").show();
        $(button).siblings(".unblock_user_btn").attr("disabled", false);
      } else {
        $(button).attr("disabled", false);
        alert("something is wrong,try again after some time");
      }
    },
  });
});

$(".unblock_user_btn").click(function () {
  var user_id_v = $(this).data("userId");
  var button = this;
  $(button).attr("disabled", true);

  $.ajax({
    url: "php/admin_ajax.php?unblock_user",
    method: "post",
    dataType: "json",
    data: { user_id: user_id_v },
    success: function (response) {
      console.log(response);
      if (response.status) {
        $(button).hide();
        $(button).siblings(".block_user_btn").show();
        $(button).siblings(".block_user_btn").attr("disabled", false);
      } else {
        $(button).attr("disabled", false);
        alert("something is wrong,try again after some time");
      }
    },
  });
});
