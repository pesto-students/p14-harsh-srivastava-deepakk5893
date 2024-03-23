function updateScore() {
	const warningLabel = document.getElementById('warning');
	const scoreLabel = document.getElementById('score');

	const properties = ['AV', 'AC', 'PR', 'UI', 'scope', 'conf', 'integ', 'avail', 'health', 'sens'];
	let score = 0;

	// Check if at least one button from each property is selected
	const isAllSelected = properties.every(property => {
		const selectedButton = document.querySelector(`input[name="${property}"]:checked`);
		return selectedButton !== null;
	});

	// If all properties have at least one button selected
	if (isAllSelected) {
		warningLabel.style.display = 'none'; // Hide warning label

		// Compute the score based on the selected buttons
		properties.forEach(property => {
			const selectedButton = document.querySelector(`input[name="${property}"]:checked`);
			const value = parseFloat(selectedButton.value); // Get the value of the selected button
			score += value;
		});

		// Round the score to one decimal place
		score = Math.round(score * 10) / 10;

		// Ensure the score is within the range of 0 to 10
		score = Math.min(Math.max(score, 0), 10);

		// Update the score label with the computed score
		scoreLabel.textContent = score.toFixed(1); // Display score with one decimal place
	} else {
		// Show warning label if any property is not selected
		warningLabel.style.display = 'block';
		scoreLabel.textContent = '--'; // Reset score label
	}
}

// Select all radio buttons and attach event listeners to handle change event
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(button => {
	button.addEventListener('change', updateScore);
});

updateScore();