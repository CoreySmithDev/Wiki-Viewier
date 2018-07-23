$(function () {
	$("#search").on("click", function () {
		var searchTerm = $("#searchTerm").val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
		$.ajax({
			url: url,
			async: false,
			type: 'GET',
			dataType: "json",
			success: function (data) {
				console.log(data);
				for (var i = 0; i < data[1].length; i++) {
					// $("#output").prepend("<li><a href=" + data[3][i]+ ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
					$("#output").prepend("<a href=" + data[3][i] + "><li><h4>" + data[1][i] + "</h4><p>" + data[2][i] + "</p></li></a>");
				}
			}//end success function
		})
			.done(function () {
				console.log("Success");
			})
			.fail(function () {
				console.log("error");
			})
			.always(function () {
				console.log("complete");
			})
	});
});