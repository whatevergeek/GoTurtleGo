var path = require('path');

var appRouter = function(app, forward, backward, right, left, xforward, xbackward, xright, xleft, xstop, lleft, lright) {

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname + '/index.html'));
	});

	app.get("/control", function(req, res) {
		res.sendFile(path.join(__dirname + '/control/index.html'));
	});

	app.get("/mv", function(req, res) {
		if(!req.query.action) {
			return res.send({"status": "error", "message": "missing action"});
		} else if(req.query. action == 'forward') {
			forward();
			return res.send({"status": "ok", "message": "moved forward."});
		} else if(req.query. action == 'backward') {
			backward();
			return res.send({"status": "ok", "message": "moved backward."});
		} else if(req.query. action == 'right') {
			right();
			return res.send({"status": "ok", "message": "turned right."});
		} else if(req.query. action == 'left') {
			left();
			return res.send({"status": "ok", "message": "turned left."});
		} else {
			return res.send({"status": "ok", "message": "stopped."});
		}
	});

	app.get("/cmd", function(req, res) {
		if(!req.query.action) {
			return res.send({"status": "error", "message": "missing action"});
		} else if(req.query. action == 'forward') {
			xforward();
			return res.send({"status": "ok", "message": "moved forward."});

		} else if(req.query. action == 'backward') {
			xbackward();
			return res.send({"status": "ok", "message": "moved backward."});
		} else if(req.query. action == 'right') {
			xright();
			return res.send({"status": "ok", "message": "turned right."});
		} else if(req.query. action == 'left') {
			xleft();
			return res.send({"status": "ok", "message": "turned left."});
		} else if(req.query. action == 'lright') {
			lright();
			return res.send({"status": "ok", "message": "turned little right."});
		} else if(req.query. action == 'lleft') {
			lleft();
			return res.send({"status": "ok", "message": "turned little left."});
		} else {
			xstop();
			return res.send({"status": "ok", "message": "stopped."});
		}
	});
}
 
module.exports = appRouter;
