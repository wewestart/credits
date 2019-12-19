const util = {}
/**
 * 表单序列化成json
 * @param form
 */
util.serializeToJson = (form) => {
    var o = {};
    var a = $("#" + form).serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return JSON.stringify(o);
}
export default util