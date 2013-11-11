var ui = (function () {

	function buildLoginForm() {
		var html =
            '<div id="login-form-holder">' +
				'<form>' +
                	'<a href="#" id="btn-show-login" class="button selected">get login</a>' +
					'<a href="#" id="btn-show-register" class="button">get register</a>' +
					'<div id="login-form">' +
						'<label for="tb-login-username">username: </label>' +
						'<input type="text" id="tb-login-username"><br />' +
						'<label for="tb-login-password">password: </label>' +
						'<input type="password" id="tb-login-password"><br />' +
						'<button id="btn-login" class="button">login</button>' +
					'</div>' +
					'<div id="register-form" style="display: none">' +
						'<label for="tb-register-username">username: </label>' +
						'<input type="text" id="tb-register-username"><br />' +
						'<label for="tb-register-nickname">nickname: </label>' +
						'<input type="text" id="tb-register-nickname"><br />' +
						'<label for="tb-register-password">password: </label>' +
						'<input type="password" id="tb-register-password"><br />' +
						'<button id="btn-register" class="button">register</button>' +
					'</div>' +
				'</form>' +
				'<div id="error-messages"></div>' +
            '</div>';
		return html;
	}

	function buildGameUI(nickname) {
	    var html = '<span id="user-nickname">' + "player: " +
        '<strong>' + nickname + '</strong>' +
		'</span>' +
		'<button id="btn-logout" class="button">logout</button><br/>' +
		'<div id="create-game-holder">' +
			'game title: <input type="text" id="tb-create-title" />' +
			'game password (optional): <input type="text" id="tb-create-pass" />' +
			'<button id="btn-create-game" class="button">create new game</button>' +
		'</div>' +
		'<div id="open-games-container">' +
			'<h2>open games</h2>' +
			'<div id="open-games"></div>' +
		'</div>' +
		'<div id="active-games-container">' +
			'<h2>active games</h2>' +
			'<div id="active-games"></div>' +
		'</div>' +
		'<div id="game-holder">' +
		'</div>' +
		'<div id="messages-holder">' +
		'</div>';
		return html;
	}

	function buildOpenGamesList(games) {
		var list = '<ul class="game-list open-games">';
		for (var i = 0; i < games.length; i++) {
			var game = games[i];
			list +=
				'<li data-game-id="' + game.id + '">' +
					'<a href="#" class="button">' +
						$("<div />").html(game.title).text() +
					'</a>' +
					'<span> by ' +
						game.creatorNickname +
					'</span>' +
				'</li>';
		}
		list += "</ul>";
		return list;
	}

	function buildActiveGamesList(games) {
		var gamesList = Array.prototype.slice.call(games, 0);
		gamesList.sort(function (g1, g2) {
			if (g1.status == g2.status) {
				return g1.title > g2.title;
			}
			else {
				if (g1.status == "in-progress") {
					return -1;
				}
			}
			return 1;
		});

		var list = '<ul class="game-list active-games">';
		for (var i = 0; i < gamesList.length; i++) {
			var game = gamesList[i];
			list +=
				'<li class="game-status-' + game.status + '" data-game-id="' + game.id + '" data-creator="' + game.creatorNickname + '">' +
					'<a href="#" class="btn-active-game button">' +
						$("<div />").html(game.title).text() +
					'</a>' +
					'<span> by ' +
						game.creatorNickname +
					'</span>' +
				'</li>';
		}
		list += "</ul>";
		return list;
	}

	function buildBattleField() {
	}

	function buildGameState(gameState) {
		var html =
			'<div id="game-state" data-game-id="' + gameState.id + '">' +
				'<h2>' + gameState.title + '</h2>' +
				'<div id="blue-turns" class="turns-holder">' +
					'<h3>' +
						gameState.blue + '\'s turns' +
					'</h3>' +
					buildGuessTable(gameState.blueGuesses) +
				'</div>' +
				'<div id="red-turns" class="turns-holder">' +
					'<h3>' +
						gameState.red + '\'s turns' +
					'</h3>' +
					buildGuessTable(gameState.redGuesses) +
				'</div>' +
		'</div>';
		return html;
	}
	
	function buildMessagesList(messages) {
		var list = '<ul class="messages-list">';
		var msg;
		for (var i = 0; i < messages.length; i += 1) {
			msg = messages[i];
			var item =
				'<li>' +
					'<a href="#" class="message-state-' + msg.state + '">' +
						msg.text +
					'</a>' +
				'</li>';
			list += item;
		}
		list += '</ul>';
		return list;
	}

	return {
		gameUI: buildGameUI,
		openGamesList: buildOpenGamesList,
		loginForm: buildLoginForm,
		activeGamesList: buildActiveGamesList,
		gameState: buildGameState,
		battleField: buildBattleField,
		messagesList: buildMessagesList
	}

}());