var filters = [
  "1977",
  "aden",
  "amaro",
  "ashby",
  "brannan",
  "brooklyn",
  "charmes",
  "clarendon",
  "crema",
  "dogpatch",
  "earlybird",
  "gingham",
  "ginza",
  "hefe",
  "helena",
  "hudson",
  "inkwell",
  "juno",
  "kelvin",
  "lark",
  "lofi",
  "ludwig",
  "maven",
  "mayfair",
  "moon",
  "nashville",
  "perpetua",
  "poprocket",
  "reyes",
  "rise",
  "sierra",
  "skyline",
  "slumber",
  "stinson",
  "sutro",
  "toaster",
  "valencia",
  "vesper",
  "walden",
  "willow",
  "xpro-ii"
]

function makeOptionStr(name) {
  return '<option>' + name + '</option>'
}
$(function () {
  for (var i = 0; i < filters.length; i++) {
    var str = makeOptionStr(filters[i])
    $(str).appendTo('#select')
  }
  $('#select').on('change', function () {
    var selected = $('#select option:selected').text(),
      classname = $('#img').prop('className').split(' ')
    $('#img').removeClass(classname[1])
    $('#img').addClass('filter-' + selected)
  });
  $('#file').on('input', function () {
    if (this.files.length === 0) {
      alert('请选择一个图片')
      return
    } else {
      if (!FileReader) {
        alert('您的游览器不支持加载图片')；
        return
      }
      var reader = new FileReader();
      reader.onload = data => {
        $("#img").css('backgroundImage', "url(" + data.srcElement.result + ")")
      };
      reader.readAsDataURL(this.files[0]);
    }
  })

});
