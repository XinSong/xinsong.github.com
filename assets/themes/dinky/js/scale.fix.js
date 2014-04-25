fixScale = function(doc) {

	var addEvent = 'addEventListener',
	    type = 'gesturestart',
	    qsa = 'querySelectorAll',
	    scales = [1, 1],
	    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}

};
WB2.anyWhere(function(W){
    W.widget.followButton({
        'nick_name': '宋鑫Keep_Learning',  //用户昵称
        'id': "wb_follow_btn",
        'show_head' : true, //是否显示头像
        'show_name' : true, //是否显示名称
        'show_cancel': true //是否显示取消关注按钮
    });
});