document.getElementById('bmiForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const height = parseFloat(document.getElementById('height').value) / 100; // in meters
  const weight = parseFloat(document.getElementById('weight').value);

  const bmi = (weight / (height * height)).toFixed(2);

  let status = '';
  let diet = '';

  if (bmi < 18.5) {
    status = 'Underweight';
    diet = 'Eat high-calorie foods like nuts, dairy, rice, and avocados. Focus on protein-rich meals like eggs, meat, and beans. Eat 5-6 small meals per day.';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    status = 'Normal weight';
    diet = 'Maintain a balanced diet with vegetables, fruits, whole grains, lean proteins (like chicken and fish), and healthy fats (like olive oil). Drink enough water.';
  } else if (bmi >= 25 && bmi < 29.9) {
    status = 'Overweight';
    diet = 'Limit processed foods and sugary drinks. Focus on fiber-rich foods like oats, fruits, vegetables. Include lean proteins. Reduce portion sizes.';
  } else {
    status = 'Obese';
    diet = 'Strictly avoid sugar and fatty foods. Eat mostly vegetables, fruits, legumes, and lean proteins. Consider consulting a nutritionist for a personalized plan.';
  }

  document.getElementById('displayName').textContent = name;
  document.getElementById('bmiValue').textContent = bmi;
  document.getElementById('bmiStatus').textContent = status;
  document.getElementById('dietSuggestion').textContent = diet;

  document.getElementById('result').classList.remove('hidden');
});
