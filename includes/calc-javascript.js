// get keypress of numbers
//display number as typed

// when right column is pressed, store value as argument for processing

let arg1 = ""
let arg2 = ""
let arg1array = []
let arg2array = []
let fullArray = []
let op
let result = ""
let equaled = false

$('.calc-button').click(function(self){

	switch(this.id) {
		case "DEL":
		{ delClicked()
		break
		}
		case "C":
		{ clearPressed()
		break
		}
		case "CE":
		{ clearErasePressed()
		break
		}
		case "/":
		{ 	op = this.id
			opClicked(op)
			break
		}
		case "*":
		{ 	op = this.id
			opClicked(op)
			break
		}
		case "-":
		{ 	op = this.id
			opClicked(op)
			break
		}
		case "+":
		{ 	op = this.id
			opClicked(op)
			break
		}
		case "equals":
		{ equalClicked()
		break
		}
		case ".":
		{ console.log(".")
		break
		}
		default: numberClicked(this.id)
	} 
//}
})

function clearPressed() {
	if (arg2array == "") {
		// there is only 1 value, clear all values and start over
		clearValues()
	} else {
		// only clear arg2 values
		arg2 = ""
		arg2array.length = 0
		// reset fullArray up until the second "space"
		let i = fullArray.findIndex(isNaN)
		fullArray.splice(i, fullArray.length)
		$('#readout').text(arg1array.join(""))
		$('#bottomReadout').text(fullArray.join(""))
	}
	equaled = false
}

function clearErasePressed() {
	clearValues()
}

function clearValues() {
	arg1 = ""
	arg2 = ""
	arg1array.length = 0
	arg2array.length = 0
	fullArray.length = 0
	result = ""
	equaled = false
	$('#readout').text(arg1array)
	$('#bottomReadout').text(fullArray.join(""))
}

function delClicked() {
	if (!equaled) {
		// remove last digit from fullarray, update displays
		fullArray.splice(-1, 1)
		$('#bottomReadout').text(fullArray.join(""))
		if (arg2array != "") {
			// delete from arg2array, else delete from arg1array
			arg2array.splice(-1,1)
			$('#readout').text(arg2array.join(""))
		} else {
			arg1array.splice(-1,1)
			$('#readout').text(arg1array.join(""))
		}
	} else {
		clearValues()
	}
	equaled = false
}

function equalClicked() {
	
	// put array in arg2
	arg2 = arg2array.join("")
	// check for 2 arguments
	if (arg2 != "") {
		switch(op) {
			case "+": {
				result = parseInt(arg1) + parseInt(arg2)
				break
			}
			case "-": {
				result = parseInt(arg1) - parseInt(arg2)
				break
			}
			case "*": {
				result = parseInt(arg1) * parseInt(arg2)
				break
			}
			case "/": {
				result = parseInt(arg1) / parseInt(arg2)
				break
			}
		}
		$('#readout').text(result)
	} else {
		result = arg1array
		$('#readout').text(result.join(""))
	}
	equaled = true
}

function opClicked(op) {
	if (!equaled) {
		if (arg1 == "") {
			// move array value to arg1
			arg1 = arg1array.join("")
			fullArray.push(" "+op+" ")
			// clear main display
			$('#readout').text("")
		}
		$('#bottomReadout').text(fullArray.join(""))
		} else {
			clearValues()
		}
}

function numberClicked(num){
	console.log(arg1)
	// add to argument array
	if (arg1 == "") {
		// first argument still
		arg1array.push(num)
		fullArray.push(num)
		// console.log(arg1array.join(""))
		$('#readout').text(arg1array.join(""))
	} else {
		// second argument
		arg2array.push(num)
		fullArray.push(num)
		$('#readout').text(arg2array.join(""))
	}	
	$('#bottomReadout').text(fullArray.join(""))
	// display number in window
} //numberClicked

