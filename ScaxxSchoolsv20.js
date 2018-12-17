				function dateoftoday() {
					var d = new Date();
					var dd = d.getDate();
					var mm;
					switch (d.getMonth()) {
						case 0:
						mm = "January";
						break;
						case 1:
						mm = "February";
						break;
						case 2:
						mm = "March";
						break;
						case 3:
						mm = "April";
						break;
						case 4:
						mm = "May";
						break;
						case 5:
						mm = "June";
						break;
						case 6:
						mm = "July";
						break;
						case 7:
						mm = "August";
						break;
						case 8:
						mm = "September";
						break;
						case 9:
						mm = "October";
						break;
						case 10:
						mm = "November";
						break;
						case 11:
						mm = "December";
						break;
					}
					var hh = d.getHours();
					var minutes = d.getMinutes();
					var datetoday = dd + " " + mm + " " + hh + ":" + minutes;
					document.getElementById("dateDis").innerHTML = datetoday;
				}