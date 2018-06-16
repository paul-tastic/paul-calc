<!DOCTYPE html>
<html>
<head>
	<title>Calculate Me!</title>
	<link rel="stylesheet" type="text/css" href="includes/calc-styles.css">
</head>
<body>
	<h1>Calc Me!</h1>
	<div id="calc-container">
		<div id="inner">
			<div id="readout"></div>
			<div id="bottomReadout"></div>
			<div class="row" id="top-top">
				<button class="calc-button" id="DEL">DEL</button>
				<button class="calc-button" id="C">C</button>
				<button class="calc-button" id="CE">CE</button>
				<button class="calc-button" id="/">/</button>
			</div>
			<div class="row" id="top">
				<button class="calc-button" id="7">7</button>
				<button class="calc-button" id="8">8</button>
				<button class="calc-button" id="9">9</button>
				<button class="calc-button" id="*">x</button>
			</div>
			<div class="row" id="almost-top">
				<button class="calc-button" id="4">4</button>
				<button class="calc-button" id="5">5</button>
				<button class="calc-button" id="6">6</button>
				<button class="calc-button" id="-">-</button>
			</div>
			<div class="row" id="almost-bottom">
				<button class="calc-button" id="1">1</button>
				<button class="calc-button" id="2">2</button>
				<button class="calc-button" id="3">3</button>
				<button class="calc-button" id="+">+</button>
			</div>
			<div class="row" id="bottom">
				<button class="calc-button" id=".">.</button>
				<button class="calc-button" id="0">0</button>
				<button class="calc-button" id="equals">=</button>
			</div>
		</div> <!-- inner container -->
	</div> <!-- calc container -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" src="includes/calc-javascript.js"></script>
</body>
</html>